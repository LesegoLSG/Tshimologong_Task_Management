package com.LesegoMhlongo.TaskManagement.Service.Impl;

import com.LesegoMhlongo.TaskManagement.Model.Task;
import com.LesegoMhlongo.TaskManagement.Model.UserEntity;
import com.LesegoMhlongo.TaskManagement.Repository.TaskRepository;
import com.LesegoMhlongo.TaskManagement.Repository.UserRepository;
import com.LesegoMhlongo.TaskManagement.Service.ITaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TaskService implements ITaskService {

    @Autowired
    private TaskRepository taskRepository;



    @Autowired
    private UserRepository userRepository;

//    public UserEntity addTaskToUser(Task task,int userId){
//        Optional<UserEntity> optionaluser = userRepository.findById(userId);
//        if(optionaluser.isPresent()){
//           UserEntity user = optionaluser.get();
//           task.setUser(user);
//
//           taskRepository.save(task);
//
//            // Optionally, you may want to update the user's task list
//            user.getTask().add(task);
//            userRepository.save(user);
//
//           return user;
//        }else{
//            // Handle the case where the user with the provided ID is not found
//            throw new IllegalArgumentException("User not found with ID: " + userId);
//        }
//    }

    public Task addTask(Task task){
        return taskRepository.save(task);
    }

}
