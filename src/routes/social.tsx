import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/social")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <div className="ml-[30px] w-[770px]">
        <div className="border-b border-border">
          <h3 className="text-[26.25px]" id="Social_Gatherings">
            Social Gatherings
          </h3>
          <p>
            These meetings involve eating and drinking in the company of Linux minded people. The topics rarely stay on Linux proper, but flow with
            whatever the group is interested in at the moment. It's a great way to network with Linux loving peers.
          </p>
          <br />
        </div>
        <h4 id="Cedar_Creek_Wednesday_Meet_Up">Cedar Creek Wednesday Meet Up</h4>
        <blockquote className="pl-[15px] border-l-5 border-[#eee] mb-[21px]">
          <p className="text-[18.75px] font-light leading-[23.4375px]">
            Cedar Creek <br />
            Wednesdays, 9:30 P.M. to 12:00 A.M. <br />
            1034 W 20th St, Houston, TX 77008 <br />
            (713) 808-9623 <br />
          </p>
        </blockquote>
        <p>
          Typically four to eight members drive over to the Holiday Inn after the support meeting. If the group is large, we combine tables; otherwise
          most of us sit at the bar.
        </p>
        <p>Along with a full bar and decent beer selection, Cedar Creek offers good hamburgers and smothered fries.</p>
        <p>
          Accommodations for computers are sparse, but if you wish to bring a laptop, be prepared to tether to your phone for WiFi, and have a battery
          charge.
        </p>
      </div>

      <div className="bg-card  p-[19px] mb-5 border border-border-card rounded-sm inset-shadow-card flex-1 ml-[30px]">
        <ul>
          <li className="py-[3px] px-[15px] text-[11px] font-bold text-[#ccc] uppercase"> Table of contents</li>
          <li title="Social Gatherings" className="py-[3px] px-[15px]">
            <Link to="#Social_Gatherings">Social Gatherings</Link>
          </li>

          <ul className="px-[15px]">
            <li className="py-[3px] px-[15px]">
              <Link to="#Cedar_Creek_Wednesday_Meet_Up" title="Cedar Creek Wednesday Meet Up">
                Cedar Creek Wednesday Meet Up
              </Link>
            </li>
          </ul>
        </ul>
      </div>
      {/*     <iframe */}
      {/*         scrolling="no" */}
      {/*         marginHeight={0} */}
      {/*         marginWidth={0} */}
      {/*         src="https://maps.google.com/maps?width=600&amp;height=450&amp;hl=en&amp;q=10609%20Westpark%20Drive%20Houston+(Westchase%20Bar%20&amp;%20Grill)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" */}
      {/*         width="600" */}
      {/*         height="450" */}
      {/*         frameBorder={0} */}
      {/*         style={{ border: 0 }} */}
      {/*         allowFullScreen={true} */}
      {/*     ></iframe> */}
    </>
  );
}
