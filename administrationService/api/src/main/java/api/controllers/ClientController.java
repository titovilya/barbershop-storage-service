package api.controllers;

import api.dto.ClientDTO;
import api.mappers.ClientMapper;
import lombok.RequiredArgsConstructor;
import model.models.Client;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import services.ClientService;

import java.util.List;
import java.util.UUID;


@RestController
@RequestMapping("/clients")
@RequiredArgsConstructor
public class ClientController {

    private final ClientMapper clientMapper;

    private final ClientService clientService;

    @GetMapping("/{id}")
    public ResponseEntity<ClientDTO> getClient(@PathVariable UUID id) {
        Client client = clientService.findById(id);
        return new ResponseEntity<>(clientMapper.toDTO(client), HttpStatus.OK);
    }

    @GetMapping("")
    public ResponseEntity<List<ClientDTO>> getClients() {
        List<Client> clients = clientService.findAll();
        return new ResponseEntity<>(clientMapper.listToDTO(clients), HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity updateClient(@PathVariable UUID id, @RequestBody ClientDTO clientDTO) {
        Client client = clientService.findById(id);
        clientService.save(clientMapper.mergeWith(clientDTO, client));
        return new ResponseEntity(HttpStatus.CREATED);
    }

    @PostMapping("")
    public ResponseEntity createClient(@RequestBody ClientDTO clientDTO) {
        Client client = clientMapper.toEntity(clientDTO);
        clientService.save(client);
        return new ResponseEntity(HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteClient(@PathVariable UUID id) {
        clientService.deleteById(id);
        return new ResponseEntity(HttpStatus.OK);
    }
}
