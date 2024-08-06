// ==UserScript==
// @name         Disable DevTools Shortcut
// @description  Disables CTRL-Shift-C shortcut for opening DevTools in Firefox.
// @version 1.0
// @match        *://*/*
// ==/UserScript==

// I am not the original author of this script, I found it on StackOverflow I believe.
// I find it very useful so I am saving here on GitHub.

(function() {
    'use strict';

    document.body.addEventListener('keydown', function(evt) {
        if (evt.ctrlKey && evt.shiftKey && evt.key == "C") {
            // Copy the selection to the clipboard
            document.execCommand('copy');
            // Throw away this event and don't do the default stuff
            evt.stopPropagation();
            evt.preventDefault();
        }
    }, false);

    /* Intercept and check keyup events for Ctrl+Shift+C */
    document.body.addEventListener('keyup', function(evt) {
        if (evt.ctrlKey && evt.shiftKey && evt.key == "C") {
            // Throw away this event and don't do the default stuff
            evt.stopPropagation();
            evt.preventDefault();
        }
    }, false);
    
})();
