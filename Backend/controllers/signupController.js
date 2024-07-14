const Customer = require('../models/customerModel');

exports.signup = async (req, res) => {
    const { firstName, lastName, email, mobile, password } = req.body;

    try {
        // Check if email already exists
        const existingCustomer = await Customer.findOne({ email });
        if (existingCustomer) {
            return res.status(400).json({ success: false, message: 'Email already exists' });
        }

        // Create new customer
        const newCustomer = new Customer({ firstName, lastName, email, mobile, password });
        await newCustomer.save();

        res.status(201).json({ success: true, message: 'Signup successful' });
    } catch (error) {
        console.error('Error signing up:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};
