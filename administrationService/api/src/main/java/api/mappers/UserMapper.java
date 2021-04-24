package api.mappers;

import api.dto.UserDTO;
import model.models.User;
import org.mapstruct.*;

import java.util.List;


@Mapper(componentModel = "spring")
public interface UserMapper {

    User toEntity(UserDTO dto);

    UserDTO toDTO(User user);

    List<UserDTO> listToDTO(List<User> users);

    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    User mergeWith(UserDTO userDTO, @MappingTarget User user);
}
