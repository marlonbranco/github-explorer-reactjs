"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.helloWorld = void 0;
var CreateUser_1 = __importDefault(require("./services/CreateUser"));
function helloWorld(request, response) {
    var user = CreateUser_1.default({
        name: 'Marlon',
        email: 'marlonaparecido18@gmail.com',
        password: '123456',
        techs: [
            'NodeJS',
            'ReactJS',
            'React Native',
            {
                title: 'JavaScript',
                experience: 100,
            }
        ]
    });
    return response.json(user);
}
exports.helloWorld = helloWorld;
