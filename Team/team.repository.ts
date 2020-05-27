import { Team } from "./team.model.ts";
import mongo from "./../Core/repository/mongo.module.ts";

function getAllTeams() {
  return mongo.find('team');
}

export default {  };