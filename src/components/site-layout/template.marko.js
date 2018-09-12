// Compiled using marko@4.5.6 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    components_helpers = require("marko/src/components/helpers"),
    marko_registerComponent = components_helpers.rc,
    marko_componentType = marko_registerComponent("/marko-demo$1.0.0/src/components/site-layout/template.marko", function() {
      return module.exports;
    }),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    ___browser_json = require.resolve("../../browser.json"),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    lasso_page_tag = marko_loadTag(require("@lasso/marko-taglib/taglib/config-tag")),
    lasso_head_tag = marko_loadTag(require("@lasso/marko-taglib/taglib/head-tag")),
    include_tag = marko_loadTag(require("marko/src/taglibs/core/include-tag")),
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    app_nav_tag = marko_loadTag(require("../app-nav/renderer")),
    marko_loadTemplate = require("marko/src/runtime/helper-loadTemplate"),
    app_footer_template = marko_loadTemplate(require.resolve("../app-footer/template.marko")),
    app_footer_tag = marko_loadTag(app_footer_template),
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

  out.w("<!DOCTYPE html><html><head>");

  lasso_head_tag({}, out, __component, "2");

  out.w("<meta charset=\"utf-8\"><meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"><title>");

  include_tag({
      _target: input.title
    }, out, __component, "7");

  out.w("</title>");

  lasso_head_tag({}, out, __component, "8");

  out.w("</head><body>");

  component_globals_tag({}, out);

  app_nav_tag({
      name: "Hot Movies"
    }, out, __component, "10");

  out.w("<div>");

  include_tag({
      _target: input.content
    }, out, __component, "12");

  out.w("</div>");

  app_footer_tag({}, out, __component, "13");

  lasso_body_tag({}, out, __component, "14");

  lasso_body_tag({}, out, __component, "15");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "16");

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
      "marko/src/taglibs/core/include-tag",
      "marko/src/components/taglib/component-globals-tag",
      "../app-nav/renderer",
      "../app-footer/template.marko",
      "@lasso/marko-taglib/taglib/body-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
