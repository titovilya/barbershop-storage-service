package model.models;

import lombok.Data;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.time.LocalDateTime;


@Entity
@Data
@Table(name = "appointment")
public class Appointment {

    @Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(name = "UUID", strategy = "org.hibernate.id.UUIDGenerator")
    private String id;

    @ManyToOne
    private User user;

    @ManyToOne
    private Client client;

    @ManyToOne
    private Service service;

    @Column(name = "date_from", columnDefinition = "TIMESTAMP")
    private LocalDateTime dateFrom;

    @Column(name = "date_to", columnDefinition = "TIMESTAMP")
    private LocalDateTime dateTo;
}
