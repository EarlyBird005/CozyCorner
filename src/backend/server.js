import { app } from "./app.js";
import "dotenv/config";
import { connectDB } from "./database/db.js";

const port = process.env.PORT || 3100;

connectDB()
.then(() => {
    app.listen(port, () => {
        console.log(`Server is running on: http://localhost:${port}`);
    })
})
.catch((e) => console.log("MongoDB connection error", e));