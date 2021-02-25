import mongoose from "mongoose";
let Schema = mongoose.Schema;

mongoose.model = {};

let Device = mongoose.model("device", new Schema({}));

export default Device;
