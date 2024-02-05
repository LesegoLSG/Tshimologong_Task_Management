package com.LesegoMhlongo.TaskManagement.dto;

import com.LesegoMhlongo.TaskManagement.Model.Role;
import com.LesegoMhlongo.TaskManagement.Model.Task;

import java.util.List;

public class CustomUser {
    private int id;
    private String firstname;
    private String lastname;
    private String email;
    private String password;
    private Role role;
    private List<Task> tasks;

    public CustomUser() {
    }

    public CustomUser(int id, String firstname, String lastname, String email, String password, Role role, List<Task> tasks) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.password = password;
        this.role = role;
        this.tasks = tasks;
    }

    // Getters and Setters...

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
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

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
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
