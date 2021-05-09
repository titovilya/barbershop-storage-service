package api.dto;

import lombok.Data;


@Data
public class ServiceDTO {

    private String id;

    private String name;

    private int price;

    private int duration = 60;
}
