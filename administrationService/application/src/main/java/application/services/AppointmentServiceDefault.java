package application.services;

import lombok.RequiredArgsConstructor;
import model.models.Appointment;
import model.repositories.AppointmentRepository;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import security.exceptions.CustomException;
import services.AppointmentService;

import java.util.List;


@Service
@RequiredArgsConstructor
public class AppointmentServiceDefault implements AppointmentService {

    private final AppointmentRepository appointmentRepository;

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
        appointmentRepository.save(appointment);
    }

    @Override
    public List<Appointment> findByClient(String id) {
        return appointmentRepository.findByClient_Id(id);
    }

    @Override
    public List<Appointment> findByUser(String id) {
        return appointmentRepository.findByUser_Id(id);
    }
}
