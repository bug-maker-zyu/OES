package com.sjkzy.oes.mapper;


import com.sjkzy.oes.model.Student;
import com.sjkzy.oes.model.Teacher;
import com.sjkzy.oes.model.User;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface UserMapper {

    @Select("select password from user where id = #{login_id}")
    String getPassword(@Param("login_id") String login_id);

    @Select("select * from v_student where login_id = #{login_id}")
    Student getStudent(@Param("login_id")String login_id);

    @Select("select * from v_teacher where login_id = #{login_id}")
    Teacher getTeacher(@Param("login_id")String login_id);

    @Insert("insert into teacher(name, sex, login_id) values(#{name},#{sex}, #{login_id});")
    void createTeacher(@Param("name")String name, @Param("sex") String sex, @Param("login_id") String login_id);

    @Insert("insert into student(name, sex, login_id, clazz_id) values(#{name}, #{sex}, #{login_id}, #{clazz_id});")
    void createStudent(@Param("name")String name, @Param("sex") String sex, @Param("login_id") String login_id, @Param("clazz_id") String clazz_id);

    @Insert("insert into user (id, password) values (#{id}, #{password});")
    void createUser(@Param("id") String id, @Param("password") String password);

    @Select("select count(*) from user where id = #{id}")
    int isExist(@Param("id") String id);

    @Select("select * from v_teacher")
    List<Teacher> getAllTeacher();

    @Select("select * from v_student")
    List<Student> getAllStudent();

    @Select("select * from v_student where login_id = #{login_id}")
    Student getStudentByLogin_id(@Param("login_id")String login_id);

    @Select("select * from v_student where id = #{id}")
    Student getStudentByid(@Param("id")String id);

    @Update("update student set name = #{name}, sex = #{sex}, clazz_id = #{clazz_id} where id = #{id}")
    void updateStudentById(@Param("id") int id, @Param("name") String name, @Param("sex") String sex, @Param("clazz_id") int clazz_id);

    @Update("update teacher set name = #{name}, sex = #{sex} where id = #{id}")
    void updateTeacherById(@Param("id") int id, @Param("name") String name, @Param("sex") String sex);

    @Update("update user set password = #{password} where id = #{id}")
    void updateUserById(@Param("id") String id, @Param("password") String password);

    @Delete("delete from teacher where login_id = #{login_id}")
    void deleteTeacher(@Param("login_id") String login_id);

    @Delete("delete from student where login_id = #{login_id}")
    void deleteStudent(@Param("login_id") String login_id);

    @Delete("delete from user where id = #{login_id}")
    void deleteUser(@Param("login_id") String login_id);


}
