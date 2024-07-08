const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/api/report', async (req, res) => {
    try {
        const response = await axios.get('dhis2 instance endpoint', {
            auth: {
                username: process.env.DHIS2_USERNAME, // Use environment variables
                password: process.env.DHIS2_PASSWORD  // Use environment variables
            }
        });
        res.json(response.data);
    } catch (error) {
        console.error(error);  // Log the error for debugging
        res.status(500).send('An error occurred while fetching the report');
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
