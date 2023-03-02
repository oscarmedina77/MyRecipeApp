package com.accelerator.thg.recipebackendapp;

import com.accelerator.thg.recipebackendapp.model.Recipe;
import com.accelerator.thg.recipebackendapp.persistance.RecipeRepo;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class RecipeBackendAppApplication implements CommandLineRunner {

    public static final Logger log = LoggerFactory.getLogger(RecipeBackendAppApplication.class);

    private final RecipeRepo recipeRepo;

    public RecipeBackendAppApplication (RecipeRepo recipeRepo) {
        this.recipeRepo = recipeRepo;
    }

    public static void main(String[] args) {
        SpringApplication.run(RecipeBackendAppApplication.class, args);
    }

    @Override
    public void run(String... args) {
        log.info("reading data");
        for (Recipe recipe : recipeRepo.findAll()) {
            log.info("ID: {}     Name {}    Description: {}  Ingredients: {}  Instructions: {} ",
                    recipe.getId(),
                    recipe.getRecipeName(),
                    recipe.getDescription(),
                    recipe.getIngredients(),
                    recipe.getInstructions());
        }

    }
}