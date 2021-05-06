package api.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class AppointmentResponseDTO {

    String id;

    @JsonFormat(pattern = "dd.MM.yyyy HH:mm:ss")
    LocalDateTime date_from;

    @JsonFormat(pattern = "dd.MM.yyyy HH:mm:ss")
    LocalDateTime date_to;
}
