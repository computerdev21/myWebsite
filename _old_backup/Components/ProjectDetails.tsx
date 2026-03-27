import { Scrollbars } from "react-custom-scrollbars";
import Image from "next/legacy/image";
import { useMediaQuery } from "react-responsive";
import Zoom from "react-medium-image-zoom";

const ProjectDetails: React.FC<any> = ({ projectDetails, altt }: any) => {
    let isTabletOrMobile = useMediaQuery({ query: "(max-width: 943px)" });

    // Render the link button: if a website link exists, show that; else, show GitHub.
    const renderLinkButton = () => {
        if (projectDetails.link) {
            return (
                <div
                    className="float-right butto pr-4 inline-block pt-3 text-xl font-bold text-blue-400"
                    style={{marginRight: "-55px"}}
                >
                    <div className={"flex flex-col"}>
                        <a href={projectDetails.link} target="_blank" rel="noreferrer">
                            Visit Website ↗
                        </a>
                        <a href={projectDetails.github} target="_blank" rel="noreferrer">
                            View GitHub ↗
                        </a>
                    </div>
                </div>
            );
        } else if (projectDetails.github) {
            return (
                <div
                    className="float-right butto pr-4 inline-block pt-3 text-xl font-bold text-blue-400"
                    style={{marginRight: "-55px" }}
                >
                    <a href={projectDetails.github} target="_blank" rel="noreferrer">
                        View GitHub ↗
                    </a>
                </div>
            );
        }
        return null;
    };

    const renderSnapshots = () => (
        <div className="w-full mt-2 mb-5 pb-5 grid grid-cols-1s xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1">
            {projectDetails.snapshots.map((shot: string, index: number) => (
                <div key={`snap-${index}`} className="mr-3 mb-3">
                    <Zoom zoomMargin={100}>
                        <Image
                            className="text-center rounded-xl"
                            src={shot}
                            alt={altt}
                            width="3000"
                            height={projectDetails.height}
                            objectPosition="center"
                        />
                    </Zoom>
                </div>
            ))}
        </div>
    );

    const renderTechBadges = () => (
        <div className="pt-1">
            {projectDetails?.skills.map((skill: string) => (
                <div
                    key={skill}
                    className="text-xs inline-flex mt-2 items-center font-bold leading-sm p-1 pl-2 pr-2 mr-2 bg-blue-100 text-gray-700 rounded-full"
                >
                    {skill}
                </div>
            ))}
        </div>
    );

    return !isTabletOrMobile ? (
        <Scrollbars autoHide autoHideTimeout={1000} autoHideDuration={200} universal={true}>
            <div>
                <div
                    style={{
                        position: "relative",
                        width: "100%",
                        borderRadius: "1em",
                        height: "50vh",
                        backgroundImage: `url(${projectDetails.banner})`,
                        paddingBottom: "35%",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                    }}
                />
                <div className="pb-6 maincontainerprofileprojects w-full">
                    <div className="mx-auto boxprojectdetails shadow-lg sm:px-6 lg:px-8">
                        <div className="overflow-hidden shadow-xl dark:bg-gray-800 rounded-xl sm:rounded-lg">
                            <div className="p-6 bg-gray-900 dark:bg-gray-800 sm:px-20">
                                <Image
                                    className="h-10 w-10 inline-block rounded-lg"
                                    src={projectDetails.logo}
                                    alt={altt}
                                    width="85"
                                    height="85"
                                />
                                {renderLinkButton()}
                                <div className="mt-5 text-2xl dark:text-gray-200">
                                    <span className="font-bold">{projectDetails.name}</span> - {projectDetails.title}
                                </div>
                                <div className="mt-6 text-gray-400 text-md">{projectDetails.description}</div>
                                {projectDetails.features?.length > 0 && (
                                    <>
                                        <div className="mt-6 text-gray-400 font-semibold text-md">Key Features</div>
                                        <ul className="mt-2 text-gray-400 list-disc text-md">
                                            {projectDetails.features.map((feature: string, index: number) => (
                                                <li key={`feature-${index}`}>• {feature}</li>
                                            ))}
                                        </ul>
                                    </>
                                )}
                                {projectDetails.skills?.length > 0 && (
                                    <>
                                        <div className="mt-6 text-gray-400 font-semibold text-md">Technologies Used</div>
                                        {renderTechBadges()}
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                    {projectDetails.snapshots?.length > 0 && (
                        <div className="pl-5 pr-5 mt-3 ml-5 mr-5 mb-3">
                            <div className="mt-6 pb-2 text-gray-400 font-semibold text-2xl">Snapshots</div>
                            {renderSnapshots()}
                        </div>
                    )}
                </div>
            </div>
        </Scrollbars>
    ) : (
        <div className="pb-40 mb-40 w-full">
            <div
                style={{
                    position: "relative",
                    width: "100%",
                    borderRadius: "1em",
                    height: "50vh",
                    backgroundImage: `url(${projectDetails.banner})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                }}
            />
            <div className="ml-2 mr-2 mt-2 shadow-lg">
                <div className="overflow-hidden shadow-xl dark:bg-gray-800 rounded-xl sm:rounded-lg">
                    <div className="p-3 bg-gray-900 dark:bg-gray-800 sm:px-20">
                        <Image
                            className="h-10 w-10 inline-block rounded-lg"
                            src={projectDetails.logo}
                            alt={altt}
                            width="65"
                            height="65"
                        />
                        {renderLinkButton()}
                        <div className="mt-5 text-xl dark:text-gray-200">
                            <span className="font-bold">{projectDetails.name}</span> - {projectDetails.title}
                        </div>
                        <div className="mt-6 text-gray-400 text-sm font-medium">{projectDetails.description}</div>
                        {projectDetails.features?.length > 0 && (
                            <>
                                <div className="mt-6 text-gray-400 font-semibold text-md">Key Features</div>
                                <ul className="mt-2 text-gray-400 list-disc text-sm">
                                    {projectDetails.features.map((feature: string, index: number) => (
                                        <li key={`mob-feature-${index}`} className="pb-2">• {feature}</li>
                                    ))}
                                </ul>
                            </>
                        )}
                        {projectDetails.skills?.length > 0 && (
                            <>
                                <div className="mt-6 text-gray-400 font-semibold text-md">Technologies Used</div>
                                {renderTechBadges()}
                            </>
                        )}
                    </div>
                </div>
            </div>
            {projectDetails.snapshots?.length > 0 && (
                <div className="mt-3 pl-2 pr-2 mb-36 pb-20">
                    <div className="mt-6 pb-2 text-gray-400 font-semibold text-xl">Snapshots</div>
                    {renderSnapshots()}
                </div>
            )}
        </div>
    );
};

export default ProjectDetails;
