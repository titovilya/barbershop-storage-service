package application.services;

import lombok.RequiredArgsConstructor;
import model.models.User;
import model.repositories.UserRepository;

import org.springframework.http.HttpStatus;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import security.exceptions.CustomException;
import services.RoleService;
import services.UserService;

import java.util.List;


@Service
@RequiredArgsConstructor
public class UserServiceDefault implements UserService {

    private final UserRepository userRepository;

    @Override
    public boolean existsByUsername(String username) {
        return userRepository.existsByUsername(username);
    }

    @Override
    public User findByUsername(String username) {
        final User user = userRepository.findByUsername(username);
        if (user == null) {
            final String msg = String.format("%s [%s] was not found", User.class.getName(),  username);
            throw new UsernameNotFoundException(msg);
        }
        return user;
    }

    @Override
    public List<User> findAll() {
        return userRepository.findAll();
    }

    @Override
    public void deleteByUsername(String username) {
        if (!userRepository.existsByUsername(username)) {
            final String msg = String.format("%s [%s] was not found", User.class.getName(),  username);
            throw new UsernameNotFoundException(msg);
        }
        userRepository.deleteByUsername(username);
    }

    @Override
    public void save(User user) {
        if (!userRepository.existsByUsername(user.getUsername())) {
            userRepository.save(user);
        } else {
            final String msg = String.format("%s [%s] is already exist", User.class.getName(),  user.getUsername());
            throw new CustomException(msg, HttpStatus.UNPROCESSABLE_ENTITY);
        }
    }
}
