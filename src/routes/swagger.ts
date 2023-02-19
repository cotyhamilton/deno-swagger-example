import { Router, swaggerJsDoc } from "../deps.ts";

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Deno Swagger Example',
            version: '1.0.0',
        },
    },
    apis: ["./src/routes/*.ts"],
};

const openapiSpecification = swaggerJsDoc(options);

const swagger = new Router()
    .get("/swagger.json", (context) => {
        context.response.body = openapiSpecification;
    });

export { swagger };