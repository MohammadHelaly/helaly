import {
  Aws,
  Cpp,
  Dataiku,
  Docker,
  ExpressJs,
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
  Sst,
  SvelteJs,
  PayloadCms,
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
  {
    name: "HTML",
    icon: <Html className="h-full w-full fill-black" />,
  },
  {
    name: "PHP",
    icon: <Php className="h-full w-full scale-125 fill-black" />,
    className: "php-icon",
  },
  {
    name: "JavaScript",
    icon: <JavaScript className="h-full w-full fill-black" />,
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
    name: "Docker",
    icon: <Docker className="h-full w-full fill-black" />,
  },
  {
    name: "AWS",
    icon: <Aws className="h-full w-full fill-black" />,
  },
  {
    name: "PayloadCMS",
    icon: <PayloadCms className="h-full w-full fill-black" />,
  },
  {
    name: "Svelte.js",
    icon: <SvelteJs className="h-full w-full fill-black" />,
  },
  {
    name: "SST",
    icon: <Sst className="h-full w-full scale-150 fill-black lg:scale-125" />,
  },
  {
    name: "React.js",
    icon: <ReactJs className="h-full w-full fill-black" />,
  },
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
    name: "Dataiku",
    icon: <Dataiku className="h-full w-full scale-[1.4] fill-black" />,
    className: "dataiku-icon",
  },
];

export { skillsData };
