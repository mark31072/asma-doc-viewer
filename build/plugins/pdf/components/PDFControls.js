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
    var _a = (0, react_1.useContext)(state_1.PDFContext), _b = _a.state, mainState = _b.mainState, paginated = _b.paginated, zoomLevel = _b.zoomLevel, numPages = _b.numPages, dispatch = _a.dispatch;
    var currentDocument = (mainState === null || mainState === void 0 ? void 0 : mainState.currentDocument) || null;
    var handlePrint = function () {
        var _a, _b;
        var print_base64 = (_a = currentDocument === null || currentDocument === void 0 ? void 0 : currentDocument.fileData) === null || _a === void 0 ? void 0 : _a.toString().slice(((_b = currentDocument === null || currentDocument === void 0 ? void 0 : currentDocument.fileData) === null || _b === void 0 ? void 0 : _b.toString().indexOf(',')) + 1);
        (0, print_js_1.default)({
            printable: print_base64,
            type: 'pdf',
            base64: true,
        });
    };
    return (react_1.default.createElement(Container, { id: "pdf-controls" },
        paginated && numPages > 1 && react_1.default.createElement(PDFPagination_1.default, null),
        (currentDocument === null || currentDocument === void 0 ? void 0 : currentDocument.fileData) && (react_1.default.createElement(DownloadButton, { id: "pdf-download", href: currentDocument === null || currentDocument === void 0 ? void 0 : currentDocument.fileData, download: (currentDocument === null || currentDocument === void 0 ? void 0 : currentDocument.fileName) || (currentDocument === null || currentDocument === void 0 ? void 0 : currentDocument.uri) },
            react_1.default.createElement(icons_1.DownloadPDFIcon, { color: "#000", size: "75%" }))),
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
var ModalOverlay = styled_components_1.default.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n"], ["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n"])));
var ModalContent = styled_components_1.default.div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  background-color: #fff;\n  padding: 20px;\n  max-width: 80%;\n  max-height: 80%;\n  overflow: auto;\n  position: relative;\n"], ["\n  background-color: #fff;\n  padding: 20px;\n  max-width: 80%;\n  max-height: 80%;\n  overflow: auto;\n  position: relative;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;
