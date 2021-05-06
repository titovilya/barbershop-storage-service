package model.repositories;

import model.models.Appointment;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@Repository
public interface AppointmentRepository extends CrudRepository<Appointment, String> {

    boolean existsById(String id);

    List<Appointment> findAll();

    @Transactional
    void deleteById(String id);

    List<Appointment> findByClient_Id(UUID id);

    List<Appointment> findByStaff_Id(String id);

    List<Appointment> findByDateFromAndStaff_Id(LocalDateTime dateFrom, String id);
}
