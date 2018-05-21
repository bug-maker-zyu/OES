package com.sjkzy.oes.mapper;

import com.sjkzy.oes.model.Question;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface QuestionMapper {

    @Select("select * from v_question")
    List<Question> getQuestion();

    @Select("select * from v_question where id = #{id}")
    Question getQuestionById(@Param("id") int id);

    @Insert("insert into question(id, title, type) values(#{id}, #{title}, #{type})")
    void insertQuestion(@Param("id") int id, @Param("title") String title, @Param("type") int type);
    @Insert("insert into choice(question_id, A, B, C, D) values(#{question_id}, #{A}, #{B}, #{C}, #{D})")
    void insertChoice(@Param("question_id")int question_id, @Param("A") String A, @Param("B") String B, @Param("C") String C, @Param("D") String D);
    @Insert("insert into answer(ans, question_id) values(#{ans}, #{question_id})")
    void insertAnswer(@Param("ans") String ans, @Param("question_id") int question_id);

    @Select("select count(*) from question")
    int getNum();

    @Select("select id from question order by id desc limit 1;")
    int getLastId();

    @Delete("delete from question where id = #{id}")
    void deleteQuestion(@Param("id") int id);
    @Delete("delete from choice where question_id = #{id}")
    void deleteChoice(@Param("id") int id);
    @Delete("delete from answer where question_id = #{id}")
    void deleteAnswer(@Param("id") int id);

    @Update("update question set title = #{title} where id = #{id}")
    void updateQuestion(@Param("title") String title, @Param("id") int id);
    @Update("update choice set A = #{A}, B = #{B}, C = #{C}, D = #{D} where question_id = #{id}")
    void updateChoice(@Param("A") String A, @Param("B") String B, @Param("C") String C, @Param("D") String D, @Param("id") int id);
    @Update("update answer set ans = #{ans} where question_id = #{id}")
    void updateAnswer(@Param("ans") String ans, @Param("id") int id);

    @Select("select ans from answer where question_id = #{id}")
    String getAns(@Param("id") int id);
}
