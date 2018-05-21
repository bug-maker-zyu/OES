package com.sjkzy.oes.controller;

import com.sjkzy.oes.model.Clazz;
import com.sjkzy.oes.service.ClazzService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class ClazzController {

    @Autowired
    ClazzService service;

    @PostMapping("/createClazz")
    public void createClazz(@RequestBody Clazz c){
        service.createClazz(c.getT_name(), c.getC_name());
    }

    @GetMapping("/getAllClazz")
    public List<Clazz> getAllClazz() {
        return service.getAllClazz();
    }

    @GetMapping("/getClazzById")
    public Clazz getClazzById(String id) {
        return service.getClazzById(id);
    }

    @GetMapping("/deleteClazz")
    public boolean delete(int id) {
        return service.delete(id);
    }

    @PostMapping("/updateClazz")
    public void update(@RequestBody Clazz c) {
        service.update(c.getId(), c.getC_name(), c.getT_name());
    }

    @GetMapping("/getClazzByTeacher")
    public List<Clazz> getClazzByTeacher(String t_name) {
        return service.getClazzByTeacher(t_name);
    }
}
