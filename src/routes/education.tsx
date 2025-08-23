import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/education")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <div className="ml-[30px] w-[770px]">
        <div className="border-b border-border">
          <h3 className="text-[26.25px]" id="Educational_Gatherings">
            Educational Gatherings
          </h3>
          <p>
            These meetings involve learning about Linux, and computer related topics. They typically involve a person giving a presentation, but
            also extend to one on one coaching, mentoring, or teaching. They are a great way to gain exposure to current computing topics, improve
            understanding of a current system, or gain understanding in a new area of computing.
          </p>
          <br />
        </div>
        <h4 id="Lectures_and_Presentations">Lectures and Presentations</h4>
        <p>
          Some of the Wednesday Lab meetings come with a presentation. In addition to food, drink, and support, one of our members may give twenty
          minute talk.
          <br />
          We also host five minute lightning talks.
          <br />
          For information about the talks, requests for topics to be presented, or to offer your talk, please contact Edwin Buck.
        </p>
        <h4 id="Coaching">Coaching</h4>
        <p>
          For those who have an interest in a broad area of Linux, and could use occasional assistance in pursuing their learning goals, the Houston
          Linux Users Group provides coaching services. These services will have one of our experienced members track your progress, and provide
          occasional assistance when small problems in your self-directed learning falter.
        </p>
        <h4 id="One_on_One_Teaching">One on One Teaching</h4>
        <p>
          For those looking for deep knowledge in a specific topic, with a member helping to direct the learning, a few members provide a directed
          path toward achieving their learning goals. These services are not available for all topics, and are limited based on member
          availability.{" "}
        </p>
      </div>

      <div className="bg-card  p-[19px] mb-5 border border-border-card rounded-sm inset-shadow-card flex-1 ml-[30px]">
        <ul>
          <li className="py-[3px] px-[15px] text-[11px] font-bold text-[#ccc] uppercase"> Table of contents</li>
          <li title="Advocacy Gatherings" className="py-[3px] px-[15px]">
            <Link to="#Advocacy Gatherings">Educational Gatherings</Link>
          </li>

          <ul className="px-[15px]">
            <li className="py-[3px] px-[15px] text-">
              <Link to="#Lectures_and_Presentations" title="Linux / Station Houston Awareness Meet Up">
                Lectures and Presentations
              </Link>
            </li>

            <li className="py-[3px] px-[15px] text-">
              <Link to="Coaching" title="Linux / Station Houston Awareness Meet Up">
                Coaching
              </Link>
            </li>

            <li className="py-[3px] px-[15px] text-">
              <Link to="#One on One Teaching" title="Linux / Station Houston Awareness Meet Up">
                One on One Teaching
              </Link>
            </li>

            <li className="h-[1px] my-[9.5px] mx-[1px] w-full bg-[rgb(227,227,227)]"> </li>
          </ul>
        </ul>
      </div>
    </>
  );
}
