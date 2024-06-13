document.addEventListener('DOMContentLoaded', function() {
    const recipes = {
        1: {
            title: "Recette 1",
            ingredients: ["Ingrédient 1", "Ingrédient 2", "Ingrédient 3"],
            instructions: "Instructions pour la recette 1."
        },
        2: {
            title: "Recette 2",
            ingredients: ["Ingrédient A", "Ingrédient B", "Ingrédient C"],
            instructions: "Instructions pour la recette 2."
        },
        3: {
            title: "Recette 3",
            ingredients: ["Ingrédient X", "Ingrédient Y", "Ingrédient Z"],
            instructions: "Instructions pour la recette 3."
        }
    };

    function getRecipeId() {
        const params = new URLSearchParams(window.location.search);
        return params.get('recipe');
    }

    function displayRecipeDetails(recipeId) {
        const recipe = recipes[recipeId];
        if (recipe) {
            const recipeDetails = document.getElementById('recipe-details');
            recipeDetails.innerHTML = `
                <h2>${recipe.title}</h2>
                <h3>Ingrédients</h3>
                <ul>
                    ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
                </ul>
                <h3>Instructions</h3>
                <p>${recipe.instructions}</p>
            `;
        } else {
            document.getElementById('recipe-details').innerHTML = '<p>Recette non trouvée.</p>';
        }
    }

    const recipeId = getRecipeId();
    if (recipeId) {
        displayRecipeDetails(recipeId);
    }
});
