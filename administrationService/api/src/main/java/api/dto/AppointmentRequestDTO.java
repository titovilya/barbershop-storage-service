package api.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class AppointmentRequestDTO {

    @JsonFormat(pattern = "dd.MM.yyyy HH:mm:ss")
    LocalDateTime date_from;

    String staff_id;
}
