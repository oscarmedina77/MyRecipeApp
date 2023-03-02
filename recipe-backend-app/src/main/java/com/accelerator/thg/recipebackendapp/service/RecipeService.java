package com.accelerator.thg.recipebackendapp.service;

import com.accelerator.thg.recipebackendapp.model.DietaryInfo;
import com.accelerator.thg.recipebackendapp.model.Recipe;
import com.accelerator.thg.recipebackendapp.persistance.RecipeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@Component
public class RecipeService {
    private final RecipeRepo recipeRepo;

    public RecipeService(@Autowired RecipeRepo recipeRepo) {
        this.recipeRepo = recipeRepo;
    }

    public Recipe create(Recipe recipe) {
        return recipeRepo.save(recipe);
    }

    public Optional<Recipe> findByID(long id) {
        return recipeRepo.findById(id);
    }

    public List<Recipe> findAll() {
        return (List<Recipe>) recipeRepo.findAll();
    }

    public Recipe update(Recipe recipe, long id) {
        return recipeRepo.save(recipe);
    }

    public void deleteByID(long id) {
        recipeRepo.deleteById(id);
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

    public List<Recipe> filterByCookingTime(int maxCookingTime) {
        List<Recipe> filteredRecipes = new ArrayList<>();
        for (Recipe recipe : recipeRepo.findAll()) {
            if (recipe.getCookingTime() <= maxCookingTime) {
                filteredRecipes.add(recipe);
            }
        }
        return filteredRecipes;
    }

    private boolean containsAllIngredients(Recipe recipe, List<String> ingredients) {
        for (String ingredient : ingredients) {
            boolean found = false;
            for (String recipeIngredient : recipe.getIngredients()) {
                if (recipeIngredient.trim().equalsIgnoreCase(ingredient.trim())) {
                    found = true;
                    break;
                }
            }
            if (!found) {
                return false;
            }
        }
        return true;
    }

    public List<Recipe> filterByIngredients(List<String> ingredients) {
        List<Recipe> filteredRecipes = new ArrayList<>();
        for (Recipe recipe : recipeRepo.findAll()) {
            if (containsAllIngredients(recipe, ingredients)) {
                filteredRecipes.add(recipe);
            }
        }
        return filteredRecipes;
    }


}
