# marko-demo
small demo using marko.js and node.js

server.js - used to start application server (server side rendering)

pages/*/index.js - used to export the page controller

src/marko-taglib.json - to set the route path of custom tags

components/*/renderer.js - controller for the custom tag, to render the custom tag

marko-tag.json - to define the custome tag's attibutes' input type. If you use an attributes which is not defined in this json file, it will throw an error

pages/client.js - client side rendering logic, a standard node.js file, can import other modules

## lasso - bundler


<lasso-page package-path="./browser.json" /> - to invoke lasso
<lasso-head/> - to use all the css dependencies, put in <head> tag
<lasso-body/> - to use all the script dependencies, put in <body> tag