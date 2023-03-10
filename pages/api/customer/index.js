import Customer from "@/models/Customers";
import connectDB from "@/utils/connectDB";

export default async function handler(req, res) {
  try {
    await connectDB();
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ status: "failed", message: "Error in connecting to db !" });
  }

  if (req.method === "POST") {
    const data = req.body.data;

    if (!data.name || !data.lastName || !data.email) {
      res.status(400).json({ status: "failed", message: "Invalid Data" });
    }

    try {
      const customer = await Customer.create(data);
      res
        .status(201)
        .json({ status: "success", message: "data created", data : customer });
    } catch (err) {
      console.log(err);
      res
        .status(500)
        .json({ status: "failed", message: "Error in storing data in DB" });
    }
  }
}
