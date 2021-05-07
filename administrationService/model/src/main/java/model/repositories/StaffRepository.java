package model.repositories;

import model.models.Service;
import model.models.Staff;
import model.models.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;
import java.util.UUID;


@Repository
public interface StaffRepository extends CrudRepository<Staff, String> {

    boolean existsById(String id);

    List<Staff> findAll();

    @Transactional
    void deleteById(String id);
}
