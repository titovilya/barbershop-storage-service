package api.mappers;

import api.dto.ClientDTO;
import model.models.Client;
import org.mapstruct.*;

import java.util.List;


@Mapper(componentModel = "spring")
public interface ClientMapper {

    @Mapping(target = "registrationDate", source = "registration_date")
    Client toEntity(ClientDTO dto);

    @Mapping(target = "registration_date", source = "registrationDate")
    ClientDTO toDTO(Client client);

    List<ClientDTO> listToDTO(List<Client> clients);

    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    Client mergeWith(ClientDTO clientDTO, @MappingTarget Client client);
}
