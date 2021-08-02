import { Application, Router, send } from "./deps.ts";

const app = new Application();
const port = 8000;

const router = new Router();

router.get("/", (ctx) => {
  ctx.response.body = "text/html";
});

app.use(router.routes());
app.use(router.allowedMethods());

app.use(async (ctx) => {
  await send(ctx, ctx.request.url.pathname, {
    root: `${Deno.cwd()}/src`,
  });
});

if (import.meta.main) {
  await app.listen({
    port: port,
  });
}
