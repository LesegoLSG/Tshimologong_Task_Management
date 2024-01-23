package com.LesegoMhlongo.TaskManagement.Controller;

import com.LesegoMhlongo.TaskManagement.Model.UserEntity;
import com.LesegoMhlongo.TaskManagement.Service.Impl.AuthenticationServiceImpl;
import com.LesegoMhlongo.TaskManagement.dto.CustomUserDetails;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/user")
public class UserController {

    @Autowired
    private AuthenticationServiceImpl authenticationService;



    @GetMapping("/testing")
    public ResponseEntity<String> sayHello(){
        return ResponseEntity.ok("Hi user");
    }

    @GetMapping("/getAll")
    public List<UserEntity> getAllUsers(){
        System.out.println(authenticationService.findAllUsers());
        return authenticationService.findAllUsers();
    }

    @GetMapping("/findUserByEmail/{email}")
    public ResponseEntity<CustomUserDetails> getUser(@PathVariable String email){
        CustomUserDetails userDetails = authenticationService.findUserByEmail(email);
        return ResponseEntity.ok(userDetails);
    }
}
