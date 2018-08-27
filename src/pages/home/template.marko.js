// Compiled using marko@4.12.5 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/marko-demo$1.0.0/src/pages/home/template.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html><head><meta charset=\"utf-8\"><meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\"><title>Marko Demo</title><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"><link rel=\"stylesheet\" href=\"https://cdn.bootcss.com/bootstrap/4.0.0/css/bootstrap.min.css\" integrity=\"sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm\" crossorigin=\"anonymous\"><script src=\"https://cdn.bootcss.com/jquery/3.2.1/jquery.slim.min.js\" integrity=\"sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN\" crossorigin=\"anonymous\"></script><script src=\"https://cdn.bootcss.com/popper.js/1.12.9/umd/popper.min.js\" integrity=\"sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q\" crossorigin=\"anonymous\"></script><script src=\"https://cdn.bootcss.com/bootstrap/4.0.0/js/bootstrap.min.js\" integrity=\"sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl\" crossorigin=\"anonymous\"></script></head><body>");

  component_globals_tag({}, out);

  out.w("<nav class=\"navbar navbar-expand-lg navbar-light bg-light\"><a class=\"navbar-brand\" href=\"#\">Navbar</a><button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\"><span class=\"navbar-toggler-icon\"></span></button><div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\"><ul class=\"navbar-nav mr-auto\"><li class=\"nav-item active\"><a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a></li><li class=\"nav-item\"><a class=\"nav-link\" href=\"#\">Link</a></li><li class=\"nav-item dropdown\"><a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Dropdown</a><div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\"><a class=\"dropdown-item\" href=\"#\">Action</a><a class=\"dropdown-item\" href=\"#\">Another action</a><div class=\"dropdown-divider\"></div><a class=\"dropdown-item\" href=\"#\">Something else here</a></div></li><li class=\"nav-item\"><a class=\"nav-link disabled\" href=\"#\">Disabled</a></li></ul><form class=\"form-inline my-2 my-lg-0\"><input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\"><button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button></form></div></nav><div class=\"jumbotron jumbotron-fluid\"><div class=\"container\"><a href=\"/detail\" class=\"display-4\">Fluid jumbotron</a><p class=\"lead\">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p></div></div><div class=\"container-fluid\"><div class=\"row\"><div class=\"col-sm-8\" id=\"left\"><h2>Hot Movies</h2><div class=\"card\" style=\"width: 18rem; display: inline-block;\"><div class=\"card-body\"><h5 class=\"card-title\">Card title</h5><h6 class=\"card-subtitle mb-2 text-muted\">Card subtitle</h6><p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p><a href=\"#\" class=\"card-link\">Card link</a><a href=\"#\" class=\"card-link\">Another link</a></div></div><div class=\"card\" style=\"width: 18rem; display: inline-block;\"><div class=\"card-body\"><h5 class=\"card-title\">Card title</h5><h6 class=\"card-subtitle mb-2 text-muted\">Card subtitle</h6><p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p><a href=\"#\" class=\"card-link\">Card link</a><a href=\"#\" class=\"card-link\">Another link</a></div></div><div class=\"card\" style=\"width: 18rem; display: inline-block;\"><div class=\"card-body\"><h5 class=\"card-title\">Card title</h5><h6 class=\"card-subtitle mb-2 text-muted\">Card subtitle</h6><p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p><a href=\"#\" class=\"card-link\">Card link</a><a href=\"#\" class=\"card-link\">Another link</a></div></div></div><div class=\"col-sm-4\" id=\"right\"><h2>Today's Tops</h2><ul class=\"list-group\"><li class=\"list-group-item d-flex justify-content-between align-items-center\">Cras justo odio <span class=\"badge badge-primary badge-pill\">14</span></li><li class=\"list-group-item d-flex justify-content-between align-items-center\">Dapibus ac facilisis in <span class=\"badge badge-primary badge-pill\">2</span></li><li class=\"list-group-item d-flex justify-content-between align-items-center\">Morbi leo risus <span class=\"badge badge-primary badge-pill\">1</span></li></ul></div></div></div>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "72");

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
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
