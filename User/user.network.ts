import { Router } from "https://deno.land/x/oak/mod.ts";
import response from "../Core/network/response.module.ts";
import controller from "./user.controller.ts";


const router = new Router();

router.get('/user/all', async (context) => {
  const result = await controller.getAllUser(); 
  response.success(context, result);
});

router.get('/user/:id', async (context) => {
  if (context.params && context.params.id) {
    const id: string = context.params.id;
    const result = await controller.getUser(id);
    response.success(context, result);
  }
});

router.post('/user', async (context) => {
  const { value } = await context.request.body();
  const result = await controller.addUser(value);
  return response.success(context, result);
});

export default router;
