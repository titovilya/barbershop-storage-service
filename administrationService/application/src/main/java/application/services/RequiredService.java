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
    public void createDefaultRole() {
        if (!roleService.existsByCode("default")) {
            Role role = new Role();
            role.setCode("default");
            role.setName("default");
            role.setDescription("Role for default users");
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
        if (!userService.existsByUsername("owner")) {
            User user = new User();
            user.setEmail("superadmin@gmail.com");
            user.setPassword(passwordEncoder.encode("owner"));
            user.setRole(roleService.findByCode("admin"));
            user.setName("Ilya");
            user.setSurname("Titov");
            user.setUsername("owner");
            userService.save(user);
        }
    }

}
