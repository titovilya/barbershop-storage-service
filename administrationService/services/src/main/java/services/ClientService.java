package services;

import model.models.Client;

import javax.transaction.Transactional;
import java.util.List;


public interface ClientService {

    boolean existsByPhone(String phone);

    Client findByPhone(String phone);

    List<Client> findAll();

    @Transactional
    void deleteByPhone(String phone);

    @Transactional
    void save(Client client);
}
