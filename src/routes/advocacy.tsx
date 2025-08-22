import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/advocacy")({
    component: RouteComponent,
});

function RouteComponent() {
    return (
        <>
            <h3>Advocacy Gatherings</h3>
            <p>
                These meetings involve promoting Linux and the Houston Linux User Group. They typically involve Linux awareness, group meeting times, and
                handling general questions about Linux and current popular computing topics. They are a great way to meet new people, and understand the needs
                of computer users.
            </p>
            <br />
            <h4>Linux / Station Houston Awareness Meet Up</h4>
            <ul>
                <li>
                    Station Houston <br />
                </li>
                <li>
                    During Open Meetings, 10:00 A.M. to 4:00 P.M. <br />
                </li>
                <li>
                    1301 Fannin St #2440, Houston, TX 77002 <br />
                </li>
                <li>
                    (281) 393-0500 - Station Houston <br />
                </li>
                <li>
                    (832) 633-8599 - Linux Group Organizer <br />
                </li>
            </ul>
            <p>
                Station Houston is an incubator for people interested in starting and growing technology oriented businesses. For those interested, they offer
                membership and coaching to prepare entrepreneurs turn their business ideas into funded start ups.
            </p>
            <p>
                A small group of people try to make the open meetings to raise awareness of the Houston Linux User's Group. Please contact the organizer if you
                wish to attend the outing, and be prepared to work remotely.
            </p>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1731.9166781260271!2d-95.36686574326664!3d29.753535681989028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640bf4316cf7ae7%3A0x777b3c7c5a011a56!2sStation+Houston!5e0!3m2!1sen!2sus!4v1507954924080"
                width="600"
                height="450"
                frameBorder={0}
                style={{ border: 0 }}
                allowFullScreen={true}
            ></iframe>
        </>
    );
}
