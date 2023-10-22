package com.LesegoMhlongo.TaskManagement.Service;

import com.LesegoMhlongo.TaskManagement.Model.Task;

import java.util.List;
import java.util.Optional;

public interface ITaskService {
    public Task saveTask(Task task);
    public List<Task> TaskList();

    public Task getSingleTask(int id);

    public void updateSingleTask(int id, Task updatedTask);
    public void deleteSingleTask(int id);
}
