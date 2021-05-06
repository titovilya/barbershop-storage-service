package services;

import model.models.Appointment;

import javax.transaction.Transactional;
import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;


public interface AppointmentService {

    boolean existsById(String id);

    Appointment findById(String id);

    List<Appointment> findAll();

    @Transactional
    void deleteById(String id);

    void save(Appointment appointment);

    List<Appointment> findByClient(UUID id);

    List<Appointment> findByStaff(String id);
}
