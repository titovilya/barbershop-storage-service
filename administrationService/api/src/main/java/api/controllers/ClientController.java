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


@RestController
@RequestMapping("/clients")
@RequiredArgsConstructor
public class ClientController {

    private final ClientMapper clientMapper;

    private final ClientService clientService;

    @GetMapping("/{phone}")
    public ResponseEntity<ClientDTO> getClient(@PathVariable String phone) {
        Client client = clientService.findByPhone(phone);
        return new ResponseEntity<>(clientMapper.toDTO(client), HttpStatus.OK);
    }

    @GetMapping("")
    public ResponseEntity<List<ClientDTO>> getClients() {
        List<Client> clients = clientService.findAll();
        return new ResponseEntity<>(clientMapper.listToDTO(clients), HttpStatus.OK);
    }

    @PutMapping("/{phone}")
    public ResponseEntity updateClient(@PathVariable String phone, @RequestBody ClientDTO clientDTO) {
        Client client = clientService.findByPhone(phone);
        clientService.save(clientMapper.mergeWith(clientDTO, client));
        return new ResponseEntity(HttpStatus.CREATED);
    }

    @PostMapping("")
    public ResponseEntity createClient(@RequestBody ClientDTO clientDTO) {
        Client client = clientMapper.toEntity(clientDTO);
        clientService.save(client);
        return new ResponseEntity(HttpStatus.CREATED);
    }

    @DeleteMapping("/{phone}")
    public ResponseEntity deleteClient(@PathVariable String phone) {
        clientService.deleteByPhone(phone);
        return new ResponseEntity(HttpStatus.OK);
    }
}
