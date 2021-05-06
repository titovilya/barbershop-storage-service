package api.mappers;

import api.dto.StaffDTO;
import model.models.Staff;
import org.mapstruct.BeanMapping;
import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;
import org.mapstruct.NullValuePropertyMappingStrategy;

import java.util.List;


@Mapper(componentModel = "spring")
public interface StaffMapper {

    Staff toEntity(StaffDTO dto);

    StaffDTO toDTO(Staff staff);

    List<StaffDTO> listToDTO(List<Staff> staff);

    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    Staff mergeWith(StaffDTO staffDTO, @MappingTarget Staff staff);
}
