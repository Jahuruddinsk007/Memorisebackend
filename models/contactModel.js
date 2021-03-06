const mongoose = require('mongoose');

let ContactSchema = mongoose.Schema({
    id: { type: 'string' },
    title: { type: 'string', required: true },
    mobile: { type: 'string' },
    body: { type: 'string', required: true },
    email: { type: 'string', required: true },
    name: { type: 'string', required: true },
    createdAt: { type: Date, default: Date.now },
    isSolved: { type: 'bool', default: false },
}, { timestamp: true });

module.exports = mongoose.model('contacts', ContactSchema)