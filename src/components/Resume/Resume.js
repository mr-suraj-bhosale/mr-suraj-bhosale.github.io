import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import axios from "axios";
import pdf from "../../Assets/Soumyajit-Behera.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
  const uri = "https://porfolio-backend.vercel.app/ranks/getRanks";
  const [spojRank, upadteSpojRank] = useState(0);
  const [hackerrank, upadteHackerank] = useState(0);
  const [sem, upadateSem] = useState(0);
  const [cgpa, upadteCgpa] = useState(0);

  useEffect(() => {
    axios
      .get(uri)
      .then((res) => {
        upadteSpojRank(res.data.message[0].spojRank);
        upadteHackerank(res.data.message[1].hackerrank);
        upadteCgpa(res.data.message[2].cgpa);
        upadateSem(res.data.message[3].sem);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="QA AUTOMATION Engineer [PUNE]"
              date="MARCH 2018 - DECEMBE 2020"
              content={[
                "Worked on web based retail billing software,which helps to manage stocks, GST, storing  customer,supplier records.And helps the user to get more familiar with their daily purchase-sale records."
              ]}
            />
            <h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
              title="Automation Tester [PEOCIT SOFTWARE SOLUTIONS PVT LTD"
              content={[
                "Performed manual testing and automation testing using Appium." ,
                "Involved in Automation of the test cases using Selenium Web Driver, TestNG. ",
                "Created data driven test cases using apache POI and property files. ",
                "Used Selenium Web Driver for Functional, Regression and Integration testing. ",
                "Performed API automation testing using RestAssured with selenium webdriver."
              ]}
            />
            <Resumecontent
              title="IMPLEMENTATION ENGINEER [VINETI]"
              content={[
                "Worked on delivering multiple client configurations built on top of a Cell and Gene Therapy custom workflow platform.",
                "Worked on configuring client-specific workflow defined in Rails + YAML configuration, involving operation flow and chain of custody"

              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="DR DY PATIL SCHOOL OF ENGINEERING [LOHEGAON, MAHARASHTRA] "
              date="2014-2018"
              content={[`CGPA: ${cgpa} (Till ${sem}th Sem)`]}
            />
            <Resumecontent
              title="12TH BOARD [ARMY PUBLIC SCHOOL,PUNE]"
              date="2014 PASSOUT"
              content={["Precentage: 69%"]}
            />
            <Resumecontent
              title="12TH BOARD [ARMY PUBLIC SCHOOL,PUNE]"
              date="2012 PASSOUT"
              content={["Precentage: 78%"]}
            />
            <h3 className="resume-title">Achivements</h3>
            <Resumecontent
              title=""
              content={[
                `Current rank in Spoj ${spojRank}`,
                `Current rank in HackerRank  ${hackerrank}`,
                "Top Performer in Code-Break 1.0",
                "Participant in Hack-A-Bit 2019",
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
          <AiOutlineDownload />&nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
