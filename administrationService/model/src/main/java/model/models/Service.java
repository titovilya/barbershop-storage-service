package model.models;

import lombok.Data;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.time.LocalTime;


@Entity
@Data
@Table(name = "services")
public class Service {

    @Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(name = "UUID", strategy = "org.hibernate.id.UUIDGenerator")
    private String id;

    @Column(length = 30, nullable = false)
    private String name;

    @Column(length = 128)
    private String description;

    private int price;

    @Column(columnDefinition = "TIME")
    private LocalTime duration;
}
