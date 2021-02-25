import connectDB from "middleware/deviceController";
import Device from "models/devices";

const handler = async (req, res) => {
  try {
    res.setHeader('Content-Type', 'application/json')

    find = await Device.find({});
    res.status(200).json(find);
  } catch (error) {
    console.log(error);
  }
};

export default connectDB(handler);
