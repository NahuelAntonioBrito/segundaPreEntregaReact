import { categories } from "../../Async-mocks"

const getCategories = async () => {
    return new Promise((resolve, reject) => {
        resolve(categories)
    });
};

export {getCategories}