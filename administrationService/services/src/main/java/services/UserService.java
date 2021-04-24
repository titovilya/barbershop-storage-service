package services;

import model.models.User;

import javax.transaction.Transactional;
import java.util.List;


public interface UserService {

    boolean existsByUsername(String username);

    User findByUsername(String username);

    List<User> findAll();

    @Transactional
    void deleteByUsername(String username);

    @Transactional
    void save(User user);
}
