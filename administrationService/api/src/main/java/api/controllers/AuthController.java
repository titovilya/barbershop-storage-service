package api.controllers;


import javax.servlet.http.HttpServletRequest;

import api.dto.JwtAuthDTO;
import api.dto.LoginDTO;
import api.dto.UserDTO;
import api.mappers.UserMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import security.services.AuthService;


@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    private final UserMapper userMapper;

    @PostMapping("/signin")
    public ResponseEntity<JwtAuthDTO> login(@RequestBody LoginDTO user) {
        String token = authService.signin(user.getUsername(), user.getPassword());
        return new ResponseEntity<>(new JwtAuthDTO(token), HttpStatus.OK);
    }

    @GetMapping(value = "/me")
    public ResponseEntity<UserDTO> whoami(HttpServletRequest req) {
        return new ResponseEntity<>(userMapper.toDTO(authService.whoami(req)), HttpStatus.OK);
    }

    @GetMapping("/refresh")
    public ResponseEntity<JwtAuthDTO> refresh(HttpServletRequest req) {
        String token = authService.refresh(req.getRemoteUser());
        return new ResponseEntity<>(new JwtAuthDTO(token), HttpStatus.OK);
    }
}