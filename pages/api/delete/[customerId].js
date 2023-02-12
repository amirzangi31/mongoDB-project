import Customer from "@/models/Customers";
import connectDB from "../../../utils/connectDB";

export default async function handler(req, res) {
  try {
    await connectDB();
  } catch (err) {
    console.log(err);
    res.status(500).json({status : "failed" , message : "Error in connecting to db!"})
  }

  if(req.method === "DELETE"){
    const id = req.query.customerId;

    try {
      await Customer.deleteOne({_id : id})
      console.log("success delete");
      res.status(200).json({status : "success" , message : "data deleted"})
      
    } catch (err) {
        console.log(err.message);

        res.status(500).json({status : "failed" , message : "Error in deleting data from database"})

    } 

  }
  

}
