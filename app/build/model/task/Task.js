var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');
var TaskSchema = new mongoose.Schema({
    title: String,
    description: String,
    complitionDate: Date,
    developer: { type: mongoose.Schema.Types.ObjectId, ref: 'Developer' },
    project: { type: mongoose.Schema.Types.ObjectId, ref: 'Project' },
    status: String,
    time: Number,
    isDeleted: { type: Boolean, default: false },
    dateCreated: { type: Date, default: Date.now },
    dateUpdated: { type: Date, default: "" },
    dateDeleted: { type: Date, default: "" },
});
TaskSchema.plugin(mongoosePaginate);
var Task = mongoose.model("Task", TaskSchema);
module.exports = Task;

//# sourceMappingURL=../../../map/model/task/Task.js.map
