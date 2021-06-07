import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import BlogCard from "./BlogsCards";
import Particle from "../Particle";
import bitcoin from "../../Assets/Projects/bitcoin.jpeg";
import dodge from "../../Assets/Projects/dodge.jpeg";
import etherium from "../../Assets/Projects/etherium.jpeg";
import matic from "../../Assets/Projects/matic.png";
import ripple from "../../Assets/Projects/ripple.jpeg";
import tron from "../../Assets/Projects/tron.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Favourite coins </strong>
        </h1>
        <p style={{ color: "white" }}>
          All About Crypto
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitcoin}
              isBlog={false}
              title="Bitcoin"
              description="Bitcoin is a decentralized peer-to-peer digital currency that is powered by its users with no central authority or middlemen."
              link="https://coinmarketcap.com/currencies/bitcoin/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dodge}
              isBlog={false}
              title="Dodge"
              description="DOGE, symbol: Ð) is a cryptocurrency created by software engineers Billy Markus and Jackson Palmer, who decided to create a payment system as a joke, making fun of the wild speculation in cryptocurrencies at the time.[4] Despite its satirical nature, some consider it a legitimate investment prospect."
              link="https://coinmarketcap.com/currencies/dogecoin/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={matic}
              isBlog={false}
              title="Matic"
              description="Decentralized Apps are making huge progress but the current blockchain ecosystem is not prepared to scale as per the demand.

              The issues of slow block confirmations and high gas fees need to be solved before we target mass adoption by mainstream users. And most importantly, it needs awesome user experience.
              
              We aim to change that by simplifying the interaction between users and the decentralized world. We want to make interacting with the decentralized ecosystem so easy that anyone can do so without worrying about the complexity of the system."
              link="https://coinmarketcap.com/currencies/polygon/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ripple}
              isBlog={false}
              title="Ripple"
              description="Ripple is a real-time gross settlement system, currency exchange and remittance network created by Ripple Labs Inc., a US-based technology company. Released in 2012, Ripple is built upon a distributed open source protocol, and supports tokens representing fiat currency, cryptocurrency, commodities, or other units of value such as frequent flier miles or mobile minutes.[2] Ripple purports to enable secure, instantly and nearly free global financial transactions of any size with no chargebacks. The ledger employs the native cryptocurrency known as XRP."
              link="https://coinmarketcap.com/currencies/xrp/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tron}
              isBlog={false}
              title="Tron"
              description="TRON is a blockchain-based operating system that aims to ensure this technology is suitable for daily use. Whereas Bitcoin can handle up to six transactions per second, and Ethereum up to 25, TRON claims that its network has capacity for 2,000 TPS."
              link="https://coinmarketcap.com/currencies/tron/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={etherium}
              isBlog={false}
              title="Etherium"
              description="Ethereum is a decentralized, open-source blockchain with smart contract functionality. Ether (ETH or Ξ) is the native cryptocurrency of the platform. After Bitcoin, it is the second-largest cryptocurrency by market capitalization.[1] Ethereum is the most actively used blockchain"
              link="https://coinmarketcap.com/currencies/ethereum/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
