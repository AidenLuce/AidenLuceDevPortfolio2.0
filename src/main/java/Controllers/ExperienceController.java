package Controllers;

import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
public class ExperienceController {
    @GetMapping("/experience")
    public String experience() {
        return "experience";
    }
}
