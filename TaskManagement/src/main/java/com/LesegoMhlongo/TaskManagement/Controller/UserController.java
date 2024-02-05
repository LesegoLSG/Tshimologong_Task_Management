package com.LesegoMhlongo.TaskManagement.Controller;

import com.LesegoMhlongo.TaskManagement.Model.UserEntity;
import com.LesegoMhlongo.TaskManagement.Service.ITaskService;
import com.LesegoMhlongo.TaskManagement.Service.Impl.AuthenticationServiceImpl;
import com.LesegoMhlongo.TaskManagement.Service.Impl.UserService;
import com.LesegoMhlongo.TaskManagement.dto.CustomUser;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.swing.text.html.parser.Entity;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/user")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private ITaskService taskService;

    @GetMapping("/getUserWithTasks/{userEmail}")
    public ResponseEntity<CustomUser> getUserWithTasks(@PathVariable String userEmail) {
        UserEntity user = userService.getUserWithTasks(userEmail);
        if (user != null) {
            CustomUser customUser = user.toCustomUser();
            return ResponseEntity.ok(customUser);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/testing")
    public ResponseEntity<String> sayHello(){
        return ResponseEntity.ok("Hi user");
    }



    @GetMapping("findAll")
    public List<UserEntity> getAllUsers(){
        return userService.getUserList();
    }


}
