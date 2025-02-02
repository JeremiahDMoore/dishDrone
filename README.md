# DishDrone

DishDrone is an innovative application designed to assist users in identifying dishes and recipes using drone-captured images. By leveraging image recognition technology, the app provides users with detailed information about various dishes.

## Features

- **Image Capture**: Utilize drones to capture images of dishes.
- **Dish Recognition**: Identify dishes from captured images using advanced image recognition algorithms.
- **Recipe Suggestions**: Provide detailed recipes and cooking instructions for identified dishes.
- **User Feedback**: Allow users to provide feedback on the accuracy of dish recognition.

## Technologies Used

- **React Native**: Framework for building native apps using React.
- **TensorFlow.js**: Library for machine learning in JavaScript.
- **Firebase**: Platform for backend services including authentication and database.
- **Drone SDK**: Software Development Kit for drone integration.

## Installation

To run this application locally:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/JeremiahDMoore/dishDrone.git
   cd dishDrone
   ```

2. **Install Dependencies**:
   Ensure you have [Node.js](https://nodejs.org/) and [React Native CLI](https://reactnative.dev/docs/environment-setup) installed. Then, run:
   ```bash
   npm install
   ```

3. **Configure Firebase**:
   - Create a Firebase project in the [Firebase Console](https://console.firebase.google.com/).
   - Add a web app to your Firebase project.
   - Copy the Firebase configuration and replace the existing configuration in the project.

4. **Start the Application**:
   ```bash
   react-native run-android
   ```
   or
   ```bash
   react-native run-ios
   ```

## Usage

- **Capture an Image**: Use a drone camera to take pictures of dishes.
- **Identify a Dish**: The app will process the image and attempt to recognize the dish.
- **Get a Recipe**: If recognized, a recipe and cooking instructions will be provided.
- **Provide Feedback**: Users can rate the accuracy of dish recognition and suggest improvements.


DishDrone was developed to explore the integration of drones and AI-powered image recognition for culinary applications.
