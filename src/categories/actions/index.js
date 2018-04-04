export const FETCH_CATEGORIES = "fetch_categories";

export function fetchCategories() {
    const list = [{ title: "Catergorie A" }, { title: "Catergorie B" }, { title: "Catergorie C" }];
    return {
        type: FETCH_CATEGORIES,
        payload: list
    }
}