/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = activateShaderProgram;
function activateShaderProgram( context, shaderProgram){
	context.useProgram(shaderProgram);
}

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = compileShader;
 function compileShader(context, source, type, typeString) {
    const shader = context.createShader(type);

    context.shaderSource(shader, source);
    context.compileShader(shader);

    if (!context.getShaderParameter(shader, context.COMPILE_STATUS)) {
      console.log("ERROR IN " + typeString + " SHADER : " + context.getShaderInfoLog(shader));
      return false;
    }
    
    return shader;
  };

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createShaderProgram;
  function createShaderProgram( context, vertexShader, fragmentShader ){
  	var program = context.createProgram();
  	context.attachShader( program, vertexShader);
  	context.attachShader( program, fragmentShader);
  	context.linkProgram(program);
  	return program;
  }


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getDisplay;
function getDisplay(){
	return document.getElementById('display');
}

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getWebGLContext;
function getWebGLContext( canvas ){
	var context;
	try {
	    context = canvas.getContext("webgl", {antialias: false});
	    console.log(context);
	} catch (e) {
		console.log("You are not webgl compatible :(") ;
		return false;
	}
	return context;
}

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = initDisplay;
function initDisplay( display ){
	display.width = window.innerWidth;
	display.height = window.innerHeight;
}

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const fragment_shader_source="\n\
precision mediump float;\n\
\n\
\n\
\n\
varying vec3 vColor;\n\
void main(void) {\n\
gl_FragColor = vec4(vColor, 1.);\n\
}";
/* harmony export (immutable) */ __webpack_exports__["a"] = fragment_shader_source;


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const vertex_shader_source="\n\
attribute vec2 position; //the position of the point\n\
attribute vec3 color;  //the color of the point\n\
\n\
varying vec3 vColor;\n\
void main(void) { //pre-built function\n\
gl_Position = vec4(position, 0., 1.); //0. is the z, and 1 is w\n\
vColor=color;\n\
}";
/* harmony export (immutable) */ __webpack_exports__["a"] = vertex_shader_source;




/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__get_display__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__init_display__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__get_webgl_context__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shaders_vertex_shader_source_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shaders_fragment_shader_source_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__compile_shader__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__create_shader_program__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__activate_shader_program__ = __webpack_require__(0);









const display = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__get_display__["a" /* getDisplay */])();
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__init_display__["a" /* initDisplay */])(display);

const context = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__get_webgl_context__["a" /* getWebGLContext */])(display);
const vertexShader = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__compile_shader__["a" /* compileShader */])(context, __WEBPACK_IMPORTED_MODULE_3__shaders_vertex_shader_source_js__["a" /* vertex_shader_source */], context.VERTEX_SHADER, "VERTEX");
const fragmentShader = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__compile_shader__["a" /* compileShader */])(context, __WEBPACK_IMPORTED_MODULE_4__shaders_fragment_shader_source_js__["a" /* fragment_shader_source */], context.FRAGMENT_SHADER, "FRAGMENT");
var simpleShaderProgram = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__create_shader_program__["a" /* createShaderProgram */])(context, vertexShader, fragmentShader);

var position = context.getAttribLocation(simpleShaderProgram, "position");
var color = context.getAttribLocation(simpleShaderProgram, "color");

context.enableVertexAttribArray(position);
context.enableVertexAttribArray(color);


__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__activate_shader_program__["a" /* activateShaderProgram */])(context, simpleShaderProgram);


var TRIANGLE_VERTEX = context.createBuffer();
context.bindBuffer(context.ARRAY_BUFFER, TRIANGLE_VERTEX);
context.bufferData(context.ARRAY_BUFFER, new Float32Array([-1,-1, 0.0,0.0,1.0,   1,-1, 1.0,1.0,0.0,    1,1, 1.0,0.0,0.0]), context.STATIC_DRAW);

var TRIANGLE_FACES= context.createBuffer();
context.bindBuffer(context.ELEMENT_ARRAY_BUFFER, TRIANGLE_FACES);
context.bufferData(context.ELEMENT_ARRAY_BUFFER, new Uint16Array([0.0,1.0,2.0]), context.STATIC_DRAW);


context.clearColor(0.0, 0.0, 0.0, 0.0);

function animate() {
	context.viewport(0.0, 0.0, display.width, display.height);
	context.clear(context.COLOR_BUFFER_BIT);

    context.bindBuffer(context.ARRAY_BUFFER, TRIANGLE_VERTEX);

    context.vertexAttribPointer(position, 2, context.FLOAT, false, 4*2, 0);
    context.vertexAttribPointer(color, 3, context.FLOAT, false, 4*(2+3), 2*4);

    context.bindBuffer(context.ELEMENT_ARRAY_BUFFER, TRIANGLE_FACES);
    context.drawElements(context.TRIANGLES, 3, context.UNSIGNED_SHORT, 0);

	context.flush();
	window.requestAnimationFrame(animate);
	};

animate();

/***/ })
/******/ ]);