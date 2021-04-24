package services;

import model.models.Role;

import javax.transaction.Transactional;
import java.util.List;


public interface RoleService {

    boolean existsByCode(String code);

    Role findByCode(String code);

    List<Role> findAll();

    @Transactional
    void save(Role role);
}
