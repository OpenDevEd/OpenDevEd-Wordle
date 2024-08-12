# Wordle Game
This is a web-based Wordle game built using React. The game includes two modes: a daily challenge mode and an unlimited practice mode. The application is designed to be responsive, with support for both dark and light themes, and features animations and a guide page to help users understand the game rules.
### Features

- Two Game Modes:
  - Daily Challenge Mode: Users can play one word per day. The state of the game is saved in local storage to ensure progress is maintained across sessions.
  - Practice Mode: Users can play unlimited games to practice and improve their skills.
- Responsive Design: The game is fully responsive and works well on all devices, including desktops, tablets, and smartphones.
- State Management: The app uses the Context API to manage the game state across components efficiently.
- Local Storage: In daily challenge mode, the game state is stored in local storage, allowing users to resume their progress each day.
- Animations: The game includes cool animations that enhance the user experience.
- Dark and Light Mode: Users can switch between dark and light modes, providing a comfortable experience in different lighting conditions.
- Guide Page: A dedicated page that explains the rules of the game, helping new users get started quickly.

### <div style="color:#f22c3d; font-size: 1.4rem; ">Deployment Link</div>

The application is deployed on Vercel and can be accessed using the following link:

[Wordle Game](https://wordle-game-hazel.vercel.app/)


### Running the Application

#### To run the application using docker compose:

   ```bash
   docker-compose up --build
   ```

   then open [http://localhost:3000](http://localhost:3000) to view the application in your browser.


#### Or you can run the application in the following way:

1. Clone the repository and navigate to the project folder.

    ```bash
    git clone git@github.com:oulmdev/OpenDevEd-Wordle.git
    ```
    ```bash
    cd OpenDevEd-Wordle
    ```
    ```bash
    git checkout wordle-mohamed-oulmouden
    ```
    ```bash
    cd wordle-mohamed-oulmouden
    ```
2. Install the dependencies.
    
   ```bash
   npm install
   ```
3. Run the application.

   ```bash
   npm start
   ```
4. Open [http://localhost:3000](http://localhost:3000) to view the application in your browser.



### Additional Features
- Responsive UI: The design is optimized for both desktop and mobile devices.
- Theme Support: Switch between dark and light modes easily.
- User-Friendly Guide: Learn how to play with the included guide page.
- Drag-and-Drop: Easily move letters around the board to form words.


### Mobile View

https://github.com/user-attachments/assets/a1618ec2-cdac-4f10-9932-67c08a272593

### Desktop View
https://github.com/user-attachments/assets/1fbce234-66e7-43c0-ade9-18ee2a82df7f
