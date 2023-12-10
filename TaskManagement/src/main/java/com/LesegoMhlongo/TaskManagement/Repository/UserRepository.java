package com.LesegoMhlongo.TaskManagement.Repository;

import com.LesegoMhlongo.TaskManagement.Model.Role;
import com.LesegoMhlongo.TaskManagement.Model.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<UserEntity,Integer> {
    Optional<UserEntity> findByEmail(String email);
    UserEntity findByRole(Role role);
}
