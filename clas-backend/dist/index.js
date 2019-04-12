"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
dotenv_1.default.config();
const port = process.env.SERVER_PORT;
const app = express_1.default();
app.get("/", (req, res) => {
    res.json("index");
});
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(port);
});
//# sourceMappingURL=index.js.map