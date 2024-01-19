package com.LesegoMhlongo.TaskManagement.Controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/admin")
public class AdminController {
    @GetMapping("/getAdmin")
    public ResponseEntity<String> sayHello(){
        return ResponseEntity.ok("Hi admin");
    }

}
