package com.LesegoMhlongo.TaskManagement.Controller;

import com.LesegoMhlongo.TaskManagement.Model.Task;
import com.LesegoMhlongo.TaskManagement.Service.ITaskService;
import jakarta.persistence.Entity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/tasks")
@CrossOrigin
public class TaskController {
    @Autowired
    private ITaskService service;

    //Save a task using service
    @PostMapping("/add")
    public Task addNewTask(@RequestBody Task task){

        return service.saveTask(task);
    }
    //Get all tasks from service
    @GetMapping("/getAllTask")
    public List<Task> getAllTasks(){
        return service.TaskList();
    }
    //Get a single task
    @GetMapping("/getTask/{id}")
    public Task getTask(@PathVariable int id){
        return service.getSingleTask(id);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteTask(@PathVariable int id){
        service.deleteSingleTask(id);
    }

    @PutMapping("/update/{id}")
    public void updateTask(@PathVariable int id, @RequestBody Task task){
        service.updateSingleTask(id,task);
    }



}
