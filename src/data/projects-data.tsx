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
      "/assets/images/learnly-1.jpg",
      "/assets/images/learnly-2.jpg",
      "/assets/images/learnly-3.jpg",
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
      "/assets/images/helprr-1.jpg",
      "/assets/images/helprr-2.jpg",
      "/assets/images/helprr-3.jpg",
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
      "/assets/images/neural-visions-1.jpg",
      "/assets/images/neural-visions-2.jpg",
      "/assets/images/neural-visions-3.jpg",
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
      "/assets/images/lunar-trek-1.jpg",
      "/assets/images/lunar-trek-2.jpg",
      "/assets/images/lunar-trek-3.jpg",
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
];

export { projectsData };
