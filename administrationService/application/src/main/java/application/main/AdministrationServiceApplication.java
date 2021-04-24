package application.main;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@ComponentScan(basePackages = {"model", "security", "api", "application", "services"})
@EntityScan("model.models")
@EnableJpaRepositories("model.repositories")
@EnableAutoConfiguration
public class AdministrationServiceApplication {

    public static void main(String[] args) {
        SpringApplication.run(AdministrationServiceApplication.class, args);
    }
}
