import React, { useState }  from 'react'
import "../App.css"
import { Container, Row , Col , Card , Button } from 'react-bootstrap'

function Multilingual() {
const [tamil, setTamil] = useState(
  "Welcome to Virtuatlas - Multilingual System"
);
const [telugu, settelugu] = useState(
  "Welcome to Virtuatlas - Multilingual System"
);
const [Hindi, setHindi] = useState(
  "Welcome to Virtuatlas - Multilingual System"
);
const [Marathi, setMarathi] = useState(
  "Welcome to Virtuatlas - Multilingual System"
);
const [Bengali, setBengali] = useState(
  "Welcome to Virtuatlas - Multilingual System"
);
const [Malayalam, setMalayalam] = useState(
  "Welcome to Virtuatlas - Multilingual System"
);


const toTamil = () => {
 
  setTamil("Virtuatlas - பன்மொழி அமைப்புக்கு வரவேற்கிறோம்");
};
const toHindi = () => {
 
  setHindi("Virtuatlas में आपका स्वागत है - बहुभाषी प्रणाली");
};
const toTelugu = () => {
 
  settelugu("Virtuatlas - బహుభాషా వ్యవస్థకు స్వాగతం");
};
const toMarathi = () => {
 
  setMarathi("Virtuatlas - बहुभाषी प्रणालीमध्ये आपले स्वागत आहे");
};
const toBengali= () => {
 
  setBengali("Virtuatlas - বহুভাষিক সিস্টেমে স্বাগতম");
};
const toMalayalam = () => {
 
  setMalayalam("Virtuatlas - ബഹുഭാഷാ സംവിധാനത്തിലേക്ക് സ്വാഗതം");
};
  return (
    <div>
      <Container className="mt-5">
        <Row className="m-1">
          <h2 className="text-light text-center mt-3 mb-3">
            <span style={{ color: "#6Cd4ee" }}>M</span>ultilingual{" "}
            <span style={{ color: "#6Cd4ee" }}>I</span>ntegration
          </h2>
          <p className="text-center" style={{ color: "grey" }}>
            Your Companion , Your Language
          </p>

          <Col className="mt-5">
            <Card
              style={{
                width: "20rem",
                outline: "none",
                border: "2px solid #6Cd4ee",
              }}
            >
              <Card.Body className="text-light">
                <Card.Title
                  className="text-center nav-item "
                  style={{ color: "#6Cd4ee", fontWeight: "bold" }}
                >
                  Tamil
                </Card.Title>
                <h5 className="h5 text-center  mt-4">{tamil}</h5>
                <div className="text-center">
                  <Button
                    variant="primary"
                    onClick={toTamil}
                    className="text-center mt-2"
                  >
                    Try
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col className="mt-5">
            <Card
              style={{
                width: "20rem",
                outline: "none",
                border: "2px solid #6Cd4ee",
              }}
            >
              <Card.Body className="text-light">
                <Card.Title
                  className="text-center nav-item "
                  style={{ color: "#6Cd4ee", fontWeight: "bold" }}
                >
                  Telugu
                </Card.Title>
                <h5 className="h5 text-center  mt-4">{telugu}</h5>
                <div className="text-center">
                  <Button
                    variant="primary"
                    onClick={toTelugu}
                    className="text-center mt-2"
                  >
                    Try
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col className="mt-5">
            <Card
              style={{
                width: "20rem",
                outline: "none",
                border: "2px solid #6Cd4ee",
              }}
            >
              <Card.Body className="text-light">
                <Card.Title
                  className="text-center nav-item "
                  style={{ color: "#6Cd4ee", fontWeight: "bold" }}
                >
                  Hindi
                </Card.Title>
                <h5 className="h5 text-center  mt-4">{Hindi}</h5>
                <div className="text-center">
                  <Button
                    variant="primary"
                    onClick={toHindi}
                    className="text-center mt-2"
                  >
                    Try
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col className="mt-5 ms-3">
            <Card
              style={{
                width: "20rem",
                outline: "none",
                border: "2px solid #6Cd4ee",
              }}
            >
              <Card.Body className="text-light">
                <Card.Title
                  className="text-center nav-item "
                  style={{ color: "#6Cd4ee", fontWeight: "bold" }}
                >
                  Marathi
                </Card.Title>
                <h5 className="h5 text-center  mt-4">{Marathi}</h5>
                <div className="text-center">
                  <Button
                    variant="primary"
                    onClick={toMarathi}
                    className="text-center mt-2"
                  >
                    Try
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col className="mt-5">
            <Card
              style={{
                width: "20rem",
                outline: "none",
                border: "2px solid #6Cd4ee",
              }}
            >
              <Card.Body className="text-light">
                <Card.Title
                  className="text-center nav-item "
                  style={{ color: "#6Cd4ee", fontWeight: "bold" }}
                >
                  Bengali
                </Card.Title>
                <h5 className="h5 text-center  mt-4">{Bengali}</h5>
                <div className="text-center">
                  <Button
                    variant="primary"
                    onClick={toBengali}
                    className="text-center mt-2"
                  >
                    Try
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col className="mt-5">
            <Card
              style={{
                width: "20rem",
                outline: "none",
                border: "2px solid #6Cd4ee",
              }}
            >
              <Card.Body className="text-light">
                <Card.Title
                  className="text-center nav-item "
                  style={{ color: "#6Cd4ee", fontWeight: "bold" }}
                >
                  Malayalam
                </Card.Title>
                <h5 className="h5 text-center mt-4">{Malayalam}</h5>
                <div className="text-center">
                  <Button
                    variant="primary"
                    onClick={toMalayalam}
                    className="text-center mt-2"
                  >
                    Try
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Multilingual
