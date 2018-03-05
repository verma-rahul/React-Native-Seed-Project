import mongoose, { Schema } from 'mongoose';
const TodoSchema = mongoose.Schema({
    message: String
});

export default mongoose.model("TodoModel", TodoSchema);