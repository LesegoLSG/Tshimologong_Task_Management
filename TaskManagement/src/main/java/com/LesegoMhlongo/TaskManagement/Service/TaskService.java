package com.LesegoMhlongo.TaskManagement.Service;

import com.LesegoMhlongo.TaskManagement.Model.Task;
import com.LesegoMhlongo.TaskManagement.Repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TaskService implements ITaskService{

    @Autowired
    private TaskRepository repo;

    //Save a task
    @Override
    public Task saveTask(Task task) {
        return repo.save(task);
    }

    //Get all tasks
    @Override
    public List<Task> TaskList() {
        List<Task> list ;
        list= repo.findAll();
        return list;
    }
    //Get a single task
    @Override
    public Task getSingleTask(int id) {
        Task task = repo.findById(id).get();
        return task;
    }
    //Update a task
    @Override
    public void updateSingleTask(int id, Task updatedTask) {
        //Get a task
        Task existingTask = repo.findById(id).orElse(null);
        //Update a task
        if(existingTask != null){
            existingTask.setTask(updatedTask.getTask());
            existingTask.setDate(updatedTask.getDate());
            existingTask.setTime(updatedTask.getTime());

            //Save a updated task
            saveTask(existingTask);
        }




    }

    //Delete a task
    public void deleteSingleTask(int id){
        Task task = repo.findById(id).get();
        repo.delete(task);
    }
}
