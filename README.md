# Puzzle Fun

## Introduction
Puzzle Fun is a web based online game built in with HTML, CSS and JavaScript. It is based on simple classic sliding square puzzle game. Users would receive amazing cognitive benefits while having fun. Puzzle Fun is designed to target those who would like a short fun game to play regularly to improve their memeory, problem solving skills and reduce their stress level.  
![Responsive Screenshot Mockup](assets/img/readme-screenshots/responsive.png)  

| Site Goals| User Benefits | 
|:------------- | :------------ | 
|Short game with simple instruction | Simple and short Brain excercise | 
|Easy and intuitive navigation| Easy to start, exit and re-enter the game|
|Responsive design | Able to play on any device (keyboard or touchscreen)|  
|Selection of Deficulty levels|A choice of easy or challenge game|
|Relax game environment |Confortable to play|
|interactive to the player|Have a control in running the game|
|Score tracking and timimg|Able to see the performance|

Press CTRL+ Click [here](https://yuyizhong.github.io/puzzelfun/) to visit the live website.


## Features
This site was built based on a simple and intutive principle. It only contains one page with the puzzle game created and inserted each time by javascript according to users' instruction. The whole layout is simple and easy to navigate, and the purpose of the site is straight-forward. Icons and aria-lables are used through out the web page to enhance suers' comprehension.  

<img src="assets/img/readme-screenshots/pageload.png"> 


### Existing Features

- **Favicon**
   - A favicon is implemented with a colorful four-pieces puzzle.
   - This puzzle logo appears in the the tab header to allow the user to easily identify the website while multiple tabs opening.
   <img src="assets/img/readme-screenshots/favicon.png">  

- **Logo and Title**
   - The colorful puzzle logo and the gemstone-sparkled title bring the website alive.   
   - It carrys out the simple style and declares the the purpose of the website: puzzle games and fun!  
   <img src="assets/img/readme-screenshots/logo-title.png">  

- **Game Guide Modal**
   - A modal button created underth the page title is named "Game Guide". It contains the game information , rull and level difference for users' reference.   
   <img src="assets/img/readme-screenshots/guidemodal.png">    
   - By clicking on it, a detailed game guide block drops out. When the user reading it on mobile, a scroll bar appears for them to scroll through the guide. When screen size is big enough, the scroll bar becomes hidden.
   - The benifit of having the game guide as a modal makes the website clean and neat. 
   - A zoom animation used when the guide block opens.    
   <img src="assets/img/readme-screenshots/gameguide.png">  

- **Puzzle type selection panel**
   - Puzzles are divided into 3 types according to the difficulty level.   
   - They are listed at the selection panel for the user to choose. Users can either have a easy go by starting a 3x3 puzzle, or take a challenge for more complicated          level.     
   <img src="assets/img/readme-screenshots/gamemenu.png">  

- **Game area and default game**
   - A beaufiful picture of bamboo leaves is set as the background image for game area.  The eye friendly green color would hopfully reduce the user's eye strain. This photo image is soppused to imediately create a peaceful and leisurely enviroment.   
   - As the page loaded, a default 3x3 demo puzzle is appeared at the center of the game area. The user can either click on "Start" to play a 3x3 puzzle or click on one of      the game type buttons to play a more challenging puzzle.      
   <img src="assets/img/readme-screenshots/gamearea.png">  

- **Demo puzzle**
   - Demo puzzle appears after the game type is selected. It demonstrates what a resolved puzzle in this particular puzzle type would look alike.   
   - Its tiles are not movable and tiles color are all in white. Therefore users wont mistake it as the game itself.  
   **4x4 Demo Puzzle**     
   <img src="assets/img/readme-screenshots/demopuzzle4x4.png">    
   **5x5 Demo Puzzle**  
   <img src="assets/img/readme-screenshots/demopuzzle5x5.png">  
   - When Demo puzzle displays in the game area, the control panel and user performance trackers remain as default setting.  
   <img src="assets/img/readme-screenshots/undergamepanel.png">  

- **Control Panel**
   - Control buttons listed underneath the game area give flexibility to users to run the game.   
   <img src="assets/img/readme-screenshots/controlpanel.png">   

   - **Start** Button:  
      - **"Start"** button allows the the tiles in the demo puzzle to shuffle and a new game with the empty tile in **BLACK**will be ready to play.  
      - After clicking on the "start" button, it changes to **“Restart"**. Users can click on **Restart** button any time to refresh a new puzzle within the same game type.  
      - By click on both **Start** and **Restart** button, the clock icon will reset to 0 and start to time.  
      - Which means users have the freedom to exit the current puzzle game before finishing it and start a new game.  
      <img src="assets/img/readme-screenshots/start.png">    
   - **Pause** Button  
      - **Pause** Button allows the user to pause the timer anytime they needed.  
      - Their performance wont be affected by interruptions.    
      <img src="assets/img/readme-screenshots/pause.png">      
   - **Resume** Button  
      - It continues the timer from where it stopped.   
      <img src="assets/img/readme-screenshots/resume.png">      

- **Game Time and Score trackers**  
   - The intuitive clock and medal icons represent the timer and score.    
   <img src="assets/img/readme-screenshots/timeandscore.png">    
   - Timer tracks the total sesonds which user spend in each single game. It resets to zero everytime a new game is displayed regardless puzzle type.   
   - Score increments within one level(either 3x3,4x4 or 5x5 puzzles). It resets to zero when user hits one of the puzzle type button.  
   - Witht the time and score tracking system, users are able to see their performance. Which makes the game more engaging.  
   <img src="assets/img/readme-screenshots/score.png">    
   <img src="assets/img/readme-screenshots/score2.png">    

- **Footer**
   - A footer is fixed to the bottom of the viewport and it is always there while users scroll up and down the page. 
   - It contains site owner's GITHUB link which will open in a new tab to allow easy navigation for users.   
   <img src="assets/img/readme-screenshots/footer.png">   

- **Winning messsage**
   - Wining message appears when the user solve the puzzle.  
   - It alerts a congratulation message including the time spent for solving this puzzle.   
   <img src="assets/img/readme-screenshots/alertmsg5x5.png">   

## Features left to implement

- Games can be extended from number puzzles to Jigsaws. In order to have a background picture for each tile and move together with the tiles to form a whole picture, canvas Js is ideal in this case.  
- A user account can be created for each player and all the time and score records in the past could be stored there. In order to do that, it requires a server to store all the data and I should be able to do it when python is invloved.  


## Technologies  

- *HTML*
   - The structure of the Website was developed using HTML as the main language.
- *CSS*
   - The Website was styled and layed out using CSS in an external file.
- *JavaScript*  
   - The puzzels are created throught JavaScript and inserted into HTML. 
   - All the interrations between users and computer are all realised through JavaScript functions and event listeners. 
- *GitPod*
   - This developer platform with VSCode editor can remotely work through web browser.
- *GitHub*
   - Source code is hosted on GitHub and delpoyed using Git Pages.
- *Git*
   - Used to commit and push code during the development of the Website
- *Font Awesome*
   - Icons obtained from https://fontawesome.com/ were used through out of the website.
- *Tinyjpg*
   - All the images used at the website and README were reduced size at https://tinyjpg.com/ 
- *Favicon.io*
   - Favicon files were created at https://favicon.io/favicon-converter/
- *Am I Responsive*
   - Screen shots of the various device breakpoints for the website were produced at https://ui.dev/amiresponsive/


## Testing

### Testing during development
Continuous testings were carried out througout the site development. The whole project was broken into small sections and steps. Each part was checked and amended to the right standard before moving to next one. 

*Steps to test:*

- HTML and CSS outcomes were instantly viewed through a live server window. It would be checked and adjusted (if necessory) before commitment.   
- When it moved to JavaScrip, how to make the game working the way planned was well thought out and designed before coding. Ideas then become each function names and their contents were added one by one at later stage.
- To avoid increasing difficulty of debugging, one function was coded for achieving only one thing. Also this function would be tested constantly after each correction. 
- The *developer tool* was helpful to indicate where the errors were. 
- In the case of no errors were returned but function not working, `console.log` was used to test each line of the code to find where the possible errors located. 
- Until one function is working, then move to next one. And same procedures would be carried out.
- When individual functions are working well by itself, but issues appeared when running together. Then the relevent functions would be reviewed logically and adjusted accordingly.

*Result*:

- Interesting issues encountered:
   - **Issue No. 1**  
   - There were 2 functions called sequently to move tile and then check if it wins. If the user wins, the `checkWin()` will alert a winning messsage. At the test, the winning message appears right after the user clicking on the tile but before it moves to the right spot. It happened as the `checkWin() ` was processed faster than `MoveTile()`. 
   - The solution was to use `setTimeout()` method to execute `checkWin()` half of a second later than `MoveTile()`. 

   - **Issue No.2**  
      - The "Restart” button is designed for users to reshuffle the puzzle anytime during the game if they don't want to continue working on the current one for any reason. Everytime after reshuffle, a new game appears and the timer will reset and start a new one (by processing `clearTimeout(timer)` and then `setTimeout(timing, 1000)`). 
      - By testing it, I fund if the user keeps clicking on "Restart" at a fast speed, it will mess up the timer. Timer wont reset to 0, and it would run faster and faster than it supposed to be. Until the user stop clicking, then the timer will slowly go back to normal speed.
      - First, I tried to change `setTimeout()` method to `setInterval()` method, but the issue remains.
      - After a research, I realised that JavaScript timer would have this type of issue as it using a single threaded language. When clicking is too fast, computer wont have enough time to complete one request before receiving another one. And it tried to execute all the orders at same time.
      - As to make a smarter timer is not possible in JavaScript, my solution was to limit the clicking behaviour. To do that, I disable the "Restart” button for 2 seconds after each click.
- After finishing building, the website and game looks and works as planned.  
 
### Responsiveness

This site was tested to ensure responsiveness on screen sizes from 320px and upwards on Chrome, Edge and Firefox.

*Steps to test:*

- Open browser and paste https://yuyizhong.github.io/puzzelfun/ to address bar to navigate.
- Right click on the webpage and then inspect to Open the developer tools
- Set to responsive and decrease width to 320px and the zoom to 50%
- Click and drag the responsive window to maximum width

*Result*:

- Website is responsive on all screen sizes from mobile, tablet, laptop and desktop. No images are pixelated or stretched. No text were overflowed or cut off. No contents were out of their box or get overlapped.
- It functions well by using both keyborad and touch screen devices.

### Wave Web Accessibility

[WAVE Web Accessibility Evaluation Tools](https://wave.webaim.org/) was used throughout development and for final testing of the deployed website to check for any aid accessibility testing. 

*Result*
- 0 Errors and 0 Contrast errors.
<img src="assets/img/testing/wave.png">   

### Lighthouse Testing
- Test on desktop

<img src="assets/img/testing/lighthouse-desktop.png">   


- Test on mobile

<img src="assets/img/testing/lighthouse-mobi.png">   

### Functional Testing

 *Game Guide Modal*

- Testing was performed on the Game Guide button in heading underneath the page tile to ensure the game instruction works as planned.  

  *Steps to test Telephone Number*

     - Navigate to Puzzle Fun and click the button shows "Game Guide".  

  *Result:*

     - A block of game instruction pops out at the right position. 
     - The instruction page contains header, footer and the main boday. Nothing is missing or hidden.
     - Scroll bar appears on the side of the main boday when visiting the site through a mobile device and it works well.
     - Scroll bar disapears when the screen space is big to show all the instruction contents. 
     - Also it can be closed by clicking on "x" and the instrruction block becomes hidden again.
     - It was as expected.  

 *Game Guide Modal*

- Testing was performed on the Game Guide button in heading underneath the page tile to ensure the game instruction works as planned.  

  *Steps to test Telephone Number*

     - Navigate to Puzzle Fun and click the button shows "Game Guide".  

  *Result:*

     - A block of game instruction pops out at the right position. 
     - The instruction page contains header, footer and the main boday. Nothing is missing or hidden.
     - Scroll bar appears on the side of the main boday when visiting the site through a mobile device and it works well.
     - Scroll bar disapears when the screen space is big to show all the instruction contents. 
     - Also it can be closed by clicking on "x" and the instrruction block becomes hidden again.
     - It was as expected.  




