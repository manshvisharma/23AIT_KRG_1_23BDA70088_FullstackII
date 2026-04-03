package com.example.assignment.service;

import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;

@Service
public class MyService {

    public List<String> getMessages() {
        return Arrays.asList(
                "Hello",
                "Welcome",
                "Spring Boot is working 🚀"
        );
    }
}