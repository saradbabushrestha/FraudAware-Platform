# Fisherman

**Fisherman** is a social engineering tool designed to support Facebook and Instagram for educational purposes only. This tool aims to raise awareness about cybersecurity and encourages users to be cautious when sharing their credentials online.

## Installation

To get started with Fisherman, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/wasdthedebugger/fisherman
   ```

2. **Navigate to the project directory:**

   ```bash
   cd fisherman
   ```

3. **Install the necessary dependencies:**

   ```bash
   npm install
   ```

4. **Configure your environment:**

   Create a `.env` file in the root of the project directory and add the following line:

   ```
   PASSWORD=yourpassword
   ```

   Replace `yourpassword` with a secure password of your choice.

5. **Run the application:**

   ```bash
   npm run dev
   ```

## Usage

Once the application is running, you can use it to test social engineering scenarios with Facebook and Instagram. To view the list of victims, navigate to:

```
http://localhost:3000/victims
```

You will need to enter the password you configured in the `.env` file to access this UI.

## Victim Data

The list of victims is stored in the `db.json` file. The UI at `/victims` provides a convenient way to view and manage this data.

## Disclaimer

**Fisherman** is created for educational purposes only. Any misuse of this tool is strictly prohibited. The developer does not condone or endorse any illegal or unethical activities. Use this tool responsibly and adhere to all applicable laws and guidelines.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

If you have any questions or need support, please open an issue on the [GitHub repository](https://github.com/wasdthedebugger/fisherman).

---

**Fisherman** is intended to help individuals understand the importance of cybersecurity and to improve their awareness of potential threats.
