const express = require('express');
const app = express();

app.use(express.json());

app.post('/bfhl', (req, res) => {
    const data = req.body.data;
    
    let numbers = [];
    let alphabets = [];
    let highestLowercase = '';

    data.forEach(item => {
        if (!isNaN(item)) {
            numbers.push(item);
        } else if (typeof item === 'string' && /^[a-zA-Z]+$/.test(item)) {
            alphabets.push(item.toUpperCase());

            // Check and store the highest lowercase alphabet
            if (item === item.toLowerCase() && (!highestLowercase || item > highestLowercase)) {
                highestLowercase = item;
            }
        }
    });

    res.json({
        "is_success": true,
        "user_id": "john_doe_17091999", // Replace with dynamic user_id generation if needed
        "email": "john@xyz.com",
        "roll_number": "ABCD123",
        "numbers": numbers,
        "alphabets": alphabets,
        "highest_lowercase": highestLowercase || null
    });
});

app.get('/bfhl', (req, res) => {
    res.status(200).json({
        "operation_code": 1
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
