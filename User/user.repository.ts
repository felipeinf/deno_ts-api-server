import { User } from "./user.model.ts";
import mongo from "./../Core/repository/mongo.module.ts";


function getAllUser() {
  return mongo.find('user');
}
