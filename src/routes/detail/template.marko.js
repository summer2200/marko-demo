// Compiled using marko@4.5.6 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    components_helpers = require("marko/src/components/helpers"),
    marko_registerComponent = components_helpers.rc,
    marko_componentType = marko_registerComponent("/marko-demo$1.0.0/src/routes/detail/template.marko", function() {
      return module.exports;
    }),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    ___browser_json = require.resolve("../../browser.json"),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    lasso_page_tag = marko_loadTag(require("@lasso/marko-taglib/taglib/config-tag")),
    lasso_head_tag = marko_loadTag(require("@lasso/marko-taglib/taglib/head-tag")),
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    app_nav_tag = marko_loadTag(require("../../components/app-nav/renderer")),
    marko_escapeXml = marko_helpers.x,
    marko_styleAttr = marko_helpers.sa,
    marko_attr = marko_helpers.a,
    lasso_body_tag = marko_loadTag(require("@lasso/marko-taglib/taglib/body-tag")),
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  lasso_page_tag({
      packagePath: ___browser_json,
      dirname: __dirname,
      filename: __filename
    }, out);

  out.w("<!DOCTYPE html><html><head><meta charset=\"utf-8\"><meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\"><title>Details</title><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">");

  lasso_head_tag({}, out, __component, "6");

  lasso_head_tag({}, out, __component, "7");

  out.w("</head><body>");

  component_globals_tag({}, out);

  app_nav_tag({}, out, __component, "9");

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
    ">Cast</a></li></ul><div class=\"row justify-content-sm-center\"><div class=\"col-sm-8\"><p class=\"text-justify\">Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus. Praeterea iter est quasdam res quas ex communi. At nos hinc posthac, sitientis piros Afros. Petierunt uti sibi concilium totius Galliae in diem certam indicere. Cras mattis iudicium purus sit amet fermentum.</p></div></div>");

  lasso_body_tag({}, out, __component, "33");

  lasso_body_tag({}, out, __component, "34");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "35");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    tags: [
      "@lasso/marko-taglib/taglib/config-tag",
      "@lasso/marko-taglib/taglib/head-tag",
      "marko/src/components/taglib/component-globals-tag",
      "../../components/app-nav/renderer",
      "@lasso/marko-taglib/taglib/body-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
