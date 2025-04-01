// app/[projectID]/page.tsx

import USMFDevelopmentReval from './USDevelopmentReval';


async function fetchProject(projectID: string) {
  // Your database fetching logic here
  // return { id: projectID, type: 'A', /* other project data */ }
}

export default async function ProjectPage({ params }: { params: { projectID: string } }) {
  const project = await fetchProject(params.projectID);

  let underwritingComponent;
  if (project.type === 'A') {
    underwritingComponent = <USMFDevelopmentReval/>;
  } else if (project.type === 'B') {
    underwritingComponent = <UnderwritingTypeB project={project} />;
  } else {
    underwritingComponent = <DefaultUnderwriting project={project} />;
  }

  return (
    <CommonLayout project={project}>
      {underwritingComponent}
    </CommonLayout>
  );
}
