import { Router } from "../deps.ts";
import { swagger } from "./swagger.ts";
import { hello } from "./test.ts";

const apiRouter = new Router();

apiRouter.use(swagger.routes(), hello.routes());

export { apiRouter };
