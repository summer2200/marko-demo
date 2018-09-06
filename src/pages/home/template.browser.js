// Compiled using marko@4.12.5 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/vdom").t(),
    components_helpers = require("marko/src/components/helpers"),
    marko_registerComponent = components_helpers.rc,
    marko_componentType = marko_registerComponent("/marko-demo$1.0.0/src/pages/home/template.marko", function() {
      return module.exports;
    }),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    ___browser_json = require.resolve("../../browser.json"),
    marko_helpers = require("marko/src/runtime/vdom/helpers"),
    marko_loadTag = marko_helpers.t,
    lasso_page_tag = marko_loadTag(require("@lasso/marko-taglib/taglib/config-tag")),
    lasso_head_tag = marko_loadTag(require("@lasso/marko-taglib/taglib/head-tag")),
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    app_nav_tag = marko_loadTag(require("../../components/app-nav/renderer")),
    marko_styleAttr = require("marko/src/runtime/vdom/helper-styleAttr"),
    lasso_body_tag = marko_loadTag(require("@lasso/marko-taglib/taglib/body-tag")),
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag")),
    marko_createElement = marko_helpers.e,
    marko_const = marko_helpers.const,
    marko_const_nextId = marko_const("2511a8"),
    marko_node0 = marko_createElement("META", {
        charset: "utf-8"
      }, "2", null, 0, 0, {
        i: marko_const_nextId()
      }),
    marko_node1 = marko_createElement("META", {
        "http-equiv": "X-UA-Compatible",
        content: "IE=edge"
      }, "3", null, 0, 0, {
        i: marko_const_nextId()
      }),
    marko_node2 = marko_createElement("META", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }, "4", null, 0, 0, {
        i: marko_const_nextId()
      }),
    marko_node3 = marko_createElement("TITLE", null, "5", null, 1, 0, {
        i: marko_const_nextId()
      })
      .t("Marko Demo"),
    marko_node4 = marko_createElement("DIV", {
        "class": "jumbotron jumbotron-fluid"
      }, "10", null, 1, 0, {
        i: marko_const_nextId()
      })
      .e("DIV", {
          "class": "container"
        }, "11", null, 2)
        .e("A", {
            href: "/detail",
            "class": "display-4 home-title"
          }, "12", null, 1)
          .t("Ant-Man and the Wasp")
        .e("P", {
            "class": "lead"
          }, "13", null, 1)
          .t("As Scott Lang balances being both a Super Hero and a father, Hope van Dyne and Dr. Hank Pym present an urgent new mission that finds the Ant-Man fighting alongside The Wasp to uncover secrets from their past."),
    marko_attrs0 = {
        "class": "container-fluid"
      },
    marko_attrs1 = {
        "class": "row"
      },
    marko_attrs2 = {
        "class": "col-sm-8",
        id: "left"
      },
    marko_node5 = marko_createElement("DIV", {
        "class": "col-sm-4",
        id: "right"
      }, "39", null, 2, 0, {
        i: marko_const_nextId()
      })
      .e("H2", null, "40", null, 1)
        .t("Today's Tops")
      .e("UL", {
          "class": "list-group"
        }, "41", null, 3)
        .e("LI", {
            "class": "list-group-item d-flex justify-content-between align-items-center"
          }, "42", null, 2)
          .t("The Meg (2018) ")
          .e("SPAN", {
              "class": "badge badge-warning badge-pill"
            }, "43", null, 1)
            .t("9.0")
        .e("LI", {
            "class": "list-group-item d-flex justify-content-between align-items-center"
          }, "44", null, 2)
          .t("Crazy Rich Asians (2018) ")
          .e("SPAN", {
              "class": "badge badge-warning badge-pill"
            }, "45", null, 1)
            .t("8.9")
        .e("LI", {
            "class": "list-group-item d-flex justify-content-between align-items-center"
          }, "46", null, 2)
          .t("To All the Boys I've Loved Before (2018) ")
          .e("SPAN", {
              "class": "badge badge-warning badge-pill"
            }, "47", null, 1)
            .t("7.5"),
    marko_node6 = marko_createElement("H2", null, "17", null, 1, 0, {
        i: marko_const_nextId()
      })
      .t("Hot Movies"),
    marko_node7 = marko_createElement("DIV", {
        "class": "card",
        style: "width: 18rem; display: inline-block;"
      }, "25", null, 1, 0, {
        i: marko_const_nextId()
      })
      .e("DIV", {
          "class": "card-body"
        }, "26", null, 5)
        .e("H5", {
            "class": "card-title"
          }, "27", null, 1)
          .t("Operation Finale (2018) ")
        .e("H6", {
            "class": "card-subtitle mb-2 text-muted"
          }, "28", null, 1)
          .t("122 min - Drama | History")
        .e("P", {
            "class": "card-text"
          }, "29", null, 1)
          .t("A team of secret agents set out to track down the Nazi officer who masterminded the Holocaust.")
        .e("A", {
            href: "#",
            "class": "card-link"
          }, "30", null, 1)
          .t("Jonathan Baker")
        .e("A", {
            href: "#",
            "class": "card-link"
          }, "31", null, 1)
          .t("Josh Baker"),
    marko_node8 = marko_createElement("DIV", {
        "class": "card",
        style: "width: 18rem; display: inline-block;"
      }, "32", null, 1, 0, {
        i: marko_const_nextId()
      })
      .e("DIV", {
          "class": "card-body"
        }, "33", null, 5)
        .e("H5", {
            "class": "card-title"
          }, "34", null, 1)
          .t("The Little Stranger (2018) ")
        .e("H6", {
            "class": "card-subtitle mb-2 text-muted"
          }, "35", null, 1)
          .t("111 min - Drama | Horror")
        .e("P", {
            "class": "card-text"
          }, "36", null, 1)
          .t("After a doctor is called to visit a crumbling manor, strange things begin to occur.")
        .e("A", {
            href: "#",
            "class": "card-link"
          }, "37", null, 1)
          .t("Lenny Abrah")
        .e("A", {
            href: "#",
            "class": "card-link"
          }, "38", null, 1)
          .t("Donall Gleeson"),
    marko_node9 = marko_createElement("DIV", {
        "class": "card-body"
      }, "19", null, 5, 0, {
        i: marko_const_nextId()
      })
      .e("H5", {
          "class": "card-title"
        }, "20", null, 1)
        .t("Kin (2018)")
      .e("H6", {
          "class": "card-subtitle mb-2 text-muted"
        }, "21", null, 1)
        .t("102 min - Action | Sci-Fi")
      .e("P", {
          "class": "card-text"
        }, "22", null, 1)
        .t("Chased by a vengeful criminal, the feds and a gang of otherworldly soldiers, a recently released ex-con and brother.")
      .e("A", {
          href: "#",
          "class": "card-link"
        }, "23", null, 1)
        .t("Chris Weitz")
      .e("A", {
          href: "#",
          "class": "card-link"
        }, "24", null, 1)
        .t(" Oscar Isaac"),
    marko_node10 = marko_createElement("UL", {
        "class": "nav justify-content-center"
      }, "49", null, 4, 0, {
        i: marko_const_nextId()
      })
      .e("LI", {
          "class": "nav-item"
        }, "50", null, 1)
        .e("A", {
            "class": "nav-link text-secondary",
            href: "#"
          }, "51", null, 1)
          .t("Amazon Video")
      .e("LI", {
          "class": "nav-item"
        }, "52", null, 1)
        .e("A", {
            "class": "nav-link text-secondary",
            href: "#"
          }, "53", null, 1)
          .t("Prime Video")
      .e("LI", {
          "class": "nav-item"
        }, "54", null, 1)
        .e("A", {
            "class": "nav-link text-secondary",
            href: "#"
          }, "55", null, 1)
          .t("Amazon Germany")
      .e("LI", {
          "class": "nav-item"
        }, "56", null, 1)
        .e("A", {
            "class": "nav-link text-secondary",
            href: "#"
          }, "57", null, 1)
          .t("DPReview");

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

  out.be("HTML", null, "0", component);

  out.be("HEAD", null, "1", component);

  out.n(marko_node0, component);

  out.n(marko_node1, component);

  out.n(marko_node2, component);

  out.n(marko_node3, component);

  lasso_head_tag({}, out, __component, "6");

  lasso_head_tag({}, out, __component, "7");

  out.ee();

  out.be("BODY", null, "8", component);

  component_globals_tag({}, out);

  app_nav_tag({
      name: "Hot Movies"
    }, out, __component, "9");

  out.n(marko_node4, component);

  out.e("DIV", marko_attrs0, "14", component, 1)
    .e("DIV", marko_attrs1, "15", component, 2)
      .e("DIV", marko_attrs2, "16", component, 4)
        .n(marko_node6, component)
        .e("DIV", {
            "class": "card",
            style: marko_styleAttr({
                width: "18rem",
                display: "inline-block"
              })
          }, "18", component, 1, 4)
          .n(marko_node9, component)
        .n(marko_node7, component)
        .n(marko_node8, component)
      .n(marko_node5, component);

  out.e("FOOTER", {
      style: marko_styleAttr({
          marginTop: "2rem",
          backgroundColor: "#f2f2f2",
          padding: "2rem 0"
        })
    }, "48", component, 1, 4)
    .n(marko_node10, component);

  lasso_body_tag({}, out, __component, "58");

  lasso_body_tag({}, out, __component, "59");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "60");

  out.ee();

  out.ee();
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);
