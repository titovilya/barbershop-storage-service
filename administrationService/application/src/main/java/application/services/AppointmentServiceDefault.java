package application.services;

import api.dto.AppointmentRequestDTO;
import api.dto.AppointmentResponseDTO;
import lombok.RequiredArgsConstructor;
import model.models.Appointment;
import model.repositories.AppointmentRepository;
import model.repositories.ServiceRepository;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import security.exceptions.CustomException;
import services.AppointmentService;
import services.ServiceService;

import java.time.Duration;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.time.temporal.ChronoUnit;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;


@Service
@RequiredArgsConstructor
public class AppointmentServiceDefault implements AppointmentService {

    private final AppointmentRepository appointmentRepository;

    private final ServiceService serviceService;

    @Override
    public boolean existsById(String id) {
        return appointmentRepository.existsById(id);
    }

    @Override
    public Appointment findById(String id) {
        final Appointment appointment = appointmentRepository.findById(id).get();
        if (appointment == null) {
            final String msg = String.format("%s [%s] was not found", Appointment.class.getName(),  id);
            throw new CustomException(msg, HttpStatus.UNPROCESSABLE_ENTITY);
        }
        return appointment;
    }

    @Override
    public List<Appointment> findAll() {
        return appointmentRepository.findAll();
    }

    @Override
    public void deleteById(String id) {
        if (!appointmentRepository.existsById(id)) {
            final String msg = String.format("%s [%s] was not found", Appointment.class.getName(),  id);
            throw new CustomException(msg, HttpStatus.UNPROCESSABLE_ENTITY);
        }
        appointmentRepository.deleteById(id);
    }

    @Override
    public void save(Appointment appointment) {
        LocalDateTime dateFrom = appointment.getDateFrom();
        String user_id = appointment.getStaff().getId();
        Long inputDuration = Duration.between(appointment.getDateFrom(), appointment.getDateTo()).toMinutes();
        int serviceDuration = serviceService.findById(appointment.getService().getId()).getDuration();
        if (inputDuration != serviceDuration) {
            final String msg = String.format("Duration of service is %d is not equal to input duration %d", serviceDuration, inputDuration);
            throw new CustomException(msg, HttpStatus.UNPROCESSABLE_ENTITY);
        } else if (!(appointmentRepository.findByDateFromAndStaff_Id(dateFrom, user_id).size() > 0)) {
            appointmentRepository.save(appointment);
        } else {
            final String msg = "Chosen time and employee already in use. Choose another one.";
            throw new CustomException(msg, HttpStatus.UNPROCESSABLE_ENTITY);
        }
    }

    DateTimeFormatter formatter = DateTimeFormatter.ofPattern("HH:mm");

    @Override
    public List<Appointment> findByStaffAndDate(LocalDateTime date, String staffId) {
        if (date == null || staffId == null) {
            throw new CustomException("Date or staff_id is not valid.", HttpStatus.UNPROCESSABLE_ENTITY);
        }
        List<Appointment> appointments = appointmentRepository.findByDateFromAndStaff_Id(date, staffId);
        List<Appointment> appointmentResponseDTOs = new ArrayList<>();
        for (Appointment appointment : appointments) {
            LocalDateTime dateFrom = appointment.getDateFrom();
            LocalDateTime dateTo = appointment.getDateTo();
            for (int hour = 9; hour <= 20; hour++) {
                if (dateFrom.getHour() != hour && dateTo.getHour() != (hour + 1)) {
                    LocalDateTime dateGenFrom = LocalDateTime.of(date.getYear(), date.getMonth(), date.getDayOfMonth(), hour, 0, 0);
                    LocalDateTime dateGenTo = dateGenFrom.plusHours(1);
                    Appointment appointmentResponseDTO = new Appointment();
                    appointmentResponseDTO.setId(dateGenFrom.format(formatter) + " - " + dateGenTo.format(formatter));
                    appointmentResponseDTO.setDateFrom(dateGenFrom);
                    appointmentResponseDTO.setDateTo(dateGenTo);
                    appointmentResponseDTOs.add(appointmentResponseDTO);
                }
            }
        }
        return appointmentResponseDTOs;
    }

    @Override
    public List<Appointment> findByClient(UUID id) {
        return appointmentRepository.findByClient_Id(id);
    }

    @Override
    public List<Appointment> findByStaff(String id) {
        return appointmentRepository.findByStaff_Id(id);
    }
}
