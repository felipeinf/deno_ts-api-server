import { Router } from "https://deno.land/x/oak/mod.ts";
import response from "../Core/network/response.module.ts";
import controller from "./team.controller.ts";


const router = new Router();

router.get('team/all', async (context) => {
  try {
    const result = await controller.getAllTeams();
    response.success(context, result);
  } 
  catch (error) {
    response.error(error, "Unknown error");
  }
});

export default router;
