import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <div className="p-2 ml-[30px] flex-2">
        <div className="pb-[9.5px] border-b border-border mt-[21px] mb-[31.5px] ">
          <h1 className="text-[41.25px]">Welcome Linux Users</h1>
        </div>

        <p>
          The Houston Linux User's Group is the place for Linux activity in Houston. Whether you are looking to socialize with Linux loving peers,
          promote the adoption of Linux in a particular venue, or learn about Linux and its software offerings, the Houston Linux User's Group can
          assist you in achieving your goals, with Linux!
        </p>
        <p> The Houston Linux User's Group offers four main types of services, advocacy, education, support, and socializing.</p>
      </div>

      <div className="bg-card  p-[19px] mb-5 border border-border-card rounded-sm inset-shadow-card flex-1">
        <h3 className="text-[33.75px]">Background</h3>
        <p>
          The Houston Linux Users Group was founded in 1995. With over 28 years of computing history, the group has transitioned with the needs of the
          computing community.
        </p>
        <p>
          One of the most active computer groups in Houston, the Houston Linux Users Group has been meeting weekly for the past two decades. With a
          breadth and depth of computing experience rarely found elsewhere, the group has helped individuals use and leverage Linux in a large number
          of ways.
        </p>
        <p>
          Whether you intend to learn system administration, set up a website, develop a new application, or build a back-end system; or group
          contains professionals from the Houston area that can share their experiences, learn from your efforts, and assist in your endeavors.
        </p>
      </div>
    </>
  );
}
