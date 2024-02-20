"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var common_1 = require("../../../components/common");
var state_1 = require("../state");
var actions_1 = require("../state/actions");
var reducer_1 = require("../state/reducer");
var icons_1 = require("./icons");
var PDFPagination_1 = __importDefault(require("./PDFPagination"));
var print_js_1 = __importDefault(require("print-js"));
var PDFControls = function () {
    var _a;
    var _b = (0, react_1.useContext)(state_1.PDFContext), _c = _b.state, mainState = _c.mainState, paginated = _c.paginated, zoomLevel = _c.zoomLevel, numPages = _c.numPages, dispatch = _b.dispatch;
    var currentDocument = (mainState === null || mainState === void 0 ? void 0 : mainState.currentDocument) || null;
    // const handlePrint = () => {
    //   console.log(currentDocument)
    //   console.log(currentDocument?.fileData)
    //   console.log('Printing...');
    //   const fileData = currentDocument?.fileData?.toString()
    //   const printFrame = document.createElement('iframe');
    //   printFrame.style.visibility = 'hidden';
    //   printFrame.src = "./test.pdf";
    //   document.body.appendChild(printFrame);
    //   // Set focus and print the content
    //   printFrame.contentWindow?.focus();
    //   printFrame.contentWindow?.print();
    //   // Remove the iframe after printing
    //   document.body.removeChild(printFrame);
    // };
    // const printIframe = (id: string) => {
    //   const iframe = document.getElementById(id) as HTMLIFrameElement;
    //   const iframeWindow = iframe.contentWindow || window;
    //   iframe.focus();
    //   iframeWindow.print();
    //   return false;
    // };
    var handlePrint = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            console.log(currentDocument);
            (0, print_js_1.default)({
                printable: currentDocument === null || currentDocument === void 0 ? void 0 : currentDocument.fileData,
                type: 'pdf',
            });
            return [2 /*return*/];
        });
    }); };
    return (react_1.default.createElement(Container, { id: "pdf-controls" },
        paginated && numPages > 1 && react_1.default.createElement(PDFPagination_1.default, null),
        (currentDocument === null || currentDocument === void 0 ? void 0 : currentDocument.fileData) && (react_1.default.createElement(DownloadButton, { id: "pdf-download", href: currentDocument === null || currentDocument === void 0 ? void 0 : currentDocument.fileData, download: (currentDocument === null || currentDocument === void 0 ? void 0 : currentDocument.fileName) || (currentDocument === null || currentDocument === void 0 ? void 0 : currentDocument.uri) },
            react_1.default.createElement(icons_1.DownloadPDFIcon, { color: "#000", size: "75%" }))),
        react_1.default.createElement("iframe", { id: "receipt", src: (_a = currentDocument === null || currentDocument === void 0 ? void 0 : currentDocument.fileData) === null || _a === void 0 ? void 0 : _a.toString(), style: { width: "100%", height: "100%" } }),
        react_1.default.createElement(ControlButton, { id: "pdf-print", onClick: handlePrint },
            react_1.default.createElement(icons_1.PrintPDFIcon, { color: "#000", size: "65%" })),
        react_1.default.createElement(ControlButton, { id: "pdf-zoom-out", onMouseDown: function () { return dispatch((0, actions_1.setZoomLevel)(zoomLevel - 0.1)); } },
            react_1.default.createElement(icons_1.ZoomOutPDFIcon, { color: "#000", size: "80%" })),
        react_1.default.createElement(ControlButton, { id: "pdf-zoom-in", onMouseDown: function () { return dispatch((0, actions_1.setZoomLevel)(zoomLevel + 0.1)); } },
            react_1.default.createElement(icons_1.ZoomInPDFIcon, { color: "#000", size: "80%" })),
        react_1.default.createElement(ControlButton, { id: "pdf-zoom-reset", onMouseDown: function () { return dispatch((0, actions_1.setZoomLevel)(reducer_1.initialPDFState.zoomLevel)); }, disabled: zoomLevel === reducer_1.initialPDFState.zoomLevel },
            react_1.default.createElement(icons_1.ResetZoomPDFIcon, { color: "#000", size: "70%" })),
        numPages > 1 && (react_1.default.createElement(ControlButton, { id: "pdf-toggle-pagination", onMouseDown: function () { return dispatch((0, actions_1.setPDFPaginated)(!paginated)); } },
            react_1.default.createElement(icons_1.TogglePaginationPDFIcon, { color: "#000", size: "70%", reverse: paginated })))));
};
exports.default = PDFControls;
var Container = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  position: sticky;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  justify-content: flex-end;\n  padding: 8px;\n  background-color: ", ";\n  box-shadow: 0px 2px 3px #00000033;\n\n  @media (max-width: 768px) {\n    padding: 6px;\n  }\n"], ["\n  display: flex;\n  position: sticky;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  justify-content: flex-end;\n  padding: 8px;\n  background-color: ", ";\n  box-shadow: 0px 2px 3px #00000033;\n\n  @media (max-width: 768px) {\n    padding: 6px;\n  }\n"])), function (props) { return props.theme.tertiary; });
var ControlButton = (0, styled_components_1.default)(common_1.Button)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 30px;\n  height: 30px;\n  @media (max-width: 768px) {\n    width: 25px;\n    height: 25px;\n  }\n"], ["\n  width: 30px;\n  height: 30px;\n  @media (max-width: 768px) {\n    width: 25px;\n    height: 25px;\n  }\n"])));
var DownloadButton = (0, styled_components_1.default)(common_1.LinkButton)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  width: 30px;\n  height: 30px;\n  @media (max-width: 768px) {\n    width: 25px;\n    height: 25px;\n  }\n"], ["\n  width: 30px;\n  height: 30px;\n  @media (max-width: 768px) {\n    width: 25px;\n    height: 25px;\n  }\n"])));
var PrintModal = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n"], ["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n"])));
var PrintButton = (0, styled_components_1.default)(common_1.Button)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  background-color: #007bff; /* Blue color, you can change this */\n  color: #ffffff; /* White text, you can change this */\n  padding: 10px 20px;\n  font-size: 16px;\n  cursor: pointer;\n  border: none;\n  border-radius: 5px;\n\n  &:hover {\n    background-color: #0056b3; /* Darker blue on hover, you can change this */\n  }\n"], ["\n  background-color: #007bff; /* Blue color, you can change this */\n  color: #ffffff; /* White text, you can change this */\n  padding: 10px 20px;\n  font-size: 16px;\n  cursor: pointer;\n  border: none;\n  border-radius: 5px;\n\n  &:hover {\n    background-color: #0056b3; /* Darker blue on hover, you can change this */\n  }\n"])));
var CloseButton = (0, styled_components_1.default)(common_1.Button)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  background-color: #dc3545; /* Red color, you can change this */\n  color: #ffffff; /* White text, you can change this */\n  padding: 10px 20px;\n  font-size: 16px;\n  cursor: pointer;\n  border: none;\n  border-radius: 5px;\n  margin-top: 10px; /* Adjust as needed */\n\n  &:hover {\n    background-color: #c82333; /* Darker red on hover, you can change this */\n  }\n"], ["\n  background-color: #dc3545; /* Red color, you can change this */\n  color: #ffffff; /* White text, you can change this */\n  padding: 10px 20px;\n  font-size: 16px;\n  cursor: pointer;\n  border: none;\n  border-radius: 5px;\n  margin-top: 10px; /* Adjust as needed */\n\n  &:hover {\n    background-color: #c82333; /* Darker red on hover, you can change this */\n  }\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
