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
    var _d = (0, react_1.useState)(true), isLoading = _d[0], setIsLoading = _d[1];
    var handleMessage = function (event) {
        if (event.data.action === 'receipt-loaded') {
            setIsLoading(false);
        }
    };
    var printIframe = function (id) {
        var iframe = document.frames
            ? document.frames[id]
            : document.getElementById(id);
        var iframeWindow = iframe.contentWindow || iframe;
        iframe.focus();
        iframeWindow.print();
        return false;
    };
    (0, react_1.useEffect)(function () {
        window.addEventListener('message', handleMessage);
        return function () {
            window.removeEventListener('message', handleMessage);
        };
    }, []);
    var handlePrint = function () {
        setIsLoading(true);
        printIframe('receipt');
    };
    return (react_1.default.createElement(Container, { id: "pdf-controls" },
        paginated && numPages > 1 && react_1.default.createElement(PDFPagination_1.default, null),
        (currentDocument === null || currentDocument === void 0 ? void 0 : currentDocument.fileData) && (react_1.default.createElement(DownloadButton, { id: "pdf-download", href: currentDocument === null || currentDocument === void 0 ? void 0 : currentDocument.fileData, download: (currentDocument === null || currentDocument === void 0 ? void 0 : currentDocument.fileName) || (currentDocument === null || currentDocument === void 0 ? void 0 : currentDocument.uri) },
            react_1.default.createElement(icons_1.DownloadPDFIcon, { color: "#000", size: "75%" }))),
        react_1.default.createElement("iframe", { id: "receipt", src: (_a = currentDocument === null || currentDocument === void 0 ? void 0 : currentDocument.fileData) === null || _a === void 0 ? void 0 : _a.toString(), style: { width: "100%", height: "100%" } }),
        react_1.default.createElement(ControlButton, { id: "pdf-print", onClick: function () { return printIframe('receipt'); } }, isLoading ? 'Loading...' : 'Print Receipt'),
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
