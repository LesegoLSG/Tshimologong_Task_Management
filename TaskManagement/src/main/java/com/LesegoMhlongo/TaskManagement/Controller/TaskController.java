package com.LesegoMhlongo.TaskManagement.Controller;

import com.LesegoMhlongo.TaskManagement.Model.Task;
import com.LesegoMhlongo.TaskManagement.Model.UserEntity;
import com.LesegoMhlongo.TaskManagement.Repository.TaskRepository;
import com.LesegoMhlongo.TaskManagement.Repository.UserRepository;
import com.LesegoMhlongo.TaskManagement.Service.ITaskService;
import com.LesegoMhlongo.TaskManagement.Service.Impl.AuthenticationServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/v1/tasks")
@CrossOrigin
public class TaskController {

    @Autowired
    private ITaskService iTaskService;
    @Autowired
    private TaskRepository taskRepository;

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/addTaskToUser/{userId}")
    public ResponseEntity<UserEntity> addTaskToUser(@RequestBody Task task, @PathVariable int userId) {
        // Find user by ID
        Optional<UserEntity> optionalUser = userRepository.findById(userId);

        if (optionalUser.isPresent()) {
            UserEntity user = optionalUser.get();

            // Set the user for the task
            task.setUser(user);

            // Save the task
            taskRepository.save(task);

            // Update the user's task list
            user.getTask().add(task);

            // Save the updated user
            userRepository.save(user);

            return ResponseEntity.ok(user);
        } else {
            // Handle the case where the user with the provided ID is not found
            throw new IllegalArgumentException("User not found with ID: " + userId);
        }
    }
    @DeleteMapping("/deleteTask/{taskId}")
    public ResponseEntity<String> deleteTask(@PathVariable int taskId){
        try{
            iTaskService.deleteTask(taskId);
            return ResponseEntity.ok("Task deleted successfully");
        }catch(Throwable e){
            return ResponseEntity.status(404).body(e.getMessage());
        }
    }
    @PutMapping("/updateTask/{taskId}")
    public ResponseEntity<Task> updateTask(@PathVariable int taskId, @RequestBody Task newTask){
        try{
            Task updatedTaskResults = iTaskService.updateTask(taskId,newTask);
            return ResponseEntity.ok(updatedTaskResults);
        }catch(Throwable e){
            return ResponseEntity.status(404).body(null);
        }
    }
}
