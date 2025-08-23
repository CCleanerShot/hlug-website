import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/support")({
  component: RouteComponent,
});

// TODO: add star before elemetn in css
function RouteComponent() {
  return (
    <>
      <div className="ml-[30px] w-[770px]">
        <div className="">
          <h3 className="text-[26.25px]" id="Support_Gatherings">
            Support Gatherings
          </h3>
          <p>These meetings provide support for Linux people needing assistance with:</p>
          <ul className="ml-[25px] mb-[10.500px] list-disc text-para">
            <li>Installing Linux on new hardware.</li>
            <li>Improving or fixing a Linux installation.</li>
            <li>Questions about how Linux works.</li>
            <li>Questions / assistance with Linux security.</li>
            <li>Linux software suggestions.</li>
          </ul>
          <p>
            Members meet to both offer support and ask for it. We generally have a diverse enough group to attempt any problem, and have answered
            thousands of general use problems (and fixed hundreds of WiFi card issues) over the years.
          </p>
        </div>
        <h4 id="cPanel_Meet_up">cPanel Meet up: Wednesdays, 6:00 P.M. to 9:00 P.M.</h4>

        <blockquote className="pl-[15px] border-l-5 border-[#eee] mb-[21px]">
          <p className="text-[18.75px] font-light leading-[23.4375px]">
            cPanel, Inc. <br />
            2550 North Loop West
            <br />
            Houston, TX 77092
            <br />
            (832) 633-8599
            <br />
          </p>
        </blockquote>
        <p>
          The building has a sign for <strong>cPanel</strong> on the South side of the building, and a sign for <strong>☤ CHCP College</strong> on the
          East side of the building.
        </p>
        <p>
          Food and drinks are provided by cPanel, Inc. Typically we have a variety of pizza, including cheese-less pizza for our dairy allergic /
          lactose intolerant members.
        </p>
        <p>
          We meet in the 4th floor conference room at 2550 North Loop West, Houston, TX. If the doors are locked, call the number posted on the flier
          on the door.
        </p>
      </div>

      <div className="bg-card  p-[19px] mb-5 border border-border-card rounded-sm inset-shadow-card flex-1 ml-[30px]">
        <ul>
          <li className="py-[3px] px-[15px] text-[11px] font-bold text-[#ccc] uppercase"> Table of contents</li>
          <li title="Support Gatherings" className="py-[3px] px-[15px]">
            <Link to="#Support_Gatherings">Support Gatherings</Link>
          </li>

          <ul className="px-[15px]">
            <li className="py-[3px] px-[15px]">
              <Link to="#cPanel_Meet_up:_Wednesdays,_6:00_P.M._to_9:00_P.M." title="Linux / Station Houston Awareness Meet Up">
                cPanel Meet up: Wednesdays, 6:00 P.M. to 9:00 P.M.
              </Link>
            </li>

            <li className="h-[1px] my-[9.5px] mx-[1px] w-full bg-[rgb(227,227,227)]"> </li>
          </ul>
        </ul>
      </div>
      {/* <iframe */}
      {/*     src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d432.7433868908962!2d-95.44473101648154!3d29.80807276017754!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe75370ea49c0fb7c!2scPanel!5e0!3m2!1sen!2sus!4v1493858914477" */}
      {/*     width="600" */}
      {/*     height="450" */}
      {/*     frameBorder={0} */}
      {/*     style={{ border: 0 }} */}
      {/*     allowFullScreen={true} */}
      {/* ></iframe> */}
    </>
  );
}
