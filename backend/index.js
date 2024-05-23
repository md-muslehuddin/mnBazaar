const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { createConnection, closeConnection } = require('./db');
const User = require('./models/User');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

app.post('/signup', async (req, res) => {
    try {
        await createConnection();
        const { name, phone, username, password } = req.body;

        const existingUser = await User.findOne({ username });
        if (existingUser) {
            // 409 Conflict
            res.status(409).json({ error: 'User already exists' });
            await closeConnection();
            return;
        }

        // const newUser = new User({ name, phone, username, password });
        const newUser = new User({
            name: name.toUpperCase(),
            phone,
            username: username.toLowerCase(),
            password
        });
        await newUser.save();

        res.status(201).json({ message: 'User registered successfully' });
        await closeConnection();
    } catch (error) {
        /* console.error('Error registering user:', error); */
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.post('/', async (req, res) => {
    try {
        await createConnection();
        const { username, password } = req.body;

        const user = await User.findOne({ username: username.toLowerCase(), password });
        if (!user) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        res.status(200).json({ message: 'Login successful' });
        await closeConnection();
    } catch (error) {
        /* console.error('Error logging in:', error); */
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
