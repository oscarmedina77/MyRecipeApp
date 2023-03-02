package com.accelerator.thg.recipebackendapp.model;

import org.springframework.data.annotation.Id;

import java.util.Collections;
import java.util.List;

public class Recipe {
    @Id
    private long id;
    private String recipeName;
    private String description;
    private List<String> ingredients;
    private String instructions;
    private DietaryInfo dietaryInformation;
    private int cookingTime;
    private int rating;

    public Recipe(String recipeName,
                  String description,
                  List<String> ingredients,
                  String instructions,
                  DietaryInfo dietaryInformation,
                  int cookingTime,
                  int rating) {
        this.recipeName = recipeName;
        this.description= description;
        this.ingredients = ingredients;
        this.instructions = instructions;
        this.cookingTime = cookingTime;
        this.dietaryInformation = dietaryInformation;
        this.rating = rating;
    }

    protected Recipe() {}

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getRecipeName() {
        return recipeName;
    }

    public void setRecipeName(String recipeName) {
        this.recipeName = recipeName;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public List<String> getIngredients() {
        return ingredients;
    }

    public void setIngredients(List<String> ingredients) {
        this.ingredients = ingredients;
    }

    public String getInstructions() {
        return instructions;
    }

    public void setInstructions(String instructions) {
        this.instructions = instructions;
    }

    public DietaryInfo getDietaryInformation() {
        return dietaryInformation;
    }

    public void setDietaryInformation(DietaryInfo dietaryInformation) {
        this.dietaryInformation = dietaryInformation;
    }

    public int getCookingTime() {
        return cookingTime;
    }

    public void setCookingTime(int cookingTime) {
        this.cookingTime = cookingTime;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }

}
