package application.services;

import lombok.RequiredArgsConstructor;
import model.models.Role;
import model.models.User;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import services.InitialService;
import services.RoleService;
import services.UserService;


@Service
@RequiredArgsConstructor
public class RequiredService implements InitialService {

    private final RoleService roleService;

    private final UserService userService;

    private final PasswordEncoder passwordEncoder;

    @Override
    public void createEmployeeRole() {
        if (!roleService.existsByCode("employee")) {
            Role role = new Role();
            role.setCode("employee");
            role.setName("employee");
            role.setDescription("Role for default/employee users");
            roleService.save(role);
        }
    }

    @Override
    public void createAdminRole() {
        if (!roleService.existsByCode("admin")) {
            Role role = new Role();
            role.setCode("admin");
            role.setName("admin");
            role.setDescription("Role for admin users");
            roleService.save(role);
        }
    }

    @Override
    public void createSuperUser() {
        if (!userService.existsByUsername("admin")) {
            User user = new User();
            user.setEmail("superadmin@gmail.com");
            user.setPassword(passwordEncoder.encode("admin"));
            user.setRole(roleService.findByCode("admin"));
            user.setName("Ilya");
            user.setUsername("admin");
            userService.save(user);
        }
    }

}
