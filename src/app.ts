import { Application, Router, cors } from "./deps.ts";
import { apiRouter } from "./routes/mod.ts";

const app = new Application();

const router = new Router()
    .use(apiRouter.routes());

app.use(cors());
app.use(router.routes());

console.info("CORS-enabled web server listening on port 8000");
await app.listen({ port: 8000 });