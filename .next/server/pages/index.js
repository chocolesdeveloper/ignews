/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/components/SubscribeButton/styles.module.scss":
/*!***********************************************************!*\
  !*** ./src/components/SubscribeButton/styles.module.scss ***!
  \***********************************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"subscribeButton\": \"styles_subscribeButton__52c6u\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TdWJzY3JpYmVCdXR0b24vc3R5bGVzLm1vZHVsZS5zY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWduZXdzLy4vc3JjL2NvbXBvbmVudHMvU3Vic2NyaWJlQnV0dG9uL3N0eWxlcy5tb2R1bGUuc2Nzcz9kYmU1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInN1YnNjcmliZUJ1dHRvblwiOiBcInN0eWxlc19zdWJzY3JpYmVCdXR0b25fXzUyYzZ1XCJcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/SubscribeButton/styles.module.scss\n");

/***/ }),

/***/ "./src/pages/home.module.scss":
/*!************************************!*\
  !*** ./src/pages/home.module.scss ***!
  \************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"contentContainer\": \"home_contentContainer__HYuN8\",\n\t\"hero\": \"home_hero__lhpWS\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaG9tZS5tb2R1bGUuc2Nzcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWduZXdzLy4vc3JjL3BhZ2VzL2hvbWUubW9kdWxlLnNjc3M/ZTRjMyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250ZW50Q29udGFpbmVyXCI6IFwiaG9tZV9jb250ZW50Q29udGFpbmVyX19IWXVOOFwiLFxuXHRcImhlcm9cIjogXCJob21lX2hlcm9fX2xocFdTXCJcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/home.module.scss\n");

/***/ }),

/***/ "./src/components/SubscribeButton/index.tsx":
/*!**************************************************!*\
  !*** ./src/components/SubscribeButton/index.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SubscribeButton\": () => (/* binding */ SubscribeButton)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api */ \"./src/services/api.ts\");\n/* harmony import */ var _services_stripe_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/stripe-js */ \"./src/services/stripe-js.ts\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles.module.scss */ \"./src/components/SubscribeButton/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nfunction SubscribeButton({ priceId  }) {\n    const { data: session  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    async function handleSubscribe() {\n        if (!session) {\n            (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signIn)(\"github\");\n            return;\n        }\n        if (session.activeSubscription) {\n            router.push(\"/posts\");\n            return;\n        }\n        try {\n            const response = await _services_api__WEBPACK_IMPORTED_MODULE_3__.api.post(\"/subscribe\");\n            const { sessionId  } = response.data;\n            const stripe = await (0,_services_stripe_js__WEBPACK_IMPORTED_MODULE_4__.getStripeJs)();\n            await stripe.redirectToCheckout({\n                sessionId\n            });\n        } catch (err) {\n            alert(err.message);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        type: \"button\",\n        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().subscribeButton),\n        onClick: handleSubscribe,\n        children: \"Subscribe Now\"\n    }, void 0, false, {\n        fileName: \"C:\\\\xampp\\\\htdocs\\\\FRONT-END\\\\rockeatseat\\\\ignews\\\\src\\\\components\\\\SubscribeButton\\\\index.tsx\",\n        lineNumber: 41,\n        columnNumber: 9\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TdWJzY3JpYmVCdXR0b24vaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBcUQ7QUFFYjtBQUNDO0FBQ2M7QUFDYjtBQU1uQyxTQUFTTSxlQUFlLENBQUMsRUFBRUMsT0FBTyxHQUF3QixFQUFFO0lBQy9ELE1BQU0sRUFBQ0MsSUFBSSxFQUFFQyxPQUFPLEdBQUMsR0FBR1QsMkRBQVUsRUFBRTtJQUNwQyxNQUFNVSxNQUFNLEdBQUdSLHNEQUFTLEVBQUU7SUFFMUIsZUFBZVMsZUFBZSxHQUFFO1FBQzVCLElBQUcsQ0FBQ0YsT0FBTyxFQUFFO1lBQ1RSLHVEQUFNLENBQUMsUUFBUSxDQUFDO1lBQ2hCLE9BQU87U0FDVjtRQUVELElBQUdRLE9BQU8sQ0FBQ0csa0JBQWtCLEVBQUU7WUFDM0JGLE1BQU0sQ0FBQ0csSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3RCLE9BQU87U0FDVjtRQUVELElBQUk7WUFDQSxNQUFNQyxRQUFRLEdBQUcsTUFBTVgsbURBQVEsQ0FBQyxZQUFZLENBQUM7WUFFN0MsTUFBTSxFQUFFYSxTQUFTLEdBQUUsR0FBR0YsUUFBUSxDQUFDTixJQUFJO1lBRW5DLE1BQU1TLE1BQU0sR0FBRyxNQUFNYixnRUFBVyxFQUFFO1lBRWxDLE1BQU1hLE1BQU0sQ0FBQ0Msa0JBQWtCLENBQUM7Z0JBQUVGLFNBQVM7YUFBRSxDQUFDO1NBQ2pELENBQUMsT0FBT0csR0FBRyxFQUFFO1lBQ1ZDLEtBQUssQ0FBQ0QsR0FBRyxDQUFDRSxPQUFPLENBQUMsQ0FBQztTQUN0QjtLQUNKO0lBRUQscUJBQ0ksOERBQUNDLFFBQU07UUFDUEMsSUFBSSxFQUFDLFFBQVE7UUFDYkMsU0FBUyxFQUFFbkIsNEVBQXNCO1FBQ2pDcUIsT0FBTyxFQUFFZixlQUFlO2tCQUN2QixlQUVEOzs7OztZQUFTLENBQ1g7Q0FDTCIsInNvdXJjZXMiOlsid2VicGFjazovL2lnbmV3cy8uL3NyYy9jb21wb25lbnRzL1N1YnNjcmliZUJ1dHRvbi9pbmRleC50c3g/OTBlNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTZXNzaW9uLCBzaWduSW4gfSBmcm9tICduZXh0LWF1dGgvcmVhY3QnO1xyXG5pbXBvcnQgeyByZWRpcmVjdCB9IGZyb20gJ25leHQvZGlzdC9zZXJ2ZXIvYXBpLXV0aWxzJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBhcGkgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hcGknO1xyXG5pbXBvcnQgeyBnZXRTdHJpcGVKcyB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3N0cmlwZS1qcyc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLnNjc3MnO1xyXG5cclxuaW50ZXJmYWNlIFN1YnNjcmliZUJ1dHRvblByb3BzIHtcclxuICAgIHByaWNlSWQ6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFN1YnNjcmliZUJ1dHRvbih7IHByaWNlSWQgfTogU3Vic2NyaWJlQnV0dG9uUHJvcHMpIHtcclxuICAgIGNvbnN0IHtkYXRhOiBzZXNzaW9ufSA9IHVzZVNlc3Npb24oKTtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgICBcclxuICAgIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVN1YnNjcmliZSgpe1xyXG4gICAgICAgIGlmKCFzZXNzaW9uKSB7XHJcbiAgICAgICAgICAgIHNpZ25JbignZ2l0aHViJylcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoc2Vzc2lvbi5hY3RpdmVTdWJzY3JpcHRpb24pIHtcclxuICAgICAgICAgICAgcm91dGVyLnB1c2goJy9wb3N0cycpOyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0cnkgeyAgIFxyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5wb3N0KCcvc3Vic2NyaWJlJylcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHsgc2Vzc2lvbklkIH0gPSByZXNwb25zZS5kYXRhO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgc3RyaXBlID0gYXdhaXQgZ2V0U3RyaXBlSnMoKSAgICAgICBcclxuXHJcbiAgICAgICAgICAgIGF3YWl0IHN0cmlwZS5yZWRpcmVjdFRvQ2hlY2tvdXQoeyBzZXNzaW9uSWQgfSlcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgYWxlcnQoZXJyLm1lc3NhZ2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5zdWJzY3JpYmVCdXR0b259XHJcbiAgICAgICAgb25DbGljaz17aGFuZGxlU3Vic2NyaWJlfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgU3Vic2NyaWJlIE5vd1xyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgKTtcclxufSJdLCJuYW1lcyI6WyJ1c2VTZXNzaW9uIiwic2lnbkluIiwidXNlUm91dGVyIiwiYXBpIiwiZ2V0U3RyaXBlSnMiLCJzdHlsZXMiLCJTdWJzY3JpYmVCdXR0b24iLCJwcmljZUlkIiwiZGF0YSIsInNlc3Npb24iLCJyb3V0ZXIiLCJoYW5kbGVTdWJzY3JpYmUiLCJhY3RpdmVTdWJzY3JpcHRpb24iLCJwdXNoIiwicmVzcG9uc2UiLCJwb3N0Iiwic2Vzc2lvbklkIiwic3RyaXBlIiwicmVkaXJlY3RUb0NoZWNrb3V0IiwiZXJyIiwiYWxlcnQiLCJtZXNzYWdlIiwiYnV0dG9uIiwidHlwZSIsImNsYXNzTmFtZSIsInN1YnNjcmliZUJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/SubscribeButton/index.tsx\n");

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_stripe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/stripe */ \"./src/services/stripe.ts\");\n/* harmony import */ var _components_SubscribeButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/SubscribeButton */ \"./src/components/SubscribeButton/index.tsx\");\n/* harmony import */ var _home_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.module.scss */ \"./src/pages/home.module.scss\");\n/* harmony import */ var _home_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_home_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nfunction Home({ product  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Home | ig.news\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\xampp\\\\htdocs\\\\FRONT-END\\\\rockeatseat\\\\ignews\\\\src\\\\pages\\\\index.tsx\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\xampp\\\\htdocs\\\\FRONT-END\\\\rockeatseat\\\\ignews\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_4___default().contentContainer),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_4___default().hero),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \"\\uD83D\\uDC4F Hey, welcome\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\xampp\\\\htdocs\\\\FRONT-END\\\\rockeatseat\\\\ignews\\\\src\\\\pages\\\\index.tsx\",\n                                lineNumber: 25,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: [\n                                    \"News about the \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: \"React\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\xampp\\\\htdocs\\\\FRONT-END\\\\rockeatseat\\\\ignews\\\\src\\\\pages\\\\index.tsx\",\n                                        lineNumber: 26,\n                                        columnNumber: 30\n                                    }, this),\n                                    \" world.\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\xampp\\\\htdocs\\\\FRONT-END\\\\rockeatseat\\\\ignews\\\\src\\\\pages\\\\index.tsx\",\n                                lineNumber: 26,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"Get access to all the publications\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"C:\\\\xampp\\\\htdocs\\\\FRONT-END\\\\rockeatseat\\\\ignews\\\\src\\\\pages\\\\index.tsx\",\n                                        lineNumber: 28,\n                                        columnNumber: 47\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: [\n                                            \"for \",\n                                            product.amount,\n                                            \" /month\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\xampp\\\\htdocs\\\\FRONT-END\\\\rockeatseat\\\\ignews\\\\src\\\\pages\\\\index.tsx\",\n                                        lineNumber: 29,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\xampp\\\\htdocs\\\\FRONT-END\\\\rockeatseat\\\\ignews\\\\src\\\\pages\\\\index.tsx\",\n                                lineNumber: 27,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SubscribeButton__WEBPACK_IMPORTED_MODULE_3__.SubscribeButton, {\n                                priceId: product.priceId\n                            }, void 0, false, {\n                                fileName: \"C:\\\\xampp\\\\htdocs\\\\FRONT-END\\\\rockeatseat\\\\ignews\\\\src\\\\pages\\\\index.tsx\",\n                                lineNumber: 32,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\xampp\\\\htdocs\\\\FRONT-END\\\\rockeatseat\\\\ignews\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"/images/avatar.svg\",\n                        alt: \"Girl coding\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\xampp\\\\htdocs\\\\FRONT-END\\\\rockeatseat\\\\ignews\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\xampp\\\\htdocs\\\\FRONT-END\\\\rockeatseat\\\\ignews\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n};\nconst getStaticProps = async ()=>{\n    //Está buscando o item dentro do Stripe utilizando a biblioteca deles\n    const price = await _services_stripe__WEBPACK_IMPORTED_MODULE_2__.stripe.prices.retrieve(\"price_1KyfgcGsFFAgYesCtkHCJLos\", {\n        //Pra ter acesso a toda informação do produto\n        expand: [\n            \"product\"\n        ]\n    });\n    const product = {\n        priceId: price.id,\n        amount: new Intl.NumberFormat(\"en-US\", {\n            style: \"currency\",\n            currency: \"USD\"\n        }).format(price.unit_amount / 100)\n    };\n    return {\n        props: {\n            product\n        },\n        revalidate: 60 * 60 * 24 //24horas\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2QjtBQUVlO0FBQ29CO0FBRXhCO0FBU3pCLFNBQVNJLElBQUksQ0FBQyxFQUFFQyxPQUFPLEdBQWEsRUFBRTtJQUNuRCxxQkFDRTs7MEJBQ0UsOERBQUNMLGtEQUFJOzBCQUNILDRFQUFDTSxPQUFLOzhCQUFDLGdCQUFjOzs7Ozt3QkFBUTs7Ozs7b0JBQ3hCOzBCQUVQLDhEQUFDQyxNQUFJO2dCQUFDQyxTQUFTLEVBQUVMLDJFQUF1Qjs7a0NBQ3RDLDhEQUFDTyxTQUFPO3dCQUFDRixTQUFTLEVBQUVMLCtEQUFXOzswQ0FDN0IsOERBQUNTLE1BQUk7MENBQUMsMkJBQWM7Ozs7O29DQUFVOzBDQUMzQiw4REFBRkMsSUFBRTs7b0NBQUMsaUJBQWU7a0RBQUEsOERBQUNELE1BQUk7a0RBQUMsT0FBSzs7Ozs7NENBQU87b0NBQUEsU0FBTzs7Ozs7O29DQUFLOzBDQUNqRCw4REFBQ0UsR0FBQzs7b0NBQUMsb0NBQ2lDO2tEQUFBLDhEQUFFQyxJQUFFOzs7OzRDQUFFO2tEQUN4Qyw4REFBQ0gsTUFBSTs7NENBQUMsTUFBSTs0Q0FBQ1AsT0FBTyxDQUFDVyxNQUFNOzRDQUFDLFNBQU87Ozs7Ozs0Q0FBTzs7Ozs7O29DQUN0QzswQ0FFSiw4REFBQ2Qsd0VBQWU7Z0NBQUNlLE9BQU8sRUFBRVosT0FBTyxDQUFDWSxPQUFPOzs7OztvQ0FBSTs7Ozs7OzRCQUNyQztrQ0FFViw4REFBQ0MsS0FBRzt3QkFBQ0MsR0FBRyxFQUFDLG9CQUFvQjt3QkFBQ0MsR0FBRyxFQUFDLGFBQWE7Ozs7OzRCQUFHOzs7Ozs7b0JBQzdDOztvQkFDTixDQUNKO0NBQ0Y7QUFFTSxNQUFNQyxjQUFjLEdBQW1CLFVBQVk7SUFDeEQ7SUFDQyxNQUFLQyxLQUFLLEdBQUcsTUFBTXJCLG9FQUFzQixDQUFDLGdDQUFnQyxFQUFFO1FBQzNFO1FBQ0F3QixNQUFNLEVBQUM7WUFBQyxTQUFTO1NBQUM7S0FDbkIsQ0FBQztJQUVGLE1BQU1wQixPQUFPLEdBQUc7UUFDZFksT0FBTyxFQUFFSyxLQUFLLENBQUNJLEVBQUU7UUFDakJWLE1BQU0sRUFBRSxJQUFJVyxJQUFJLENBQUNDLFlBQVksQ0FBQyxPQUFPLEVBQUU7WUFDckNDLEtBQUssRUFBRSxVQUFVO1lBQ2pCQyxRQUFRLEVBQUUsS0FBSztTQUNoQixDQUFDLENBQUNDLE1BQU0sQ0FBQ1QsS0FBSyxDQUFDVSxXQUFXLEdBQUcsR0FBRyxDQUFDO0tBQ25DO0lBRUQsT0FBTztRQUNMQyxLQUFLLEVBQUM7WUFDSjVCLE9BQU87U0FDUjtRQUNENkIsVUFBVSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLFNBQVM7S0FDbkM7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2lnbmV3cy8uL3NyYy9wYWdlcy9pbmRleC50c3g/MTlhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHZXRTdGF0aWNQcm9wcyB9IGZyb20gJ25leHQnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcblxuaW1wb3J0IHsgc3RyaXBlIH0gZnJvbSAnLi4vc2VydmljZXMvc3RyaXBlJztcbmltcG9ydCB7IFN1YnNjcmliZUJ1dHRvbiB9IGZyb20gJy4uL2NvbXBvbmVudHMvU3Vic2NyaWJlQnV0dG9uJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2hvbWUubW9kdWxlLnNjc3MnO1xuXG5pbnRlcmZhY2UgSG9tZVByb3BzIHtcbiAgcHJvZHVjdDoge1xuICAgIHByaWNlSWQ6IHN0cmluZztcbiAgICBhbW91bnQ6IG51bWJlcjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgcHJvZHVjdCB9OiBIb21lUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5Ib21lIHwgaWcubmV3czwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICBcbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnRDb250YWluZXJ9PlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5oZXJvfT5cbiAgICAgICAgICA8c3Bhbj7wn5GPIEhleSwgd2VsY29tZTwvc3Bhbj5cbiAgICAgICAgICA8aDE+TmV3cyBhYm91dCB0aGUgPHNwYW4+UmVhY3Q8L3NwYW4+IHdvcmxkLjwvaDE+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBHZXQgYWNjZXNzIHRvIGFsbCB0aGUgcHVibGljYXRpb25zPCBici8+XG4gICAgICAgICAgICA8c3Bhbj5mb3Ige3Byb2R1Y3QuYW1vdW50fSAvbW9udGg8L3NwYW4+XG4gICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgPFN1YnNjcmliZUJ1dHRvbiBwcmljZUlkPXtwcm9kdWN0LnByaWNlSWR9IC8+XG4gICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvYXZhdGFyLnN2Z1wiIGFsdD1cIkdpcmwgY29kaW5nXCIgLz5cbiAgICAgIDwvbWFpbj5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xuICAvL0VzdMOhIGJ1c2NhbmRvIG8gaXRlbSBkZW50cm8gZG8gU3RyaXBlIHV0aWxpemFuZG8gYSBiaWJsaW90ZWNhIGRlbGVzXG4gIGNvbnN0IHByaWNlID0gYXdhaXQgc3RyaXBlLnByaWNlcy5yZXRyaWV2ZSgncHJpY2VfMUt5ZmdjR3NGRkFnWWVzQ3RrSENKTG9zJywge1xuICAgIC8vUHJhIHRlciBhY2Vzc28gYSB0b2RhIGluZm9ybWHDp8OjbyBkbyBwcm9kdXRvXG4gICAgZXhwYW5kOlsncHJvZHVjdCddXG4gIH0pXG5cbiAgY29uc3QgcHJvZHVjdCA9IHtcbiAgICBwcmljZUlkOiBwcmljZS5pZCxcbiAgICBhbW91bnQ6IG5ldyBJbnRsLk51bWJlckZvcm1hdCgnZW4tVVMnLCB7XG4gICAgICBzdHlsZTogJ2N1cnJlbmN5JyxcbiAgICAgIGN1cnJlbmN5OiAnVVNEJyxcbiAgICB9KS5mb3JtYXQocHJpY2UudW5pdF9hbW91bnQgLyAxMDApLFxuICB9O1xuICBcbiAgcmV0dXJuIHtcbiAgICBwcm9wczp7XG4gICAgICBwcm9kdWN0ICBcbiAgICB9LFxuICAgIHJldmFsaWRhdGU6IDYwICogNjAgKiAyNCAvLzI0aG9yYXNcbiAgfVxufSJdLCJuYW1lcyI6WyJIZWFkIiwic3RyaXBlIiwiU3Vic2NyaWJlQnV0dG9uIiwic3R5bGVzIiwiSG9tZSIsInByb2R1Y3QiLCJ0aXRsZSIsIm1haW4iLCJjbGFzc05hbWUiLCJjb250ZW50Q29udGFpbmVyIiwic2VjdGlvbiIsImhlcm8iLCJzcGFuIiwiaDEiLCJwIiwiYnIiLCJhbW91bnQiLCJwcmljZUlkIiwiaW1nIiwic3JjIiwiYWx0IiwiZ2V0U3RhdGljUHJvcHMiLCJwcmljZSIsInByaWNlcyIsInJldHJpZXZlIiwiZXhwYW5kIiwiaWQiLCJJbnRsIiwiTnVtYmVyRm9ybWF0Iiwic3R5bGUiLCJjdXJyZW5jeSIsImZvcm1hdCIsInVuaXRfYW1vdW50IiwicHJvcHMiLCJyZXZhbGlkYXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ }),

/***/ "./src/services/api.ts":
/*!*****************************!*\
  !*** ./src/services/api.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"api\": () => (/* binding */ api)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nconst api = axios__WEBPACK_IMPORTED_MODULE_0___default().create({\n    baseURL: \"/api\"\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvYXBpLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUEwQjtBQUVuQixNQUFNQyxHQUFHLEdBQUdELG1EQUFZLENBQUM7SUFDNUJHLE9BQU8sRUFBRSxNQUFNO0NBQ2xCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvc2VydmljZXMvYXBpLnRzPzk1NmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmV4cG9ydCBjb25zdCBhcGkgPSBheGlvcy5jcmVhdGUoe1xyXG4gICAgYmFzZVVSTDogJy9hcGknXHJcbn0pIl0sIm5hbWVzIjpbImF4aW9zIiwiYXBpIiwiY3JlYXRlIiwiYmFzZVVSTCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/services/api.ts\n");

/***/ }),

/***/ "./src/services/stripe-js.ts":
/*!***********************************!*\
  !*** ./src/services/stripe-js.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStripeJs\": () => (/* binding */ getStripeJs)\n/* harmony export */ });\n/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stripe/stripe-js */ \"@stripe/stripe-js\");\n/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function getStripeJs() {\n    const stripeJs = await (0,_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_0__.loadStripe)(\"pk_test_51KyfcYGsFFAgYesCEqdVBylZ3hdWGOabtezsRWhEGeTMcgS8mh7TBhAenwTs3AYJqaMdyUzxclGhjzaAmU85H8w100WAv10gii\");\n    return stripeJs;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvc3RyaXBlLWpzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE4QztBQUV2QyxlQUFlQyxXQUFXLEdBQUk7SUFDakMsTUFBTUMsUUFBUSxHQUFHLE1BQU1GLDZEQUFVLENBQUNHLDZHQUF5QyxDQUFDO0lBRTVFLE9BQU9ELFFBQVE7Q0FDbEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvc2VydmljZXMvc3RyaXBlLWpzLnRzPzU5OGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbG9hZFN0cmlwZSB9IGZyb20gJ0BzdHJpcGUvc3RyaXBlLWpzJ1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0cmlwZUpzICgpIHtcclxuICAgIGNvbnN0IHN0cmlwZUpzID0gYXdhaXQgbG9hZFN0cmlwZShwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVFJJUEVfUFVCTElDX0tFWSlcclxuXHJcbiAgICByZXR1cm4gc3RyaXBlSnNcclxufSJdLCJuYW1lcyI6WyJsb2FkU3RyaXBlIiwiZ2V0U3RyaXBlSnMiLCJzdHJpcGVKcyIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19TVFJJUEVfUFVCTElDX0tFWSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/services/stripe-js.ts\n");

/***/ }),

/***/ "./src/services/stripe.ts":
/*!********************************!*\
  !*** ./src/services/stripe.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"stripe\": () => (/* binding */ stripe)\n/* harmony export */ });\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stripe */ \"stripe\");\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(stripe__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../package.json */ \"./package.json\");\n\n\nconst stripe = new (stripe__WEBPACK_IMPORTED_MODULE_0___default())(//Primeiro parâmentro é por de onde a chave está vindo\n//No caso aqui foi criada um arquivo .env.local\n// que está puxando a variavel\nprocess.env.STRIPE_API_KEY, //Segundo parâmentro    \n{\n    //Primeira propriedade é a versao do Stripe\n    apiVersion: \"2020-08-27\",\n    //Informações de metadados\n    appInfo: {\n        //Pro stripe saber qual aplicação ta fazendo requesição\n        name: \"Ignews\",\n        //versão da nossa aplicação, sendo puxada diretamente do JSON\n        version: _package_json__WEBPACK_IMPORTED_MODULE_1__.version\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvc3RyaXBlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBNEI7QUFDaUI7QUFFdEMsTUFBTUUsTUFBTSxHQUFHLElBQUlGLCtDQUFNLENBQzVCO0FBQ0csK0NBQTRDO0FBQy9DO0FBQ0NHLE9BQU0sQ0FBQ0MsR0FBRyxDQUFDQyxjQUFjLEVBQzFCO0FBQ0M7SUFDRztJQUNDQyxVQUFTLEVBQUUsWUFBWTtJQUN4QjtJQUNFQyxPQUFLLEVBQUU7UUFDTDtRQUNJQyxJQUFBLEVBQUMsUUFBUTtRQUNiO1FBQ0FQLE9BQU87S0FDVjtDQUVKLENBQ0osQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2lnbmV3cy8uL3NyYy9zZXJ2aWNlcy9zdHJpcGUudHM/YWI5OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3RyaXBlIGZyb20gJ3N0cmlwZSc7XHJcbmltcG9ydCB7IHZlcnNpb24gfSBmcm9tICcuLi8uLi9wYWNrYWdlLmpzb24nO1xyXG5cclxuZXhwb3J0IGNvbnN0IHN0cmlwZSA9IG5ldyBTdHJpcGUgKFxyXG4gICAgLy9QcmltZWlybyBwYXLDom1lbnRybyDDqSBwb3IgZGUgb25kZSBhIGNoYXZlIGVzdMOhIHZpbmRvXHJcbiAgICAvL05vIGNhc28gYXF1aSBmb2kgY3JpYWRhIHVtIGFycXVpdm8gLmVudi5sb2NhbFxyXG4gICAgLy8gcXVlIGVzdMOhIHB1eGFuZG8gYSB2YXJpYXZlbFxyXG4gICAgcHJvY2Vzcy5lbnYuU1RSSVBFX0FQSV9LRVksIFxyXG4gICAgLy9TZWd1bmRvIHBhcsOibWVudHJvICAgIFxyXG4gICAge1xyXG4gICAgICAgIC8vUHJpbWVpcmEgcHJvcHJpZWRhZGUgw6kgYSB2ZXJzYW8gZG8gU3RyaXBlXHJcbiAgICAgICAgYXBpVmVyc2lvbjogJzIwMjAtMDgtMjcnLFxyXG4gICAgICAgIC8vSW5mb3JtYcOnw7VlcyBkZSBtZXRhZGFkb3NcclxuICAgICAgICBhcHBJbmZvOiB7XHJcbiAgICAgICAgICAgIC8vUHJvIHN0cmlwZSBzYWJlciBxdWFsIGFwbGljYcOnw6NvIHRhIGZhemVuZG8gcmVxdWVzacOnw6NvXHJcbiAgICAgICAgICAgIG5hbWU6J0lnbmV3cycsXHJcbiAgICAgICAgICAgIC8vdmVyc8OjbyBkYSBub3NzYSBhcGxpY2HDp8Ojbywgc2VuZG8gcHV4YWRhIGRpcmV0YW1lbnRlIGRvIEpTT05cclxuICAgICAgICAgICAgdmVyc2lvbixcclxuICAgICAgICB9LFxyXG5cclxuICAgIH1cclxuKTsiXSwibmFtZXMiOlsiU3RyaXBlIiwidmVyc2lvbiIsInN0cmlwZSIsInByb2Nlc3MiLCJlbnYiLCJTVFJJUEVfQVBJX0tFWSIsImFwaVZlcnNpb24iLCJhcHBJbmZvIiwibmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/services/stripe.ts\n");

/***/ }),

/***/ "@stripe/stripe-js":
/*!************************************!*\
  !*** external "@stripe/stripe-js" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@stripe/stripe-js");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/react");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "stripe":
/*!*************************!*\
  !*** external "stripe" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stripe");

/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"name":"ignews","version":"0.1.0","private":true,"scripts":{"dev":"next dev","build":"next build","start":"next start","lint":"next lint","stripe":"./stripe listen  --forward-to localhost:3000/api/webhooks","prismic":"npm run slicemachine"},"files.associations":{"*.env":"properties"},"dependencies":{"@prismicio/client":"^5.1.1","@stripe/stripe-js":"^1.29.0","axios":"^0.27.2","faunadb":"^4.5.4","next":"12.1.6","next-auth":"^4.3.4","prismic-dom":"^2.2.7","react":"18.1.0","react-dom":"18.1.0","react-icons":"^4.3.1","sass":"^1.51.0","stripe":"^9.1.0"},"devDependencies":{"@types/next-auth":"^3.15.0","@types/node":"^17.0.32","@types/prismic-dom":"^2.1.1","@types/react":"^18.0.9","eslint":"8.15.0","eslint-config-next":"12.1.6","slice-machine-ui":"^0.3.7","typescript":"^4.6.4"}}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.tsx"));
module.exports = __webpack_exports__;

})();