/*!
 * Load a JS file asynchronously
 * [c]2014 @scottjehl, Filament Group, Inc.
 * (Based on http://goo.gl/REQGQ by Paul Irish)
 * Licensed MIT
 *
 * @param  {strong}   src Path to script to load
 * @param  {Function} cb  Callback function after download finishes
 * @return {obj}          Script element object
 */

export default function loadJS (src, cb) {
    var ref = window.document.getElementsByTagName( "script" )[ 0 ];
    var script = window.document.createElement( "script" );
    script.src = src;
    script.async = true;
    ref.parentNode.insertBefore( script, ref );
    if (cb && typeof(cb) === "function") {
        script.onload = cb;
    }
    return script;
}
