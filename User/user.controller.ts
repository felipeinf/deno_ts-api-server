import repository from "./user.repository.ts";
import { User } from "./user.model.ts";


function getAllUser() {
  return repository.getAllUser();
}

function getUser(userId: string) {
  return repository.getUser(userId);
}

