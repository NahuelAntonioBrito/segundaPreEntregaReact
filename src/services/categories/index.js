import { tasks } from "../../Async-mocks"

const getCategories = async () => {
    return new Promise((resolve, reject) => {
        resolve(tasks.categoryId)
    });
};

export {getCategories}