// Compiled using marko@4.5.6 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    components_helpers = require("marko/src/components/helpers"),
    marko_registerComponent = components_helpers.rc,
    marko_componentType = marko_registerComponent("/marko-demo$1.0.0/src/routes/home/template.marko", function() {
      return module.exports;
    }),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    hasRenderBodyKey = Symbol.for("hasRenderBody"),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_forEach = marko_helpers.f,
    marko_escapeXml = marko_helpers.x,
    marko_styleAttr = marko_helpers.sa,
    marko_loadTemplate = require("marko/src/runtime/helper-loadTemplate"),
    site_layout_template = marko_loadTemplate(require.resolve("../../components/site-layout/template.marko")),
    marko_loadTag = marko_helpers.t,
    site_layout_tag = marko_loadTag(site_layout_template);

function render(input, out, __component, component, state) {
  var data = input;

  var cardStyle = {width:'15rem', display:'inline-block', marginRight: '1rem'};
  
  function getList() {
      return [{
          title: "Kin",
          type: "102 min - Action | Sci-Fi",
          intro: "Chased by a vengeful criminal, the feds and a gang of otherworldly soldiers.",
          actors: ['Chris Weitz', 'Oscar Isaac']
      },
      {
          title: "Operation Finale",
          type: "122 min - Drama | History",
          intro: "A team of secret agents set out to track down the Nazi officer who masterminded the Holocaust.",
          actors: ['Jonathan Baker', 'Josh Baker']
      },
      {
          title: "The Little Stranger",
          type: "111 min - Drama | Horror",
          intro: "After a doctor is called to visit a crumbling manor, strange things begin to occur.",
          actors: ['Leny Abrah', 'Donall Gleson']
      }];
  }

  site_layout_tag({
      title: {
          renderBody: function renderBody(out) {
            out.w("Home");
          }
        },
      content: {
          renderBody: function renderBody(out) {
            out.w("<div class=\"jumbotron jumbotron-fluid\"><div class=\"container\"><a href=\"/detail\" class=\"display-4 home-title\">Ant-Man and the Wasp</a><p class=\"lead\">As Scott Lang balances being both a Super Hero and a father, Hope van Dyne and Dr. Hank Pym present an urgent new mission that finds the Ant-Man fighting alongside The Wasp to uncover secrets from their past.</p></div></div><div class=\"container-fluid\"><div class=\"row\"><div class=\"col-sm-8\" id=\"left\"><h2>Hot Movies</h2>");

            marko_forEach(getList(), function(item) {
              out.w("<div class=\"card\"" +
                marko_styleAttr(cardStyle) +
                "><div class=\"card-body\"><h5 class=\"card-title\">" +
                marko_escapeXml(item.title) +
                " </h5><h6 class=\"card-subtitle mb-2 text-muted\">" +
                marko_escapeXml(item.type) +
                "</h6><p class=\"card-text\">" +
                marko_escapeXml(item.intro) +
                "</p><a href=\"#\" class=\"card-link\">" +
                marko_escapeXml(item.actors) +
                "</a></div></div>");
            });

            out.w("</div><div class=\"col-sm-4\" id=\"right\"><h2>Today's Tops</h2><ul class=\"list-group\"><li class=\"list-group-item d-flex justify-content-between align-items-center\">The Meg (2018) <span class=\"badge badge-warning badge-pill\">9.0</span></li><li class=\"list-group-item d-flex justify-content-between align-items-center\">Crazy Rich Asians (2018) <span class=\"badge badge-warning badge-pill\">8.9</span></li><li class=\"list-group-item d-flex justify-content-between align-items-center\">To All the Boys I've Loved Before (2018) <span class=\"badge badge-warning badge-pill\">7.5</span></li></ul></div></div></div>");
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
