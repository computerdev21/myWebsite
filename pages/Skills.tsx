import {NextPage} from "next";
import {Scrollbars} from "react-custom-scrollbars";
import Head from "next/head";
import Image from "next/legacy/image";

interface Skill {
    name: string;
    icon: string;
}

interface SkillSections {
    [key: string]: Skill[];
}

const Skills: NextPage = () => {
    // Define your skills categories and data in one place
    const skillSections: SkillSections = {
        "Programming Languages": [
            {name: "JavaScript", icon: "https://img.icons8.com/color/144/000000/javascript--v1.png"},
            {name: "TypeScript", icon: "https://img.icons8.com/color/96/000000/typescript.png"},
            {name: "Python", icon: "https://img.icons8.com/color/48/null/python--v1.png"},
            {name: "Go", icon: "https://img.icons8.com/color/144/000000/golang.png"}
        ],
        "Full-Stack Development": [
            {name: "React", icon: "https://img.icons8.com/color/144/000000/react-native.png"},
            {name: "Node.js", icon: "https://img.icons8.com/fluency/144/000000/node-js.png"},
            {name: "Next.js", icon: "https://i.ibb.co/Kj1TqRv/image.png"},
            {
                name: "Tailwind",
                icon: "https://bourhaouta.gallerycdn.vsassets.io/extensions/bourhaouta/tailwindshades/0.0.5/1592520164095/Microsoft.VisualStudio.Services.Icons.Default"
            },
            {name: "Bootstrap", icon: "https://img.icons8.com/color/144/000000/bootstrap.png"},
            {name: "SASS", icon: "https://img.icons8.com/color/144/000000/sass.png"},
            {name: "jQuery", icon: "https://img.icons8.com/ios-filled/150/000000/jquery.png"}
        ],
        "Database": [
            {name: "SQL", icon: "https://img.icons8.com/ios-filled/100/000000/sql.png"},
            {name: "Redis", icon: "https://img.icons8.com/color/48/null/redis.png"},
            {name: "PostgreSQL", icon: "https://img.icons8.com/color/48/null/postgreesql.png"},
            {
                name: "Cassandra",
                icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Cassandra_logo.svg/1200px-Cassandra_logo.svg.png"
            },
            {name: "MongoDB", icon: "https://img.icons8.com/color/48/000000/mongodb.png"}
        ],
        "DevOps": [
            {name: "AWS", icon: "https://img.icons8.com/color/144/000000/amazon-web-services.png"},
            {name: "Cloudflare", icon: "https://i.ibb.co/CnLsjhp/download.png"},
            {name: "Git", icon: "https://img.icons8.com/color/144/000000/git.png"},
            {name: "GitHub", icon: "https://img.icons8.com/fluency/144/000000/github.png"},
            {name: "Bitbucket", icon: "https://img.icons8.com/color/144/000000/bitbucket.png"},
            {name: "Azure App Service", icon: "https://img.icons8.com/color/144/000000/azure-1.png"}
        ],
        "Tools": [
            {name: "Visual Studio Code", icon: "https://img.icons8.com/fluency/144/000000/visual-studio-code-2019.png"},
            {
                name: "Postman",
                icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTILwHh21Dky51ePyPy2V_qsPeQWd5n136Sa8PQuhIMmOGLpprK6Zt7qWn9cRL21LE3RzM&usqp=CAU"
            },
            {name: "JIRA", icon: "https://img.icons8.com/color/144/000000/jira.png"}
        ],
        "Big Data & Streaming": [
            {name: "Kafka", icon: "https://cdn.worldvectorlogo.com/logos/apache-kafka.svg"},
            {name: "Hadoop", icon: "https://img.icons8.com/color/144/000000/hadoop-distributed-file-system.png"},
            {name: "Apache Spark", icon: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Apache_Spark_logo.svg"}
        ],
        "Containers & Orchestration": [
            {name: "Docker", icon: "https://img.icons8.com/color/144/000000/docker.png"},
            {name: "Kubernetes", icon: "https://img.icons8.com/color/144/000000/kubernetes.png"}
        ],
        "Cloud Platforms": [
            {name: "AWS", icon: "https://img.icons8.com/color/144/000000/amazon-web-services.png"},
            {name: "GCP", icon: "https://img.icons8.com/color/144/000000/google-cloud-platform.png"}
        ],
        "Visualization & BI": [
            {name: "Tableau", icon: "https://img.icons8.com/color/144/000000/tableau-software.png"},
            {name: "Power BI", icon: "https://img.icons8.com/color/144/000000/power-bi.png"}
        ],
        "Data Libraries & AI/ML Frameworks": [
            {name: "NumPy", icon: "https://numpy.org/images/favicon.ico"},
            {name: "Pandas", icon: "https://img.icons8.com/fluency/144/000000/pandas.png"},
            {name: "SciPy", icon: "https://img.icons8.com/color/144/000000/scipy.png"},
            {name: "scikit‑learn", icon: "https://img.icons8.com/color/144/000000/scikit-learn.png"},
            {name: "TensorFlow", icon: "https://img.icons8.com/color/144/000000/tensorflow.png"},
            {name: "PyTorch", icon: "https://img.icons8.com/color/144/000000/pytorch.png"},
            {name: "LLama", icon: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Meta_LLAMA_logo.png"},
            {name: "GPT", icon: "https://upload.wikimedia.org/wikipedia/commons/4/4b/OpenAI_Logo.svg"},
            {name: "Groq", icon: "https://groq.com/assets/icons/logo-groq.svg"}
        ]
    };

    return (
        <Scrollbars autoHide autoHideTimeout={1000} autoHideDuration={200} universal={true}>
            <Head>
                <title>Skills</title>
                <meta name="description" content="Skills"/>
                <link rel="icon" href="/favicon.ico"/>
                <meta property="og:title" content="Skills"/>
                <meta name="description" content="Skills"/>
                <link rel="canonical" href="https://www.rajsavaliya.com"/>
                <meta property="og:locale" content="en_US"/>
                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://www.rajsavaliya.com"/>
                <meta property="og:site_name" content="Your Name"/>
                <meta property="og:image" content="/mainthumbnail.PNG"/>
                <meta property="og:image:width" content="1040"/>
                <meta property="og:image:height" content="600"/>
                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="HandheldFriendly" content="True"/>
                <meta name="MobileOptimized" content="320"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta name="twitter:widgets:csp" content="on"/>
            </Head>
            <div className="mt-2 w-full p-5 pb-40 ml-3 text-left">
                <h2 className="lg:text-5xl font-bold leading-tight text-indigo-500 text-3xl">Skills</h2>
                <p className="mt-4 max-w-2xl text-lg font-medium text-gray-300">
                    Data Structures, Algorithms, Frontend &amp; Backend Development, Database Management,
                    DevOps, Cloud, Big Data, and AI/ML Frameworks.
                </p>

                {Object.entries(skillSections).map(([section, skills]) => (
                    <div key={section} className="mt-5 pt-5">
                        <p className="tracking-tight text-gray-400 text-xl">{section}</p>
                        <dl className="space-y-10 mt-4 md:space-y-0 md:grid md:grid-cols-2 xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-1 xs:grid-cols-1 md:gap-x-8 md:gap-y-10">
                            {skills.map((tool) => (
                                <div key={tool.name} className="relative">
                                    <dt>
                                        <div
                                            className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-white">
                                            <Image src={tool.icon} alt={`${tool.name} logo`} width={48} height={48}/>
                                        </div>
                                        <p className="ml-16 text-lg leading-6 font-medium pt-3 text-gray-100">{tool.name}</p>
                                    </dt>
                                </div>
                            ))}
                        </dl>
                    </div>
                ))}
            </div>
        </Scrollbars>
    );
};

export default Skills;
