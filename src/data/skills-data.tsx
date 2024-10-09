import {
  Aws,
  // Bash,
  Cpp,
  Css,
  Dataiku,
  // Docker,
  ExpressJs,
  // Git,
  GoLang,
  // GraphQL,
  Html,
  Java,
  JavaScript,
  MongoDbBlack as MongoDb,
  MySql,
  NextJs,
  NodeJs,
  Php,
  Python,
  ReactJs,
  // Redux,
  SocketIo,
  Sst,
} from "@/assets/icons";

const skillsData = [
  {
    name: "C & C++",
    icon: <Cpp className="h-full w-full scale-125 fill-black" />,
    className: "cpp-icon",
  },
  {
    name: "Python",
    icon: <Python className="h-full w-full fill-black" />,
  },
  {
    name: "Java",
    icon: <Java className="h-full w-full fill-black" />,
  },
  // {
  // 	// name: "Linux Shell & Bash",
  // 	name: "Bash",
  // 	icon: <Bash className="h-full w-full fill-black" />,
  // },
  {
    name: "HTML",
    icon: <Html className="h-full w-full fill-black" />,
  },
  {
    name: "CSS",
    icon: <Css className="h-full w-full fill-black" />,
  },
  {
    name: "JavaScript",
    icon: <JavaScript className="h-full w-full fill-black" />,
  },
  {
    name: "PHP",
    icon: <Php className="h-full w-full scale-125 fill-black" />,
    className: "php-icon",
  },
  {
    name: "MySQL",
    icon: <MySql className="h-full w-full scale-125 fill-black" />,
    className: "mysql-icon",
  },
  {
    name: "MongoDB",
    icon: <MongoDb className="h-full w-full fill-black" />,
  },
  {
    name: "Socket.io",
    icon: <SocketIo className="h-full w-full fill-black" />,
  },
  {
    name: "AWS",
    icon: <Aws className="h-full w-full fill-black" />,
  },
  // {
  // 	name: "Git",
  // 	icon: <Git className="h-full w-full fill-black" />,
  // },
  {
    name: "GoLang",
    icon: <GoLang className="h-full w-full fill-black" />,
  },
  // {
  //   name: "Docker",
  //   icon: <Docker className="h-full w-full fill-black" />,
  // },
  {
    name: "SST",
    icon: <Sst className="h-full w-full scale-150 fill-black lg:scale-125" />,
  },
  // {
  // 	name: "GraphQL",
  // 	icon: <GraphQL className="h-full w-full fill-black" />,
  // },
  {
    // name: "React.js & React Native",
    name: "React.js",
    icon: <ReactJs className="h-full w-full fill-black" />,
  },
  // {
  // 	// name: "Redux & Redux Toolkit",
  // 	name: "Redux",
  // 	icon: <Redux className="h-full w-full fill-black" />,
  // },
  {
    name: "Next.js",
    icon: (
      <NextJs className="h-full w-full scale-[1.75] fill-black lg:scale-[1.35]" />
    ),
    className: "nextjs-icon",
  },
  {
    name: "Node.js",
    icon: <NodeJs className="h-full w-full fill-black" />,
  },
  {
    name: "Express.js",
    icon: <ExpressJs className="h-full w-full fill-black" />,
    className: "expressjs-icon",
  },
  {
    // name: "Dataiku DSS",
    name: "Dataiku",
    icon: <Dataiku className="h-full w-full scale-[1.4] fill-black" />,
    className: "dataiku-icon",
  },
];

export { skillsData };
