require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs');


const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const wasteDisposalRoutes = require('./routes/wasteDisposalRoutes');
const classificationRoutes = require('./routes/classificationRoutes'); 

const Classification = require('./models/Classification');

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Error connecting to MongoDB:', error));


const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, './uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname)),
});

const upload = multer({ storage });

app.get('/', (req, res) => res.send('API is running...'));

app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/waste-disposal', wasteDisposalRoutes);
app.use('/api/classifications', classificationRoutes);


app.post('/api/classify', upload.single('image'), async (req, res) => {
  if (!req.file) return res.status(400).send('No image uploaded');

  try {
   
    const newClassification = new Classification({
      imageUrl: `/uploads/${req.file.filename}`,
      result: 'unknown' 
    });

    await newClassification.save();

    res.status(200).json({ message: 'Image uploaded successfully', result: 'unknown' });
  } catch (err) {
    console.error('Error:', err);
    res.status(500).send('Error processing image');
  }
});

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
