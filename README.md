# FormFlow

FormFlow is a React-based project designed to create and manage dynamic multi-step forms with ease. It simplifies the process of gathering user input by providing a clean, user-friendly interface.

## Features

- **Multi-Step Forms**: Create forms with multiple steps, guiding users through a structured process.
- **Validation**: Includes form field validation for user inputs.
- **Progress Indicator**: Displays a progress bar or step tracker to show users their current position in the form flow.
- **Responsive Design**: Fully responsive and optimized for mobile and desktop devices.
- **State Management**: Handles form data and navigation seamlessly.

## Demo

Check out the live demo [here](https://form-flow-d0vq921e1-polbesalus-projects.vercel.app/).

## Screenshots

### Step 1: Form Start  
<img width="1276" alt="Captura de pantalla 2025-01-26 a las 14 45 41" src="https://github.com/user-attachments/assets/91784ebc-409d-4e23-9055-0c2f1bef8a3d" />

### Step 2: Intermediate Step  
<img width="1276" alt="Captura de pantalla 2025-01-26 a las 14 45 55" src="https://github.com/user-attachments/assets/3b68d8b5-413d-4aa0-883f-44877a2867a9" />

### Step 3: Form Completion  
<img width="1276" alt="Captura de pantalla 2025-01-26 a las 14 46 00" src="https://github.com/user-attachments/assets/b869d31d-b0d1-4bbc-8489-fb56ba5a3715" />

### Step 4: Form Published  
<img width="1276" alt="Captura de pantalla 2025-01-26 a las 14 55 19" src="https://github.com/user-attachments/assets/fbb43fc8-e21a-4cf5-94ab-996ab74e9daf" />

---

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/polbesalu/FormFlow.git
   cd FormFlow
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

2. **Build the production version**:

   ```bash
   npm run build
   ```
   
4. **Start the development server**:

   ```bash
   npm start
   ```

5. Open your browser and navigate to `http://localhost:3000`.

---

## File Structure

- **`src`**: Main application code.
  - **`components`**: Contains reusable React components such as FormStep, InputField, and ProgressBar.
  - **`pages`**: Page-specific components for rendering the multi-step form.
  - **`context`**: Centralized state management using React Context API.
  - **`styles`**: CSS files and modules for styling the application.
- **`public`**: Static files such as images and the `index.html` file.

---

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **React Router**: For navigation between steps in the multi-step form.
- **React Context API**: State management for form data.
- **CSS Modules**: For component-scoped styling.
- **Vercel**: Deployment platform for hosting the application.

---

## How to Use

1. **Start the Form**: Begin by filling out the initial fields in Step 1.
2. **Navigate Steps**: Use the “Next” and “Back” buttons to move through the form steps.
3. **Complete and Submit**: Upon completing all steps, the form can be submitted to view a summary of the inputs (or for further processing).

---

## Future Improvements

- **Backend Integration**: Add a backend to save form data or send it to a database.
- **Conditional Steps**: Enable dynamic steps based on user input.
- **Improved Validation**: Support for more complex validation rules and error messages.
- **Custom Styling**: Allow users to customize the appearance of the form.

---

## License

This project is licensed under the [MIT License](./LICENSE).
