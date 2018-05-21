package com.sjkzy.oes.mapper;

import com.sjkzy.oes.model.Clazz;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface ClazzMaaper {

    @Select("select * from v_clazz")
    List<Clazz> getAllClazz();

    @Insert("insert into clazz(teacher_id, name) values(#{teacher_id}, #{name})")
    void createClazz(@Param("teacher_id") int teacher_id, @Param("name")String name);

    @Select("select * from clazz where id = #{id}")
    Clazz getClazzById(@Param("id") String id);

    @Delete("delete from clazz where id = #{id}")
    void delete(@Param("id") int id);

    @Update("update clazz set name = #{c_name}, teacher_id = #{t_name} where id = #{id}")
    void update(@Param("id") int id, @Param("c_name") String c_name, @Param("t_name")String t_name);

    @Select("select count(*) from  student s where s.clazz_id = #{id}")
    int getNum(@Param("id") int id);

    @Select("select * from v_clazz where t_name = #{t_name}")
    List<Clazz> getClazzByTeacher(@Param("t_name") String t_name);
}
