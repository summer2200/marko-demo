// Compiled using marko@4.5.6 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_component = {
        onCreate: function() {
          this.state = {
              showTab1: true
            };
        },
        showTab: function(tabNo) {
          this.state.showTab1 = tabNo.toString() === "1" ? true : false;
        }
      },
    components_helpers = require("marko/src/components/helpers"),
    marko_registerComponent = components_helpers.rc,
    marko_componentType = marko_registerComponent("/marko-demo$1.0.0/src/routes/detail/template.marko", function() {
      return module.exports;
    }),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    hasRenderBodyKey = Symbol.for("hasRenderBody"),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_escapeXml = marko_helpers.x,
    marko_styleAttr = marko_helpers.sa,
    marko_attr = marko_helpers.a,
    marko_loadTemplate = require("marko/src/runtime/helper-loadTemplate"),
    site_layout_template = marko_loadTemplate(require.resolve("../../components/site-layout/template.marko")),
    marko_loadTag = marko_helpers.t,
    site_layout_tag = marko_loadTag(site_layout_template);

function render(input, out, __component, component, state) {
  var data = input;

  site_layout_tag({
      title: {
          renderBody: function renderBody(out) {
            out.w("Detail");
          }
        },
      content: {
          renderBody: function renderBody(out) {
            out.w("<div class=\"container-fluid\"><div class=\"row p-5\"><div class=\"col-sm-4 flex-box\"><div class=\"card text-white bg-success m-0 stretch-item\"><div class=\"card-header\">" +
              marko_escapeXml(data.movieName) +
              "</div><div class=\"card-body\"><h5 class=\"card-title\">Director: " +
              marko_escapeXml(data.director) +
              "</h5><p class=\"card-text\">Stars: " +
              marko_escapeXml(data.stars) +
              "</p></div></div></div><div class=\"col-sm-8\"><div class=\"card\"" +
              marko_styleAttr({
                display: "inline-block"
              }) +
              "><div class=\"card-header\">Plot</div><div class=\"card-body\"><blockquote class=\"blockquote mb-0\"><p>" +
              marko_escapeXml(data.plot) +
              "</p><footer class=\"blockquote-footer\">" +
              marko_escapeXml(data.awards.join(",")) +
              "</footer></blockquote></div></div></div></div></div><ul class=\"nav nav-tabs lg-l-r-pd\"><li class=\"nav-item pointer\"><a class=\"nav-link active\"" +
              marko_attr("data-marko", {
                onclick: __component.d("showTab", [
                    "1"
                  ])
              }, false) +
              ">Storyline</a></li><li class=\"nav-item pointer\"><a class=\"nav-link\"" +
              marko_attr("data-marko", {
                onclick: __component.d("showTab", [
                    "2"
                  ])
              }, false) +
              ">Cast</a></li></ul>");

            if (state.showTab1) {
              out.w("<div class=\"row justify-content-sm-center\"><div class=\"col-sm-8\"><p class=\"text-justify\">This is tab 1</p></div></div>");
            } else {
              out.w("<div class=\"row justify-content-sm-center\"><div class=\"col-sm-8\"><p class=\"text-justify\">This is tab2.</p></div></div>");
            }

            out.w("<form name=\"detail\" action=\"/detail\" method=\"post\"><button type=\"submit\">submit</button></form>");
          }
        },
      [hasRenderBodyKey]: true
    }, out, __component, "0");
}

marko_template._ = marko_renderer(render, {
    ___type: marko_componentType
  }, marko_component);

marko_template.Component = marko_defineComponent(marko_component, marko_template._);

marko_template.meta = {
    deps: [
      {
          type: "require",
          path: "./template.marko"
        }
    ],
    tags: [
      "../../components/site-layout/template.marko"
    ]
  };
