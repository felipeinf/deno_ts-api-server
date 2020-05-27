import repository from "./team.repository.ts";
import { Team } from "./team.model.ts";


function getAllTeams() {
  return repository.getAllTeams();
}

