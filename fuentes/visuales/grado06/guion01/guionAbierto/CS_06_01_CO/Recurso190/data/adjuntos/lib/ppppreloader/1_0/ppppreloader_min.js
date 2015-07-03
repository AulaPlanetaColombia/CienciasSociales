/**
pppSPINNER.JS - Icono de cargando con todo lo que ello supone.
Se maneja todo desde CSS's.
Basado en: http://stackoverflow.com/questions/1964839/jquery-please-wait-loading-animation
*/

var pppSpinner = pppSpinner || {

  // Configuración básica
  spinner: "data:image/gif;base64,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",
  message: "Cargando...",
  structure: "<div class='pppSpinner_modal'><table style='width: 100%; height: 100%'><tr style='vertical-align: middle;'><td style='text-align:center;'><img src='%SPINNERDATA%'><br/><b>%SPINNERMESSAGE%</b></td></tr></table></div>",
  css: ".pppSpinner_modal { display:none; position:fixed; z-index:1000; top:0;left:0; height:100%; width:100%; background: rgba( 255, 255, 255, .8 );}\n\
        body.pppSpinnerLoading { overflow: hidden; }\n\
        body.pppSpinnerLoading .pppSpinner_modal { display: block; }",

  // Variables internas
  showCount: 0,
  initialized: false,
  pendingSpinner: false,

  init: function() {
    if (pppSpinner.initialized == false) {
      
      pppSpinner.showCount = 0;
      pppSpinner.pendingSpinner = false;

      // Si podemos, añadimos ya al DOM lo necesario
      if (pppSpinner.documentReadyForSpinner()) {
        pppSpinner.addSpinnerToDOM();
      } else { // Si no, nos apuntamos añadirlo cuando podamos
        pppSpinner.pendingSpinner = true;
        document.addEventListener("DOMContentLoaded", function(event) {
          pppSpinner.setPendingSpinner();
        });
      }
      pppSpinner.initialized = true;
    }
  },

  documentReadyForSpinner: function() {
    var bodies = document.getElementsByTagName("body");
    if (bodies != null && bodies.length > 0)
      return true;
    else
      return false;
  },

  addSpinnerToDOM: function() {
    var body = document.getElementsByTagName("body")[0];
    var head  = document.getElementsByTagName("head")[0];
    // Añadimos los estilos CSS que podemos necesitar
    var style = document.createElement("style");
    style.type = "text/css";
    if (style.styleSheet) {
      style.styleSheet.cssText = pppSpinner.css;
    } else {
      style.appendChild(document.createTextNode(pppSpinner.css));
    }
    head.appendChild(style);

    // Añadimos el contenido
    var content = pppSpinner.structure.replace("%SPINNERDATA%", pppSpinner.spinner);
    content = content.replace("%SPINNERMESSAGE%", pppSpinner.message)
    var wrapper = document.createElement('div');
    wrapper.innerHTML= content;
    var contentDiv = wrapper.firstChild;
    body.appendChild(contentDiv);
  },

  setPendingSpinner: function() {
    pppSpinner.pendingSpinner = false;
    // Montamos el spinner
    pppSpinner.addSpinnerToDOM();
    // Procedemos a mostarlo si ya se ha hecho un show
    if (pppSpinner.showCount > 0) {
      var body = document.getElementsByTagName("body")[0];
      body.className += " pppSpinnerLoading";
    }
  },

  show: function () {
    if (pppSpinner.showCount == 0 && pppSpinner.documentReadyForSpinner()) {
      var body = document.getElementsByTagName("body")[0];
      body.className += " pppSpinnerLoading";
    }
    pppSpinner.showCount++;
  },

  hide: function () {
    pppSpinner.showCount--;
    if (pppSpinner.showCount == 0) {
      var body = document.getElementsByTagName("body")[0];
      body.className = body.className.replace(/(?:^|\s)pppSpinnerLoading(?!\S)/g , '');
    }
  }

};


/*jslint browser: true, eqeqeq: true, bitwise: true, newcap: true, immed: true, regexp: false */

/**
LazyLoad makes it easy and painless to lazily load one or more external
JavaScript or CSS files on demand either during or after the rendering of a web
page.

Supported browsers include Firefox 2+, IE6+, Safari 3+ (including Mobile
Safari), Google Chrome, and Opera 9+. Other browsers may or may not work and
are not officially supported.

Visit https://github.com/rgrove/lazyload/ for more info.

Copyright (c) 2011 Ryan Grove <ryan@wonko.com>
All rights reserved.

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the 'Software'), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

@module lazyload
@class LazyLoad
@static
*/

/*--------------------------------------------------------------
SINERGIA: Añadido control de errores básico. NOTA: en FF, las CSS
no notifican errores...
--------------------------------------------------------------*/

LazyLoad = (function (doc) {
  // -- Private Variables ------------------------------------------------------

  // User agent and feature test information.
  var env,

  // Reference to the <head> element (populated lazily).
  head,

  // Requests currently in progress, if any.
  pending = {},

  // Number of times we've polled to check whether a pending stylesheet has
  // finished loading. If this gets too high, we're probably stalled.
  pollCount = 0,

  // Queued requests.
  queue = {css: [], js: []},

  // Reference to the browser's list of stylesheets.
  styleSheets = doc.styleSheets;

  // -- Private Methods --------------------------------------------------------

  /**
  Creates and returns an HTML element with the specified name and attributes.

  @method createNode
  @param {String} name element name
  @param {Object} attrs name/value mapping of element attributes
  @return {HTMLElement}
  @private
  */
  function createNode(name, attrs) {
    var node = doc.createElement(name), attr;

    for (attr in attrs) {
      if (attrs.hasOwnProperty(attr)) {
        node.setAttribute(attr, attrs[attr]);
      }
    }

    return node;
  }

  /**
  Called when the current pending resource of the specified type has finished
  loading. Executes the associated callback (if any) and loads the next
  resource in the queue.

  @method finish
  @param {String} type resource type ('css' or 'js')
  @private
  */
  function finish(type, urlError) {
    var p = pending[type],
        callback,
        urls;

    if (p) {
      callback = p.callback;
      urls     = p.urls;

      urls.shift();
      pollCount = 0;

      //alert(urlError);
      // if urlError
      if (urlError)
        p.errors.push(urlError);

      // If this is the last of the pending URLs, execute the callback and
      // start the next request in the queue (if any).
      if (!urls.length) {
        callback && callback.call(p.context, p.obj, p.errors);
        pending[type] = null;
        queue[type].length && load(type);
      }
    }
  }

  /**
  Populates the <code>env</code> variable with user agent and feature test
  information.

  @method getEnv
  @private
  */
  function getEnv() {
    var ua = navigator.userAgent;

    env = {
      // True if this browser supports disabling async mode on dynamically
      // created script nodes. See
      // http://wiki.whatwg.org/wiki/Dynamic_Script_Execution_Order
      async: doc.createElement('script').async === true
    };

    (env.webkit = /AppleWebKit\//.test(ua))
      || (env.ie = /MSIE|Trident/.test(ua))
      || (env.opera = /Opera/.test(ua))
      || (env.gecko = /Gecko\//.test(ua))
      || (env.unknown = true);
  }

  /**
  Loads the specified resources, or the next resource of the specified type
  in the queue if no resources are specified. If a resource of the specified
  type is already being loaded, the new request will be queued until the
  first request has been finished.

  When an array of resource URLs is specified, those URLs will be loaded in
  parallel if it is possible to do so while preserving execution order. All
  browsers support parallel loading of CSS, but only Firefox and Opera
  support parallel loading of scripts. In other browsers, scripts will be
  queued and loaded one at a time to ensure correct execution order.

  @method load
  @param {String} type resource type ('css' or 'js')
  @param {String|Array} urls (optional) URL or array of URLs to load
  @param {Function} callback (optional) callback function to execute when the
    resource is loaded
  @param {Object} obj (optional) object to pass to the callback function
  @param {Object} context (optional) if provided, the callback function will
    be executed in this object's context
  @private
  */
  function load(type, urls, callback, obj, context) {
    var _finish = function () { finish(type); },
        isCSS   = type === 'css',
        nodes   = [],
        i, len, node, p, pendingUrls, url;

    env || getEnv();

    if (urls) {
      // If urls is a string, wrap it in an array. Otherwise assume it's an
      // array and create a copy of it so modifications won't be made to the
      // original.
      urls = typeof urls === 'string' ? [urls] : urls.concat();

      // Create a request object for each URL. If multiple URLs are specified,
      // the callback will only be executed after all URLs have been loaded.
      //
      // Sadly, Firefox and Opera are the only browsers capable of loading
      // scripts in parallel while preserving execution order. In all other
      // browsers, scripts must be loaded sequentially.
      //
      // All browsers respect CSS specificity based on the order of the link
      // elements in the DOM, regardless of the order in which the stylesheets
      // are actually downloaded.
      if (isCSS || env.async || env.gecko || env.opera) {
        // Load in parallel.
        queue[type].push({
          urls    : urls,
          callback: callback,
          obj     : obj,
          context : context,
          errors: [] // Añado array vacío para los errores
        });
      } else {
        // Load sequentially.
        var errors = []; // Creo una única instancia de Errors para todos ellos
        for (i = 0, len = urls.length; i < len; ++i) {
          queue[type].push({
            urls    : [urls[i]],
            callback: i === len - 1 ? callback : null, // callback is only added to the last URL
            obj     : obj,
            context : context,
            errors: errors
          });
        }
      }
    }

    // If a previous load request of this type is currently in progress, we'll
    // wait our turn. Otherwise, grab the next item in the queue.
    if (pending[type] || !(p = pending[type] = queue[type].shift())) {
      return;
    }

    head || (head = doc.head || doc.getElementsByTagName('head')[0]);
    pendingUrls = p.urls.concat();

    for (i = 0, len = pendingUrls.length; i < len; ++i) {
      url = pendingUrls[i];

      if (isCSS) {
          node = env.gecko ? createNode('style') : createNode('link', {
            href: url,
            rel : 'stylesheet'
          });
      } else {
        node = createNode('script', {src: url});
        node.async = false;
      }

      node.className = 'lazyload';
      node.setAttribute('charset', 'utf-8');

      if (env.ie && !isCSS && 'onreadystatechange' in node && !('draggable' in node)) {
        node.onreadystatechange = function () {
          if (/loaded|complete/.test(node.readyState)) {
            node.onreadystatechange = null;
            _finish();
          }
        };
      } else if (isCSS && (env.gecko || env.webkit)) {
        // Gecko and WebKit don't support the onload event on link nodes.
        if (env.webkit) {
          // In WebKit, we can poll for changes to document.styleSheets to
          // figure out when stylesheets have loaded.
          p.urls[i] = node.href; // resolve relative URLs (or polling won't work)
          pollWebKit(url);
        } else {
          // In Gecko, we can import the requested URL into a <style> node and
          // poll for the existence of node.sheet.cssRules. Props to Zach
          // Leatherman for calling my attention to this technique.
          node.innerHTML = '@import "' + url + '";';
          pollGecko(node, url);
        }
      } else {
        node.onload = _finish;
        node.onerror = function () { finish(type, this.src) };
      }

      nodes.push(node);
    }

    for (i = 0, len = nodes.length; i < len; ++i) {
      head.appendChild(nodes[i]);
    }
  }

  /**
  Begins polling to determine when the specified stylesheet has finished loading
  in Gecko. Polling stops when all pending stylesheets have loaded or after 10
  seconds (to prevent stalls).

  Thanks to Zach Leatherman for calling my attention to the @import-based
  cross-domain technique used here, and to Oleg Slobodskoi for an earlier
  same-domain implementation. See Zach's blog for more details:
  http://www.zachleat.com/web/2010/07/29/load-css-dynamically/

  @method pollGecko
  @param {HTMLElement} node Style node to poll.
  @private
  */
  function pollGecko(node, url) {
    var hasRules;

    try {
      // We don't really need to store this value or ever refer to it again, but
      // if we don't store it, Closure Compiler assumes the code is useless and
      // removes it.
      hasRules = !!node.sheet.cssRules;
    } catch (ex) {
      // An exception means the stylesheet is still loading.
      pollCount += 1;

      if (pollCount < 200) {
        setTimeout(function () { pollGecko(node, url); }, 50);
      } else {
        // We've been polling for 10 seconds and nothing's happened. Stop
        // polling and finish the pending requests to avoid blocking further
        // requests.
        hasRules && finish('css', url); // ERROR!!!
      }

      return;
    }

    // If we get here, the stylesheet has loaded.
    finish('css');
  }

  /**
  Begins polling to determine when pending stylesheets have finished loading
  in WebKit. Polling stops when all pending stylesheets have loaded or after 10
  seconds (to prevent stalls).

  @method pollWebKit
  @private
  */
  function pollWebKit(url) {
    var css = pending.css, i;

    if (css) {
      i = styleSheets.length;

      // Look for a stylesheet matching the pending URL.
      while (--i >= 0) {
        if (styleSheets[i].href === css.urls[0]) {
          finish('css');
          break;
        }
      }

      pollCount += 1;

      if (css) {
        if (pollCount < 200) {
          setTimeout(function () { pollWebKit(url); }, 50);
        } else {
          // We've been polling for 10 seconds and nothing's happened, which may
          // indicate that the stylesheet has been removed from the document
          // before it had a chance to load. Stop polling and finish the pending
          // request to prevent blocking further requests.
          finish('css', url); // ERROR
        }
      }
    }
  }

  return {

    /**
    Requests the specified CSS URL or URLs and executes the specified
    callback (if any) when they have finished loading. If an array of URLs is
    specified, the stylesheets will be loaded in parallel and the callback
    will be executed after all stylesheets have finished loading.

    @method css
    @param {String|Array} urls CSS URL or array of CSS URLs to load
    @param {Function} callback (optional) callback function to execute when
      the specified stylesheets are loaded
    @param {Object} obj (optional) object to pass to the callback function
    @param {Object} context (optional) if provided, the callback function
      will be executed in this object's context
    @static
    */
    css: function (urls, callback, obj, context) {
      load('css', urls, callback, obj, context);
    },

    /**
    Requests the specified JavaScript URL or URLs and executes the specified
    callback (if any) when they have finished loading. If an array of URLs is
    specified and the browser supports it, the scripts will be loaded in
    parallel and the callback will be executed after all scripts have
    finished loading.

    Currently, only Firefox and Opera support parallel loading of scripts while
    preserving execution order. In other browsers, scripts will be
    queued and loaded one at a time to ensure correct execution order.

    @method js
    @param {String|Array} urls JS URL or array of JS URLs to load
    @param {Function} callback (optional) callback function to execute when
      the specified scripts are loaded
    @param {Object} obj (optional) object to pass to the callback function
    @param {Object} context (optional) if provided, the callback function
      will be executed in this object's context
    @static
    */
    js: function (urls, callback, obj, context) {
      load('js', urls, callback, obj, context);
    }

  };
})(this.document);
////////////////////////////////////////////////
// RUTINAS PARA OBTENER UN PARÁMETRO DE LA URL
////////////////////////////////////////////////
//**********************************************************
// Rutinas para el tratamiento de cadenas en el formato URL
//**********************************************************
function queryStringDecode(encodedString) {
	return decodeURIComponent(encodedString.replace(/\+/g,' '));
}

// OBTENER PARAMETROS A PARTIR DE UN PREFIJO
function getWindowQueryParams(win, prefix, finalParams, overwrite) {
	try {
		var currURL = win.location.href;
		var paramsPos = currURL.indexOf("?",0);
		if (paramsPos > 0) {
			var paramsStr = currURL.substr(paramsPos+1);
			var paramsArray = paramsStr.split("&");
			for (var i=0;i<paramsArray.length;i++) {
				if (paramsArray[i].indexOf(prefix, 0) == 0) {
					var paramParts = paramsArray[i].split("=");
					var paramName = paramParts[0].substr(prefix.length);
					if (finalParams.hasOwnProperty(paramName) == false || overwrite)
						finalParams[paramName] = queryStringDecode(paramParts[1]);
				}
			}
		}
	} catch (error) {
		// Error de cross domain... no hacemos nada
	}
}

function getRecursiveQueryParams(prefix, finalParams, overwrite) {
	try {
		var w = window; // window es variable/objecte local
		while (w != null) {
			getWindowQueryParams(w, prefix, finalParams, overwrite);
			// A vegades en comptes de retornar NULL retorna la
			// mateixa finestra com a parent (una finestra és
			// "parent" de sí mateixa...
			if (w == w.parent)
				break;
			else // Si en canvi no sóc el meu pare, vol dir que haig de "pujar" en la jerarquia
				w = w.parent;
		}
	} catch (error) {
		// Error de cross domain... no hacemos nada
	}
}

//////////////////////////////////////////////////////
//  Fin Rutinas para obetener un parámetro de la URL
//////////////////////////////////////////////////////
/**
PRELOADER.JS - Sistema de carga basado en manifiesto que usa CDNs
Utiliza LazyLoad para cargar JS y CSS y spinnerPlugin para la pantalla de cargando

El formato del manifiesto:

pppPreloaderManifest =  {
  blocks: [
    { type: "css", files:  [  { from: "CND", file:"mat/one.css"} ,
                              { from: "CND", file:"mat/two.css"},
                              { from: "CND", file:"mat/three.css"} ], },
    { type: "js", files:  [   { from: "CND", file:"mat/two.js"},
                              { from: "CND", file:"mat/three.js"},
                              { from: "CND", file:"mat/one.js"} ], },
  ],
  spinner: "auto",
  onEndLoading: function(manifest) {}
};

Los de tipo "manifest" son manifiestos adicionales. Por ejemplo, un motor
puede indicar la descarga de un manifiesto externo con el listado de bloques
de los que depende el ejercicio. 

PARA CROSS DOMAIN (CORS), VER:
http://www.comolohago.cl/como-habilitar-cors-en-apache-yo-php/

*/

var pppPreloader = pppPreloader || {

  // CONFIGURACION
  // Aliases
  aliases: { },
  // Origenes (CDN, MOTOR, ETC)
  origins: { }, 
	// remotePaths (En caso de origenes remotos, indica el path parcial del origen)
	remotePaths: { },
  // localPaths (En caso de origenes locales, indica el path parcial del origen)
  localPaths: { },
	
  // VARIABLES INTERNAS
  // Manifiestos en proceso
  manifests: [],
  // información de si el documento ya está listo (por defecto, como esté)
  documentReady: false,
  documentReadyPendingManifests: [], // Array de manifiestos pendientes de documentReady


  // FUNCIONES
  init: function (config) {

    if (config) {
      for (var attrname in config) {
        this[attrname] = config[attrname];
      }
    }
  	
  	getRecursiveQueryParams("_preload_", this.origins, false);

    // Inicializamos el spinner por si acaso no lo estaba
    pppSpinner.init();

    // Inicializamos el ready
    var refThis = this;
    this.documentReady = (document.readyState == 'complete');
    if (this.documentReady == false) {
      // Añadimos el evento para estar pendientes
      document.addEventListener("DOMContentLoaded", function(event) {
        // Nos apuntamos que ya estamos listos
        refThis.documentReady = true;
        if (refThis.manifests.length > 0) {
          // Nos hacemos una copia del array, porque una vez acabado, se elimina de los manifiestos
          var temp = refThis.manifests.slice();
          for (var i=0;i<temp.length;i++) {
            refThis.checkManifestDownloaded(temp[i]);
          }
        }
      });
    }
  },

  // Permite la carga a partir de un manifiesto
  loadManifest: function (manifest) {
    // Creamos un duplicado del manifiesto (cuidado con los callbacks, que hay que copiarlos a mano!!!)
    newManifest = JSON.parse(JSON.stringify(manifest));
    if (manifest.hasOwnProperty("onEndLoading"))
      newManifest.onEndLoading = manifest.onEndLoading;
    // Nos guardamos el manifiesto
    this.manifests.push(newManifest);
    this.launchManifest(newManifest);
  },

  // Permite obtener un path de descarga completo
  from: function (source, url) {
      // Miramos los alias
      var realSource = source;
      if (this.aliases.hasOwnProperty(source)) {
        realSource = this.aliases[source];
      }
      // Miramos ahora el resto...
      if (this.origins.hasOwnProperty(realSource)) {
      	if (this.remotePaths.hasOwnProperty(source)) {
      		return this.origins[realSource] + this.remotePaths[source] + url;
      	} else {
      		return this.origins[realSource] + url;
      	}
      } else { // "local", "absolute" o simplemente desconocido
        if (this.localPaths.hasOwnProperty(source)) {
          return this.localPaths[source] + url;
        } else {
          return url;
        }
      }
  },

  // Muestra el spinner
  startSpinner: function () {
    pppSpinner.show();
  },

  // Para el spinner
  stopSpinner: function () {
    pppSpinner.hide();
  },

  logErrors: function (mf) {
    if (mf.errors && mf.errors.length > 0) {
      var msg = "ERROR pppPreloader: \n";
        for (var i = 0; i < mf.errors.length; i++) {
          msg += "  - " + mf.errors[i].type + ": " + mf.errors[i].file + " [" + mf.errors[i].url + "]\n";
        }
      return msg;
    }
    return "";
  },

  // Funciones privadas
  launchManifest: function (manifest) {
    // Añadimos el array de errores al manifiesto (o lo machacamos si ya estaba)
    manifest.errors = [];
    // Añadimos referencia a los elementos identificados (con id)
    manifest.ids = [];
    // Miramos de poner el spinner
    if (manifest.hasOwnProperty("spinner") && manifest.spinner == "auto") {
      this.startSpinner();
    }
    // Miramos bloque a bloque lo que es
    for (var i=0;i<manifest.blocks.length;i++) {
      var block = manifest.blocks[i];
      // Cambio el block por su versión filtrada
      manifest.blocks[i] = this.filterBlock(block);
      // Lanzo la descarga del block
      this.launchBlock(manifest, i, manifest.blocks[i]);
    }
  },

  checkIfFile: function (item) {
    // Por ahora sólo soportamos el caso IE9
    function isIE () {
      var myNav = navigator.userAgent.toLowerCase();
      return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
    }
    function isChrome() {
      return !!window.chrome;
    }
    var res = true;
    // Codigo
    if (item.hasOwnProperty("onlyif")) {
      // Detección de Internet explorer + version
      if (item["onlyif"].indexOf("IE") == 0) {
        if (item["onlyif"] == "IE") {
          if (isIE() == false)
            return false;
        } else {
          var version = parseInt(item["onlyif"].substr(3));
          if (isIE() != version)
            return false;
        }
      } else if (item["onlyif"] == "Chrome") {
        if (isChrome() == false)
          return false;
      } else if (item["onlyif"] == "!Chrome") {
        if (isChrome())
          return false;
      }
    }
    return res;
  },

  filterBlock: function (block) {
    var newBlock = { type: block.type, files: new Array() }
    // Componemos el bloque filtrado por las condiciones
    for (i=0;i<block.files.length;i++) {
      if (this.checkIfFile(block.files[i]))
        newBlock.files.push(block.files[i]);
    }
    return newBlock;
  },

  launchBlock: function (manifest, index, block) {
    var i;
    var files = [];
    var refThis = this;
    var downloaded;
    // Ponemos los archivos con el path definitivo
    for (i=0;i<block.files.length;i++) {
   	  files.push(this.from(block.files[i].from, block.files[i].file));
    }
    // Procedemos a descargar los archivos
    switch (block.type) {
      case "css":
        LazyLoad.css(files, function(obj, errors) {
          if (errors.length > 0) {
            for (var i=0;i<errors.length;i++) {
              refThis.addError(manifest, block, block.files[files.indexOf(errors[i])].file, errors[i], "NOT_FOUND");
            }
          }
          block["downloaded"] = true; 
          refThis.checkManifestDownloaded(manifest); 
        });
        break;
      case "js":
        LazyLoad.js(files, function(obj, errors) {
          if (errors.length > 0) {
            for (var i=0;i<errors.length;i++) {
              refThis.addError(manifest, block, block.files[files.indexOf(errors[i])].file, errors[i], "NOT_FOUND");
            }
          }
          block["downloaded"] = true; refThis.checkManifestDownloaded(manifest);
        });
        break;
      case "manifest":
        for (i=0;i<files.length;i++) {
          this.downloadManifest(manifest, index, block, files[i], i);
        }
        break;
      case "xml":
        for (i=0;i<files.length;i++) {
          this.downloadAJAX("XML", manifest, index, block, files[i], i);
        }
        break;
      case "json":
        for (i=0;i<files.length;i++) {
          this.downloadAJAX("JSON", manifest, index, block, files[i], i);
        }
        break;
      case "img":
        for (i=0;i<files.length;i++) {
          this.downloadImage(manifest, index, block, files[i], i);
        }
        break;
      case "audio":
        /* MIRAR DE CREAR TAGS DE SONIDO CON Ids */
        break;
    }
  },

  downloadManifest: function(manifest, index, block, url, fileIndex) {
    var refThis = this;
    this.getAJAX("JSON", url, function (data) {
      // Añadimos el nuevo manifest al actual
      // Lanzamos la búsqueda bloque a bloque del nuevo manifiesto
      // Miramos bloque a bloque lo que es
      for (var i=0;i<data.blocks.length;i++) {
        var loadedBlock = data.blocks[i];
        var newBlock = refThis.filterBlock(loadedBlock);
        var newIdx = manifest.blocks.push(newBlock);
        refThis.launchBlock(manifest, newIdx, newBlock);
      }
      block["downloaded"] = true;
    }, function (status) {
      // Error... damos el manifiesto por perdido, y seguimos
      block["downloaded"] = true;
      var errorType = "CROSS_DOMAIN/LOCALFILE_NOT_ALLOWED";
      if (status > 0)
        errorType = "NOT_FOUND";
      refThis.addError(manifest, block, block.files[fileIndex].file, url, errorType);
      refThis.checkManifestDownloaded(manifest);
    });
  },

  downloadAJAX: function (type, manifest, index, block, url, fileIndex) {
    var refThis = this;
    if (!block.files[fileIndex].hasOwnProperty("id")) {
      this.addError(manifest, block, block.files[fileIndex].file, url, "ID_REQUIRED")
      this.endFileDownload(manifest, block, fileIndex);
      return;
    }
    this.getAJAX(type, url, function (data) {
      manifest.ids[block.files[fileIndex].id] = data;
      refThis.endFileDownload(manifest, block, fileIndex);
    }, function (status) {
      var errorType = "CROSS_DOMAIN/LOCALFILE_NOT_ALLOWED";
      if (status > 0)
        errorType = "NOT_FOUND";
      refThis.addError(manifest, block, block.files[fileIndex].file, url, "NOT_FOUND");
      refThis.endFileDownload(manifest, block, fileIndex);
    });
  },

  downloadImage: function (manifest, index, block, url, fileIndex) {
    var refThis = this;
    var img = new Image();
    img.onload = function () {
      if (block.files[fileIndex].hasOwnProperty("id"))
        manifest.ids[block.files[fileIndex].id] = img;
      refThis.endFileDownload(manifest, block, fileIndex);
      img.onload = null;
      img.onerror = null;
    }
    img.onerror = function () {
      refThis.addError(manifest, block, block.files[fileIndex].file, url, "NOT_FOUND");
      refThis.endFileDownload(manifest, block, fileIndex);
      img.onload = null;
      img.onerror = null;
    }
    img.src = url;
    if (img.complete || img.naturalHeight > 0) {
      if (block.files[fileIndex].hasOwnProperty("id"))
        manifest.ids[block.files[fileIndex].id] = img;
      this.endFileDownload(manifest, block, fileIndex);
      img.onload = null;
      img.onerror = null;
    }
  },

  endFileDownload: function (manifest, block, fileIndex) {
    // Marco el archivo como downloaded
    block.files[fileIndex]["downloaded"] = true;
    // Miro si todo el bloque ya ha sido descargado
    if (this.checkBlockDownloaded(block)) {
      // Marco el bloque completo como descargado
      block["downloaded"] = true;
      // Miro si ya está el manifiesto descargado, cosa que lanza el evento onEndLoaded
      this.checkManifestDownloaded(manifest);
    }
  },

  addError: function (manifest, block, file, url, type) {
    // Evitamos duplicados
    for (var i=0;i<manifest.errors.length;i++) {
      if (manifest.errors[i].url == url)
        return;
    }
    manifest.errors.push({ block: block, file: file, url: url, type: type});
  },

  checkBlockDownloaded: function (block) {
    for (var i=0;i<block.files.length;i++) {
      if (!block.files[i].hasOwnProperty("downloaded") || block.files[i]["downloaded"] != true)
        return false;
    }
    return true;
  },

  checkManifestDownloaded: function (manifest) {
    var downloaded = true;
    for (var i=0;i<manifest.blocks.length;i++) {
      var block = manifest.blocks[i];
      if (!block.hasOwnProperty("downloaded") || block["downloaded"] != true) {
        downloaded = false;
        break;
      }
    }
    if (downloaded) {
      // Revisamos el tema de documentReady y lo ponemos por si acaso...
      if (this.documentReady == false)
        this.documentReady = (document.readyState == 'complete');

      // Ahora miramos a ver si realmente podemos proceder...
      if (manifest.waitForDocumentReady == true && this.documentReady == false) {
        return;
      }

      // Finiquitamos el manifiesto
      this.finishManifest(manifest);
    }
  },

  finishManifest: function (manifest) {
      // Primero miramos si hemos de quitar el spinner
      if (manifest.hasOwnProperty("spinner") && manifest.spinner == "auto") {
        this.stopSpinner();
      }
      // Luego miramos si hemos de llamar al evento de finalización
      if (manifest.onEndLoading != null) {
        manifest.onEndLoading(manifest);
      }
      // Primero miramos si hemos de quitar el spinner
      if (manifest.hasOwnProperty("spinner") && manifest.spinner == "onEndLoading") {
        this.stopSpinner();
      }
      // Y finalmente lo eliminamos de la lista de manifiestos
      var pos = this.manifests.indexOf(manifest);
      if (pos > -1) {
        this.manifests.splice(pos, 1);
      }
  },

  getAJAX: function(type, url, successHandler, errorHandler) {
    var xhr = (typeof XMLHttpRequest != 'undefined') ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
    try {
      xhr.open('get', url, true);
      xhr.onreadystatechange = function() {
        var status;
        var data;
        // http://xhr.spec.whatwg.org/#dom-xmlhttprequest-readystate
        if (xhr.readyState == 4/* && xhr.status == 200*/) { // `DONE`
          status = xhr.status;
          if (status == 200) {
            if (type == "JSON") {
              data = JSON.parse(xhr.responseText);
            } else if (type = "XML") {
              data = xhr.responseXML;
            } else {
              data = xhr.responseText;
            }
            successHandler && successHandler(data);
          } else {
            errorHandler && errorHandler(status);
          }
        }
      };
      // En el caso de JSON forzamos text/plain para poder procesarlo después
      if (type == "JSON") {
        if (xhr.overrideMimeType)
          xhr.overrideMimeType("text/plain");
      }
      xhr.send();
    } catch (error) {
      errorHandler && errorHandler(0);
    }
  }

};





