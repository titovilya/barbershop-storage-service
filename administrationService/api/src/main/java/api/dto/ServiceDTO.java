package api.dto;

import lombok.Data;


@Data
public class ServiceDTO {

    private String id;

    private String name;

    private String description;

    private int price;

    private int duration;
}
