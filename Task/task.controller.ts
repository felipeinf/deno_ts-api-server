import repository from "./task.repository.ts";


function getAllTask() {
  return repository.getAllTask();
}

function getTask(id: string) {
  return repository.getTask(id);
}

export default { getAllTask, getTask };
