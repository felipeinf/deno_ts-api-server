import { Application } from "https://deno.land/x/oak/mod.ts";

import task from "./Task/task.network.ts";

const app = new Application();

app.use(task.routes());
app.use(task.allowedMethods());

await app.listen({ port: 8000 });
