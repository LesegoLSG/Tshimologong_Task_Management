package com.LesegoMhlongo.TaskManagement.dto;

import com.LesegoMhlongo.TaskManagement.Model.Role;
import com.LesegoMhlongo.TaskManagement.Model.Task;
import com.LesegoMhlongo.TaskManagement.Model.UserEntity;

import java.util.List;

public class CustomUserDetails {
    private String firstname;
    private String lastname;
    private String email;
    private Role role;

    private List<Task> tasks;

    public CustomUserDetails(UserEntity user){
        this.firstname = user.getFirstname();
        this.lastname = user.getLastname();
        this.email = user.getEmail();
        this.role = user.getRole();
        this.tasks = user.getTask();
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }

    public List<Task> getTasks() {
        return tasks;
    }

    public void setTasks(List<Task> tasks) {
        this.tasks = tasks;
    }
}
