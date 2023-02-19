import { Router } from "../deps.ts";

const hello = new Router()
    /**
     * @openapi
     * /hello:
     *   get:
     *     description: Example route
     *     responses:
     *       200:
     *         description: Returns a hello world message
     */
    .get("/hello", (ctx) => {
        ctx.response.body = "Hello world!";
    })

export { hello };