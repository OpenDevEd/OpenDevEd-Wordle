# Wordle Clone in React

This Wordle Clone features:

- 🎲 Random Solution Generator
- ✨ Cool Reveal and Typing Animations
- 📬 Interactive Notification Messages
- 🧩 Comprehensive Word Interaction Functionalities

Users can seamlessly:

- 🖋 Enter, Submit, and Delete Words
- ⌨️ Enjoy a Functional Virtual Keyboard

The application intelligently marks tried letters as:

- ❌ Absent
- ➡️ Present
- ✔️ Correct

# Approach

The development of this Wordle Clone followed a structured approach to ensure a smooth user experience and maintainable codebase:

1. **Component-Based Architecture**: Leveraged React's component-based architecture to create reusable and modular components for the virtual keyboard, word grid, and notification messages.
2. **State Management**: Utilized React's `useState` and `useEffect` hooks to manage the state of the game, including the current word, guessed words, and the solution.
3. **Random Solution Generator**: Implemented a random solution generator that selects a word from a predefined list of valid words.
4. **Animations**: Added CSS animations for revealing letters and typing effects to enhance the user experience.
5. **Notification System**: Created an interactive notification system to provide feedback to users, such as invalid word entries or game status updates.
6. **Virtual Keyboard**: Developed a functional virtual keyboard that allows users to input words without relying on their physical keyboard.

# Decisions Made

Several key decisions were made during the development process:

1. **Word List**: Chose a predefined list of valid words to ensure the solutions are always recognizable and valid.
2. **User Feedback**: Prioritized user feedback through animations and notifications to make the game more engaging and informative.
3. **Responsive Design**: Ensured the application is responsive and works well on different screen sizes, including mobile devices.
4. **Accessibility**: Considered accessibility by providing keyboard navigation and screen reader support where possible.

# Additional Features

In addition to the core functionalities, the following features were implemented:

1. **Dark Mode**: Added a dark mode toggle to enhance the user experience in low-light environments.
2. **Statistics Tracking**: Implemented a statistics tracking system to record the user's game history, including the number of games played, won, and lost.
3. **Shareable Results**: Enabled users to share their game results on social media platforms.
4. **Hint System**: Introduced a hint system that provides users with clues if they are stuck.

# Usage

To start the project run `yarn` and `yarn dev` in your repo folder.

# Future Enhancements

Future enhancements could include:

1. **Multiplayer Mode**: Adding a multiplayer mode where users can compete against each other in real-time.
2. **Custom Word Lists**: Allowing users to create and share custom word lists.
3. **Localization**: Supporting multiple languages to make the game accessible to a wider audience.
4. **Advanced Analytics**: Providing users with advanced analytics on their gameplay, such as average guess time and letter frequency analysis.

I hope you enjoy playing this Wordle Clone as much as i enjoyed building it!