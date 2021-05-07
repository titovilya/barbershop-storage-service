package model.repositories;

import model.models.Client;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;
import java.util.UUID;


@Repository
public interface ClientRepository extends CrudRepository<Client, UUID> {

    boolean existsById(UUID id);

    List<Client> findAll();

    @Transactional
    void deleteById(UUID id);

}
