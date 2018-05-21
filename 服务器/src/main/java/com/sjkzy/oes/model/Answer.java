package com.sjkzy.oes.model;

public class Answer {
    private String ans;
    private int question_id;

    public Answer() {

    }

    public String getAns() {
        return ans;
    }

    public void setAns(String ans) {
        this.ans = ans;
    }

    public int getQuestion_id() {
        return question_id;
    }

    public void setQuestion_id(int question_id) {
        this.question_id = question_id;
    }

    @Override
    public String toString() {
        return "Answer{" +
                "ans='" + ans + '\'' +
                ", question_id=" + question_id +
                '}';
    }
}
