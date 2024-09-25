const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Initialize Express App
const app = express();
app.use(bodyParser.json());

//  Secret key for JWT
// const SECRET_KEY = 'hello';


// Define User Schema and Model
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

// Signup Route (for creating a user)
// app.post('/api/signup', async (req, res) => {
//   const { email, password } = req.body;

//   // Hash the password
//   const salt = bcrypt.genSaltSync(10);
//   const hashedPassword = bcrypt.hashSync(password, salt);

//   try {
//     // Create and save the user in the database
//     const newUser = new User({
//       email,
//       password: hashedPassword,
//     });

//     await newUser.save();

//     res.status(201).json({ message: 'User registered successfully' });
//   } catch (error) {
//     res.status(400).json({ message: 'Error registering user', error });
//   }
// });

// Login Route
// app.post('/api/login', async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     // Find the user by email
//     const user = await User.findOne({ email });

//     if (!user) {
//       return res.status(401).json({ message: 'Invalid credentials' });
//     }

//     // Compare the provided password with the hashed password in the database
//     const isPasswordValid = bcrypt.compareSync(password, user.password);

//     if (!isPasswordValid) {
//       return res.status(401).json({ message: 'Invalid credentials' });
//     }

//     // Generate JWT Token
//     const token = jwt.sign({ id: user._id, email: user.email }, SECRET_KEY, {
//       expiresIn: '1h',
//     });

//     return res.json({ message: 'Login successful', token });
//   } catch (error) {
//     res.status(500).json({ message: 'Login failed', error });
//   }
// });

// Connect to MongoDB
mongoose.connect('mongodb+srv://omprakashyamavaram:prakash@cluster0.8hwup.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.log('Error connecting to MongoDB:'));


// Start Server
app.listen(4000, () => {
  console.log('Server running on http://localhost:4000');
});
