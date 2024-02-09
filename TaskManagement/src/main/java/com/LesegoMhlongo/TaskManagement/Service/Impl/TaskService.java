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
    //Adding a task
    public Task addTask(Task task){
        return taskRepository.save(task);
    }

    //Deleting a task
    public void deleteTask(int taskId) throws Exception {
        Optional<Task> optionalTask = taskRepository.findById(taskId);
        if(optionalTask.isPresent()){
            Task task = optionalTask.get();
            taskRepository.delete(task);
        }else{
            throw new IllegalArgumentException("Task not found with ID: " + taskId);
        }
    }

    @Override
    public Task updateTask(int taskId, Task newTask) throws Exception {
        Optional<Task> optionalTask = taskRepository.findById(taskId);

        if(optionalTask.isPresent()){
            Task existingTask = optionalTask.get();

            existingTask.setTask(newTask.getTask());
            existingTask.setDate(newTask.getDate());
            existingTask.setTime(newTask.getTime());
            existingTask.setActive(newTask.isActive());

            return taskRepository.save(existingTask);
        }else{
            throw new Exception("Could not update task with id:" + taskId);
        }

    }

}
