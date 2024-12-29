// Utility function to safely require files
const safeRequire = (path) => {
  try {
    return require(path);
  } catch {
    return null;
  }
};

// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Chandra",
  middleName: "",
  lastName: "Shekhar",
  message: " Passionate about changing the world with technology. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/chandra865",
    },
    {
      image: "fa-facebook",
      url: "https://github.com/chandra865",
    },
    {
      image: "fa-instagram",
      url: "https://github.com/chandra865",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/chandra-shekhar777/",
    },
  ],
};

// ABOUT SECTION
const about = {
  show: true,
  heading: "About Me",
  imageLink: "/images/myphoto.jpeg",
  imageSize: 375,
  message:
    "My name is Mohd Shahid Iqbal. Currently I'm pursuing Master of Computer Application from Motilal Nehru National Institute Of Technology. I'm most passionate about giving back to the community, and my goal is to pursue this passion within the field of software engineering. In my free time I like working on web realated projects.",
  resume:
    "/images/resume.pdf",
};

// PROJECTS SECTION
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "chandra865",
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: true,
  heading: "Leadership",
  message:
    "As a React developer with leadership experience, I bring technical expertise, project management skills, and strong communication abilities to the table. I have a proven track record of building large-scale applications, optimizing code for performance, and implementing best practices. Additionally, I have experience leading teams and projects, creating and maintaining project plans, managing timelines and budgets, and ensuring timely delivery of high-quality work. I excel at communicating effectively with team members, stakeholders, and clients, both verbally and in writing, and am a skilled listener who can provide clear and constructive feedback. I am also passionate about mentoring and training other developers to help them develop their skills and achieve their goals. With my ability to solve complex technical problems and think creatively, I am always up-to-date with the latest developments in React and related technologies, and am able to innovate and inspire a positive, collaborative work environment.",
  images: [
    {
      img: "/images/home.png",
      label: "First slide label",
      paragraph:
        "Home page of Task Management system where a user can manage all their tasks",
    },
    {
      img: "/images/add.png",
      label: "Second slide label",
      paragraph: "User can add his task from this page",
    },
    {
      img: "/images/edit.png",
      label: "Second slide label",
      paragraph: "If user writes something wrong, they can edit the task here.",
    },
    {
      img: "/images/1.png",
      label: "Dashboards",
      paragraph: "Dashboard with charts",
    },
    {
      img: "/images/2.png",
      label: "Users Module",
      paragraph: "Users can be managed from here",
    },
    {
      img: "/images/3.png",
      label: "Products",
      paragraph: "All the Products are listed here",
    },
    {
      img: "/images/4.png",
      label: "Add Zone",
      paragraph: "A Zone can be added from here",
    },
    {
      img: "/images/5.png",
      label: "Transactions",
      paragraph: "All the Transactions are listed here",
    },
    {
      img: "/images/6.png",
      label: "Vending Machine List",
      paragraph: "All the Vending machines are listed here",
    },
    {
      img: "/images/7.png",
      label: "Overview",
      paragraph: "Vending Machine Overview",
    },
    {
      img: "/images/8.png",
      label: "Refill Vending Machine",
      paragraph: "User can refill the machine from here",
    },
  ],
  imageSize: {
    width: "615",
    height: "450",
  },
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "React", value: 90 },
    { name: "JavaScript", value: 90 },
    { name: "Data Structures", value: 65 },
    { name: "HTML/CSS", value: 55 },
    { name: "TypeScript", value: 80 },
    { name: "SQL", value: 75 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:"I'm always open to new opportunities, collaborations, or simply connecting. Feel free to reach out for any inquiries, feedback, or just to say hello. Let's connect!",
  email: "shekhar777229@gmail.com",
};

// EXPERIENCES SECTION
const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: "React Developer",
      companylogo: "/images/simpana.png",
      date: "Aug 2020 – May 2022",
    },
    {
      role: "Senior Software Engineer",
      companylogo: "/images/vendify.png",
      date: "May 2022 – March 2023",
    },
    {
      role: "React Developer",
      companylogo: "/images/paceTrader.png",
      date: "March 2023 – Present",
    },

    {
      role: "React Developer",
      companylogo: "/images/dell.png",
      date: "March 2023 – Present",
    },
  ],
};

export {
  navBar,
  mainBody,
  about,
  repos,
  skills,
  leadership,
  getInTouch,
  experiences,
};
