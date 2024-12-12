"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setBodyParser2Json = void 0;
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
require("dotenv/config");
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
const port = process.env.EXPRESS_PORT;
(0, routes_1.default)(app);
const setBodyParser2Json = () => {
    return app.use(body_parser_1.default.json());
};
exports.setBodyParser2Json = setBodyParser2Json;
app.listen(port, () => {
    console.log(`Express is listening at http://localhost:${port}`);
});
exports.default = app;
//# sourceMappingURL=index.js.map