package com.LesegoMhlongo.TaskManagement.Repository;

import com.LesegoMhlongo.TaskManagement.Model.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TaskRepository extends JpaRepository<Task,Integer> {
    //Custom query to find tasks by ID
//    List<Task> findByUserId(int userId);
}
