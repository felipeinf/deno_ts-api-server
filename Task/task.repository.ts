import { Task } from "./task.model.ts";


const tasks: Task[] = [
  { id: "1", description: "Document API", completed: false },
  { id: "2", description: "Make development guidelines", completed: false },
  { id: "3", description: "Inquire about Deno", completed: false }
];

function getAllTask() {
  return tasks;
}

function getTask(id: string) {
  return tasks.find((task) => task.id === id);
}

export default { getAllTask, getTask };
