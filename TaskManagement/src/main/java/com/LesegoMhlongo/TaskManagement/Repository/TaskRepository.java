package com.LesegoMhlongo.TaskManagement.Repository;

import com.LesegoMhlongo.TaskManagement.Model.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TaskRepository extends JpaRepository<Task,Integer> {
}
