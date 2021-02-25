import mongoose from "mongoose";
let Schema = mongoose.Schema;

let devices = new Schema({});

mongoose.model = {};

let Device = mongoose.model("devices", devices);

export default Device;
