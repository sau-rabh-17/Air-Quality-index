# Air Quality Monitoring Web Application

This is a simple web application that allows users to check the air quality index (AQI) for a specific city. The application fetches data from an external API and displays various air quality metrics such as CO, NO2, SO2, O3, and PM10.

## Features

- **City-Based AQI Search**: Users can input a city name to fetch the current air quality data.
- **AQI Meter**: Displays the overall AQI on a gradient meter, showing the quality from good to hazardous.
- **Detailed Pollutant Data**: Shows concentrations of specific pollutants like CO, NO2, SO2, O3, and PM10.
- **User Feedback**: If the city is not found, a message is displayed to the user.
- **Responsive Design**: The application is styled to be responsive and visually appealing.

## Technologies Used

- **Node.js**: The backend server is built using Node.js and Express.js.
- **Express.js**: Used for handling routes and rendering views.
- **EJS**: Embedded JavaScript templates are used for rendering dynamic HTML content.
- **Axios**: A promise-based HTTP client used to fetch data from the Air Quality API.
- **CSS**: For styling the application and making it responsive.
- **dotenv**: For managing API keys and other environment variables securely.

## Installation

1. **Clone the repository:**
   https://github.com/sau-rabh-17/air-quality-index.git
   
3. Navigate to the project directory:
   cd air-quality-monitoring

4. Install the dependencies:
   npm install

5. Create a .env file in the root directory to store your API key:
   API_KEY=your_api_key_here

6. Start the server:
   npx nodemon index.js

## Get Your API Key

How to Obtain Your API Key from API Ninjas
To get your API key from API Ninjas, follow these steps:

Step 1: Sign Up or Log In
  1. Visit the API Ninjas Website:
     <ul><li>Go to https://api-ninjas.com.</li></ul>

  2. Create an Account or Log In:
     <ul>
       <li>If you already have an account, click on "Log In" at the top-right corner and enter your credentials.</li>
       <li>If you don’t have an account, click on "Sign Up"</li>
     </ul>
     
Step 2: Access Your API Dashboard
   1. Log In: After logging in, you’ll be directed to your account dashboard.
   2. Navigate to Your Account:
      <ul><li>If you’re not automatically redirected, click on "My Account" in the upper right corner of the navigation bar to access your profile and settings.</li></ul>

Step 3: Get Your API Key
   1. Locate the API Key Section:
      <ul><li>On your profile page, find the section labeled "API Key."</li></ul>
   2. Reveal Your API Key:
      <ul><li>Click on the "Show API Key" button to reveal your unique API key.</li></ul>
   3. Copy Your API Key:
      <ul><li>Copy the API key to use in your applications. Ensure you store it securely.</li></ul>



## Usage
Home Page: Enter a city name in the search box and click "Submit" to get the air quality data.
AQI Meter: The AQI meter will show the overall air quality index on a color-coded bar, and detailed pollutant data will be displayed below.
Error Handling: If the city is not found, a "City not found" message will appear, along with a button to return to the home page.

## Project Structure

/node_modules/          # Directory where all installed dependencies are stored

/public
  /style
    - index.css          # CSS file for styling the Home Page
    - quality.css        # CSS file for styling the AQI page
    - notfound.css       # CSS file for styling the 'not found' page

/views
  - index.ejs            # EJS template for the home page
  - quality.ejs          # EJS template for displaying AQI data
  - notfound.ejs         # EJS template for the 'not found' page

- .env                   # Environment variables file
- .gitignore             # Git ignore file
- index.js               # Main application file
- package-lock.json      # Ensures consistency across different environments
- package.json           # Project metadata and dependency management
- README.md              # This README file

## API Reference
The application uses the API Ninjas Air Quality API to fetch air quality data.
<ul>
<li>Endpoint: https://api.api-ninjas.com/v1/airquality?city=<city_name></li>
<li>Headers: Requires an X-Api-Key header with your API key.</li>
</ul>

## Contributing
Contributions are welcome! If you would like to contribute, please fork the repository and create a pull request.

## License
This project is licensed under the MIT License.
