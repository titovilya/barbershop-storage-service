package api.mappers;

import api.dto.ServiceDTO;
import model.models.Service;
import org.mapstruct.BeanMapping;
import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;
import org.mapstruct.NullValuePropertyMappingStrategy;

import java.util.List;


@Mapper(componentModel = "spring")
public interface ServiceMapper {

    Service toEntity(ServiceDTO dto);

    ServiceDTO toDTO(Service service);

    List<ServiceDTO> listToDTO(List<Service> services);

    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    Service mergeWith(ServiceDTO serviceDTO, @MappingTarget Service service);
}
