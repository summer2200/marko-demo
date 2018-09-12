// Compiled using marko@4.5.6 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    components_helpers = require("marko/src/components/helpers"),
    marko_registerComponent = components_helpers.rc,
    marko_componentType = marko_registerComponent("/marko-demo$1.0.0/src/routes/search/template.marko", function() {
      return module.exports;
    }),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    hasRenderBodyKey = Symbol.for("hasRenderBody"),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_escapeXml = marko_helpers.x,
    marko_loadTemplate = require("marko/src/runtime/helper-loadTemplate"),
    site_layout_template = marko_loadTemplate(require.resolve("../../components/site-layout/template.marko")),
    marko_loadTag = marko_helpers.t,
    site_layout_tag = marko_loadTag(site_layout_template);

function render(input, out, __component, component, state) {
  var data = input;

  site_layout_tag({
      title: {
          renderBody: function renderBody(out) {
            out.w("Search");
          }
        },
      content: {
          renderBody: function renderBody(out) {
            out.w("<div class=\"container-fluid\"><div class=\"alert alert-success\" role=\"alert\">" +
              marko_escapeXml(data.count) +
              " results of '" +
              marko_escapeXml(data.searchText) +
              "'</div><div class=\"row justify-content-center\"><div class=\"col-sm-8\"><div class=\"list-group\"><a href=\"#\" class=\"list-group-item list-group-item-action flex-column align-items-start\"><div class=\"d-flex w-100 justify-content-between\"><h5 class=\"mb-1\">List group item heading</h5><small>3 days ago</small></div><p class=\"mb-1\">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p><small>Donec id elit non mi porta.</small></a></div></div></div><nav aria-label=\"Page navigation example\"><ul class=\"pagination justify-content-center\"><li class=\"page-item disabled\"><a class=\"page-link\" href=\"#\" tabindex=\"-1\">Previous</a></li><li class=\"page-item\"><a class=\"page-link\" href=\"#\">1</a></li><li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li><li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li><li class=\"page-item\"><a class=\"page-link\" href=\"#\">Next</a></li></ul></nav></div>");
          }
        },
      [hasRenderBodyKey]: true
    }, out, __component, "0");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    tags: [
      "../../components/site-layout/template.marko"
    ]
  };
