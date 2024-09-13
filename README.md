# Phishing Awareness Application

This is an Express.js-based application designed to raise awareness about online phishing attacks. It simulates a phishing scenario, allowing users to interact with fake login pages for platforms like Facebook and Instagram. It also has an admin panel to view the captured credentials, protected by a password stored in the `.env` file.

## Features

- Fake login pages for popular platforms (Facebook, Instagram).
- Captures and stores user credentials in a `db.json` file.
- Password-protected admin page to view captured credentials.
- Simple user interface using EJS templating engine.
- Environment variables support using `dotenv`.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/saradbabushrestha/FraudAware-Platform.git
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the root of your project and add the following:
    ```
    PASSWORD=your_secure_password
    ```

4. Create a `db.json` file in the root of your project with an empty array:
    ```json
    []
    ```

5. Start the server:
    ```bash
    npm start
    ```

    By default, the server runs on `http://localhost:3000`.

## Usage

1. After starting the server, you will be prompted to select a platform (e.g., Facebook or Instagram).
2. The corresponding login page will render. Enter an email and password to simulate the phishing attack.
3. Submitted credentials are stored in the `db.json` file.
4. To access the admin page to view the captured credentials, navigate to `http://localhost:3000/victims` and enter the password you set in the `.env` file.

## File Structure

## Dependencies

- [Express](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js.
- [EJS](https://ejs.co/) - Simple templating engine that lets you generate HTML with plain JavaScript.
- [dotenv](https://www.npmjs.com/package/dotenv) - Loads environment variables from a `.env` file into `process.env`.
- [body-parser](https://www.npmjs.com/package/body-parser) - Middleware for parsing incoming request bodies.
- [fs](https://nodejs.org/api/fs.html) - Node.js file system module for reading and writing files.
- [path](https://nodejs.org/api/path.html) - Utility module for working with file and directory paths.

## License

This project is for educational and awareness purposes only. It should **not** be used for malicious activities. Always ensure you have proper authorization before running any penetration testing or security exercises.

---

**Disclaimer**: This project is strictly for learning and raising awareness about phishing techniques. Do not use this code to perform illegal activities.

