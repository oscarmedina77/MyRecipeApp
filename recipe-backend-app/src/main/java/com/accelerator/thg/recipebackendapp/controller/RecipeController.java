package com.accelerator.thg.recipebackendapp.controller;

import com.accelerator.thg.recipebackendapp.model.Recipe;
import com.accelerator.thg.recipebackendapp.persistance.RecipeRepo;
import com.accelerator.thg.recipebackendapp.service.RecipeService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/recipe")
public class RecipeController {

    private final RecipeService recipeService;

    public RecipeController(RecipeService recipeService) {
        this.recipeService = recipeService;
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping
    public Recipe create(@RequestBody Recipe recipe) {
        return recipeService.create(recipe);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Recipe> findById(@PathVariable long id) {
        return recipeService.findByID(id).map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }



}
