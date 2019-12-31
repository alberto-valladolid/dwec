"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexController {
    index(req, res) {
        //res.send('Hello indexController'); 
        res.json({ text: 'Visita /api/horarios' });
    }
}
exports.indexController = new IndexController();
