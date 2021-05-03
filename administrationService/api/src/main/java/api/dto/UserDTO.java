package api.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;
import model.models.Role;

import java.time.LocalDate;
import java.util.UUID;


@Data
public class UserDTO {

    private UUID id;

    private String email;

    private String password;

    private String name;

    private String username;

    private String phone;

    private Role role;

}
