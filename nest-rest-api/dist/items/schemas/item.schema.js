"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moongose = require("mongoose");
exports.ItemSchema = new moongose.Schema({
    name: String,
    qty: Number,
    description: String
});
//# sourceMappingURL=item.schema.js.map