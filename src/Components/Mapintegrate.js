import React from 'react'
import { Col, Container, Row , Button , Form} from 'react-bootstrap'
import "../App.css"

function Mapintegrate() {
  return (
    <div id="mapframe">
      <Container className="mt-5">
        <Row className="m-1">
          <h2 className="text-light text-center mt-3 mb-3">
            <span style={{ color: "#6Cd4ee" }}>M</span>aps
          </h2>
          <p className="text-center" style={{ color: "grey" }}>
            Start your Journey with your own language !
          </p>
          <Col className="">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28006.951059276704!2d77.21804239711385!3d28.663644375199127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1706425356736!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className="mt-4 mapfram"
            ></iframe>
          </Col>

          {/*  */}

          <Col className="d-flex justify-content-center align-content-center mt-5">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <img
                  src="location-unscreen.gif"
                  style={{ widht: "45px", height: "45px" }}
                  className="m-1"
                />
                <Form.Label className="text-white">From</Form.Label>
                <Form.Control
                  type="text"
                  className="text-muted"
                  placeholder="Current Location"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <img
                  src="location-1--unscreen.gif"
                  style={{ widht: "45px", height: "45px" }}
                  className="m-1"
                />
                <Form.Label className="text-white">To</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Where to"
                  className="text-muted"
                />
              </Form.Group>
              <Form.Group className="text-light">
                <label for="cars">
                  Choose{" "}
                  <span style={{ color: "#6Cd4ee" }}>your language </span> :{" "}
                </label>
                <select
                  className="m-1 text-light"
                  id="cars"
                  name="cars"
                  style={{ outline: "none", border: "none" }}
                >
                  <option value="tamil" className="text-light">
                    Tamil
                  </option>
                  <option value="english" className="text-light">
                    English
                  </option>
                  <option value="hindi" className="text-light">
                    Hindi
                  </option>
                  <option value="marathi" className="text-light">
                    Marathi
                  </option>
                  <option value="bengali" className="text-light">
                    Bengali
                  </option>
                  <option value="Telugu" className="text-light">
                    Telugu
                  </option>
                  <option value="otheru" className="text-light" disabled>
                    Others
                  </option>
                </select>
              </Form.Group>
              <div className="text-center mt-5">
                <Button variant="primary" type="submit">
                  Travel 🚌
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Mapintegrate
