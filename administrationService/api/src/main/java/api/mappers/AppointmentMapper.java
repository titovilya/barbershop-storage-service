package api.mappers;

import api.dto.AppointmentDTO;
import model.models.Appointment;
import org.mapstruct.*;

import java.util.List;


@Mapper(componentModel = "spring")
public interface AppointmentMapper {

    @Mappings({
            @Mapping(target = "dateFrom", source = "date_from"),
            @Mapping(target = "dateTo", source = "date_to"),
    })
    Appointment toEntity(AppointmentDTO dto);

    @Mappings({
            @Mapping(target = "date_from", source = "dateFrom"),
            @Mapping(target = "date_to", source = "dateTo"),
    })
    AppointmentDTO toDTO(Appointment appointment);

    List<AppointmentDTO> listToDTO(List<Appointment> appointments);

    @Mappings({
            @Mapping(target = "dateFrom", source = "date_from"),
            @Mapping(target = "dateTo", source = "date_to"),
    })
    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    Appointment mergeWith(AppointmentDTO appointmentDTO, @MappingTarget Appointment appointment);
}
