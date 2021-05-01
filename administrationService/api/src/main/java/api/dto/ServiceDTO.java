package api.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import java.time.LocalTime;


@Data
public class ServiceDTO {

    private String id;

    private String name;

    private String description;

    private int price;

    private int duration;
}
