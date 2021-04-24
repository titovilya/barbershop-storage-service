package model.repositories;

import model.models.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;
import java.util.UUID;

@Repository
public interface UserRepository extends CrudRepository<User, UUID> {

    boolean existsByUsername(String username);

    User findByUsername(String username);

    List<User> findAll();

    @Transactional
    void deleteByUsername(String username);
}
