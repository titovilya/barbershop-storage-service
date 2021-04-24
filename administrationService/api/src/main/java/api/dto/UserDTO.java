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

    private String surname;

    private String username;

    @JsonFormat(pattern = "dd.MM.yyyy")
    private LocalDate birthday;

    private String phone;

    private Role role;

}
