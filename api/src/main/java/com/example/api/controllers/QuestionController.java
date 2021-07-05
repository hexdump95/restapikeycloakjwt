package com.example.api.controllers;

import com.example.api.entities.Question;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping(path = "/api/v1/questions")
public class QuestionController {

    @GetMapping
    public List<Question> getAllQuestions() {
        return Arrays.asList(
                new Question(1L, "What is the capital of Argentina?", new ArrayList<>())
        );
    }
}
