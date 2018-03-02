/*! Built with http://stenciljs.com */
aqcomponents.loadBundle("aq-nav",["exports"],function(a){var n=window.aqcomponents.h,l=function(){function a(){}return a.prototype.render=function(){return n("nav",{class:"uk-navbar-container","uk-navbar":!0},n("div",{class:"uk-navbar-left"},n("span",{class:"uk-navbar-item uk-logo"},n("slot",{name:"logo"})),n("slot",{name:"navigation"})),n("div",{class:"uk-navbar-right"},n("ul",{class:"uk-navbar-nav"},n("li",null,n("a",{href:"#"},"Help"),n("div",{class:"uk-navbar-dropdown aq-nav-dropdown-search","uk-dropdown":"pos: bottom-right"},n("ul",{class:"uk-nav uk-navbar-dropdown-nav"},n("li",null,n("a",{href:"#"},"Help Documents")),n("li",null,n("a",{href:"#"},"Submit a Support Ticket")),n("li",null,n("div",{class:"uk-inline"},n("span",{class:"uk-form-icon uk-form-icon-flip","uk-icon":"icon: search"}),n("input",{class:"uk-input",type:"text"})))))),n("li",null,n("a",{href:"#"},n("span",{class:"uk-icon","uk-icon":"icon: bell"}))),n("li",null,n("a",{href:"#"},n("span",{class:"uk-icon","uk-icon":"icon: grid"})),n("div",{class:"uk-navbar-dropdown","uk-dropdown":"pos: bottom-right"},n("ul",{class:"uk-nav uk-navbar-dropdown-nav uk-nav-parent-icon","uk-nav":"multiple: true"},n("li",null,n("a",{href:"#"},"Acquia Cloud")),n("li",null,n("a",{href:"#"},"Acquia DAM")),n("li",null,n("a",{href:"#"},"Acquia Journey")),n("li",{class:"uk-parent"},n("a",{href:"#"},"Acquia Lift"),n("ul",{class:"uk-nav-sub"},n("li",null,n("a",{href:"#"},"Sub item")),n("li",null,n("a",{href:"#"},"Sub item")),n("li",null,n("a",{href:"#"},"Sub item")))),n("li",{class:"uk-nav-divider"}),n("li",null,n("a",{href:"https://acquia.com"},"Acquia.com"))))),n("li",null,n("a",{href:"#"},this.userImg?n("img",{class:"aq-nav-user-thumbnail",src:this.userImg,alt:"Profile"}):n("span",{class:"uk-icon","uk-icon":"icon: user"})),n("div",{class:"uk-navbar-dropdown aq-nav-dropdown-profile","uk-dropdown":"pos: bottom-right"},n("div",{class:"uk-grid-small","uk-grid":!0},n("div",{class:"uk-width-auto"},this.userImg?n("img",{class:"aq-nav-user-avatar",src:this.userImg,alt:"Profile"}):n("span",{class:"uk-icon","uk-icon":"icon: user; ratio: 3"})),n("div",{class:"uk-width-expand"},this.userName?n("div",null,this.userName):n("div",null,"Anonymous User"),n("div",null,this.userEmail))),n("ul",{class:"uk-nav uk-navbar-dropdown-nav"},n("li",{class:"uk-nav-header"},"Account"),n("li",null,n("a",{href:"#"},"My Permissions")),n("li",null,n("a",{href:"#"},"Account Settings")),n("li",null,n("a",{href:"#"},"Subscription Info")),n("li",{class:"uk-nav-divider"}),n("li",{class:"uk-nav-header"},"Admin"),n("li",null,n("a",{href:"#"},"Billing Info")),n("li",null,n("a",{href:"#"},"Manage Users")),n("li",{class:"uk-nav-divider"}),n("li",null,n("a",{href:"#"},"Sign Out"))))))))},Object.defineProperty(a,"is",{get:function(){return"aq-nav"},enumerable:!0,configurable:!0}),Object.defineProperty(a,"properties",{get:function(){return{userEmail:{type:String,attr:"user-email"},userImg:{type:String,attr:"user-img"},userName:{type:String,attr:"user-name"}}},enumerable:!0,configurable:!0}),Object.defineProperty(a,"style",{get:function(){return".aq-nav-dropdown-search{min-width:250px!important}.aq-nav-dropdown-profile{min-width:300px!important}.aq-nav-user-thumbnail{max-width:30px;max-height:30px}.aq-nav-user-avatar{max-width:60px;max-height:60px}"},enumerable:!0,configurable:!0}),a}();a.AqNav=l,Object.defineProperty(a,"__esModule",{value:!0})});