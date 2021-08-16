# Deno-React-Template
This is my basic project template for setting up a React-based project with the Deno runtime and written in TypeScript. 

With Deno.js being in its infancy as a JavaScript runtime and with React being heavily dependant on Node, it is very difficult to setup a project with a frontend-framework such as React. Given this situation and also a lack of resources/tutorials to show how to set up a React-Deno project, I have decided to take it upon myself to make a template of my own that people can use and modify in their own projects. 

## Notes (IMPORTANT)!!
1. This project will have a similar setup to a React project (ex. folder structure) however there will be noticable differences (ex. file types used and where). This has a lot to do with how Deno (and TypeTcript) works and understands/recognises files and modules. I will provide an explanation for them in detail so that you understand why my template is structured the way it is.
2. I will continuously be updating this template as the Deno.js EcoSystem grows and best practices (with React.js) are established. This is just my way of doing things right now. You can change the file/folder structure however you see fit for your project, However, the basic concepts of this template and getting React to work (especially for Server Sider Rendering) shouldnt be changing. If you can understand that then you should be golden :).
3. While you may end up using Node.js with this template, this template does not use Node or NPM (directly at least). That would defeat the purpose of this being a "Deno-React" template. Instead the Node/NPM modules are first converted to ESM and then imported. That is how I was able to get React to work with Deno.

## Setup
1. Install Deno (PowerShell)
```
    iwr https://deno.land/x/install/install.ps1 -useb | iex
```
2. Install Denon
```
    deno install -qAf --unstable https://deno.land/x/denon/denon.ts
```
3. Download the Repository
```
git pull https://github.com/RakinKhan/Deno-React-Template.git
```
3. Install Official Deno Plugin (VS Code)
>**NOTE:** The Deno plugin will automaticlly create deno-dir/deps folders in the current directory any time it senses a typescript file in the directory. I would recommend turning the plug-in on only after you cd into the project root folder so you wont have these folders in non-Deno typescript based projects.
4. Download the external dependencies.
```
deno run --allow-net deps.ts
```
5. Start Server
```
denon start
```
>**NOTE:** Denon will reload the server when any changes happen but the browser wont reload automatically. Refresh manually to see changes.

## Project Structure
```ts
root
└─ components                   // Folder for your React Components
    └─ component
    └─ App.tsx                  // Main component. 
└─ deno-dir                     // Folder where all your Deno dependencies will be cached.
    └─ deps
└─ public                       // Contains the index function which will render the index.html plus styles page serverside.
    └─ index.tsx
└─ src                          // Source folder containing the static files.
    └─ index.css
    └─ index.js
└─ deps.ts                      // Contains all the dependencies imported via url and then exported to be used in the project.
└─ LICENSE
└─ README.md
└─ scripts.json                 // Contains arguments for Denon to run your Deno server.
└─ server.ts                    // HTTP Server using Oak Middleware.

```
## Credits
- [Denon](https://deno.land/x/denon@2.4.8) by [Filippo Rossi](https://github.com/notfilippo) & [Elias Sjögreen](https://github.com/eliassjogreen)
- [Guide to server-side rendering with Deno and React](https://www.sanity.io/guides/server-side-rendering-deno-react) by [Oluyemi Olususi](https://github.com/yemiwebby)
- [Build an Isomorphic Application using Deno and React without WebPack](https://decipher.dev/deno-by-example/advanced-react-ssr/) by [Deepak Vishwakarma](https://github.com/deepakshrma)
- [Deno: The Complete Guide Zero to Mastery](https://www.udemy.com/course/deno-the-complete-guide-zero-to-mastery/) by [Andrei Neagoie](https://zerotomastery.io/) and [Adam Odziemkowski](https://github.com/odziem)

## Support and Contribution
1. If you have any comments or critiques for me than please feel free to share! Because of Deno's infancy, I am faced with the difficulty of having a lack of resources for creating the most "optimal" template. I am piecing bits and pieces together from different sources, thereby building by trial/error. If you would like to contribute to this project then please feel free to do so. Whether its simple typo corrections or changes to how the project is setup, if it's for the betterment of the project then I'm all for it!
2. I'm a big believer in Deno.js and it's benefits for the future. Instead of waiting 3-5 years for the ecosystem to grow like I have seen many people say, I wanted to do something different. This template project is my way of contributing to the Deno community and its advocacy. Whether you use Deno or not, if you can at least appreciate my intentions, please consider leaving a star on my repository so that more people can find it and see if they can benefit as well!
3. If you do use my template for your own React Project, please consider making a note of it in your project. While I can't stop you if you dont nor will I ask you for money, I just believe its the respectful thing to do.
