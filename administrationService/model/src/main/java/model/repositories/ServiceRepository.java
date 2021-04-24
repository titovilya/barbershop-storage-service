package model.repositories;

import model.models.Service;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;


@Repository
public interface ServiceRepository extends CrudRepository<Service, String> {

    boolean existsById(String id);

    List<Service> findAll();

    @Transactional
    void deleteById(String id);
}
