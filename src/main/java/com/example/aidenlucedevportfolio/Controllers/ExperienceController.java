package com.example.aidenlucedevportfolio.Controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
public class ExperienceController {
    @GetMapping("/experience")
    public String experience() {
        return "experience";
    }
}
