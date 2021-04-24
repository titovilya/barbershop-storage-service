package services;

import model.models.Appointment;

import javax.transaction.Transactional;
import java.util.List;


public interface AppointmentService {

    boolean existsById(String id);

    Appointment findById(String id);

    List<Appointment> findAll();

    @Transactional
    void deleteById(String id);

    void save(Appointment appointment);

    List<Appointment> findByClient(String id);

    List<Appointment> findByUser(String id);
}
