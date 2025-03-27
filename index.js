const express = require("express");
const cors = require("cors");
const connectDB = require("./db.js");
const surveyRoutes = require("./routes/survey.js");
const responseRoutes = require("./routes/response.js");
const errorHandler = require("./middleware/error.js");

require("dotenv").config();

// Initialize Express app
const app = express();
connectDB();

// (async () => {
//     const db = await connectDB();
//     const collection = db.collection('comments'); // Example collection
//     const users = await collection.find().toArray();
//     console.log(users);
//   })();
// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/surveys", surveyRoutes);
app.use("/api/responses", responseRoutes);

// Error Handling
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
