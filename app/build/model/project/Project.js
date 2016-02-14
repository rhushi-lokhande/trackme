var mongoose = require('mongoose');
var ProjectSchema = new mongoose.Schema({
    name: String,
    description: String,
    technology: [String],
    developer: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Developer' }],
    manager: { type: mongoose.Schema.Types.ObjectId, ref: 'Developer' },
    startDate: Date,
    endDate: Date,
    isActive: Boolean,
    dateCreated: { type: Date, default: Date.now },
    dateUpdated: Date,
    dateDeleted: Date
});
var Project = mongoose.model("Project", ProjectSchema);
module.exports = Project;

//# sourceMappingURL=../../../map/model/project/Project.js.map
