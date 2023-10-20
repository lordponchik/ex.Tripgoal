// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"YvtQ":[function(require,module,exports) {

},{"./../image/chevron-down.svg":[["chevron-down.b461b39d.svg","Esc1"],"Esc1"],"./../image/map.svg":[["map.adc9c27f.svg","JgMo"],"JgMo"],"./../image/travel-guideline.jpg":[["travel-guideline.7e02cd10.jpg","f4Ll"],"f4Ll"],"./../image/testimonials/map-world.svg":[["map-world.28bf67ae.svg","FLRK"],"FLRK"],"./../image/contact-us.png":[["contact-us.8f8be44c.png","lKvs"],"lKvs"]}],"XFiP":[function(require,module,exports) {
var documentEl = {
  mobMenuBtn: document.querySelector(".mob-menu"),
  mobMenu: document.querySelector(".mob-nav"),
  mobMenuOpenSVG: document.querySelector(".mob-menu__open"),
  mobMenuCloseSVG: document.querySelector(".mob-menu__close")
};
documentEl.mobMenuBtn.addEventListener("click", function () {
  documentEl.mobMenu.classList.toggle("open");
  documentEl.mobMenuOpenSVG.classList.toggle("visible");
  documentEl.mobMenuCloseSVG.classList.toggle("visible");
  documentEl.mobMenu.classList.contains("open") ? document.body.style.overflow = "hidden" : document.body.style.removeProperty("overflow");
});
window.matchMedia("(min-width: 768px)").addEventListener("change", function (e) {
  if (!e.matches) return;
  if (documentEl.mobMenu.classList.contains("open")) {
    documentEl.mobMenuOpenSVG.classList.toggle("visible");
    documentEl.mobMenuCloseSVG.classList.toggle("visible");
  }
  documentEl.mobMenu.classList.remove("open");
  document.body.style.removeProperty("overflow");
});
},{}],"Focm":[function(require,module,exports) {
"use strict";

require("./scss/index.scss");
require("./scripts/mob-menu.js");
},{"./scss/index.scss":"YvtQ","./scripts/mob-menu.js":"XFiP"}]},{},["Focm"], null)
//# sourceMappingURL=/ex.Tripgoal/src.09314827.js.map