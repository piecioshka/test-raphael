/**
 * Console.log() alias
 * 
 * @param infinity
 * @return void
 */
var clear = function clear(){
    if (window.console && window.console.clear) {
        console.clear.apply(window.console, arguments);
    }
};

/**
 * Console.log() alias
 * 
 * @param infinity
 * @return void
 */
var log = function log(){
    if (window.console && window.console.log) {
        console.log.apply(window.console, arguments);
    }
};

/**
 * Console.info() alias
 * 
 * @param infinity
 * @return void
 */
var info = function info(){
    if (window.console && window.console.info) {
        console.info.apply(window.console, arguments);
    }
};

/**
 * Console.dir() alias
 * 
 * @param infinity
 * @return void
 */
var dir = function dir(){
    if (window.console && window.console.dir) {
        console.dir.apply(window.console, arguments);
    }
};
