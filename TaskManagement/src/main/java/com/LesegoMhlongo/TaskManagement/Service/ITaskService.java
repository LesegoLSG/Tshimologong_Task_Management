package com.LesegoMhlongo.TaskManagement.Service;

import com.LesegoMhlongo.TaskManagement.Model.Task;
import com.LesegoMhlongo.TaskManagement.Model.UserEntity;

import java.util.List;
import java.util.Optional;

public interface ITaskService {
//    public UserEntity addTaskToUser(Task task, int userId);
        public Task addTask(Task task);

        public void deleteTask(int taskId) throws Exception;

        public Task updateTask(int taskId, Task updatedTask) throws Exception;
}
