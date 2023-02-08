import { createSelector } from "reselect";

const selectCategoryReducer = (state) => state.category;

export const selectCategories = createSelector(
    [selectCategoryReducer], 
    (category) => category.categories
);

export const selectCategoriesMap = createSelector(
    [selectCategories],
    (categories) => {
        console.log("////selectCategoriesMap");
        return categories.reduce((acc, category) => {
        const { title, items } = category;
        acc[title.toLowerCase()] = items;
        return acc;
    }, {})
    }
)

