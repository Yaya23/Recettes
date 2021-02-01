const initialState = {
    nomRecette: "",
    listeIngredients: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ajouterIngredient":
            return {
                ...state,
                listeIngredients: action.value,
            };
        case "supprimerIngredient":
            return {
                ...state,
                listeIngredients: action.value,
            }
        default: 
            return state;
    }
}

export default reducer;