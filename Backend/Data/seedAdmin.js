import Admin from "../models/user.js";
import bcrypt from "bcrypt";

const temPasswordHash = await bcrypt.hash("12345678", 12);

const Admins = {
  firstName: "kavitha",
  lastName: "kariyapperuma",
  email: "kavihansi98@gmail.com",
  accountType: "admin",
  password: temPasswordHash,
};

const seedAdmin = async () => {
  try {
    await Admin.findOneAndDelete({ email: Admins.email });
    await Admin.create(Admins);
    console.log("Admin is created");
  } catch (err) {
    console.log("Admin Creation Failed...", err.message);
  }
};

export default seedAdmin;
