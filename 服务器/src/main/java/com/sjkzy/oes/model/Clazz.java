package com.sjkzy.oes.model;

public class Clazz {

    private int id;
    private String t_name;
    private String c_name;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getT_name() {
        return t_name;
    }

    public void setT_name(String t_name) {
        this.t_name = t_name;
    }

    public String getC_name() {
        return c_name;
    }

    public void setC_name(String c_name) {
        this.c_name = c_name;
    }


    @Override
    public String toString() {
        return "Clazz{" +
                "id=" + id +
                ", t_name='" + t_name + '\'' +
                ", c_name='" + c_name + '\'' +
                '}';
    }
}
