package api.controllers;

import api.dto.AppointmentDTO;
import api.dto.AppointmentRequestDTO;
import api.dto.AppointmentResponseDTO;
import api.mappers.AppointmentMapper;
import lombok.RequiredArgsConstructor;
import model.models.Appointment;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import services.AppointmentService;

import java.util.List;


@RestController
@RequestMapping("/appointments")
@RequiredArgsConstructor
public class AppointmentController {

    private final AppointmentMapper appointmentMapper;

    private final AppointmentService appointmentService;

    @GetMapping("/{id}")
    public ResponseEntity<AppointmentDTO> getAppointment(@PathVariable String id) {
        Appointment appointment = appointmentService.findById(id);
        return new ResponseEntity<>(appointmentMapper.toDTO(appointment), HttpStatus.OK);
    }

    @GetMapping("")
    public ResponseEntity<List<AppointmentDTO>> getAppointments() {
        List<Appointment> appointments = appointmentService.findAll();
        return new ResponseEntity<>(appointmentMapper.listToDTO(appointments), HttpStatus.OK);
    }

    @PostMapping("/get-schedule")
    public ResponseEntity<List<AppointmentResponseDTO>> getSchedule(@RequestBody AppointmentRequestDTO appointmentRequestDTO) {
        List<Appointment> appointments = appointmentService.findByStaffAndDate(appointmentRequestDTO.getDate_from(), appointmentRequestDTO.getStaff_id());
        List<AppointmentResponseDTO> appointmentResponseDTOs = appointmentMapper.listToResponseDTO(appointments);
        return new ResponseEntity<>(appointmentResponseDTOs, HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity updateAppointment(@PathVariable String id, @RequestBody AppointmentDTO appointmentDTO) {
        Appointment appointment = appointmentService.findById(id);
        appointmentService.save(appointmentMapper.mergeWith(appointmentDTO, appointment));
        return new ResponseEntity(HttpStatus.CREATED);
    }

    @PostMapping("")
    public ResponseEntity createAppointment(@RequestBody AppointmentDTO appointmentDTO) {
        Appointment appointment = appointmentMapper.toEntity(appointmentDTO);
        appointmentService.save(appointment);
        return new ResponseEntity(HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteAppointment(@PathVariable String id) {
        appointmentService.deleteById(id);
        return new ResponseEntity(HttpStatus.OK);
    }
}
