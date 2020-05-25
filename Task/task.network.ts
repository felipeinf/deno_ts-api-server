import { Router } from "https://deno.land/x/oak/mod.ts";
import controller from "./task.controller.ts";
import response from "../Core/network/response.module.ts";


const router = new Router();

router.get("/task/all", async (context) => {
  const result = await controller.getAllTask(); 
  response.success(context, result);
});

router.get("/task/:id", async (context) => {
  if (context.params && context.params.id) {
    const id: string = context.params.id;
    const result = await controller.getTask(id);
    response.success(context, result);
  }
});

router.get("/task/all/:userId", async (context) => {
  if (context.params && context.params.userId) {
    const userId: string = context.params.userId;
    const result = await controller.getAllUserTasks(userId);
    response.success(context, result);
  }
});

router.post("/task", async (context) => {
  if(context.request.hasBody){
    const { value } = await context.request.body();
    const result = await controller.addTask(value);
    response.success(context, result);
  }
});

export default router;
