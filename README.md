# marko-demo
small demo using marko.js and node.js

server.js - used to start application server (server side rendering)

pages/*/index.js - used to export the page controller

src/marko-taglib.json - to set the route path of custom tags

components/*/renderer.js - controller for the custom tag, to render the custom tag

marko-tag.json - to define the custome tag's attibutes' input type. If you use an attributes which is not defined in this json file, it will throw an error

pages/client.js - client side rendering logic, a standard node.js file, can import other modules

## lasso - bundler


`<lasso-page package-path="./browser.json" />` - to invoke lasso
`<lasso-head/>` - to use all the css dependencies, put in `<head>` tag
`<lasso-body/>` - to use all the script dependencies, put in `<body>` tag
  
 
 
 ## Problems
 1. Installed marko-starter, create routes folder, create 'test/index.marko' and run the code, hit '/test' got 404.
 2. Write codes like this in template.marko under any component folder, not working(seems click event is not working): 
 
 ```
 class {
  onCreate() {
    this.state = { count:0 };
  }
  increment() {
    this.state.count++;
  }
 }

 <div.count>
   ${state.count}
 </div>
 <button.example-button on-click('increment')>
   Click me!
 </button>
 ```
 
 3. install marko-cli got many errors, this works but looks wired: https://github.com/marko-js/marko-cli/issues/88
 
