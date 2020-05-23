import { Router } from "https://deno.land/x/oak/mod.ts";
import response from "../Core/network/response.module.ts";
import controller from "./user.controller.ts";


const router = new Router();

router.get('/user/all', async (context) => {
  const result = await controller.getAllUser(); 
  response.success(context, result);
});

export default router;
