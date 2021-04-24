package application.services;

import lombok.RequiredArgsConstructor;
import model.models.Client;
import model.repositories.ClientRepository;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import security.exceptions.CustomException;
import services.ClientService;

import java.util.List;


@Service
@RequiredArgsConstructor
public class ClientServiceDefault implements ClientService {

    private final ClientRepository clientRepository;

    @Override
    public boolean existsByPhone(String phone) {
        return clientRepository.existsByPhone(phone);
    }

    @Override
    public Client findByPhone(String phone) {
        final Client client = clientRepository.findByPhone(phone);
        if (client == null) {
            final String msg = String.format("%s [%s] was not found", Client.class.getName(),  phone);
            throw new CustomException(msg, HttpStatus.UNPROCESSABLE_ENTITY);
        }
        return client;
    }

    @Override
    public List<Client> findAll() {
        return clientRepository.findAll();
    }

    @Override
    public void deleteByPhone(String phone) {
        if (!clientRepository.existsByPhone(phone)) {
            final String msg = String.format("%s [%s] was not found", Client.class.getName(),  phone);
            throw new CustomException(msg, HttpStatus.UNPROCESSABLE_ENTITY);
        }
        clientRepository.deleteByPhone(phone);
    }

    @Override
    public void save(Client client) {
        clientRepository.save(client);
    }
}
