/*!
 * loadCSS: load a CSS file asynchronously.
 * [c]2014 @scottjehl, Filament Group, Inc.
 * Licensed MIT
 *
 * @param  {string} href   The URL for the CSS file
 * @param  {object} before Optionally defines the element we'll use as a reference for injecting our <link>
 * @param  {string} media  Media attribute on injected <link>
 * @return {object}        Created <link> element
 */
export default function loadCSS (href, before, media) {
    var ss = window.document.createElement( "link" );
    var ref = before || window.document.getElementsByTagName( "script" )[ 0 ];
    var sheets = window.document.styleSheets;
    ss.rel = "stylesheet";
    ss.href = href;
    // temporarily, set media to something non-matching to ensure it'll fetch without blocking render
    ss.media = "only x";

    // inject link
    ref.parentNode.insertBefore( ss, ref );
    // This function sets the link's media back to `all` so that the stylesheet applies once it loads
    // It is designed to poll until document.styleSheets includes the new sheet.
    ss.onloadcssdefined = function( cb ){
        var defined;
        for( var i = 0; i < sheets.length; i++ ){
            if( sheets[ i ].href && sheets[ i ].href === ss.href ){
                defined = true;
            }
        }
        if( defined ){
            cb();
        } else {
            setTimeout(function() {
                ss.onloadcssdefined( cb );
            });
        }
    };
    ss.onloadcssdefined(function() {
        ss.media = media || "all";
    });
    return ss;
}
