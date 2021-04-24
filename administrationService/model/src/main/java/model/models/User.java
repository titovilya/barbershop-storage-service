package model.models;

import lombok.Data;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.UUID;


@Entity
@Data
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(name = "UUID", strategy = "org.hibernate.id.UUIDGenerator")
    private UUID id;

    @Column(nullable = false, length = 64)
    private String email;

    @Column(nullable = false)
    private String password;

    @Column(length = 30)
    private String name;

    @Column(length = 30)
    private String surname;

    @Column(length = 30, nullable = false)
    private String username;

    @Column(columnDefinition = "DATE")
    private LocalDate birthday;

    @Column(length = 20)
    private String phone;

    @ManyToOne
    @JoinColumn(nullable = false)
    private Role role;
}
