import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/advocacy")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <div className="ml-[30px] w-[770px]">
        <div className="border-b border-border">
          <h3 className="text-[26.25px]" id="#Advocacy_Gatherings">
            Advocacy Gatherings
          </h3>
          <p>
            These meetings involve promoting Linux and the Houston Linux User Group.
            <br />
            They typically involve Linux awareness, group meeting times, and handling general questions about Linux and current popular computing
            topics. They are a great way to meet new people, and understand the needs of computer users.
          </p>
        </div>
        <h4 id="Linux__Station_Houston_Awareness_Meet_Up">Linux / Station Houston Awareness Meet Up</h4>
        <blockquote className="pl-[15px] border-l-5 border-[#eee] mb-[21px]">
          <p className="text-[18.75px] font-light leading-[23.4375px]">
            Station Houston <br />
            During Open Meetings, 10:00 A.M. to 4:00 P.M. <br />
            1301 Fannin St #2440, Houston, TX 77002 <br />
            (281) 393-0500 - Station Houston <br />
            (832) 633-8599 - Linux Group Organizer <br />
          </p>
        </blockquote>
        <p>
          Station Houston is an incubator for people interested in starting and growing technology oriented businesses. For those interested, they
          offer membership and coaching to prepare entrepreneurs turn their business ideas into funded start ups.
        </p>
        <p>
          A small group of people try to make the open meetings to raise awareness of the Houston Linux User's Group. Please contact the organizer if
          you wish to attend the outing, and be prepared to work remotely.
        </p>
      </div>
      {/*
        <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1731.9166781260271!2d-95.36686574326664!3d29.753535681989028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640bf4316cf7ae7%3A0x777b3c7c5a011a56!2sStation+Houston!5e0!3m2!1sen!2sus!4v1507954924080"
        width="600"
        height="450"
        frameBorder={0}
        style={{ border: 0 }}
        allowFullScreen={true}
      ></iframe>
        */}
      <div className="bg-card  p-[19px] mb-5 border border-border-card rounded-sm inset-shadow-card flex-1 ml-[30px]">
        <ul>
          <li className="py-[3px] px-[15px] text-[11px] font-bold text-[#ccc] uppercase"> Table of contents</li>
          <li title="Advocacy Gatherings" className="py-[3px] px-[15px]">
            <Link to="#Advocacy_Gatherings">Advocacy Gatherings</Link>
          </li>

          <ul className="px-[15px]">
            <li className="py-[3px] px-[15px]">
              <Link to="#Linux__Station_Houston_Awareness_Meet_Up" title="Linux / Station Houston Awareness Meet Up">
                Linux / Station Houston Awaraness Meet Up
              </Link>
            </li>
          </ul>
        </ul>
      </div>
    </>
  );
}
