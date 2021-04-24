package api.controllers;

import api.dto.ServiceDTO;
import api.mappers.ServiceMapper;
import lombok.RequiredArgsConstructor;
import model.models.Service;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import services.ServiceService;

import java.util.List;


@RestController
@RequestMapping("/services")
@RequiredArgsConstructor
public class ServiceController {

    private final ServiceMapper serviceMapper;

    private final ServiceService serviceService;

    @GetMapping("/{id}")
    public ResponseEntity<ServiceDTO> getService(@PathVariable String id) {
        Service service = serviceService.findById(id);
        return new ResponseEntity<>(serviceMapper.toDTO(service), HttpStatus.OK);
    }

    @GetMapping("")
    public ResponseEntity<List<ServiceDTO>> getServices() {
        List<Service> services = serviceService.findAll();
        return new ResponseEntity<>(serviceMapper.listToDTO(services), HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity updateService(@PathVariable String id, @RequestBody ServiceDTO serviceDTO) {
        Service service = serviceService.findById(id);
        serviceService.save(serviceMapper.mergeWith(serviceDTO, service));
        return new ResponseEntity(HttpStatus.CREATED);
    }

    @PostMapping("")
    public ResponseEntity createService(@RequestBody ServiceDTO serviceDTO) {
        Service service = serviceMapper.toEntity(serviceDTO);
        serviceService.save(service);
        return new ResponseEntity(HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteService(@PathVariable String id) {
        serviceService.deleteById(id);
        return new ResponseEntity(HttpStatus.OK);
    }
}
