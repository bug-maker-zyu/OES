package com.sjkzy.oes.controller;

import com.sjkzy.oes.model.Answer;
import com.sjkzy.oes.model.Question;
import com.sjkzy.oes.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class QuestionController {

    @Autowired
    QuestionService service;

    @GetMapping("/getQuestion")
    public List<Question> getQuestion() {
        return service.getQuestion();
    }

    @GetMapping("/getQuestionById")
    public Question getQuestionById(int id) {
        return service.getQuestionById(id);
    }

    @PostMapping("/insertQuestion")
    public void insertQuestion(@RequestBody Question q) {
        System.out.println(q);
        service.insert(q.getTitle(), q.getA(), q.getB(), q.getC(), q.getD(), q.getType(), q.getAns());
    }

    @GetMapping("/deleteQuestion")
    public boolean deleteQuestion(int id) {
        return service.delete(id);
    }

    @PostMapping("/updateQuestion")
    public boolean updateQuestion(@RequestBody Question q) {
        return service.update(q.getTitle(), q.getA(), q.getB(), q.getC(), q.getD(), q.getType(), q.getAns(), q.getId());
    }

    @GetMapping("/getQuestionSum")
    public int getSum() {
        return service.getSum();
    }

    @GetMapping("/getQuestion2")
    public List<Question> getQuestion2(int num) {
        return service.getQuestion(num);
    }

    @GetMapping("/getAnswer")
    public List<Answer> getAnswer(int num) {
        List<Answer> list = new ArrayList<>();
        for (int i = 0 ; i < num; i++) {
            Answer answer = new Answer();
            answer.setAns("");
            answer.setQuestion_id(0);
            list.add(answer);
        }
        return list;
    }

    @GetMapping("/getScore")
    public boolean getScore(int question_id, String ans) {
        return service.getScore(question_id, ans);
    }


}
