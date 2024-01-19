package com.LesegoMhlongo.TaskManagement.Controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/user")
@CrossOrigin
public class UserController {

    @GetMapping("/testing")
    public ResponseEntity<String> sayHello(){
        return ResponseEntity.ok("Hi user");
    }
}
