// Compiled using marko@4.12.5 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/marko-demo$1.0.0/src/pages/home/template.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    ___browser_json = require.resolve("../../browser.json"),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    lasso_page_tag = marko_loadTag(require("@lasso/marko-taglib/taglib/config-tag")),
    lasso_head_tag = marko_loadTag(require("@lasso/marko-taglib/taglib/head-tag")),
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    app_nav_tag = marko_loadTag(require("../../components/app-nav/renderer")),
    marko_styleAttr = marko_helpers.sa,
    lasso_body_tag = marko_loadTag(require("@lasso/marko-taglib/taglib/body-tag")),
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

var base = 2;
function sum(a, b) {
    return base + a + b;
};
function search() {
  console.log('searching');
};

function render(input, out, __component, component, state) {
  var data = input;

  lasso_page_tag({
      packagePath: ___browser_json,
      dirname: __dirname,
      filename: __filename
    }, out);

  out.w("<!DOCTYPE html><html><head><meta charset=\"utf-8\"><meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"><title>Marko Demo</title>");

  lasso_head_tag({}, out, __component, "6");

  lasso_head_tag({}, out, __component, "7");

  out.w("</head><body>");

  component_globals_tag({}, out);

  app_nav_tag({
      name: "Hot Movies"
    }, out, __component, "9");

  out.w("<div class=\"jumbotron jumbotron-fluid\"><div class=\"container\"><a href=\"/detail\" class=\"display-4 home-title\">Ant-Man and the Wasp</a><p class=\"lead\">As Scott Lang balances being both a Super Hero and a father, Hope van Dyne and Dr. Hank Pym present an urgent new mission that finds the Ant-Man fighting alongside The Wasp to uncover secrets from their past.</p></div></div><div class=\"container-fluid\"><div class=\"row\"><div class=\"col-sm-8\" id=\"left\"><h2>Hot Movies</h2><div class=\"card\"" +
    marko_styleAttr({
      width: "18rem",
      display: "inline-block"
    }) +
    "><div class=\"card-body\"><h5 class=\"card-title\">Kin (2018)</h5><h6 class=\"card-subtitle mb-2 text-muted\">102 min - Action | Sci-Fi</h6><p class=\"card-text\">Chased by a vengeful criminal, the feds and a gang of otherworldly soldiers, a recently released ex-con and brother.</p><a href=\"#\" class=\"card-link\">Chris Weitz</a><a href=\"#\" class=\"card-link\"> Oscar Isaac</a></div></div><div class=\"card\" style=\"width: 18rem; display: inline-block;\"><div class=\"card-body\"><h5 class=\"card-title\">Operation Finale (2018) </h5><h6 class=\"card-subtitle mb-2 text-muted\">122 min - Drama | History</h6><p class=\"card-text\">A team of secret agents set out to track down the Nazi officer who masterminded the Holocaust.</p><a href=\"#\" class=\"card-link\">Jonathan Baker</a><a href=\"#\" class=\"card-link\">Josh Baker</a></div></div><div class=\"card\" style=\"width: 18rem; display: inline-block;\"><div class=\"card-body\"><h5 class=\"card-title\">The Little Stranger (2018) </h5><h6 class=\"card-subtitle mb-2 text-muted\">111 min - Drama | Horror</h6><p class=\"card-text\">After a doctor is called to visit a crumbling manor, strange things begin to occur.</p><a href=\"#\" class=\"card-link\">Lenny Abrah</a><a href=\"#\" class=\"card-link\">Donall Gleeson</a></div></div></div><div class=\"col-sm-4\" id=\"right\"><h2>Today's Tops</h2><ul class=\"list-group\"><li class=\"list-group-item d-flex justify-content-between align-items-center\">The Meg (2018) <span class=\"badge badge-warning badge-pill\">9.0</span></li><li class=\"list-group-item d-flex justify-content-between align-items-center\">Crazy Rich Asians (2018) <span class=\"badge badge-warning badge-pill\">8.9</span></li><li class=\"list-group-item d-flex justify-content-between align-items-center\">To All the Boys I've Loved Before (2018) <span class=\"badge badge-warning badge-pill\">7.5</span></li></ul></div></div></div><footer" +
    marko_styleAttr({
      marginTop: "2rem",
      backgroundColor: "#f2f2f2",
      padding: "2rem 0"
    }) +
    "><ul class=\"nav justify-content-center\"><li class=\"nav-item\"><a class=\"nav-link text-secondary\" href=\"#\">Amazon Video</a></li><li class=\"nav-item\"><a class=\"nav-link text-secondary\" href=\"#\">Prime Video</a></li><li class=\"nav-item\"><a class=\"nav-link text-secondary\" href=\"#\">Amazon Germany</a></li><li class=\"nav-item\"><a class=\"nav-link text-secondary\" href=\"#\">DPReview</a></li></ul></footer>");

  lasso_body_tag({}, out, __component, "58");

  lasso_body_tag({}, out, __component, "59");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "60");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/marko-demo$1.0.0/src/pages/home/template.marko",
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
