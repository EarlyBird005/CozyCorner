import express from "express";
import { allUser, userDelete, userRegister } from "../controllers/user.controller";

const router = express.Router();

// router.route("/").get((req, res) => {
//     console.log("\n\tregister post\n");
//     res.status(201).send("hi");
// });

router.post("/register", userRegister);

router.get("/all", allUser)

router.delete("/delete", userDelete);

/*
http://localhost:5000/api/user/register

{
    "fullName": "",
    "email": "",
    "mobileNumber": "",
    "password": ""
}
*/

export default router;