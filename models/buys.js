const mongoose = require("mongoose");
const productSchema = mongoose.Schema({


    language: { type: String, require: true },
    name: { type: String, require: true },
    awards: {
        type: Object,
        require: true,
        cantAwards: { type: Number, require: true },
        nameAwards: []
    },
    info: {
        type: Object,
        require: true,
        genre: { type: String, require: true },
        general: {
            director: { type: String, require: true },
            music: { type: String, require: true },
            numSeasons: { type: Number, require: true },
        }
    }

});
module.exports = mongoose.model('ProductCollection', productSchema);