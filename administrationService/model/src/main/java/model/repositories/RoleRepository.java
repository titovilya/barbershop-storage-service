package model.repositories;

import model.models.Role;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface RoleRepository extends CrudRepository<Role, String> {

    boolean existsByCode(String code);

    Role findByCode(String code);

    List<Role> findAll();
}
