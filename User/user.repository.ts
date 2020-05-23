import { User } from "./user.model.ts";
import mongo from "./../Core/repository/mongo.module.ts";


function getAllUser() {
  return mongo.find('user');
}

function getUser(id: string) {
  return mongo.findOne('user', {_id: {$oid: id}});
}

