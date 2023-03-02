package com.accelerator.thg.recipebackendapp.service;

import com.accelerator.thg.recipebackendapp.model.DietaryInfo;
import com.accelerator.thg.recipebackendapp.model.Recipe;
import com.accelerator.thg.recipebackendapp.persistance.RecipeRepo;

import java.util.ArrayList;
import java.util.List;

public class FilterDietaryRequirement {

    private final RecipeRepo recipeRepo;

    public FilterDietaryRequirement(RecipeRepo recipeRepo) {
        this.recipeRepo = recipeRepo;
    }

    public List<Recipe> filterByDietaryInfo (DietaryInfo dietaryRequirement) {
        List<Recipe> filteredRecipes = new ArrayList<>();
        for (Recipe recipe : recipeRepo.findAll()) {
            if (recipe.getDietaryInformation() == dietaryRequirement) {
                filteredRecipes.add(recipe);
            }
        }
        return filteredRecipes;
    }
}
