package com.accelerator.thg.recipebackendapp.service;

import com.accelerator.thg.recipebackendapp.model.Recipe;

import java.util.List;

public interface FilterStategy {

    List<Recipe> applyOn (List<Recipe> input);
}
