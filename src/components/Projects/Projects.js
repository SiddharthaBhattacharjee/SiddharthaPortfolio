import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import dvs from "../../Assets/Projects/dvs.png";
import Hackverse from "../../Assets/Projects/Hackverse.png";
import npd from "../../Assets/Projects/npd.png";
import sahaai from "../../Assets/Projects/sahaai.png";
import rps from "../../Assets/Projects/rps.png";
import tta from "../../Assets/Projects/tta.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sahaai}
              isBlog={false}
              title="Saaha-AI"
              description="Saha-AI is an innovative call management system that uses artificial intelligence (AI) to help prioritize emergency calls when no handlers are available. By analyzing the call, Saha-AI can grade the importance of each call and quickly transfer the relevant information to the respective handler."
              ghLink="https://github.com/SiddharthaBhattacharjee/Team-Allies_GenAIRush2023"
              demoLink="https://team-allies-gen-ai-rush2023-tl7z.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Hackverse}
              isBlog={false}
              title="HackVerse Website"
              description="Hackverse is TamilNadu's Largest Blockchain Hackathon. HackVerse is a platform to build a community of a healthy youth with a bigger perspective on problem solving. I have been a part of the organizing team of Hackverse from season-1 and I have worked on making the hackverse website along with the other members of the team."
              ghLink="https://github.com/CodeChef-SRMRMP/hackverse"
              demoLink="https://hackverse.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dvs}
              isBlog={false}
              title="BlockChain Voting Dapp"
              description="It is a decentralized voting system which uses block chain technology to implement a very safe and exploit proof voting system to make voting more easy, accessible and secure. The Underlying smart contract has been deployed on Ethereum Testnet, Need to be whitelisted for testing. Tech stack used : Solidity , Hardhat, ReactJS"
              ghLink="https://github.com/SiddharthaBhattacharjee/Decentralized_Voting_System"
              demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={npd}
              isBlog={false}
              title="MallEZ (Numberplate Reader)"
              description="An AI based python script that detects and reads number plates using camera connected to device, used python , pytorch, opencv, easyocr, Implemented as a part of the greater project MallEZ which is an Automated parking System For malls. The system automatically reads and logs numberplate info on a database system."
              ghLink="https://github.com/SiddharthaBhattacharjee/Project_MallEZ"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rps}
              isBlog={false}
              title="Rock-Paper-Scissor"
              description="Using 'Camera Vision' (machine learning) we can enjoy the game of rock paper scissor just like we used to do in our school days, with our hands and not buttons. The game is created in python using OpenCV and PyTorch along with a pre trained finger count model to detect the input of user without any button presses. "
              ghLink="https://github.com/SiddharthaBhattacharjee/Rock-Paper-Sissor-OpenCV-Python"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tta}
              isBlog={false}
              title="TimeTable Android App"
              description="made an app that shows the timetable, with additional info like which periods are over, currently ongoing,or yet to come. I have distributed the app to students of various classes and the app has found a big user-base among the students of my college."
              ghLink="https://github.com/SiddharthaBhattacharjee/CSE_D_TableApp"
              demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
