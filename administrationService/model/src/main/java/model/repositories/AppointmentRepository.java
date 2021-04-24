package model.repositories;

import model.models.Appointment;
import org.springframework.data.repository.CrudRepository;

import javax.transaction.Transactional;
import java.util.List;


public interface AppointmentRepository extends CrudRepository<Appointment, String> {

    boolean existsById(String id);

    List<Appointment> findAll();

    @Transactional
    void deleteById(String id);

    List<Appointment> findByClient_Id(String id);

    List<Appointment> findByUser_Id(String id);
}
