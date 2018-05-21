package com.sjkzy.oes.model;

public class Student extends User {

    private String clazz;

    public Student() {
    }

    public String getClazz() {
        return clazz;
    }

    public void setClazz(String clazz) {
        this.clazz = clazz;
    }

    @Override
    public String toString() {
        return "Student{" +
                "clazz='" + clazz + '\'' +
                "} " + super.toString();
    }
}
