import dbConnect from "../../lib/mongodb.js";
import User from "../../actions/User.js";

export async function GET(req, res) {
  
  await dbConnect();

  try {
    const users = await User.find({});
    
    return new Response(JSON.stringify(users), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error fetching users:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
