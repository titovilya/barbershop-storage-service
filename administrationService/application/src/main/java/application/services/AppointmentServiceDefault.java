package application.services;

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
import java.time.temporal.ChronoUnit;
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
        UUID user_id = appointment.getUser().getId();
        Long inputDuration = Duration.between(appointment.getDateFrom(), appointment.getDateTo()).toMinutes();
        int serviceDuration = serviceService.findById(appointment.getService().getId()).getDuration();
        if (inputDuration != serviceDuration) {
            final String msg = String.format("Duration of service is %d is not equal to input duration %d", serviceDuration, inputDuration);
            throw new CustomException(msg, HttpStatus.UNPROCESSABLE_ENTITY);
        } else if (!(appointmentRepository.findByDateFromAndUser_Id(dateFrom, user_id).size() > 0)) {
            appointmentRepository.save(appointment);
        } else {
            final String msg = "Chosen time and employee already in use. Choose another one.";
            throw new CustomException(msg, HttpStatus.UNPROCESSABLE_ENTITY);
        }
    }

    @Override
    public List<Appointment> findByClient(UUID id) {
        return appointmentRepository.findByClient_Id(id);
    }

    @Override
    public List<Appointment> findByUser(UUID id) {
        return appointmentRepository.findByUser_Id(id);
    }
}
