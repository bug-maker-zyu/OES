package com.sjkzy.oes.service;

import com.sjkzy.oes.mapper.QuestionMapper;
import com.sjkzy.oes.model.Answer;
import com.sjkzy.oes.model.Question;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@Service
public class QuestionService {

    @Autowired
    QuestionMapper mapper;

    public List<Question> getQuestion() {
        return mapper.getQuestion();
    }

    public Question getQuestionById(int id) {
        return mapper.getQuestionById(id);
    }

    public void insert(String title, String A, String B, String C, String D, int type, String ans) {
        int id;
        try {
            id = mapper.getLastId() + 1;
        } catch (Exception e) {
            id = 1;
        }
        mapper.insertQuestion(id, title, type);
        mapper.insertChoice(id, A, B, C, D);
        mapper.insertAnswer(ans, id);
    }


    public boolean delete(int id) {
        try {
            mapper.deleteAnswer(id);
            mapper.deleteChoice(id);
            mapper.deleteQuestion(id);
        } catch (Exception e) {
            return false;
        }
        return true;
    }

    public boolean update(String title, String A, String B, String C, String D, int type, String ans, int id) {
        try {
            mapper.updateQuestion(title, id);
            mapper.updateChoice(A, B, C, D, id);
            mapper.updateAnswer(ans, id);
        } catch (Exception e) {
            return false;
        }
        return true;
    }

    public int getSum() {
        return mapper.getNum();
    }

    public List<Question> getQuestion(int num) {
        HashMap<Integer, Question> map = new HashMap<>();
        int sum = mapper.getNum();
        for (int i = 0 ; i < num; i++) {
            int id = (int)(Math.random()*sum) + 1;
            if (map.containsKey(id)) {
                i--;
            } else {
                map.put(id, mapper.getQuestionById(id));
            }
        }
        return new ArrayList<>(map.values());

    }


    public boolean getScore(int question_id, String ans) {
        return mapper.getAns(question_id).equals(ans);
    }
}
