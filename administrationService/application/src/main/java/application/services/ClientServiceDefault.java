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
import java.util.UUID;


@Service
@RequiredArgsConstructor
public class ClientServiceDefault implements ClientService {

    private final ClientRepository clientRepository;

    @Override
    public boolean existsById(UUID id) {
        return clientRepository.existsById(id);
    }

    @Override
    public Client findById(UUID id) {
        final Client client = clientRepository.findById(id).get();
        if (client == null) {
            final String msg = String.format("%s [%s] was not found", Client.class.getName(),  id);
            throw new CustomException(msg, HttpStatus.UNPROCESSABLE_ENTITY);
        }
        return client;
    }

    @Override
    public List<Client> findAll() {
        return clientRepository.findAll();
    }

    @Override
    public void deleteById(UUID id) {
        if (!clientRepository.existsById(id)) {
            final String msg = String.format("%s [%s] was not found", Client.class.getName(),  id);
            throw new CustomException(msg, HttpStatus.UNPROCESSABLE_ENTITY);
        }
        clientRepository.deleteById(id);
    }

    @Override
    public Client save(Client client) {
        return clientRepository.save(client);
    }
}
