// Compiled using marko@4.12.5 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/marko-demo$1.0.0/src/pages/detail/template.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    ___browser_json = require.resolve("../../browser.json"),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    lasso_page_tag = marko_loadTag(require("@lasso/marko-taglib/taglib/config-tag")),
    lasso_head_tag = marko_loadTag(require("@lasso/marko-taglib/taglib/head-tag")),
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    lasso_body_tag = marko_loadTag(require("@lasso/marko-taglib/taglib/body-tag")),
    app_nav_tag = marko_loadTag(require("../../components/app-nav/renderer")),
    marko_escapeXml = marko_helpers.x,
    marko_styleAttr = marko_helpers.sa,
    marko_attr = marko_helpers.a,
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

  lasso_body_tag({}, out, __component, "9");

  app_nav_tag({}, out, __component, "10");

  out.w("<div class=\"container-fluid\"><div class=\"row p-5\"><div class=\"col-sm-4\"><div class=\"card text-white bg-success mb-3\"><div class=\"card-header\">" +
    marko_escapeXml(data.name) +
    "</div><div class=\"card-body\"><h5 class=\"card-title\">From: " +
    marko_escapeXml(data.country) +
    "</h5><p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p></div></div></div><div class=\"col-sm-8\"><div class=\"card\"" +
    marko_styleAttr({
      display: "inline-block"
    }) +
    "><div class=\"card-header\">Quote</div><div class=\"card-body\"><blockquote class=\"blockquote mb-0\"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p><footer class=\"blockquote-footer\">Someone famous in <cite title=\"Source Title\">Source Title</cite></footer></blockquote></div></div></div></div></div><ul class=\"nav nav-tabs\"><li class=\"nav-item\"><a class=\"nav-link active\"" +
    marko_attr("data-marko", {
      onclick: __component.d("click", "showTab", false, [
          "1"
        ])
    }, false) +
    ">Storyline</a></li><li class=\"nav-item\"><a class=\"nav-link\"" +
    marko_attr("data-marko", {
      onclick: __component.d("click", "showTab", false, [
          "2"
        ])
    }, false) +
    ">Cast</a></li></ul><div class=\"row justify-content-sm-center\"><div class=\"col-sm-8\"><p class=\"text-justify\">Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus. Praeterea iter est quasdam res quas ex communi. At nos hinc posthac, sitientis piros Afros. Petierunt uti sibi concilium totius Galliae in diem certam indicere. Cras mattis iudicium purus sit amet fermentum.</p></div></div>");

  lasso_body_tag({}, out, __component, "35");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "36");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/marko-demo$1.0.0/src/pages/detail/template.marko",
    tags: [
      "@lasso/marko-taglib/taglib/config-tag",
      "@lasso/marko-taglib/taglib/head-tag",
      "marko/src/components/taglib/component-globals-tag",
      "@lasso/marko-taglib/taglib/body-tag",
      "../../components/app-nav/renderer",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
