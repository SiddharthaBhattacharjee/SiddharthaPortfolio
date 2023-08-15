import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Siddhartha Bhattacharjee </span>
            from <span className="purple"> Assam, India.</span>
            <br /> I am a Third year student pursuing a Bachelor degree (BTech)
            in Computer Science Engineering at SRM University Chennai.
            <br />
            Additionally, I am currently working as Tech Lead at 5ireHub Chennai, as well as the Development team lead of CodeChef club SRM Rmp.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Attending Conferences and Hackathons
            </li>
            <li className="about-activity">
              <ImPointRight /> Teaching/Conducting workshops
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "#628c88d5" }}>
            "Motivation is Temporary, Consistency is permanent!"{" "}
          </p>
          <footer className="blockquote-footer">Kelly Slater</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
