package com.sjkzy.oes.service;


import com.sjkzy.oes.mapper.UserMapper;
import com.sjkzy.oes.model.Student;
import com.sjkzy.oes.model.Teacher;
import com.sjkzy.oes.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import sun.misc.BASE64Encoder;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserMapper mapper;

    public User login(String login_id, String password, int type) {
        User u = null;
        if (type != 3) {
            String psw = mapper.getPassword(login_id);
            byte[] b = password.getBytes();
            password = new BASE64Encoder().encode(b);
            if (password.equals(psw)) {
                if (type == 1) {
                    u = mapper.getStudent(login_id);
                } else {
                    u = mapper.getTeacher(login_id);
                }
            }
        } else {
            if (password.equals("wzy_970823") && login_id.equals("admin")) {
                u = new User();
                u.setName("超级管理员");
            }
        }
        return u;
    }

    public boolean createTeacher(String login_id, String password, String name, String sex) {
        int c = mapper.isExist(login_id);
        if (c == 1) {
            return false;
        }
        byte[] b = password.getBytes();
        password = new BASE64Encoder().encode(b);
        mapper.createUser(login_id, password);
        mapper.createTeacher(name, sex, login_id);
        return true;
    }

    public Student createStudent(String login_id, String password, String name, String sex, String clazz_id) {
        int c = mapper.isExist(login_id);
        if (c == 1) {
            return null;
        }
        byte[] b = password.getBytes();
        password = new BASE64Encoder().encode(b);
        mapper.createUser(login_id, password);
        mapper.createStudent(name, sex, login_id, clazz_id);
        return mapper.getStudentByLogin_id(login_id);
    }


    public List<Student> getAllStudent() {
        return mapper.getAllStudent();
    }

    public List<Teacher> getAllTeacher() {
        return mapper.getAllTeacher();
    }

    public Teacher updateTeacher(int id, String name, String sex, String password, String login_id) {
        mapper.updateTeacherById(id, name, sex);
        if (password.equals(mapper.getPassword(login_id))) {

        } else {
            byte[] b = password.getBytes();
            password = new BASE64Encoder().encode(b);
            mapper.updateUserById(login_id, password);
        }
        return mapper.getTeacher(login_id);
    }

    public boolean deleteUser(String login_id, int type) {
        try {
            if (type == 1) {
                mapper.deleteStudent(login_id);
            } else {
                mapper.deleteTeacher(login_id);
            }
            mapper.deleteUser(login_id);
        } catch (Exception e) {
            return false;
        }
        return true;
    }

    public Student updateStudent(int id, String name, String sex, int clazz_id, String password, String login_id) {
        mapper.updateStudentById(id, name, sex, clazz_id);
        if (password.equals(mapper.getPassword(login_id))) {

        } else {
            byte[] b = password.getBytes();
            password = new BASE64Encoder().encode(b);
            mapper.updateUserById(login_id, password);
        }
        return mapper.getStudent(login_id);
    }

    public Student getStudentById(String login_id) {
        return mapper.getStudentByLogin_id(login_id);
    }

    public Teacher getTeacherById(String login_id) {
        return mapper.getTeacher(login_id);
    }

}
