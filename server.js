const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const tweetsRouter = require('./routes/tweets');

const app = express();
app.use(cors());
app.use(express.json()); // Middleware to parse JSON bodies
app.use('/api/tweets', tweetsRouter);

const PORT = process.env.PORT || 3000;

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});