package com.LesegoMhlongo.TaskManagement.Service.Impl;

import com.LesegoMhlongo.TaskManagement.Model.UserEntity;
import com.LesegoMhlongo.TaskManagement.Repository.UserRepository;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    private final UserRepository userRepository;


    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public UserEntity postUser(UserEntity user){
        return userRepository.save(user);
    }

    public UserEntity getUserWithTasks(String userEmail) {
        Optional<UserEntity> userOptional = userRepository.findByEmail(userEmail);
        return userOptional.orElse(null);
    }

    public List<UserEntity> getUserList(){
        return userRepository.findAll();
    }
}
