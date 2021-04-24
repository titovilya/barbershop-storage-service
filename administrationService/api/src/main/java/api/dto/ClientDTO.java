package api.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.UUID;


@Data
public class ClientDTO {

    private UUID id;

    private String email;

    private String phone;

    private String name;

    @JsonFormat(pattern = "dd.MM.yyyy HH:mm:ss")
    private LocalDateTime registration_date;
}
