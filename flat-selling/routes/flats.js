const express = require('express');
const { authMiddleware } = require('../middleware/authMiddleware');
const Flat = require('../models/Flat');
const router = express.Router();

// Get All Flats
router.get('/', async (req, res) => {
    try {
        const flats = await Flat.find().populate('user', ['name', 'email']);
        res.json(flats);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// Add a Flat (Protected Route)
router.post('/', authMiddleware, async (req, res) => {
    const { location, price, size, rooms } = req.body;

    try {
        const flat = new Flat({
            location,
            price,
            size,
            rooms,
            user: req.user.id,
        });

        await flat.save();
        res.json(flat);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;