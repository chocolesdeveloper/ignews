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
exports.id = "pages/posts/[slug]";
exports.ids = ["pages/posts/[slug]"];
exports.modules = {

/***/ "./src/pages/posts/post.module.scss":
/*!******************************************!*\
  !*** ./src/pages/posts/post.module.scss ***!
  \******************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"post_container__MzB65\",\n\t\"post\": \"post_post__ejhnw\",\n\t\"postContent\": \"post_postContent__B93C3\",\n\t\"previewContent\": \"post_previewContent__2mmIt\",\n\t\"continueReading\": \"post_continueReading___ZrFL\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcG9zdHMvcG9zdC5tb2R1bGUuc2Nzcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWduZXdzLy4vc3JjL3BhZ2VzL3Bvc3RzL3Bvc3QubW9kdWxlLnNjc3M/YTNiNiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJwb3N0X2NvbnRhaW5lcl9fTXpCNjVcIixcblx0XCJwb3N0XCI6IFwicG9zdF9wb3N0X19lamhud1wiLFxuXHRcInBvc3RDb250ZW50XCI6IFwicG9zdF9wb3N0Q29udGVudF9fQjkzQzNcIixcblx0XCJwcmV2aWV3Q29udGVudFwiOiBcInBvc3RfcHJldmlld0NvbnRlbnRfXzJtbUl0XCIsXG5cdFwiY29udGludWVSZWFkaW5nXCI6IFwicG9zdF9jb250aW51ZVJlYWRpbmdfX19ackZMXCJcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/posts/post.module.scss\n");

/***/ }),

/***/ "./src/pages/posts/[slug].tsx":
/*!************************************!*\
  !*** ./src/pages/posts/[slug].tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Post),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var prismic_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prismic-dom */ \"prismic-dom\");\n/* harmony import */ var prismic_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prismic_dom__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _services_prismic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/prismic */ \"./src/services/prismic.ts\");\n/* harmony import */ var _post_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./post.module.scss */ \"./src/pages/posts/post.module.scss\");\n/* harmony import */ var _post_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_post_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nfunction Post({ post  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: [\n                        post.title,\n                        \" | ignews\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\xampp\\\\htdocs\\\\FRONT-END\\\\rockeatseat\\\\ignews\\\\src\\\\pages\\\\posts\\\\[slug].tsx\",\n                    lineNumber: 23,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\xampp\\\\htdocs\\\\FRONT-END\\\\rockeatseat\\\\ignews\\\\src\\\\pages\\\\posts\\\\[slug].tsx\",\n                lineNumber: 22,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_post_module_scss__WEBPACK_IMPORTED_MODULE_5___default().container),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n                    className: (_post_module_scss__WEBPACK_IMPORTED_MODULE_5___default().post),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: post.title\n                        }, void 0, false, {\n                            fileName: \"C:\\\\xampp\\\\htdocs\\\\FRONT-END\\\\rockeatseat\\\\ignews\\\\src\\\\pages\\\\posts\\\\[slug].tsx\",\n                            lineNumber: 28,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"time\", {\n                            children: post.updateAt\n                        }, void 0, false, {\n                            fileName: \"C:\\\\xampp\\\\htdocs\\\\FRONT-END\\\\rockeatseat\\\\ignews\\\\src\\\\pages\\\\posts\\\\[slug].tsx\",\n                            lineNumber: 29,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_post_module_scss__WEBPACK_IMPORTED_MODULE_5___default().postContent),\n                            dangerouslySetInnerHTML: {\n                                __html: post.content\n                            }\n                        }, void 0, false, {\n                            fileName: \"C:\\\\xampp\\\\htdocs\\\\FRONT-END\\\\rockeatseat\\\\ignews\\\\src\\\\pages\\\\posts\\\\[slug].tsx\",\n                            lineNumber: 30,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\xampp\\\\htdocs\\\\FRONT-END\\\\rockeatseat\\\\ignews\\\\src\\\\pages\\\\posts\\\\[slug].tsx\",\n                    lineNumber: 27,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\xampp\\\\htdocs\\\\FRONT-END\\\\rockeatseat\\\\ignews\\\\src\\\\pages\\\\posts\\\\[slug].tsx\",\n                lineNumber: 26,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n};\nconst getServerSideProps = async ({ req , params  })=>{\n    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.getSession)({\n        req\n    });\n    const { slug  } = params;\n    if (!session?.activeSubscription) {\n        return {\n            redirect: {\n                destination: \"/\",\n                permanent: false\n            }\n        };\n    }\n    const prismic = (0,_services_prismic__WEBPACK_IMPORTED_MODULE_4__.getPrismicClient)(req);\n    const response = await prismic.getByUID(\"publication\", String(slug), {});\n    const post = {\n        slug,\n        title: prismic_dom__WEBPACK_IMPORTED_MODULE_3__.RichText.asText(response.data.title),\n        content: prismic_dom__WEBPACK_IMPORTED_MODULE_3__.RichText.asHtml(response.data.content),\n        updateAt: new Date(response.last_publication_date).toLocaleDateString(\"pt-BR\", {\n            day: \"2-digit\",\n            month: \"long\",\n            year: \"numeric\"\n        })\n    };\n    return {\n        props: {\n            post\n        }\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcG9zdHMvW3NsdWddLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUM2QztBQUNoQjtBQUNVO0FBQ21CO0FBRW5CO0FBWXhCLFNBQVNLLElBQUksQ0FBRSxFQUFDQyxJQUFJLEdBQVksRUFBRTtJQUM3QyxxQkFDSTs7MEJBQ0ksOERBQUNMLGtEQUFJOzBCQUNELDRFQUFDTSxPQUFLOzt3QkFBRUQsSUFBSSxDQUFDQyxLQUFLO3dCQUFDLFdBQVM7Ozs7Ozt3QkFBUTs7Ozs7b0JBQ2pDOzBCQUVQLDhEQUFDQyxNQUFJO2dCQUFDQyxTQUFTLEVBQUVMLG9FQUFnQjswQkFDN0IsNEVBQUNPLFNBQU87b0JBQUNGLFNBQVMsRUFBRUwsK0RBQVc7O3NDQUMzQiw4REFBQ1EsSUFBRTtzQ0FBRU4sSUFBSSxDQUFDQyxLQUFLOzs7OztnQ0FBTTtzQ0FDckIsOERBQUNNLE1BQUk7c0NBQUVQLElBQUksQ0FBQ1EsUUFBUTs7Ozs7Z0NBQVE7c0NBQzVCLDhEQUFDQyxLQUFHOzRCQUNBTixTQUFTLEVBQUVMLHNFQUFrQjs0QkFDN0JhLHVCQUF1QixFQUFFO2dDQUFDQyxNQUFNLEVBQUNaLElBQUksQ0FBQ2EsT0FBTzs2QkFBQzs7Ozs7Z0NBQ2hEOzs7Ozs7d0JBQ0k7Ozs7O29CQUNQOztvQkFDUixDQUNMO0NBQ0w7QUFFTSxNQUFNQyxrQkFBa0IsR0FBdUIsT0FBTyxFQUFFQyxHQUFHLEdBQUVDLE1BQU0sR0FBQyxHQUFLO0lBQzVFLE1BQU1DLE9BQU8sR0FBRyxNQUFNdkIsMkRBQVUsQ0FBRTtRQUFFcUIsR0FBRztLQUFFLENBQUM7SUFDMUMsTUFBTSxFQUFFRyxJQUFJLEdBQUUsR0FBR0YsTUFBTTtJQUV2QixJQUFHLENBQUNDLE9BQU8sRUFBRUUsa0JBQWtCLEVBQUU7UUFDN0IsT0FBTztZQUNIQyxRQUFRLEVBQUU7Z0JBQ05DLFdBQVcsRUFBRSxHQUFHO2dCQUNoQkMsU0FBUyxFQUFFLEtBQUs7YUFDbkI7U0FDSjtLQUNKO0lBRUQsTUFBTUMsT0FBTyxHQUFHMUIsbUVBQWdCLENBQUNrQixHQUFHLENBQUM7SUFFckMsTUFBTVMsUUFBUSxHQUFHLE1BQU1ELE9BQU8sQ0FBQ0UsUUFBUSxDQUFNLGFBQWEsRUFBRUMsTUFBTSxDQUFDUixJQUFJLENBQUMsRUFBRSxFQUFFLENBQUM7SUFFN0UsTUFBTWxCLElBQUksR0FBRztRQUNUa0IsSUFBSTtRQUNKakIsS0FBSyxFQUFFTCx3REFBZSxDQUFDNEIsUUFBUSxDQUFDSSxJQUFJLENBQUMzQixLQUFLLENBQUM7UUFDM0NZLE9BQU8sRUFBRWpCLHdEQUFlLENBQUM0QixRQUFRLENBQUNJLElBQUksQ0FBQ2YsT0FBTyxDQUFDO1FBQy9DTCxRQUFRLEVBQUUsSUFBSXNCLElBQUksQ0FBQ04sUUFBUSxDQUFDTyxxQkFBcUIsQ0FBQyxDQUFDQyxrQkFBa0IsQ0FBQyxPQUFPLEVBQUU7WUFDM0VDLEdBQUcsRUFBRSxTQUFTO1lBQ2RDLEtBQUssRUFBRSxNQUFNO1lBQ2JDLElBQUksRUFBRSxTQUFTO1NBQ2xCLENBQUM7S0FDTDtJQUVELE9BQU87UUFDSEMsS0FBSyxFQUFFO1lBQ0hwQyxJQUFJO1NBQ1A7S0FDSjtDQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWduZXdzLy4vc3JjL3BhZ2VzL3Bvc3RzL1tzbHVnXS50c3g/Nzc4YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHZXRTZXJ2ZXJTaWRlUHJvcHMgfSBmcm9tIFwibmV4dFwiO1xyXG5pbXBvcnQgeyBnZXRTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCB7IFJpY2hUZXh0IH0gZnJvbSBcInByaXNtaWMtZG9tXCI7XHJcbmltcG9ydCB7IGdldFByaXNtaWNDbGllbnQgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvcHJpc21pY1wiO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3Bvc3QubW9kdWxlLnNjc3MnXHJcblxyXG5pbnRlcmZhY2UgUG9zdFByb3BzIHtcclxuICAgIHBvc3Q6IHtcclxuICAgICAgICBzbHVnOiBzdHJpbmc7XHJcbiAgICAgICAgdGl0bGU6IHN0cmluZztcclxuICAgICAgICBjb250ZW50OiBzdHJpbmc7XHJcbiAgICAgICAgdXBkYXRlQXQ6IHN0cmluZztcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3QgKHtwb3N0fTogUG9zdFByb3BzKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPntwb3N0LnRpdGxlfSB8IGlnbmV3czwvdGl0bGU+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgICAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9e3N0eWxlcy5wb3N0fT5cclxuICAgICAgICAgICAgICAgICAgICA8aDE+e3Bvc3QudGl0bGV9PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8dGltZT57cG9zdC51cGRhdGVBdH08L3RpbWU+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5wb3N0Q29udGVudH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOnBvc3QuY29udGVudH19IFxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2FydGljbGU+XHJcbiAgICAgICAgICAgIDwvbWFpbj5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzOiBHZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoeyByZXEsIHBhcmFtc30pID0+IHtcclxuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKCB7IHJlcSB9KVxyXG4gICAgY29uc3QgeyBzbHVnIH0gPSBwYXJhbXM7XHJcblxyXG4gICAgaWYoIXNlc3Npb24/LmFjdGl2ZVN1YnNjcmlwdGlvbikge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHJlZGlyZWN0OiB7XHJcbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbjogJy8nLFxyXG4gICAgICAgICAgICAgICAgcGVybWFuZW50OiBmYWxzZSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBwcmlzbWljID0gZ2V0UHJpc21pY0NsaWVudChyZXEpXHJcblxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBwcmlzbWljLmdldEJ5VUlEPGFueT4oJ3B1YmxpY2F0aW9uJywgU3RyaW5nKHNsdWcpLCB7fSlcclxuXHJcbiAgICBjb25zdCBwb3N0ID0ge1xyXG4gICAgICAgIHNsdWcsIFxyXG4gICAgICAgIHRpdGxlOiBSaWNoVGV4dC5hc1RleHQocmVzcG9uc2UuZGF0YS50aXRsZSksXHJcbiAgICAgICAgY29udGVudDogUmljaFRleHQuYXNIdG1sKHJlc3BvbnNlLmRhdGEuY29udGVudCksXHJcbiAgICAgICAgdXBkYXRlQXQ6IG5ldyBEYXRlKHJlc3BvbnNlLmxhc3RfcHVibGljYXRpb25fZGF0ZSkudG9Mb2NhbGVEYXRlU3RyaW5nKCdwdC1CUicsIHtcclxuICAgICAgICAgICAgZGF5OiAnMi1kaWdpdCcsXHJcbiAgICAgICAgICAgIG1vbnRoOiAnbG9uZycsXHJcbiAgICAgICAgICAgIHllYXI6ICdudW1lcmljJyxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgcG9zdFxyXG4gICAgICAgIH0gXHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOlsiZ2V0U2Vzc2lvbiIsIkhlYWQiLCJSaWNoVGV4dCIsImdldFByaXNtaWNDbGllbnQiLCJzdHlsZXMiLCJQb3N0IiwicG9zdCIsInRpdGxlIiwibWFpbiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsImFydGljbGUiLCJoMSIsInRpbWUiLCJ1cGRhdGVBdCIsImRpdiIsInBvc3RDb250ZW50IiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJjb250ZW50IiwiZ2V0U2VydmVyU2lkZVByb3BzIiwicmVxIiwicGFyYW1zIiwic2Vzc2lvbiIsInNsdWciLCJhY3RpdmVTdWJzY3JpcHRpb24iLCJyZWRpcmVjdCIsImRlc3RpbmF0aW9uIiwicGVybWFuZW50IiwicHJpc21pYyIsInJlc3BvbnNlIiwiZ2V0QnlVSUQiLCJTdHJpbmciLCJhc1RleHQiLCJkYXRhIiwiYXNIdG1sIiwiRGF0ZSIsImxhc3RfcHVibGljYXRpb25fZGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsImRheSIsIm1vbnRoIiwieWVhciIsInByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/posts/[slug].tsx\n");

/***/ }),

/***/ "./src/services/prismic.ts":
/*!*********************************!*\
  !*** ./src/services/prismic.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getPrismicClient\": () => (/* binding */ getPrismicClient)\n/* harmony export */ });\n/* harmony import */ var _prismicio_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prismicio/client */ \"@prismicio/client\");\n/* harmony import */ var _prismicio_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prismicio_client__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction getPrismicClient(req) {\n    const prismic = _prismicio_client__WEBPACK_IMPORTED_MODULE_0___default().client(process.env.PRISMIC_ENDPOINT, {\n        req,\n        accessToken: process.env.PRISMIC_ACCESS_TOKEN\n    });\n    return prismic;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvcHJpc21pYy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBd0M7QUFFakMsU0FBU0MsZ0JBQWdCLENBQUNDLEdBQWEsRUFBRTtJQUM1QyxNQUFNQyxPQUFPLEdBQUdILCtEQUFjLENBQzFCSyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsZ0JBQWdCLEVBQzVCO1FBQ0lMLEdBQUc7UUFDSE0sV0FBVyxFQUFFSCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0csb0JBQW9CO0tBRWhELENBQ0o7SUFFRCxPQUFPTixPQUFPLENBQUM7Q0FDbEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvc2VydmljZXMvcHJpc21pYy50cz9kMTA1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcmlzbWljIGZyb20gJ0BwcmlzbWljaW8vY2xpZW50JztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRQcmlzbWljQ2xpZW50KHJlcT86IHVua25vd24pIHtcclxuICAgIGNvbnN0IHByaXNtaWMgPSBQcmlzbWljLmNsaWVudChcclxuICAgICAgICBwcm9jZXNzLmVudi5QUklTTUlDX0VORFBPSU5ULFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmVxLFxyXG4gICAgICAgICAgICBhY2Nlc3NUb2tlbjogcHJvY2Vzcy5lbnYuUFJJU01JQ19BQ0NFU1NfVE9LRU5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgKVxyXG5cclxuICAgIHJldHVybiBwcmlzbWljO1xyXG59Il0sIm5hbWVzIjpbIlByaXNtaWMiLCJnZXRQcmlzbWljQ2xpZW50IiwicmVxIiwicHJpc21pYyIsImNsaWVudCIsInByb2Nlc3MiLCJlbnYiLCJQUklTTUlDX0VORFBPSU5UIiwiYWNjZXNzVG9rZW4iLCJQUklTTUlDX0FDQ0VTU19UT0tFTiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/services/prismic.ts\n");

/***/ }),

/***/ "@prismicio/client":
/*!************************************!*\
  !*** external "@prismicio/client" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@prismicio/client");

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

/***/ "prismic-dom":
/*!******************************!*\
  !*** external "prismic-dom" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("prismic-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/posts/[slug].tsx"));
module.exports = __webpack_exports__;

})();