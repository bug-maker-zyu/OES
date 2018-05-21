package com.sjkzy.oes.service;

import com.sjkzy.oes.mapper.ClazzMaaper;
import com.sjkzy.oes.model.Clazz;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClazzService {

    @Autowired
    ClazzMaaper maaper;

    public void createClazz(String teacher_id, String name) {
        maaper.createClazz(Integer.valueOf(teacher_id), name);
    }

    public Clazz getClazzById(String id) {
        return maaper.getClazzById(id);
    }

    public List<Clazz> getAllClazz() {
        return maaper.getAllClazz();
    }

    public boolean delete(int id) {
        boolean flag = true;
        try {
            maaper.delete(id);
        } catch (Exception e) {
            e.fillInStackTrace();
            flag = false;
        }
        return flag;
    }

    public void update(int id, String c_name, String t_name) {
        maaper.update(id, c_name, t_name);
    }

    public List<Clazz> getClazzByTeacher(String t_name) {
        return maaper.getClazzByTeacher(t_name);
    }

}
