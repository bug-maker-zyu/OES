package com.sjkzy.oes.model;

public class Question {
    private int id;
    private String title;
    private String a;
    private String b;
    private String c;
    private String d;
    private int type;
    private String ans;

    public Question() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getA() {
        return a;
    }

    public void setA(String A) {
        a = A;
    }

    public String getB() {
        return b;
    }

    public void setB(String B) {
        b = B;
    }

    public String getC() {
        return c;
    }

    public void setC(String C) {
        c = C;
    }

    public String getD() {
        return d;
    }

    public void setD(String D) {
        d = D;
    }

    public String getAns() {
        return ans;
    }

    public void setAns(String ans) {
        this.ans = ans;
    }

    public int getType() {
        return type;
    }

    public void setType(int type) {
        this.type = type;
    }


    @Override
    public String toString() {
        return "Question{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", A='" + a + '\'' +
                ", B='" + b + '\'' +
                ", C='" + c + '\'' +
                ", D='" + d + '\'' +
                ", type=" + type +
                ", ans='" + ans + '\'' +
                '}';
    }
}
