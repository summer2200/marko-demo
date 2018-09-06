// Compiled using marko@4.12.5 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/vdom").t(),
    components_helpers = require("marko/src/components/helpers"),
    marko_registerComponent = components_helpers.rc,
    marko_componentType = marko_registerComponent("/marko-demo$1.0.0/src/components/app-nav/template.marko", function() {
      return module.exports;
    }),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_attrs0 = {
        "class": "app-nav"
      },
    marko_attrs1 = {
        "class": "navbar navbar-expand-lg navbar-light bg-light"
      },
    marko_attrs2 = {
        "class": "navbar-brand",
        href: "/"
      },
    marko_helpers = require("marko/src/runtime/vdom/helpers"),
    marko_createElement = marko_helpers.e,
    marko_const = marko_helpers.const,
    marko_const_nextId = marko_const("8c955b"),
    marko_node0 = marko_createElement("BUTTON", {
        "class": "navbar-toggler",
        type: "button",
        "data-toggle": "collapse",
        "data-target": "#navbarSupportedContent",
        "aria-controls": "navbarSupportedContent",
        "aria-expanded": "false",
        "aria-label": "Toggle navigation"
      }, "3", null, 1, 0, {
        i: marko_const_nextId()
      })
      .e("SPAN", {
          "class": "navbar-toggler-icon"
        }, "4", null, 0),
    marko_attrs3 = {
        "class": "collapse navbar-collapse",
        id: "navbarSupportedContent"
      },
    marko_node1 = marko_createElement("UL", {
        "class": "navbar-nav mr-auto"
      }, "6", null, 4, 0, {
        i: marko_const_nextId()
      })
      .e("LI", {
          "class": "nav-item active"
        }, "7", null, 1)
        .e("A", {
            "class": "nav-link",
            href: "/"
          }, "8", null, 2)
          .t("Home ")
          .e("SPAN", {
              "class": "sr-only"
            }, "9", null, 1)
            .t("(current)")
      .e("LI", {
          "class": "nav-item"
        }, "10", null, 1)
        .e("A", {
            "class": "nav-link",
            href: "/detail"
          }, "11", null, 1)
          .t("Movies")
      .e("LI", {
          "class": "nav-item dropdown"
        }, "12", null, 2)
        .e("A", {
            "class": "nav-link dropdown-toggle",
            href: "#",
            id: "navbarDropdown",
            role: "button",
            "data-toggle": "dropdown",
            "aria-haspopup": "true",
            "aria-expanded": "false"
          }, "13", null, 1)
          .t("Theaters")
        .e("DIV", {
            "class": "dropdown-menu",
            "aria-labelledby": "navbarDropdown"
          }, "14", null, 4)
          .e("A", {
              "class": "dropdown-item",
              href: "#"
            }, "15", null, 1)
            .t("Shang hai")
          .e("A", {
              "class": "dropdown-item",
              href: "#"
            }, "16", null, 1)
            .t("Bei jing")
          .e("DIV", {
              "class": "dropdown-divider"
            }, "17", null, 0)
          .e("A", {
              "class": "dropdown-item",
              href: "#"
            }, "18", null, 1)
            .t("Not found")
      .e("LI", {
          "class": "nav-item"
        }, "19", null, 1)
        .e("A", {
            "class": "nav-link disabled",
            href: "#"
          }, "20", null, 1)
          .t("Disabled"),
    marko_attrs4 = {
        "class": "form-inline my-2 my-lg-0"
      },
    marko_node2 = marko_createElement("INPUT", {
        "class": "form-control mr-sm-2",
        type: "search",
        placeholder: "Search movies",
        "aria-label": "Search"
      }, "22", null, 0, 0, {
        i: marko_const_nextId()
      }),
    marko_attrs5 = {
        "class": "btn btn-outline-success my-2 my-sm-0",
        type: "button"
      };

function render(input, out, __component, component, state) {
  var data = input;

  out.e("DIV", marko_attrs0, "0", component, 1)
    .e("NAV", marko_attrs1, "1", component, 3)
      .e("A", marko_attrs2, "2", component, 1)
        .t(data.name)
      .n(marko_node0, component)
      .e("DIV", marko_attrs3, "5", component, 2)
        .n(marko_node1, component)
        .e("FORM", marko_attrs4, "21", component, 2)
          .n(marko_node2, component)
          .e("BUTTON", marko_attrs5, "23", component, 1, 0, {
              onclick: __component.d("click", "sum", false)
            })
            .t("Go");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);
