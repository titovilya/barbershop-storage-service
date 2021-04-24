package application.services;

import lombok.RequiredArgsConstructor;
import model.models.Service;
import model.repositories.ServiceRepository;
import org.springframework.http.HttpStatus;
import security.exceptions.CustomException;
import services.ServiceService;

import java.util.List;


@org.springframework.stereotype.Service
@RequiredArgsConstructor
public class ServiceServiceDefault implements ServiceService {

    private final ServiceRepository serviceRepository;

    @Override
    public boolean existsById(String id) {
        return serviceRepository.existsById(id);
    }

    @Override
    public Service findById(String id) {
        final Service service = serviceRepository.findById(id).get();
        if (service == null) {
            final String msg = String.format("%s [%s] was not found", Service.class.getName(),  id);
            throw new CustomException(msg, HttpStatus.UNPROCESSABLE_ENTITY);
        }
        return service;
    }

    @Override
    public List<Service> findAll() {
        return serviceRepository.findAll();
    }

    @Override
    public void deleteById(String id) {
        if (!serviceRepository.existsById(id)) {
            final String msg = String.format("%s [%s] was not found", Service.class.getName(),  id);
            throw new CustomException(msg, HttpStatus.UNPROCESSABLE_ENTITY);
        }
        serviceRepository.deleteById(id);
    }

    @Override
    public void save(Service service) {
        serviceRepository.save(service);
    }
}
