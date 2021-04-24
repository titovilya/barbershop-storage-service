package model.models;

import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.UUID;


@Entity
@Data
@Table(name = "clients")
public class Client {

    @Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(name = "UUID", strategy = "org.hibernate.id.UUIDGenerator")
    private UUID id;

    @Column(length = 64)
    private String email;

    @Column(nullable = false, length = 64)
    private String phone;

    @Column(length = 30)
    private String name;

    @CreationTimestamp
    @Column(name = "registration_date", columnDefinition = "TIMESTAMP", updatable = false)
    private LocalDateTime registrationDate;
}
