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
import lfa from "../../Assets/Projects/lfa.gif";
import ecg from "../../Assets/Projects/ECG.png";
import ecf from "../../Assets/Projects/EF.png";

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
              description="An AI-based call management system which analyses an emergency call and interprets it to get priority level, location, type of help needed etc. This project won the Warpspeed GenAI Hackathon, and if implemented, it can improve the emergency helpline system as well as other call center services. Stack: Python, ReactJS, Flask, Blockchain, Solidity, Assembly AI, Llama Index AI Model, OpenAI API, Twilio"
              ghLink="https://github.com/SiddharthaBhattacharjee/Team-Allies_GenAIRush2023"
              demoLink="https://team-allies-gen-ai-rush2023-tl7z.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lfa}
              isBlog={false}
              title="Lifafa"
              description="Lifafa, your gateway to modern gifting, revolutionizes the age-old tradition of giving with its innovative digital red envelope platform. By seamlessly blending tradition with technology, Lifafa allows users to create, share, and experience the joy of giving in the digital age.Tech Stack: ReactJS, Solidity, wagmiJS, Blockchain, Hardhat, Javascript, TailwindCSS."
              ghLink="https://github.com/SiddharthaBhattacharjee/Lifafa-Blockchain-Red-Envelope"
              demoLink="https://lifafa-five.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Hackverse}
              isBlog={false}
              title="HackVerse Website"
              description="HackVerse is a national level Hackathon, with 2 seasons and 1000+ participants. I, being in the organizing team had the responsibility to make the hackathon website along with the team. This website serves as the landing page for Hackverse Hackathon where participants come to register and get info about the hackathon. This project requires regular updates. Stack: ReactJS, Tailwind CSS, Javascript"
              ghLink="https://github.com/CodeChef-SRMRMP/hackverse"
              demoLink="https://hackverse.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dvs}
              isBlog={false}
              title="BlockChain Voting Dapp"
              description=" secure and exploit proof voting system on Blockchain, with a user- friendly interface and a reliable & secure smart contract. Blockchain based voting has been used by countries like Japan and US, If implemented properly can help increase India's voter turnout by increasing accessability and increase the overall security in elections. Stack: ReactJS, Solidity, Hardhat, Blockchain, Javascript"
              ghLink="https://github.com/SiddharthaBhattacharjee/Decentralized_Voting_System"
              demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={npd}
              isBlog={false}
              title="MallEZ (Numberplate Reader)"
              description="An AI based python script that detects and reads number plates using camera connected to device, Implemented as a part of the greater project MallEZ which is an Automated parking System For malls. The system automatically reads and logs numberplate info on a database at both entry and exit points. Stack: Python, MySQL, OpenCV, EasyOCR, PyTorch"
              ghLink="https://github.com/SiddharthaBhattacharjee/Project_MallEZ"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rps}
              isBlog={false}
              title="Rock-Paper-Scissor"
              description="Using 'Camera Vision' (machine learning) we can enjoy the game of rock paper scissor just like we used to do in our school days, with our hands and not buttons. The game is created in python using OpenCV and PyTorch along with a pre trained finger count model to detect the input of user without any button presses. Stack: Python, OpenCV "
              ghLink="https://github.com/SiddharthaBhattacharjee/Rock-Paper-Sissor-OpenCV-Python"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tta}
              isBlog={false}
              title="TimeTable Android App"
              description="Shows timetable in a day structure with additional features such as showing which class is going on, showing time and edit option. The app has found a userbase among students & teachers at my college. Stack: Java, Android Studio, XML, SQLite"
              ghLink="https://github.com/SiddharthaBhattacharjee/CSE_D_TableApp"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecg}
              isBlog={false}
              title="E-Certificate Generator"
              description="A python program that generates E-Certificate by combining names from spreadsheet and png design. It reads any xlsx or csv file for names , and takes in custom certificate designs in png form and then puts in the names from the file onto the certificate and gives output in the output folder. Tech Stack: Python, Pandas, CSV, Xlsx, SQLite."
              ghLink="https://github.com/SiddharthaBhattacharjee/E-Certificate_Generator"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecf}
              isBlog={false}
              title="Encriptificator"
              description="Encriptificator is a text editor app developed by me as a personal project. It provides all basic features of a text editor with the additional feature of encrypting your files. It keeps the files safe and encrypted and cannot be exported to other devices and decrypted.  Tech Stack: Python, OS-FS, MySQL, Py-installer."
              ghLink="https://github.com/SiddharthaBhattacharjee/Encriptificator"
              demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
