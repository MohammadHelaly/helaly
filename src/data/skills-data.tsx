import {
  Aws,
  // Bash,
  Cpp,
  Css,
  Dataiku,
  Docker,
  ExpressJs,
  // Git,
  GoLang,
  // GraphQL,
  Html,
  Java,
  JavaScript,
  MongoDb,
  MySql,
  NextJs,
  NodeJs,
  Php,
  Python,
  ReactJs,
  // Redux,
  SocketIo,
} from "@/assets/icons";

const skillsData = [
  {
    name: "C & C++",
    icon: <Cpp className="h-full w-full scale-125" />,
    className: "cpp-icon",
  },
  {
    name: "Python",
    icon: <Python className="h-full w-full" />,
  },
  {
    name: "Java",
    icon: <Java className="h-full w-full" />,
  },
  // {
  // 	// name: "Linux Shell & Bash",
  // 	name: "Bash",
  // 	icon: <Bash className="h-full w-full" />,
  // },
  {
    name: "HTML",
    icon: <Html className="h-full w-full" />,
  },
  {
    name: "CSS",
    icon: <Css className="h-full w-full" />,
  },
  {
    name: "JavaScript",
    icon: <JavaScript className="h-full w-full" />,
  },
  {
    name: "PHP",
    icon: <Php className="h-full w-full scale-125" />,
    className: "php-icon",
  },
  {
    name: "MySQL",
    icon: <MySql className="h-full w-full scale-125" />,
    className: "mysql-icon",
  },
  {
    name: "MongoDB",
    icon: <MongoDb className="h-full w-full" />,
  },
  {
    name: "Socket.io",
    icon: <SocketIo className="h-full w-full" />,
  },
  {
    name: "AWS",
    icon: <Aws className="h-full w-full" />,
  },
  // {
  // 	name: "Git",
  // 	icon: <Git className="h-full w-full" />,
  // },
  {
    name: "GoLang",
    icon: <GoLang className="h-full w-full" />,
  },
  {
    name: "Docker",
    icon: <Docker className="h-full w-full" />,
  },
  // {
  // 	name: "GraphQL",
  // 	icon: <GraphQL className="h-full w-full" />,
  // },
  {
    // name: "React.js & React Native",
    name: "React.js",
    icon: <ReactJs className="h-full w-full" />,
  },
  // {
  // 	// name: "Redux & Redux Toolkit",
  // 	name: "Redux",
  // 	icon: <Redux className="h-full w-full" />,
  // },
  {
    name: "Next.js",
    icon: <NextJs className="h-full w-full scale-[1.35]" />,
    className: "nextjs-icon",
  },
  {
    name: "Node.js",
    icon: <NodeJs className="h-full w-full" />,
  },
  {
    name: "Express.js",
    icon: <ExpressJs className="h-full w-full" />,
    className: "expressjs-icon",
  },
  {
    // name: "Dataiku DSS",
    name: "Dataiku",
    icon: <Dataiku className="h-full w-full scale-[1.4]" />,
    className: "dataiku-icon",
  },
];

export { skillsData };
