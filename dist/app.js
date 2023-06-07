"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
exports.app = app;
app.use(body_parser_1.default.json());
app.get("/", (req, res) => {
    res.send("Hello, VS Code!!!");
});
const tasks = [
    {
        category: "Private",
        title: "買い物",
        done: false,
    }
];
app.get('/tasks', (req, res) => {
    res.json(tasks);
});
app.post('/tasks', (req, res) => {
    const received = req.body;
    if ("category" in received && "title" in received && "done" in received) {
        const newTask = {
            category: received.category,
            title: received.title,
            done: received.done
        };
        tasks.push(newTask);
        console.log('Add:', newTask);
        res.send("An item has been added.");
    }
    else {
        res.status(400).send("Parameters are invalid.");
    }
});
//# sourceMappingURL=app.js.map