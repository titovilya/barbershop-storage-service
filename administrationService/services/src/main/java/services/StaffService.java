package services;

import model.models.Staff;

import javax.transaction.Transactional;
import java.util.List;

public interface StaffService {

    boolean existsById(String id);

    Staff findById(String id);

    List<Staff> findAll();

    @Transactional
    void deleteById(String id);

    @Transactional
    void save(Staff staff);
}
