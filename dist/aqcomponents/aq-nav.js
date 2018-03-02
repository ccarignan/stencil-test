/*! Built with http://stenciljs.com */
const { h } = window.aqcomponents;

class AqNav {
    render() {
        return (h("nav", { class: "uk-navbar uk-navbar-container" },
            h("div", { class: "uk-navbar-left" },
                h("span", { class: "uk-navbar-item uk-logo" },
                    h("slot", { name: "logo" })),
                h("slot", { name: "navigation" })),
            h("div", { class: "uk-navbar-right" },
                h("ul", { class: "uk-navbar-nav" },
                    h("li", null,
                        h("a", { href: "https://github.com/acquia/acquia-uikit", target: "_blank" }, "GitHub"))))));
    }
    static get is() { return "aq-nav"; }
    static get properties() { return { "name": { "type": String, "attr": "name" } }; }
    static get style() { return ""; }
}

export { AqNav };
