var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

(function (global, factory) {
    (typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : global.Lazytube = factory();
})(this, function () {
    'use strict';

    var getInstanceSettings = function getInstanceSettings(customSettings) {
        var defaultSettings = {
            hintText: "To activate the video, click here",
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            textColor: '#fff'
        };

        return _extends({}, defaultSettings, customSettings);
    };

    /* Creates instance and notifies it through the window element */
    var createInstance = function createInstance(classObj, options) {
        var event;
        var eventString = "Lazytube::Initialized";
        var instance = new classObj(options);
        try {
            // Works in modern browsers
            event = new CustomEvent(eventString, { detail: { instance: instance } });
        } catch (err) {
            // Works in Internet Explorer (all versions)
            event = document.createEvent("CustomEvent");
            event.initCustomEvent(eventString, false, false, { instance: instance });
        }
        window.dispatchEvent(event);
    };

    var runningOnBrowser = typeof window !== "undefined";

    var Lazytube = function Lazytube(customSettings, elements) {
        this._settings = getInstanceSettings(customSettings);
        this.init();
    };


    Lazytube.prototype = {
        init: function() {
            var settings = this._settings;

            var iframes = document.querySelectorAll('.lazytube');
            iframes.forEach(function(iframe){
                var clonedIframe = iframe.cloneNode();
                clonedIframe.style.display = 'none';
                clonedIframe.style.position = 'absolute';
                clonedIframe.style.top = '0';
                clonedIframe.style.left = '0';
                clonedIframe.style.width = '100%';
                clonedIframe.style.height = '100%';
                
                var lazytubeWrapper = document.createElement('div');
                lazytubeWrapper.className = 'lazytube-wrapper';
                lazytubeWrapper.style.position = 'relative';
                lazytubeWrapper.style.width = '100%';
                lazytubeWrapper.style.paddingBottom = '56.25%';
                lazytubeWrapper.style.paddingTop = '0';
                lazytubeWrapper.style.height = '0';
                lazytubeWrapper.style.overflow = 'hidden';
    
                var lazytubePoster = document.createElement('img');
                lazytubePoster.className = 'lazytube-poster';
                lazytubePoster.style.position = 'relative';
                lazytubePoster.style.zIndex = '1';
                lazytubePoster.style.display = 'block';
                lazytubePoster.style.width = '100%';
                lazytubePoster.style.height = 'auto';
                lazytubePoster.setAttribute('src', iframe.getAttribute('data-poster'));
                
                var lazytubeHintWrapper = document.createElement('div');
                lazytubeHintWrapper.className = 'lazytube-hint';
                lazytubeHintWrapper.style.position = 'absolute';
                lazytubeHintWrapper.style.zIndex = '2';
                lazytubeHintWrapper.style.top = '0';
                lazytubeHintWrapper.style.width = '100%';
                lazytubeHintWrapper.style.height = '100%';
                lazytubeHintWrapper.style.textAlign = 'center';
                lazytubeHintWrapper.style.background = settings.backgroundColor;
                lazytubeHintWrapper.style.color = settings.textColor;
                lazytubeHintWrapper.style.cursor = 'pointer';
                lazytubeHintWrapper.addEventListener('click', function() {
                    lazytubeHintWrapper.style.display = 'none';
                    lazytubePoster.style.display = 'none';
                    clonedIframe.style.display = 'block';
                    clonedIframe.setAttribute('src', clonedIframe.getAttribute('data-src'));
                });
    
                var lazytubeHint = document.createElement('span');
                lazytubeHint.innerHTML = settings.hintText
                lazytubeHint.style.display = 'inline-block';
                lazytubeHint.style.padding = '0 10%';
                lazytubeHint.style.margin = '0';
                lazytubeHint.style.position = 'relative';
                lazytubeHint.style.top = '50%';
                lazytubeHint.style.transform = 'translateY(-50%)';
    
                lazytubeHintWrapper.appendChild(lazytubeHint);
    
                lazytubeWrapper.appendChild(lazytubePoster);
                lazytubeWrapper.appendChild(lazytubeHintWrapper);
                lazytubeWrapper.appendChild(clonedIframe);
    
                iframe.parentNode.replaceChild(lazytubeWrapper, iframe);
            });
        }
    };

    return Lazytube;
});
