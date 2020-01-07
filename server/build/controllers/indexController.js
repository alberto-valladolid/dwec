"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexController {
    index(req, res) {
        //res.send('hola mundo'); 
        res.json({ text: 'bienvenido a mi servidor api' });
    }
}
exports.indexController = new IndexController();
