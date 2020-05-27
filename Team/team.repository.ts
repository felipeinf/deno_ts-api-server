import { Team } from "./team.model.ts";
import mongo from "./../Core/repository/mongo.module.ts";

function getAllTeams() {
  return mongo.find('team');
}

function getTeam(teamId: string) {
  return mongo.findOne('team', { _id: { $oid: teamId }});
}

