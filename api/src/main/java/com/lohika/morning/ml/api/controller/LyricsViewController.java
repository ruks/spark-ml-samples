package com.lohika.morning.ml.api.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/lyrics")
public class LyricsViewController {
    @GetMapping("/portal")
    public String portal(Model model) {
        return "portal";
    }

}
