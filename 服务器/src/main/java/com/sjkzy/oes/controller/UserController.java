package com.sjkzy.oes.controller;


import com.sjkzy.oes.model.Student;
import com.sjkzy.oes.model.Teacher;
import com.sjkzy.oes.model.User;
import com.sjkzy.oes.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {

    @Autowired
    private UserService service;


    @PostMapping("/login")
    public User login(@RequestBody User l){
        return service.login(l.getLogin_id(), l.getPassword(), Integer.valueOf(l.getType()));
    }

    @PostMapping("/createTeacher")
    public boolean createTeacher(@RequestBody Teacher t) {
        return service.createTeacher(t.getLogin_id(), t.getPassword(), t.getName(), t.getSex());
    }

    @PostMapping("/createStudent")
    public Student createStudent(@RequestBody Student s) {
        System.out.println(s);
        return service.createStudent(s.getLogin_id(), s.getPassword(), s.getName(), s.getSex(), s.getClazz());
    }

    @GetMapping("/getAllTeacher")
    public List<Teacher> getAllTeacher() {
        return service.getAllTeacher();
    }

    @GetMapping("/getAllStudent")
    public List<Student> getAllStudent() {
        return service.getAllStudent();
    }


    @PostMapping("/updateTeacher")
    public Teacher updateTeacher(@RequestBody Teacher teacher) {
        return service.updateTeacher(teacher.getId(), teacher.getName(), teacher.getSex(), teacher.getPassword(), teacher.getLogin_id());
    }

    @GetMapping("/deleteUser")
    public boolean deleteUser(String login_id, int type) {
        return service.deleteUser(login_id, type);
    }

    @PostMapping("/updateStudent")
    public Student updateStudent(@RequestBody Student student) {
        return service.updateStudent(student.getId(), student.getName(), student.getSex(), Integer.valueOf(student.getClazz()), student.getPassword(), student.getLogin_id());
    }

    @GetMapping("/getStudentById")
    public Student getStudentById(String login_id) {
        return service.getStudentById(login_id);
    }

    @GetMapping("/getTeacherById")
    public Teacher getTeacherById(String login_id) {
        return service.getTeacherById(login_id);
    }

}



