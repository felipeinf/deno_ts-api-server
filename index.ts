import { Application } from "https://deno.land/x/oak/mod.ts";
import mongo from "./Core/repository/mongo.module.ts";

import task from "./Task/task.network.ts";

const app = new Application();

mongo.connect();

app.use(task.routes());
app.use(task.allowedMethods());

await app.listen({ port: 35001 });
