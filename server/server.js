const express = require("express");
const dotenv = require("dotenv").config();

const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");

const PORT = process.env.PORT || 5002;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/wods", require("./routes/wodsRoutes"));

// Serve frontend
if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "../frontend/build")));
	app.get("*", (req, res) => {
		res.sendFile(
			path.resolve(__dirname, "../", "frontend", "build", "index.html"),
		);
	});
} else {
	app.get("/", (req, res) => {
		res.send("Please set to production");
	});
}

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
