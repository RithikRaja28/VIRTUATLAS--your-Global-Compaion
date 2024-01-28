import React from 'react'
import "../App.css"
import { Col, Container, Row,Card} from 'react-bootstrap'

function Explore() {
    const featureEnable = ()=>
{
    alert(" Congrats! Successfully Enabled ✅ ")
}
  return (
    <div>
      <Container fluid id="features">
        <Row className="m-1">
          <Col className="text-center">
            <h2 className="text-light explore-heading mt-3">
              <span style={{ color: "#6Cd4ee" }}>E</span>xplore
            </h2>
            <div className="d-flex justify-content-center">
              <Card
                style={{
                  width: "18rem",
                  outline: "none",
                  border: "2px solid #6Cd4ee",
                }}
                className="mt-5 me-4"
              >
                <Card.Img
                  variant="top"
                  src="textchat.png"
                  width="100px"
                  height="300px"
                />
                <Card.Body className="text-light">
                  <Card.Title className="nav-item p-1">
                    MultiModal Navigation
                  </Card.Title>
                  <Card.Text>
                    Users can now navigate to desired location in their native
                    language by instruction through{" "}
                    <span style={{ color: "#6Cd4ee", fontWeight: "bold" }}>
                      text
                    </span>
                    ,{" "}
                    <span style={{ color: "#6Cd4ee", fontWeight: "bold" }}>
                      voice
                    </span>{" "}
                    and{" "}
                    <span style={{ color: "#6Cd4ee", fontWeight: "bold" }}>
                      image
                    </span>
                    .
                  </Card.Text>
                </Card.Body>
                <Card.Body>
                  <Card.Link
                    href="#"
                    onClick={featureEnable}
                    style={{ textDecoration: "none" }}
                  >
                    <img
                      src="click-unscreen-1.gif"
                      style={{ width: "40px", height: "40px" }}
                      className="m-2"
                    ></img>
                    Click to enable
                  </Card.Link>
                </Card.Body>
                {/* RAG */}
              </Card>
              <Card
                style={{
                  width: "18rem",
                  outline: "none",
                  border: "2px solid #6Cd4ee",
                }}
                className="mt-5 me-4"
              >
                <Card.Img
                  variant="top"
                  src="RAG.jpg"
                  width="100px"
                  height="300px"
                />
                <Card.Body className="text-light">
                  <Card.Title className="nav-item p-1">
                    Real-time Analytics and Generative
                  </Card.Title>
                  <Card.Text>
                    Our product provides the{" "}
                    <span style={{ color: "#6Cd4ee", fontWeight: "bold" }}>
                      Real-Time data Analytics
                    </span>{" "}
                    to be more responsiveness and suggesstion.
                  </Card.Text>
                </Card.Body>
                <Card.Body>
                  <Card.Link
                    href="#"
                    onClick={featureEnable}
                    style={{ textDecoration: "none" }}
                  >
                    <img
                      src="click-unscreen-1.gif"
                      style={{ width: "40px", height: "40px" }}
                      className="m-2"
                    ></img>
                    Click to enable
                  </Card.Link>
                </Card.Body>
              </Card>

              {/* Multilingual */}
              <Card
                style={{
                  width: "18rem",
                  outline: "none",
                  border: "2px solid #6Cd4ee",
                }}
                className="mt-5 me-4"
              >
                <Card.Img
                  variant="top"
                  src="MultilingualLanguage.jpg"
                  width="100px"
                  height="300px"
                />
                <Card.Body className="text-light">
                  <Card.Title className="nav-item p-1">
                    Multilingual Language Support
                  </Card.Title>
                  <Card.Text>
                    Customers can get the wide varities of language and select
                    their{" "}
                    <span style={{ color: "#6Cd4ee", fontWeight: "bold" }}>
                      native language to start their journey.
                    </span>
                  </Card.Text>
                </Card.Body>
                <Card.Body>
                  <Card.Link
                    href="#"
                    onClick={featureEnable}
                    style={{ textDecoration: "none" }}
                  >
                    <img
                      src="click-unscreen-1.gif"
                      style={{ width: "40px", height: "40px" }}
                      className="m-2"
                    ></img>
                    Click to enable
                  </Card.Link>
                </Card.Body>
              </Card>

              {/* Hub integration  */}
              <Card style={{ width: "18rem", outline: "none",
                  border: "2px solid #6Cd4ee" }} className="mt-5 me-4">
                <Card.Img
                  variant="top"
                  src="hubintegration.avif"
                  width="100px"
                  height="300px"
                />
                <Card.Body className="text-light">
                  <Card.Title className="nav-item p-1">
                    Hub Integration
                  </Card.Title>
                  <Card.Text>
                    Initiated{" "}
                    <span style={{ color: "#6Cd4ee", fontWeight: "bold" }}>
                      Virtuatlas Hubs
                    </span>{" "}
                    near you and also can navigate to your desired desination by
                    your{" "}
                    <span style={{ color: "#6Cd4ee", fontWeight: "bold" }}>
                      own language with A.I{" "}
                    </span>
                    .
                  </Card.Text>
                </Card.Body>
                <Card.Body>
                  <Card.Link
                    href="#"
                    onClick={featureEnable}
                    style={{ textDecoration: "none" }}
                  >
                    <img
                      src="click-unscreen-1.gif"
                      style={{ width: "40px", height: "40px" }}
                      className="m-2"
                    ></img>
                    Click to enable
                  </Card.Link>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Explore
