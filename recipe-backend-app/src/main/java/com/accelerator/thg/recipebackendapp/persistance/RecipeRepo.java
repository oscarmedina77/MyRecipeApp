package com.accelerator.thg.recipebackendapp.persistance;

import com.accelerator.thg.recipebackendapp.model.Recipe;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RecipeRepo extends CrudRepository<Recipe, Long> {

}
