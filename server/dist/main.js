"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("koa"));
const user_1 = __importDefault(require("./routers/user"));
const post_1 = __importDefault(require("./routers/post"));
const router_1 = __importDefault(require("@koa/router"));
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const app = new koa_1.default();
const port = process.env.PORT || 3000;
const router = new router_1.default({
    prefix: '/api/v1',
});
router.use(user_1.default.routes());
router.use(post_1.default.routes());
app.use(router.routes());
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
//# sourceMappingURL=main.js.map