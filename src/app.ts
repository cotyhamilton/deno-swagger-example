import { Application, cors, Router } from "./deps.ts";
import { apiRouter } from "./routes/mod.ts";

const port = +(Deno.env.get("PORT") || 8000);
const app = new Application();

const router = new Router()
  .use(apiRouter.routes());

app.use(cors());
app.use(router.routes());

console.info(`Server listening on port ${port}`);
await app.listen({ port });
