// Compiled using marko@4.13.3 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/marko-demo$1.0.0/src/components/app-nav/app-nav.marko",
    marko_component = require("./app-nav.component"),
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_attr = marko_helpers.a,
    marko_escapeXml = marko_helpers.x,
    marko_classAttr = marko_helpers.ca;

function render(input, out, __component, component, state) {
  var data = input;

  var navTitle = 'Hot!';
  var test = function() {
    alert('test');
    console.log('test');
  };

  out.w("<div class=\"app-nav\"><button" +
    marko_attr("data-marko", {
      onclick: __component.d("click", "test", false)
    }, false) +
    ">test</button><p>" +
    marko_escapeXml(component.increment()) +
    "</p><div>");

  if (state.show) {
    out.w("<p>" +
      marko_escapeXml(sum()) +
      "</p>");
  } else {
    out.w("<p>no numbers</p>");
  }

  out.w("</div><nav class=\"navbar navbar-expand-lg navbar-light bg-light\"><a" +
    marko_classAttr({
      "navbar-brand": true
    }) +
    " href=\"#\">" +
    marko_escapeXml(navTitle) +
    "</a><button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\"><span class=\"navbar-toggler-icon\"></span></button><div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\"><ul class=\"navbar-nav mr-auto\"><li class=\"nav-item active\"><a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a></li><li class=\"nav-item\"><a class=\"nav-link\" href=\"#\">Movies</a></li><li class=\"nav-item dropdown\"><a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Theaters</a><div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\"><a class=\"dropdown-item\" href=\"#\">Shang hai</a><a class=\"dropdown-item\" href=\"#\">Bei jing</a><div class=\"dropdown-divider\"></div><a class=\"dropdown-item\" href=\"#\">Not found</a></div></li><li class=\"nav-item\"><a class=\"nav-link disabled\" href=\"#\">Disabled</a></li></ul><form class=\"form-inline my-2 my-lg-0\"><input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search movies\" aria-label=\"Search\"><button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"button\"" +
    marko_attr("data-marko", {
      onclick: __component.d("click", "sum", false)
    }, false) +
    ">Go</button></form></div></nav></div>");
}

marko_template._ = marko_renderer(render, {
    ___type: marko_componentType
  }, marko_component);

marko_template.Component = marko_defineComponent(marko_component, marko_template._);

marko_template.meta = {
    id: "/marko-demo$1.0.0/src/components/app-nav/app-nav.marko",
    component: "./app-nav.marko"
  };
