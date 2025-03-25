import { useRouter } from "next/router";
import { projectsdata } from "../../Components/JSON/projectsdata";
import ProjectDetails from "../../Components/ProjectDetails";
import Head from "next/head";

// Helper function to slugify project names
const slugify = (text: string) =>
    text.toLowerCase().replace(/\s+/g, "-").replace(/[^\w\-]+/g, "");

const Projectdetails = ({ project }: any) => {
  const router = useRouter();

  if (!project) {
    return <div>Project not found.</div>;
  }

  const altt = `${project.name} - ${project.title}`;

  return (
      <>
        <Head>
          <title>{altt}</title>
          <meta name="description" content={`Details of Projects developed.`} />
          <link rel="icon" href="/favicon.ico" />
          <meta property="og:title" content={altt} />
          <meta name="description" content={`Details of Projects developed.`} />
          <link rel="canonical" href="https://www.rajsavaliya.com" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.rajsavaliya.com" />
          <meta property="og:site_name" content="Your Name" />
          <meta property="og:image" content="/mainthumbnail.PNG" />
          <meta property="og:image:width" content="1040" />
          <meta property="og:image:height" content="600" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="HandheldFriendly" content="True" />
          <meta name="MobileOptimized" content="320" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="twitter:widgets:csp" content="on" />
        </Head>
        <ProjectDetails projectDetails={project} altt={altt} />
      </>
  );
};

export async function getStaticPaths() {
  const projects = projectsdata();

  const paths = projects.map((p) => ({
    params: { projectname: slugify(p.name) },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const slug = params.projectname;
  const projects = projectsdata();

  const project = projects.find(
      (p) => slugify(p.name) === slug
  );

  return {
    props: {
      project: project || null,
    },
  };
}

export default Projectdetails;
