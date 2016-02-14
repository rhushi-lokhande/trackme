var mongoose = require('mongoose');
var leaves = new mongoose.Schema({
    from: Date,
    to: Date,
    reason: String,
    status: { type: String, default: 'wt' },
    noOfDays: Number
});
var developerSchema = new mongoose.Schema({
    fName: String,
    lName: String,
    email: [String],
    mobileNo: [String],
    dob: Date,
    experience: String,
    designation: String,
    technology: [String],
    project: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Project' }],
    userName: String,
    password: String,
    isActive: Boolean,
    dateCreated: { type: Date, default: Date.now },
    dateUpdated: Date,
    dateDeleted: Date,
    leaves: [leaves]
});
var Developer = mongoose.model("Developer", developerSchema);
module.exports = Developer;

//# sourceMappingURL=../../../map/model/developer/Developer.js.map
