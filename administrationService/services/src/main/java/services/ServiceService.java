package services;

import model.models.Service;

import javax.transaction.Transactional;
import java.util.List;

public interface ServiceService {

    boolean existsById(String id);

    Service findById(String id);

    List<Service> findAll();

    @Transactional
    void deleteById(String id);

    @Transactional
    void save(Service service);
}
