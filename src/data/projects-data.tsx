import {
  ReactJs,
  Python,
  Flask,
  UnrealEngine,
  MongoDbWhite as MongoDb,
  NodeJs,
  ExpressJs,
  SocketIo,
} from "@/assets/icons";

const projectsData = [
  {
    title: "Learnly",
    siteLink: "https://learnly-beta.vercel.app",
    githubLink: "https://github.com/MohammadHelaly/learnly",
    images: [
      "/assets/images/learn1.jpg",
      "/assets/images/learn2.jpg",
      "/assets/images/learn3.jpg",
    ],
    description: [
      "An online learning platform for students and instructors to enroll in and create courses, developed using React.js, Node.js, Express.js, MongoDB and Socket.io.",
      "It includes features such as a course marketplace, a course creator, livestreams and real-time chatting.",
    ],
    stack: [
      {
        icon: <MongoDb className="h-full w-full fill-white" />,
      },
      {
        icon: <ExpressJs className="h-full w-full fill-white" />,
      },
      {
        icon: <ReactJs className="h-full w-full fill-white" />,
      },
      {
        icon: <NodeJs className="h-full w-full fill-white" />,
      },
      {
        icon: <SocketIo className="h-full w-full fill-white" />,
      },
    ],
  },
  {
    title: "Helprr",
    githubLink: "https://github.com/MohammadHelaly/helprr",
    images: [
      "/assets/images/help1.jpg",
      "/assets/images/help2.jpg",
      "/assets/images/help3.jpg",
    ],
    description: [
      "A mobile app designed to support blind and deaf people.",
      "It utilizes a pre-trained deep learning model for visual object detection in live video feeds from the phone camera and implements text-to-speech and speech-to-text functionalities.",
    ],
    stack: [
      {
        icon: <ReactJs className="h-full w-full fill-white" />,
      },
    ],
  },
  {
    title: "NeuralVisions",
    siteLink: "https://neural-visions.vercel.app",
    githubLink: "https://github.com/MohammadHelaly/neural-visions",
    images: [
      "/assets/images/neural1.jpg",
      "/assets/images/neural2.jpg",
      "/assets/images/neural3.jpg",
    ],
    description: [
      "A web app for answering open-ended questions about images, reaching 68% accuracy and 80% answerability.",
      "It utilizes a deep learning model that incorporates the OpenAI CLIP encoder into its architecture and was trained on the VizWiz dataset.",
    ],
    stack: [
      {
        icon: <ReactJs className="h-full w-full fill-white" />,
      },
      {
        icon: <Python className="h-full w-full fill-white" />,
      },
      {
        icon: <Flask className="h-full w-full fill-white" />,
      },
    ],
  },
  {
    title: "Lunar Trek",
    siteLink: "https://lunar-trek.vercel.app",
    githubLink: "https://github.com/MohammadHelaly/lunar-trek",
    images: [
      "/assets/images/moon1.jpg",
      "/assets/images/moon2.jpg",
      "/assets/images/moon3.jpg",
    ],
    description: [
      "A web app for visualizing lunar seismic events on a 3D model of the moon, sourced from NASA's Apollo Seismic Event Catalogue.",
      "It globally won the 2023 NASA International Space Apps Challenge out of 8715 teams and 5556 projects, and was awarded the Best Use of Science Award.",
    ],
    stack: [
      {
        icon: <ReactJs className="h-full w-full fill-white" />,
      },
      {
        icon: <UnrealEngine className="h-full w-full fill-white" />,
      },
    ],
  },
  // {
  // 	title: "MedicoPortal",
  // 	githubLink:
  // 		"https://github.com/MohammadHelaly/Medical-Record-Management-System",
  // 	images: ["/assets/images/medical1.jpg", "/assets/images/medical2.jpg", "/assets/images/medical3.jpg"],
  // 	description: [
  // 		"A medical website with portals for patients, doctors and administrators to manage appointments, prescriptions and medical records.",
  // 		// "Built using HTML/CSS for website frontend as well as PHP and MySQL for backend programming.",
  // 	],
  // 	stack: [
  // 		{
  // 			icon: <Html className="w-full h-full fill-white" />,
  // 		},
  // 		{
  // 			icon: <Css className="w-full h-full fill-white" />,
  // 		},
  // 		{
  // 			icon: <Php className="w-full h-full fill-white" />,
  // 		},
  // 		{
  // 			icon: <MySql className="w-full h-full fill-white" />,
  // 		},
  // 	],
  // },
  // {
  // 	title: "DriveIt.io",
  // 	githubLink: "https://github.com/MohammadHelaly/Car-Rental-System",
  // 	images: ["/assets/images/car1.jpg", "/assets/images/car2.jpg", "/assets/images/car3.jpg"],
  // 	description: [
  // 		"A car rental website with portals for both customers and staff to manage reservations as well as view reports about operations.",
  // 		// "Built using HTML/CSS for website frontend as well as PHP and MySQL for backend programming.",
  // 	],
  // 	stack: [
  // 		{
  // 			icon: <Html className="w-full h-full fill-white" />,
  // 		},
  // 		{
  // 			icon: <Css className="w-full h-full fill-white" />,
  // 		},
  // 		{
  // 			icon: <Php className="w-full h-full fill-white" />,
  // 		},
  // 		{
  // 			icon: <MySql className="w-full h-full fill-white" />,
  // 		},
  // 	],
  // },
  // {
  // 	title: "Libraria",
  // 	githubLink:
  // 		"https://github.com/MohammadHelaly/Library-Management-System",
  // 	images: ["/assets/images/library1.jpg", "/assets/images/library2.jpg", "/assets/images/library3.jpg"],
  // 	description: [
  // 		"A staff-side library management application for administrators and librarians to manage inventory, checkouts, payments, reservations, and other operations.",
  // 		// "Client-side library website for customers to reserve checkouts from a library online.",
  // 	],
  // 	stack: [
  // 		{
  // 			icon: <Java className="w-full h-full fill-white" />,
  // 		},
  // 		{
  // 			icon: <MySql className="w-full h-full fill-white" />,
  // 		},
  // 	],
  // },
  // {
  // 	title: "PaintFlow.studio",
  // 	githubLink: "https://github.com/MohammadHelaly/Paint-Application",
  // 	images: ["/assets/images/paint1.jpg", "/assets/images/paint2.jpg", "/assets/images/paint3.jpg"],
  // 	description: [
  // 		"A feature-rich paint application for users to use different strokes, colors, and tools to draw and manipulate different shapes, as well as save their paintings.",
  // 		// "Developed according to SOLID principles using several design patterns in Java.",
  // 	],
  // 	stack: [
  // 		{
  // 			icon: <Java className="w-full h-full fill-white" />,
  // 		},
  // 	],
  // },
];

export { projectsData };
