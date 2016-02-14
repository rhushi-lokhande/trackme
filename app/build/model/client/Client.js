var mongoose = require('mongoose');
var clientSchema = new mongoose.Schema({
    name: String,
    isActive: Boolean,
    dateCreated: { type: Date, default: Date.now },
    dateUpdated: Date,
    dateDeleted: Date,
});
var Client = mongoose.model("Client", clientSchema);
module.exports = Client;

//# sourceMappingURL=../../../map/model/client/Client.js.map
