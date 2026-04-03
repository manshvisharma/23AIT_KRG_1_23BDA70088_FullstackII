package com.example.assignment.controller;

import com.example.assignment.service.MyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class MyController {

    @Autowired
    private MyService myService;

    @GetMapping("/messages")
    public List<String> getMessages() {
        return myService.getMessages();
    }
}