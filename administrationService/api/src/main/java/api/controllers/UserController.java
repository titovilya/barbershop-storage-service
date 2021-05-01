package api.controllers;

import api.dto.UserDTO;
import api.mappers.UserMapper;
import lombok.RequiredArgsConstructor;
import model.models.User;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import security.services.AuthService;
import services.UserService;

import java.util.List;


@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
public class UserController {

    private final UserMapper userMapper;

    private final UserService userService;

    private final AuthService authService;

    @GetMapping("/{username}")
    public ResponseEntity<UserDTO> getUser(@PathVariable String username) {
        User user = userService.findByUsername(username);
        return new ResponseEntity<>(userMapper.toDTO(user), HttpStatus.OK);
    }

    @GetMapping("")
    public ResponseEntity<List<UserDTO>> getUsers() {
        List<User> users = userService.findAll();
        return new ResponseEntity<>(userMapper.listToDTO(users), HttpStatus.OK);
    }

    @PutMapping("/{username}")
    public ResponseEntity updateUser(@PathVariable String username, @RequestBody UserDTO userDTO) {
        User user = userService.findByUsername(username);
        userService.save(userMapper.mergeWith(userDTO, user));
        return new ResponseEntity(HttpStatus.CREATED);
    }

    @PostMapping("")
    public ResponseEntity createUser(@RequestBody UserDTO userDTO) {
        User user = userMapper.toEntity(userDTO);
        authService.signup(user);
        return new ResponseEntity(HttpStatus.CREATED);
    }

    @DeleteMapping("/{username}")
    public ResponseEntity deleteUser(@PathVariable String username) {
        userService.deleteByUsername(username);
        return new ResponseEntity(HttpStatus.OK);
    }
}
