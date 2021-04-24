package api.mappers;

import api.dto.RoleDTO;
import model.models.Role;
import org.mapstruct.*;

import java.util.List;


@Mapper(componentModel = "spring")
public interface RoleMapper {

    Role toEntity(RoleDTO dto);

    RoleDTO toDTO(Role role);

    List<RoleDTO> listToDTO(List<Role> roles);

    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    Role mergeWith(RoleDTO roleDTO, @MappingTarget Role role);
}
