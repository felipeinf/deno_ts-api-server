import { Task } from "./task.model.ts";
import mongo from "./../Core/repository/mongo.module.ts";


function getAllTask() {
 return mongo.find('task');
}

function getTask(id: string) {
  return mongo.findOne('task', {_id: {$oid: id}});
}

function addTask(task: Task): Promise<Task> {
  return mongo.insertOne('task',task);
}

export default { getAllTask, getTask, addTask };
