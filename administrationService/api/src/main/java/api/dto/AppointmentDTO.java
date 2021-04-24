package api.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;
import model.models.Client;
import model.models.Service;
import model.models.User;

import java.time.LocalDateTime;


@Data
public class AppointmentDTO {

    private String id;

    private User user;

    private Client client;

    private Service service;

    @JsonFormat(pattern = "dd.MM.yyyy HH:mm:ss")
    private LocalDateTime date_from;

    @JsonFormat(pattern = "dd.MM.yyyy HH:mm:ss")
    private LocalDateTime date_to;
}
