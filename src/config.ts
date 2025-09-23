export const siteConfig = {
  name: "Nathan Snook",
  title: "Aspiring Junior Developer",
  description: "Portfolio website of Nathan Snook",
  primaryColor: "#571f7f",
  accentColor: "#a54c9e",
  textColor: "#000000",
  backgroundColor: "#000000",
  foregroundColor: "#ffffff",
  social: {
    email: "snooknate.ns@gmail.com",
    linkedin: "https://www.linkedin.com/in/nathan-snook-1707a0206/",
    twitter: "",
    github: "https://github.com/w0418773/",
  },
  aboutMe:
    "Hi I’m Nathan, I'm a versatile software developer with a strong background in both technical \
    support and retail management. Equipped with a Computer Programming diploma and hands-on experience \
    in various programming languages, I excel in web development, software design, and systems \
    administration. My leadership experience as a Retail Supervisor has refined my problem-solving, \
    teamwork, and communication skills. Skilled in software development, systems administration, and \
    network security, I combine technical expertise with strong interpersonal skills to deliver effective, \
    user-focused solutions. I’m passionate about leveraging my diverse expertise to develop innovative \
    solutions and contribute to dynamic tech teams.",
  skills: ["Programming and Software Development", "Technical Support and Systems Administration", 
    "Project Management", "Leadership and Team Management", "Problem-Solving and Analytical Thinking", 
    "Communication and Interpersonal Skills", "Adaptability and Multitasking"],
  projects: [
    {
      name: "Wordle Solver 2.0",
      description:
        "I rebuilt my original Wordle Solver as a web-based application using React JS. The solver helps \
        players efficiently crack the puzzle by suggesting possible words based on user feedback from each \
        guess. Instead of a Windows application, this version features a clean, interactive UI where users \
        can enter results directly into the browser. The app then dynamically updates the word list and \
        narrows down the best possible solutions in real time.",
      reflection:
        "Rebuilding this project in React gave me the chance to transform a functional script into a \
        polished user-friendly web app. The shift to component-based development made the codebase easier \
        to scale, while state management allowed for a smoother solving process.",
      link: "https://w0418773.github.io/Wordle-Solver-2.0/",
      skills: ["React", "State Management", "Asynchronous Programming", "Conditional Rendering", "Algorithmic", "DOM Manipulation"],
      // image: "src/res/Wordle_Solver_2.0.png", Source for development only
      image: "https://github.com/w0418773/w0418773.github.io/blob/master/src/res/Wordle_Solver_2.0.png?raw=true",
    },
    {
      name: "Recipe Scrapper Bot",
      description:
        "The idea for this project came from the common problem of having a few ingredients on hand but \
        not knowing what to cook. I wanted to create a program where you could simply enter the ingredients \
        you have, and it would suggest a variety of recipes you can make with them.",
      reflection:
        "After developing this program and reflecting on it, I realized that adding a filtering \
        system for the recipe results would be a valuable improvement. For example, sorting recipes by average \
        user reviews could help prioritize higher quality options. Additionally, it would be useful to ensure \
        that the suggested recipes closely match the user's provided ingredients. Ideally, most of the listed \
        ingredients should appear in each recipe. I’d also like to implement error handling, such as checking \
        for invalid or misspelled inputs, to make the program more reliable and user-friendly.",
      link: "https://github.com/w0418773/Recipe-Scrapper-Bot",
      skills: ["Python", "Tkinter", "HTML Requests", "GUI", "Web Scraping", "APIs"],
      // image: "src/res/Recipe_Scrapper.png", Source for development only
      image: "https://github.com/w0418773/w0418773.github.io/blob/master/src/res/Recipe_Scrapper.png?raw=true",
    },
    {
      name: "Lottery Number Generator",
      description:
        "This fun project was built to explore patterns in lottery numbers. The bot scrapes winning combinations \
        from 2009 to present, analyzes the most common number in each position, and generates a 'likely' set of \
        numbers based on historical trends. Built to experiment with web scraping, data analysis, and bot logic.",
      reflection:
      "If I were to recreate this project, I would modify the logic to identify the top 3 most frequent numbers \
      per position rather than just the most common one. This would generate more diverse combinations and \
      potentially increase the odds of hitting a winning number. It would also make the predictions feel less \
      repetitive and more engaging for users.",
      link: "https://github.com/w0418773/Lottery-Bot",
      skills: ["Python", "Tkinter", "HTML Requests", "GUI", "Web Scraping", "APIs", "Data Analysis"],
      // image: "src/res/Lottery_Bot.png", Source for development only
      image: "https://github.com/w0418773/w0418773.github.io/blob/master/src/res/Lottery_Bot.png?raw=true",
    },
    {
      name: "Wordle Solver",
      description:
        "During the Wordle craze, I developed a program to assist with solving the puzzle more efficiently. \
        The program suggests possible words based on user feedback for each guess. You simply input whether \
        each letter is correct, in the wrong position, or not in the word at all. Using this feedback, the \
        program intelligently narrows down the list of possible words until it finds the solution.",
      reflection:
        "Looking back on the application, I believe incorporating image recognition would be a \
        major enhancement. Automating the process by having AI enter guesses directly into the Wordle \
        interface and visually interpret the feedback (e.g., identifying correct letters, misplaced \
        letters, or incorrect ones) would remove the need for manual input and create a more seamless \
        solving experience.",
      link: "https://github.com/w0418773/Wordle-Solver",
      skills: ["C#", "Event-Driven Programming", "Data Structures", "File I/O"],
      // image: "src/res/Wordle_Solver.png", Source for development only
      image: "https://github.com/w0418773/w0418773.github.io/blob/master/src/res/Wordle_Solver.png?raw=true",
    },
    {
      name: "Flight Tracker",
      description:
        "This project was developed as part of my college coursework. The web page displays an interactive \
         map showing flights originating from Canada. Each flight is represented by an icon that points in \
         the direction of travel. Clicking on a flight icon opens a popup with detailed flight information.",
      reflection:
      "This project is now three years old. Upon revisiting it, I discovered an issue with the flight data \
      API, each IP address is limited to a set number of requests, and exceeding this limit causes the \
      application to stop functioning. This limitation wasn’t encountered during the initial build. Replacing \
      the current API with one that offers higher or unlimited requests would greatly improve reliability. \
      Additionally, implementing a sorting feature to dynamically filter flights by location would enhance \
      usability.",
      link: "https://github.com/w0418773/Flight-Tracker",
      skills: ["JavaScript", "Asynchronous Programming", "GeoJSON", "HTML", "CSS", "APIs"],
      // image: "src/res/Flight_Tracker.png", Source for development only
      image: "https://github.com/w0418773/w0418773.github.io/blob/master/src/res/Flight_Tracker.png?raw=true",
    },
    {
      name: "Discord Movie Bot",
      description:
        "This project is a lightweight Discord bot built during COVID-19 to help my friends coordinate remote \
        movie nights. It featured adding, viewing, and removing movies from a shared watchlist directly in \
        Discord, making it easy to stay connected and entertained. The bot was self hosted using a headless \
        RaspberryPi.",
      reflection:
      "The bot included all basic CRUD functionality except for Update. Adding this feature would enhance the \
      user experience by allowing edits to existing entries. Movie data was stored in a plain text file, with \
      each movie on a separate line and read into the application via Python. Migrating to a database solution \
      like SQLite would improve data handling, scalability, and reliability.",
      link: "https://github.com/w0418773/MovieBot",
      skills: ["Python", "File I/O", "Discord API", "CRUD"],
      // image: "src/res/Discord_Bot.png", Source for development only
      image: "https://github.com/w0418773/w0418773.github.io/blob/master/src/res/Discord_Bot.png?raw=true",
    },
  ],
  experience: [
    {
      company: "Eurekatec",
      title: "Junior Developer",
      dateRange: "April 2022 - September 2022",
      bullets: [
        "Developed a responsive front-end interface and a robust back-end system that continuously ingested 21000 data points per hour from microcontrollers.",
        "Collaborated with the management to analyze production metrics, enabling rapid detection of production errors and improving manufacturing reliability.",
        "Optimized data flow and visualization tools to support quick decision-making and ongoing performance improvements on the factory floor.",
      ],
    },
  ],
  education: [
    {
      school: "Nova Scotia Community College",
      degree: "Computer Programming Diploma",
      dateRange: "2019 - 2022",
      achievements: [
        "Honours Graduate",
      ],
    },
  ],
};
