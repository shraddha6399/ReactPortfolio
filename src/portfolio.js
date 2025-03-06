/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Shraddha Gautam",
  title: "Hi all, I'm Shraddha",
  subTitle: emoji(
    "A passionate Software Developer 🚀 Offering over 3 years of experience , specializing in React JS and NexJs Development, I'm seeking a dynamic role to leverage expertise in creating innovative and efficient web solutions, driving excellence in React-focused development environments."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1omC-e9N2-6HZFRkt7R_-PjxL7JyFpn6b/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/shraddha6399",
  linkedin: "https://www.linkedin.com/in/shraddha-gautam-ba0382193/",
  gmail: "shraddhagautam99@gmail.com",
  medium: "https://medium.com/@shraddhagautam99",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY SOFTWARE DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

softwareSkills: [
  { skillName: "reactjs" },
  { skillName: "Nextjs" },
  { skillName: "JavaScript" },
  { skillName: "Typescript" },
  { skillName: "Redux" },
  { skillName: "npm" },
  { skillName: "html-5" },
  { skillName: "Tailwindcss" },
  { skillName: "css3" },
  { skillName: "sass" },
  { skillName: "MaterialUI" },
  { skillName: "bootstrap" },
  { skillName: "git" }
],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Meerut Institue of Engineering and Technologies",
      logo: require("./assets/images/mietLogo.png"),
      subHeader: "Bachelors in computer science and engineering",
      duration: "2016 - 2020",
    },
    {
      schoolName: "St.Anthony’s Senior Secondary School, CBSE, Rampur (U.P)",
      logo: require("./assets/images/stAnthony.png"),
      subHeader: "12th (Physics, chemistry, Maths)",
      duration: "2014 - 2015",
    },
    {
      schoolName: "ST.Mary's Senior Secondary School, CBSE, Rampur (U.P)",
      logo: require("./assets/images/stMary.png"),
      subHeader: "10th",
      duration: "2012 - 2013",
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Programming",
      progressPercentage: "65%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: " Dew Solutions",
      companylogo: require("./assets/images/dewLogo.png"),
      date: "August 2024 – Present \n (Gurugram - on-site)",
      desc: "<strong style='color: #000000;'>CLUPEA</strong>: Built a clinical trial data management platform with TypeScript, ReactJS, and Redux. <br/>  <strong style='color: #000000;'>TCIL</strong>: Developed an AI-powered face recognition attendance system with real-time tracking and secure authentication using ReactJS, TypeScript, Material UI, and Redux. <br/> <strong style='color: #000000;'>STACKD</strong>: Created a responsive vending machine management interface with real-time stock monitoring and role-based access."
     },
    {
      role: "Software Engineer",
      company: "Crownstack",
      companylogo: require("./assets/images/crownstack.png"),
      date: "April 2024 – July 2024 \n (Noida - on-site)",
      desc: "<strong style='color: #000000;'>Key Result Areas:</strong> Built Next.js software, managed design changes, and ensured smooth project delivery with code integrity and collaboration. <br/>  <strong style='color: #000000;'>Client: UnlockLife Today</strong> – Developed a platform assisting seniors with vacation planning, food ordering, and TV repairs via call support, using TypeScript, Next.js, React.js, and Redux."
    },
    {
      role: "Software Developer",
      company: "Binmile Technologies",
      companylogo: require("./assets/images/binmile.png"),
      date: "Nov 2022 – Feb 2024 \n (Noida - on-site)",
      desc: "<strong style='color: #000000;'>Key Result Areas:</strong> Led React.js projects, ensuring high-quality, scalable solutions. Managed development, collaborated cross-functionally, and built user-centric applications. <br/> <strong style='color: #000000;'>Client: Adani</strong>  – Developed and integrated Adani One, focusing on Duty-Free and Retail modules using Next.js, TypeScript, React.js, and Redux. <br/>  <strong style='color: #000000;'>Client: Veranda Learning</strong> – Enhanced Veranda Race's Career and Branches portal with Next.js, TypeScript, Redux Toolkit, Middleware EPIC, and RxJS. <br/>  <strong style='color: #000000;'>Client: Mahindra Finance</strong> – Built and integrated KYC Portal, Bank Details, and Review Application features using TypeScript, React.js, and Redux."},
    {
      role: "Associate Frontend Developer",
      company: "Edugorilla Community",
      companylogo: require("./assets/images/edugorilla.png"),
      date: "Nov 2021 – Oct 2022 \n (Lucknow - on-site)",
      desc: "<strong style='color: #000000;'>Key Result Areas:</strong> Fixed bugs, updated UI in ReactJS & AngularJS, and followed Agile Scrum. Managed landing pages, optimized performance, and integrated data analytics for user engagement. <br/>  <strong style='color: #000000;'>Live Classes:</strong> Enabled scheduled sessions, expanding educational offerings. <br/>  <strong style='color: #000000;'>Test Engine:</strong> Built a robust system for online assessments. <br/>  <strong style='color: #000000;'>Website Maintenance:</strong> Managed bug fixes, new features, and platform enhancements. <br/>  <strong style='color: #000000;'>B2B Platform:</strong> Developed & maintained Gibbon, ensuring a seamless online presence."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/unlockLife.png"),
      projectName: "Unlocklife Today",
      projectDesc: "Assistance for seniors with a vacation plan, ordering food repairing TV, etc on a call, Creating a world where every senior is independent and confident. We are the digital children who get things done.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.unlocklife.today/"
        }
      ]
    },
    {
      image: require("./assets/images/adaniOne.png"),
      projectName: "Adani",
      projectDesc: "Adani One is a comprehensive platform with a wide range of offerings. It is designed to improve everyday experiences for our customers by fusing comfort, quality, and ease of use.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.adanione.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/mahindraFinance.png"),
      projectName: "Mahindra Finance",
      projectDesc: "leading financial services provider, products include Vehicle Loans, SME Finance, Personal Loans, Insurance Broking, Housing Finance, Fixed Deposits and Mutual Fund schemes",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.mahindrafinance.com/"
        }
      ]
    },
    {
      image: require("./assets/images/verndaRace.png"),
      projectName: "Veranda Race",
      projectDesc: "Veranda RACE is the leading Coaching Centre Across Tamil Nadu, Kerala & Karnataka and remains the one-stop solution for success in govt. exams",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://verandarace.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/edugorillaLogo.png"),
      projectName: "EduGorilla test series",
      projectDesc: "EduGorilla is a ELearning Platform provides test series, Live classes,Video Courses, Study Notes , Mock Interviews and much more.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://testseries.edugorilla.com/"
        }
      ]
    },
    {
      image: require("./assets/images/clupeaLogo.png"),
      projectName: "CLUPEA- Accelerating Clinical Trials",
      projectDesc: "It provides a versatile and innovative platform that excels at the seamless management of clinical trial data",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://clupea.co.kr/main"
        }
        //  you can add extra buttons here.
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-6399719619",
  email_address: "shraddhagautam99@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
