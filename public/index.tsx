import { React, ReactDOMServer, ServerStyleSheet } from "../deps.ts";
import App from "../components/App.tsx"

const indexPage = async (ctx:any) => {
    const sheet = new ServerStyleSheet()
    const body = ReactDOMServer.renderToString(sheet.collectStyles(<App />))
    const styles = sheet.getStyleTags()

    return ctx.response.body = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>React-Deno-Template</title>
      ${styles}
    </head>
    <body >
    <div id="root">${body}</div>
    <script src="./index.js"></script>  
    </body>
    </html>
    `
}

export default indexPage;