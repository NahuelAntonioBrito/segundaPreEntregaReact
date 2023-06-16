import { tasks } from "../../Async-mocks"

const getTasks = async (catId) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if (catId) {
                resolve(tasks.filter((task) => task.categoryId === catId));
            } else {
                resolve(tasks);
            }
        }, 500)
    })
};
const getTasksById = (itemId) => {
    return new Promise((resolve, reject) => {
        resolve(tasks.find(task => task.id === parseInt(itemId)));
    });
};

export {getTasks, getTasksById};