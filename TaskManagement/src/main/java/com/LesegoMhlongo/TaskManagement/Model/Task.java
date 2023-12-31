package com.LesegoMhlongo.TaskManagement.Model;

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
    private LocalDate date;
    @Column(columnDefinition = "TIME(0)")
    private LocalTime time;
    @Column
    private boolean active;

    @ManyToOne
    @JoinColumn(name="user_id")
    private UserEntity user;


    //Parameterless constructor
    public Task() {

    }

    //parameter constructor

    public Task(String task, LocalDate date, LocalTime time, boolean active, UserEntity user) {
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

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public LocalTime getTime() {
        return time;
    }

    public void setTime(LocalTime time) {
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
