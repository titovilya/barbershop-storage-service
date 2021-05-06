package api.controllers;

import api.dto.StaffDTO;
import api.mappers.StaffMapper;
import lombok.RequiredArgsConstructor;
import model.models.Staff;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import services.StaffService;

import java.util.List;

@RestController
@RequestMapping("/staff")
@RequiredArgsConstructor
public class StaffController {

    private final StaffMapper staffMapper;

    private final StaffService staffService;

    @GetMapping("/{id}")
    public ResponseEntity<StaffDTO> getStaff(@PathVariable String id) {
        Staff staff = staffService.findById(id);
        return new ResponseEntity<>(staffMapper.toDTO(staff), HttpStatus.OK);
    }

    @GetMapping("")
    public ResponseEntity<List<StaffDTO>> getAllStaff() {
        List<Staff> staffList = staffService.findAll();
        return new ResponseEntity<>(staffMapper.listToDTO(staffList), HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity updateStaff(@PathVariable String id, @RequestBody StaffDTO staffDTO) {
        Staff staff = staffService.findById(id);
        staffService.save(staffMapper.mergeWith(staffDTO, staff));
        return new ResponseEntity(HttpStatus.CREATED);
    }

    @PostMapping("")
    public ResponseEntity createStaff(@RequestBody StaffDTO staffDTO) {
        Staff staff = staffMapper.toEntity(staffDTO);
        staffService.save(staff);
        return new ResponseEntity(HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteStaff(@PathVariable String id) {
        staffService.deleteById(id);
        return new ResponseEntity(HttpStatus.OK);
    }
}
