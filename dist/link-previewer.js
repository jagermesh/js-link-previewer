(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["LinkPreviewer"] = factory();
	else
		root["LinkPreviewer"] = factory();
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	const __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter/value functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			if(Array.isArray(definition)) {
/******/ 				var i = 0;
/******/ 				while(i < definition.length) {
/******/ 					var key = definition[i++];
/******/ 					var binding = definition[i++];
/******/ 					if(!__webpack_require__.o(exports, key)) {
/******/ 						if(binding === 0) {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, value: definition[i++] });
/******/ 						} else {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, get: binding });
/******/ 						}
/******/ 					} else if(binding === 0) { i++; }
/******/ 				}
/******/ 			} else {
/******/ 				for(var key in definition) {
/******/ 					if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 						Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
let __webpack_exports__ = {};
/*!*******************************!*\
  !*** ./src/link-previewer.js ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const COMPONENT_CLASS = 'jm-link-previewer';
const STYLE_CLASS = `${COMPONENT_CLASS}-styles`;

const STYLE_CSS = `
  .${COMPONENT_CLASS}-container {
    position:absolute;
    z-index:10000;
    width:400px;
    min-height:200px;

    border: 1px solid #999;
    border: 1px solid rgba(0,0,0,.2);
    -webkit-border-radius: 6px;
    -moz-border-radius: 6px;
    border-radius: 6px;
    outline: 0;
    -webkit-box-shadow: 0 3px 7px rgba(0,0,0,.2);
    -moz-box-shadow: 0 3px 7px rgba(0,0,0,.2);
    box-shadow: 0 3px 7px rgba(0,0,0,.2);
    -webkit-background-clip: padding-box;
    -moz-background-clip: padding-box;
    background-clip: padding-box;
  }
  .${COMPONENT_CLASS}-image-loading {
    display:flex;
    align-items:center;
    justify-content:center;
    height:200px;
  }
  .${COMPONENT_CLASS}-spinner {
    display:inline-block;
    width:32px;
    height:32px;
    border:3px solid rgba(0,0,0,.15);
    border-top-color:rgba(0,0,0,.55);
    border-radius:50%;
    animation:${COMPONENT_CLASS}-spin .8s linear infinite;
  }
  @keyframes ${COMPONENT_CLASS}-spin {
    to { transform:rotate(360deg); }
  }
  .${COMPONENT_CLASS}-image-content {
    box-sizing: border-box;
    width:100%;
    padding:5px;
  }
  .${COMPONENT_CLASS}-drawing {
  }
  .${COMPONENT_CLASS}-text {
    box-sizing: border-box;
    min-height:190px;
    max-height:300px;
    overflow:hidden;
    padding:10px;
    white-space: pre-wrap;
    overflow-wrap: break-word;
    word-break: break-word;
  }
  .${COMPONENT_CLASS}-html {
    padding:10px;
  }
  .${COMPONENT_CLASS}-video {
    width:100%;
  }
  .${COMPONENT_CLASS}-unknown-format {
    text-align:center;
    color:black;
    padding:10px;
  }
  .${COMPONENT_CLASS}-unknown-format h2 {
    font-size:28px;
    line-height:28px;
    margin-top:34px;
  }
  .${COMPONENT_CLASS}-unknown-format h4 {
    font-size:24px;
    line-height:24px;
    margin-top:20px;
  }
  .${COMPONENT_CLASS}-show {
    transition: opacity 400ms;
    -webkit-transition: opacity 400ms;
    opacity: 1;
  }
  .${COMPONENT_CLASS}-hide {
    transition: opacity 800ms;
    -webkit-transition: opacity 800ms;
    opacity: 0;
  }
`;

const OVERLAY_TEMPLATE = `
  <div class="${COMPONENT_CLASS}-image-loading" style="display:none;">
    <div class="${COMPONENT_CLASS}-spinner"></div>
  </div>
  <img class="${COMPONENT_CLASS}-image-content ${COMPONENT_CLASS}-content" style="display:none;" />
  <div class="${COMPONENT_CLASS}-drawing ${COMPONENT_CLASS}-content" style="display:none;">
    <canvas class="${COMPONENT_CLASS}-drawing-canvas"></canvas>
  </div>
  <pre class="${COMPONENT_CLASS}-text ${COMPONENT_CLASS}-content" style="display:none;"></pre>
  <div class="${COMPONENT_CLASS}-html ${COMPONENT_CLASS}-content" style="display:none;"></div>
  <video class="${COMPONENT_CLASS}-video ${COMPONENT_CLASS}-content" autoplay muted loop style="display:none;"></video>
  <div class="${COMPONENT_CLASS}-unknown-format" style="display:none;">
    <h2>Preview not available</h2>
    <h4>Unfortunately we cannot show preview for this file type</h4>
  </div>
`;

/**
 * LinkPreviewer
 *
 * Lightweight component that shows a preview overlay (image, video, text,
 * pdf or "unknown format") when hovering over links matching a selector.
 *
 * Public API:
 *   const linkPreviewer = new LinkPreviewer();
 *   linkPreviewer.attach(selector, settings);
 */
class LinkPreviewer {
  #cache = {};

  #rendererActive = false;
  #previewerOverlay = null;
  #contentImage = null;
  #contentVideo = null;
  #contentText = null;
  #contentDrawing = null;
  #contentDrawingCanvas = null;
  #contentDrawingContext = null;
  #loadingImage = null;
  #unknownFormat = null;
  #controller = null;
  #signal = null;
  #currentContent = null;
  #currentTop = 0;
  #currentLeft = 0;

  constructor() {
    this.#injectStyles();
  }

  /**
   * Attaches hover-preview behavior to every element matching `selector`.
   *
   * @param {string} [selector='a'] CSS selector to delegate events on.
   * @param {object} [settings] Optional settings: bgColor, fgColor, beautify(overlay, element).
   */
  attach(selector, settings) {
    selector = selector || 'a';

    const params = Object.assign({
      bgColor: 'white',
      fgColor: 'black',
      beautify: function() {
        //
      },
    }, settings);

    this.#delegate('mouseenter', selector, (target, event) => {
      this.#createPreviewRenderer(target, event, params);
    });

    this.#delegate('mousemove', selector, (target, event) => {
      this.#syncPreviewRenderer(event);
    });

    this.#delegate('mouseleave', selector, (target) => {
      this.#destroyPreviewRenderer(target);
    });
  }

  #injectStyles() {
    let stylesContainer = document.head.querySelectorAll(`style.${STYLE_CLASS}`);

    if (stylesContainer.length === 0) {
      stylesContainer = document.createElement('style');
      stylesContainer.className = STYLE_CLASS;
      stylesContainer.textContent = STYLE_CSS;
      document.head.append(stylesContainer);
    }
  }

  #delegate(eventName, selector, handler) {
    document.addEventListener(eventName, function(event) {
      for (let target = event.target; target && target != this; target = target.parentNode) {
        if (target.matches(selector)) {
          handler(target, event);
          break;
        }
      }
    }, true);
  }

  #createPreviewRenderer(element, event, params) {
    if (!element.classList.contains(COMPONENT_CLASS)) {
      element.classList.add(COMPONENT_CLASS);
    }
    if (this.#rendererActive) {
      this.#destroyRenderer();
    }
    this.#startRenderer(element, event, params);
    element.setAttribute(`${COMPONENT_CLASS}-attached`, true);
  }

  #syncPreviewRenderer(event) {
    if (this.#rendererActive) {
      this.#saveMousePos(event);
      this.#reposition();
    }
  }

  #destroyPreviewRenderer(element) {
    if (this.#rendererActive) {
      this.#destroyRenderer();
    }
    if (element) {
      element.removeAttribute(`${COMPONENT_CLASS}-attached`);
    }
  }

  #startRenderer(element, event, params) {
    this.#previewerOverlay = document.createElement('div');
    this.#previewerOverlay.classList.add(`${COMPONENT_CLASS}-container`);
    this.#previewerOverlay.classList.add(`${COMPONENT_CLASS}-hide`);
    this.#previewerOverlay.style.color = params.fgColor;
    this.#previewerOverlay.style.backgroundColor = params.bgColor;
    this.#previewerOverlay.innerHTML = OVERLAY_TEMPLATE;

    params.beautify(this.#previewerOverlay, element);

    document.body.appendChild(this.#previewerOverlay);

    this.#contentImage = this.#previewerOverlay.querySelector(`img.${COMPONENT_CLASS}-image-content`);
    this.#contentImage.onload = () => {
      this.#showContent(this.#contentImage);
    };
    this.#contentImage.onerror = () => {
      this.#findRenderer(this.#contentImage.src, 'unknown');
    };

    this.#contentVideo = this.#previewerOverlay.querySelector(`video.${COMPONENT_CLASS}-video`);
    this.#contentVideo.onloadedmetadata = () => {
      this.#showContent(this.#contentVideo);
    };
    this.#contentVideo.onerror = () => {
      this.#findRenderer(this.#contentVideo.src, 'unknown');
    };

    this.#contentText = this.#previewerOverlay.querySelector(`pre.${COMPONENT_CLASS}-text`);
    this.#contentDrawing = this.#previewerOverlay.querySelector(`div.${COMPONENT_CLASS}-drawing`);
    this.#contentDrawingCanvas = this.#contentDrawing.querySelector(`canvas.${COMPONENT_CLASS}-drawing-canvas`);
    this.#contentDrawingContext = this.#contentDrawingCanvas.getContext('2d');
    this.#loadingImage = this.#previewerOverlay.querySelector(`div.${COMPONENT_CLASS}-image-loading`);
    this.#unknownFormat = this.#previewerOverlay.querySelector(`div.${COMPONENT_CLASS}-unknown-format`);

    this.#controller = new AbortController();
    this.#signal = this.#controller.signal;

    this.#currentContent = this.#loadingImage;

    this.#rendererActive = true;

    this.#saveMousePos(event);
    this.#reposition();
    this.#previewerOverlay.classList.add(`${COMPONENT_CLASS}-show`);
    this.#previewerOverlay.classList.remove(`${COMPONENT_CLASS}-hide`);
    this.#loadingImage.style.display = '';

    this.#identify(element.getAttribute('href'));
  }

  #destroyRenderer() {
    this.#controller.abort();
    this.#previewerOverlay.remove();
    this.#rendererActive = false;
  }

  #showContent(newContent) {
    this.#currentContent = newContent;
    this.#reposition();
    this.#currentContent.style.display = '';
    this.#loadingImage.style.display = 'none';
  }

  #renderImage(url) {
    this.#contentImage.src = url;
  }

  #renderVideo(url) {
    this.#contentVideo.src = url;
  }

  #renderText(url) {
    fetch(url, {
      signal: this.#signal,
    }).then((response) => {
      if (response.ok) {
        response.text().then((text) => {
          this.#contentText.innerText = text;
          this.#showContent(this.#contentText);
        }).catch(() => {
          this.#findRenderer(url, 'unknown');
        });
      } else {
        this.#findRenderer(url, 'unknown');
      }
    }).catch((error) => {
      this.#findRenderer(url, 'unknown', error);
    });
    window.setTimeout(() => {
      this.#controller.abort();
    }, 10000);
  }

  #renderPdf(url) {
    window.pdfjsLib.getDocument(url).promise.then((pdfObj) => {
      if (pdfObj.numPages > 0) {
        const pdfTotalPages = 1;
        for (let pdfCurPage = 1; pdfCurPage <= pdfTotalPages; pdfCurPage++) {
          pdfObj.getPage(pdfCurPage).then((page) => {
            const desiredWidth = parseFloat(getComputedStyle(this.#previewerOverlay, null).width.replace('px', '')) - 2;
            const viewport = page.getViewport({
              scale: 1,
            });
            const scale = desiredWidth / viewport.width;
            const scaledViewport = page.getViewport({
              scale: scale,
            });
            this.#contentDrawingCanvas.width = scaledViewport.width;
            this.#contentDrawingCanvas.height = scaledViewport.height;
            const renderContext = {
              canvasContext: this.#contentDrawingContext,
              viewport: scaledViewport,
            };
            page.render(renderContext);
            this.#showContent(this.#contentDrawing);
          });
        }
      } else {
        this.#findRenderer(url, 'unknown');
      }
    }).catch(() => {
      this.#findRenderer(url, 'unknown');
    });
  }

  #findRenderer(url, contentType, error) {
    if (error) {
      if (error.name != 'AbortError') {
        this.#cache[url] = {
          url: url,
          contentType: contentType,
        };
      }
    }
    if (contentType.indexOf('image/') != -1) {
      this.#renderImage(url);
    } else if (contentType.indexOf('video/') != -1) {
      this.#renderVideo(url);
    } else if (
      (contentType.indexOf('application/pdf') != -1) &&
      window.pdfjsLib
    ) {
      this.#renderPdf(url);
    } else if (
      (contentType.indexOf('text/xml') != -1) ||
      (contentType.indexOf('text/csv') != -1) ||
      (contentType.indexOf('text/plain') != -1)
    ) {
      this.#renderText(url);
    } else {
      this.#showContent(this.#unknownFormat);
    }
  }

  #identify(url) {
    const cachedResult = this.#cache[url];

    if (cachedResult) {
      this.#findRenderer(url, cachedResult.contentType);
    } else {
      fetch(url, {
        signal: this.#signal,
        method: 'HEAD',
      }).then((response) => {
        if (response.ok) {
          this.#findRenderer(url, response.headers.get('content-type'));
        } else {
          this.#findRenderer(url, 'unknown');
        }
      }).catch((error) => {
        if (error.name == 'AbortError') {
          this.#findRenderer(url, 'unknown', error);
        } else {
          // The HEAD probe itself failed to complete (a common case: many
          // image CDNs — picsum.photos included — don't send CORS headers
          // on HEAD requests, even though the same URL renders fine in a
          // plain <img>, which never needs CORS). Rather than giving up on
          // the whole preview, just try rendering it as an image directly;
          // its own onload/onerror handlers (wired in #startRenderer) will
          // fall back to the "unknown format" view if it really isn't one.
          this.#renderImage(url);
        }
      });
      window.setTimeout(() => {
        this.#controller.abort();
      }, 5000);
    }
  }

  #saveMousePos(event) {
    const pageX = event.pageX || event.touches[0].pageX;
    const pageY = event.pageY || event.touches[0].pageY;
    this.#currentLeft = pageX;
    this.#currentTop = pageY;
  }

  #reposition() {
    const documentHeight = parseFloat(getComputedStyle(document.body, null).height.replace('px', ''));
    const documentWidth = parseFloat(getComputedStyle(document.body, null).width.replace('px', ''));
    const contentHeight = this.#previewerOverlay.offsetHeight;
    const contentWidth = this.#previewerOverlay.offsetWidth;
    let deltaTop = 0;
    let deltaLeft = 0;

    if (this.#currentLeft + contentWidth > documentWidth) {
      deltaLeft = contentWidth;
    }
    if (this.#currentTop + contentHeight > documentHeight) {
      deltaTop = contentHeight;
    }

    const newPosition = {
      left: this.#currentLeft - deltaLeft + (deltaLeft > 0 ? -10 : 10),
      top: this.#currentTop - deltaTop + (deltaTop > 0 ? -10 : 10),
    };

    const windowHeight = window.innerHeight;
    const windowScrollTop = window.scrollY;
    const relativeTop = newPosition.top - windowScrollTop;

    if (relativeTop + contentHeight > windowHeight) {
      newPosition.top = newPosition.top - ((relativeTop + contentHeight) - windowHeight) - 10;
    } else if (newPosition.top < windowScrollTop) {
      newPosition.top = windowScrollTop + 10;
    }

    this.#previewerOverlay.style.left = `${newPosition.left}px`;
    this.#previewerOverlay.style.top = `${newPosition.top}px`;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LinkPreviewer);

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=link-previewer.js.map