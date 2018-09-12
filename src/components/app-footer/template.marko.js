// Compiled using marko@4.5.6 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    components_helpers = require("marko/src/components/helpers"),
    marko_registerComponent = components_helpers.rc,
    marko_componentType = marko_registerComponent("/marko-demo$1.0.0/src/components/app-footer/template.marko", function() {
      return module.exports;
    }),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_styleAttr = marko_helpers.sa;

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<footer" +
    marko_styleAttr({
      marginTop: "2rem",
      backgroundColor: "#f2f2f2",
      padding: "2rem 0"
    }) +
    "><ul class=\"nav justify-content-center\"><li class=\"nav-item\"><a class=\"nav-link text-secondary\" href=\"#\">Amazon Video</a></li><li class=\"nav-item\"><a class=\"nav-link text-secondary\" href=\"#\">Prime Video</a></li><li class=\"nav-item\"><a class=\"nav-link text-secondary\" href=\"#\">Amazon Germany</a></li><li class=\"nav-item\"><a class=\"nav-link text-secondary\" href=\"#\">DPReview</a></li></ul></footer>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {};
