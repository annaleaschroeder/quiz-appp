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
})({"src/js/utility.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.get = get;
exports.getAll = getAll;

function get(selector) {
  return document.querySelector(selector);
}

function getAll(selector) {
  return document.querySelectorAll(selector);
}
},{}],"src/js/cards.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cardLogic = cardLogic;

var _utility = require("./utility");

function cardLogic() {
  var cardList = (0, _utility.getAll)('.card');
  cardList.forEach(addToggleLogic);

  function addToggleLogic(card) {
    var buttonAnswer = card.querySelector('.card__button--answer');
    var buttonHide = card.querySelector('.card__button--hide-answer');
    var answer = card.querySelector('.answer-text');
    buttonAnswer.addEventListener('click', function () {
      answer.classList.remove('display-none');
      buttonAnswer.classList.add('display-none');
      buttonHide.classList.remove('display-none');
    });
    buttonHide.addEventListener('click', function () {
      buttonHide.classList.add('display-none');
      answer.classList.add('display-none');
      buttonAnswer.classList.remove('display-none');
    });
  }
}
},{"./utility":"src/js/utility.js"}],"src/js/input.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearInput = clearInput;

var _utility = require("./utility");

function clearInput() {
  var form = (0, _utility.get)('form');
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    form.reset();
  });
} //Clear Input Field after clicking on submit button
//reset Form after Clicking on Submit-Button:
//function addInputLogic()
//if (buttonSubmit.addEventListener('click')) {
//inputList.querySelector('input', reset)
//}
//reset form
//function reset() {
//    inputList.value= ''
//}
// !true === false
// !!true === true
// !false === true
// !!false
// if (1234) {
//   45345
// } else {
//   858585
// }
// 1234 ? 45345 : 858585
// if (bookmark.classList.contains('card__bookmark--active')) {
//   bookmark.classList.remove('card__bookmark--active')
// } else {
//   bookmark.classList.add('card__bookmark--active')
// }
// })
//}
},{"./utility":"src/js/utility.js"}],"src/js/bookmarks.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toggleBookmarks = toggleBookmarks;

var _utility = require("./utility");

//Constants for bookmarks on cards
function toggleBookmarks() {
  var bookmarkList = (0, _utility.getAll)('.card__bookmark');
  bookmarkList === null || bookmarkList === void 0 ? void 0 : bookmarkList.forEach(addBookmarkLogic);

  function addBookmarkLogic(bookmark) {
    bookmark === null || bookmark === void 0 ? void 0 : bookmark.addEventListener('click', function (event) {
      event.stopPropagation();
      bookmark.classList.toggle('card__bookmark--active');
    });
  }
}
},{"./utility":"src/js/utility.js"}],"src/js/nav.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initNavigation = initNavigation;

var _utility = require("./utility");

function initNavigation() {
  var navIcons = (0, _utility.getAll)('[data-js="nav-icon"]');
  var pages = (0, _utility.getAll)('[data-js="page"]');
  var headline = (0, _utility.get)('h1');
  navIcons === null || navIcons === void 0 ? void 0 : navIcons.forEach(function (icon) {
    icon === null || icon === void 0 ? void 0 : icon.addEventListener('click', function () {
      var iconName = icon.dataset.name; // display page

      pages.forEach(function (oneOfAllPages) {
        var pageName = oneOfAllPages.dataset.name;
        oneOfAllPages.classList.toggle('display-none', pageName !== iconName);
      }); // const activeIcon = get('.footer__icon--active')
      // activeIcon?.classList.toggle('footer__icon--active')
      // icon.classList.toggle('footer__icon--active')
      // mark icon active

      navIcons.forEach(function (oneOfAllIcons) {
        var oneOfAllIconsName = oneOfAllIcons.dataset.name;
        oneOfAllIcons.classList.toggle('footer__icon--active', oneOfAllIconsName === iconName);
      }); // set headline text

      headline.textContent = iconName;
    });
  });
}
/*
//export function navBar() {
  // constanten, die zum Inhalt (=body) der vier verschiedenen Screens führen
  const pageHome = get('.page-questions')
  const pageBookmarks = get('.page-bookmarks')
  const pageCreate = get('.page-create')
  const pageProfile = get('.page-profile')

  //constanten, die die Eingabe-Buttons in der Navbar repräsentieren
  const homeNav = get('.footer__icon--home')
  const bookmarksNav = get('.footer__icon--bookmarks')
  const createNav = get('.footer__icon--cards')
  const profileNav = get('.footer__icon--profile')

  //Funktion: Bei einem Click auf eins der Icons in der Nav-Bar soll der User zum entsprechenden Screen weiter geleitet werden
  homeNav.addEventListener('click', () => {
    pageHome.classList.remove('display-none')
    pageBookmarks.classList.add('display-none')
    pageCreate.classList.add('display-none')
    pageProfile.classList.add('display-none')
  })

  bookmarksNav.addEventListener('click', () => {
    pageHome.classList.add('display-none')
    pageBookmarks.classList.remove('display-none')
    pageCreate.classList.add('display-none')
    pageProfile.classList.add('display-none')
  })

  createNav.addEventListener('click', () => {
    pageHome.classList.add('display-none')
    pageBookmarks.classList.add('display-none')
    pageCreate.classList.remove('display-none')
    pageProfile.classList.add('display-none')
  })

  profileNav.addEventListener('click', () => {
    pageHome.classList.add('display-none')
    pageBookmarks.classList.add('display-none')
    pageCreate.classList.add('display-none')
    pageProfile.classList.remove('display-none')
  })
}*/
},{"./utility":"src/js/utility.js"}],"src/js/index.js":[function(require,module,exports) {
"use strict";

var _utility = require("./utility");

var _cards = require("./cards");

var _input = require("./input");

var _bookmarks = require("./bookmarks");

var _nav = require("./nav");

document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    (0, _cards.cardLogic)();
    (0, _input.clearInput)();
    (0, _bookmarks.toggleBookmarks)();
    (0, _nav.initNavigation)();
  });
});
},{"./utility":"src/js/utility.js","./cards":"src/js/cards.js","./input":"src/js/input.js","./bookmarks":"src/js/bookmarks.js","./nav":"src/js/nav.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "59961" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/js/index.js"], null)
//# sourceMappingURL=/js.d818e0ef.js.map