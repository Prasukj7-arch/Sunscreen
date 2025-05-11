# 🌞 Sunscreen Recommendation App

This is a simple web application that tells users whether they need to apply sunscreen based on their **UV index**, determined by their **city and country code**.

## 🚀 Features

- Input city and country to fetch UV index
- Clean and responsive UI using Bootstrap and custom CSS
- Animated feedback with emojis for better user interaction
- Displays recommendation on sunscreen usage
- Built-in validation for form inputs

## 🛠️ Tech Stack

- HTML5
- CSS3 (custom & Bootstrap)
- Node.js with Express (for backend)
- Embedded JavaScript (EJS) templating
- External weather API (e.g., OpenWeatherMap, openuv)

## 📷 Screenshots

![Form Screenshot](https://github.com/Prasukj7-arch/Sunscreen/images/Screenshot 2025-05-11 201835.jpg)

## 🌍 How It Works

1. User enters their city and country code.
2. The backend fetches location coordinates from a weather API (which includes latitude and longitude).
3. Using the above coordinates, fetches UV index data from a openUV API.
4. Based on the UV index:
   - **0–2**: No sunscreen needed 😎
   - **2+**: Sunscreen recommended 🧴
5. The result is animated and includes emojis for clarity.

## 🧪 How to Run Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/Prasukj7-arch/Sunscreen.git
   cd Sunscreen
   
2. Install dependencies:

   ```bash
   npm install
    
3. Create a .env file (add your weather API key and Uv API key):
   ```env
   API_KEY=your_key
    
4. Run the app:
   ```bash
   node app.js

5. Visit http://localhost:3000 in your browser.

## 🌤 API Used  

- **OpenWeatherMap One Call API**  
  Used to retrieve UV index based on user's location input (city and country code).  
  [Visit API Documentation](https://openweathermap.org/api/one-call-api)

- **OpenUV API**  
  Provides detailed UV index data.  
  [Visit API Documentation](https://www.openuv.io/dashboard)

## 🙋‍♂️ Author  
**Prasuk Jain**  
GitHub: [@Prasukj7-arch](https://github.com/Prasukj7-arch)

## 📁 Project Structure

```bash
Sunscreen/
├── public/
│ └── styles.css # External CSS
├── views/
│ └── index.ejs # Main EJS template
├── app.js # Main server file
├── package.json
└── README.md
