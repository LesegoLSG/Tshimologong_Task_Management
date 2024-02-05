package com.LesegoMhlongo.TaskManagement.Model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import org.hibernate.annotations.Type;

import java.time.LocalDate;
import java.time.LocalTime;

@Entity
@Table(name="tasks")
public class Task {

    //Attributes
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column
    private String task;
    @Column
    private String date;
    @Column
    private String time;
    @Column
    private boolean active;

    @ManyToOne
    @JoinColumn(name="user_id")
    @JsonBackReference
    private UserEntity user;


    //Parameterless constructor
    public Task() {

    }

    //parameter constructor

    public Task(String task, String date, String time, boolean active, UserEntity user) {
        this.task = task;
        this.date = date;
        this.time = time;
        this.active = active;
        this.user = user;
    }

    //Getters and setters
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTask() {
        return task;
    }

    public void setTask(String task) {
        this.task = task;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public boolean isActive() {
        return active;
    }

    public void setActive(boolean active) {
        this.active = active;
    }

    public UserEntity getUser() {
        return user;
    }

    public void setUser(UserEntity user) {
        this.user = user;
    }
}
