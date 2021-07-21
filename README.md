# Deno-React-Template
This is my basic project template for setting up a React-based project with the Deno runtime and written in TypeScript. 

With Deno.js being in its infancy as a JavaScript runtime and with React being heavily dependant on Node, it is very difficult to setup a project with a frontend-framework such as React. Given this situation and also a lack of resources/tutorials to show how to set up a React-Deno project, I have decided to take it upon myself to make a template of my own that people can use and modify in their own projects. 

## Notes (IMPORTANT)!!
1. This project will have a similar setup to a React project (ex. folder structure) however there will be noticable differences (ex. file types used and where). This has a lot to do with how Deno (and TypeTcript) works and understands/recognises files and modules. I will provide an explanation for them in detail so that you understand why my template is structured the way it is.
2. I will continuously be updating this template as the Deno.js EcoSystem grows and best practices (with React.js) are established. This is just my way of doing things right now. You can change the file/folder structure however you see fit for your project, However, the basic concepts of this template and getting React to work (especially for Server Sider Rendering) shouldnt be changing. If you can understand that then you should be golden :).
3. While you may end up using Node.js with this template, this template does not use Node or NPM (directly at least). That would defeat the purpose of this being a "Deno-React" template. Instead the Node/NPM modules are first converted to ESM and then imported. That is how I was able to get React to work with Deno.

## Support and Contribution
1. If you have any comments or critiques for me than please feel free to share! Because of Deno's infancy, I am faced with the difficulty of having a lack of resources for creating the most "optimal" template. I am piecing bits and pieces together from different sources, thereby building by trial/error. If you would like to contribute to this project then please feel free to do so. Whether its simple typo corrections or changes to how the project is setup, if it's for the betterment of the project then I'm all for it!
2. I'm a big believer in Deno.js and it's benefits for the future. Instead of waiting 3-5 years for the ecosystem to grow like I have seen many people say, I wanted to do something different. This template project is my way of contributing to the Deno community and its advocacy. Whether you use Deno or not, if you can at least appreciate my intentions, please consider leaving a star on my repository so that more people can find it and see if they can benefit as well!
3. If you do use my template for your own React Project, please consider making a note of it in your project. While I can't stop you if you dont nor will I ask you for money, I just believe its the respectful thing to do.