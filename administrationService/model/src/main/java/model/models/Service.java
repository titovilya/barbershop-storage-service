package model.models;

import lombok.Data;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.time.Duration;
import java.time.LocalTime;


@Entity
@Data
@Table(name = "services")
public class Service {

    @Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(name = "UUID", strategy = "org.hibernate.id.UUIDGenerator")
    private String id;

    @Column(length = 30, nullable = false, unique = true)
    private String name;

    private int price;

    @Column(nullable = false, columnDefinition = "int default 60")
    private int duration;
}
