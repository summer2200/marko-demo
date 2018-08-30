// Compiled using marko@4.13.3 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/marko-demo$1.0.0/src/pages/detail/template.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    app_nav_tag = marko_loadTag(require("../../components/app-nav/renderer")),
    marko_escapeXml = marko_helpers.x,
    marko_styleAttr = marko_helpers.sa,
    marko_attr = marko_helpers.a,
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html><head><meta charset=\"utf-8\"><meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\"><title>Details</title><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"><link rel=\"stylesheet\" href=\"https://cdn.bootcss.com/bootstrap/4.0.0/css/bootstrap.min.css\" integrity=\"sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm\" crossorigin=\"anonymous\"><script src=\"https://cdn.bootcss.com/jquery/3.2.1/jquery.slim.min.js\" integrity=\"sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN\" crossorigin=\"anonymous\"></script><script src=\"https://cdn.bootcss.com/popper.js/1.12.9/umd/popper.min.js\" integrity=\"sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q\" crossorigin=\"anonymous\"></script><script src=\"https://cdn.bootcss.com/bootstrap/4.0.0/js/bootstrap.min.js\" integrity=\"sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl\" crossorigin=\"anonymous\"></script></head><body>");

  component_globals_tag({}, out);

  app_nav_tag({}, out, __component, "11");

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
      "marko/src/components/taglib/component-globals-tag",
      "../../components/app-nav/renderer",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
