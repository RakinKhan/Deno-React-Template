import { Application, Router, send } from "./deps.ts";
import indexPage from "./public/index.tsx";
const app = new Application();
const port = 8000;

const router = new Router();

router.get("/", (ctx) => {
  ctx.response.type = "text/html";
  indexPage(ctx);
});

app.use(router.routes());
app.use(router.allowedMethods());

app.use(async (ctx) => {
  await send(ctx, ctx.request.url.pathname, {
    root: `${Deno.cwd()}/src`,
  });
});

if (import.meta.main) {
  console.log("The server is running on localhost:8000");
  await app.listen({
    port: port,
  });
}
