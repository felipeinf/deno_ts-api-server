import repository from "./task.repository.ts";
import { Task } from "./task.model.ts";


function getAllTask() {
  return repository.getAllTask();
}

function getTask(id: string) {
  return repository.getTask(id);
}

function addTask(task: Task) {
  task.completed = false;
  task.createdAt = new Date();
  task.updateAt = task.createdAt;
  return repository.addTask(task);
}

export default { getAllTask, getTask, addTask };
