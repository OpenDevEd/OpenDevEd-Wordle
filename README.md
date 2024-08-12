# Wordle Game 

https://www.youtube.com/watch?v=OfiXDqDYm4o

Welcome to the Wordle Game! This web-based application, crafted with React, provides a fun and interactive way to test and improve your word skills. Whether you're a seasoned player or new to Wordle, this game offers an engaging experience for everyone.

## Features

### 📱 Responsive Design
- Experience a seamless game interface across all devices—desktops, tablets, and smartphones. The game adjusts beautifully to any screen size.

### 🌟 Animations
- Enjoy visually appealing animations that make the gameplay more exciting and dynamic.



### 🔄 State Management
- The Context API manages state across components efficiently, ensuring a smooth and consistent experience.

## Running the Application

To get started with the Wordle Game, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/sben-ela/wordle-SalahEddinBenElarradia.git
   cd wordle-SalahEddinBenElarradia

2. **Navigate to My Branch:**:
   ```bash
   git checkout wordle-SALAHEDDINEBENELARRADIA
   
3. **Install the Dependencies**:
   ```bash
   npm install

4. **Run the Application**:
   ```bash
   npm start
## Approach Overview

### Component Structure
- **`GameArea`**: The main component where users interact with the game. It manages state, handles user input, and controls game flow.
- **`PastGuesses`**: Displays past guesses and their results. Utilizes `React.memo` to optimize performance by avoiding unnecessary re-renders.
- **`LettersList`**: A helper component that visualizes each letter in a guess with different colors based on correctness.
- **`Letter`**: A simple class used to model a letter with its corresponding color.

### State Management
- **`useState`**: Manages various pieces of state such as the current word to guess, user input, error states, and past guesses.
- **`useEffect`**: Fetches a random word from an external API when the component mounts.

### Form Handling
- **`handleSubmit`**: Validates the input word against the external API and updates the game state or shows error messages if the input is invalid.
- **`handleChange`**: Updates the input value and checks for invalid characters.

### Navigation and Error Handling
- **`useNavigate`**: Allows for client-side navigation between components without reloading the page.
- **Error Handling**: Displays error messages using Chakra UI's `useToast` when the input is invalid or already used.

### Styling and Animations
- Utilizes Tailwind CSS classes for styling and animations, ensuring responsive and visually appealing UI elements.

### Optimization
- **`React.memo`**: Prevents unnecessary re-renders of the `PastGuesses` component by memoizing it based on its props.

Check out this video: [Watch on YouTube](https://www.youtube.com/watch?v=OfiXDqDYm4o)
