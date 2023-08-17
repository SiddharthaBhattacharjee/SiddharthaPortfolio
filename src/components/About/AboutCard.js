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
            <br /> I am a third year student pursuing a Bachelor degree (BTech)
            in Computer science engineering at SRM university Chennai.
            <br />
            I am the community tech Lead at 5ireHub Chennai and the Development team head of CodeChef club SRM Rmp. I have also worked as Ambassador at Shardeum and Development team member at GDSC SRM Rmp.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Attending conferences and Hackathons
            </li>
            <li className="about-activity">
              <ImPointRight /> Teaching/ Conducting workshops
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "#628c88d5" }}>
            "Motivation is temporary, consistency is permanent!"{" "}
          </p>
          <footer className="blockquote-footer">Kelly Slater</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
