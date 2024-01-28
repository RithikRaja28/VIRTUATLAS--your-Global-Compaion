import React , {useRef} from "react";
import "../App.css";
import { Col, Container, Row , Form , FormGroup, Button } from "react-bootstrap";
import emailjs from "@emailjs/browser";
const Virtuatlasfooter =()=>{
  const Subscribe = ()=>
  {
    alert("Subscribed ✅ to our Newsletter Successfully")
  }
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_l2fwx49",
        "template_i8zwmam",
        form.current,
        "YCchQxa8DEBIl89zE"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    }
  return (
    <div>
      <footer>
        <Container className="" fluid>
          <Row>
            <Col className="m-5 text-center">
              <img
                alt="Virtuatlas-Logo"
                src="logo-removebg-preview.png"
                width="30"
                height="30"
                className="mt-5"
              />

              <h2 className="h2 text-light mt-3">Virtuatlas</h2>
            </Col>

            {/*  */}

            <Col className="m-5">
              <div className=" mt-5 footer-1">
                <h5 className="mt-3">
                  <a href="#home">Home</a>
                </h5>
                <h5 className="mt-3">
                  <a href="#features">Explore</a>
                </h5>
                <h5 className="mt-3">
                  <a href="#mapframe">Maps</a>
                </h5>
                <h5 className="mt-3">
                  <a href="#mapframe">Enroute</a>
                </h5>
              </div>
            </Col>
            <Col className="m-5">
              <div className=" mt-5 footer-1">
                <h5 className="mt-3">
                  <a href="#features">Services</a>
                </h5>
                <h5 className="mt-3">
                  <a href="#Myjourney">My Journeys</a>
                </h5>
                <h5 className="mt-3">
                  <a href="hubspots">Hub Spots</a>
                </h5>
                <h5 className="mt-3">
                  <a href="#Contactus">Contact Us</a>
                </h5>
              </div>
            </Col>
            <Col className="m-5">
              <div className="mt-5">
                <h5 className="h5 text-light">Subscribe to Newsletter</h5>
                <Form ref={form} onSubmit={sendEmail}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="text-white mb-2 mt-2">
                      Email address
                    </Form.Label>
                    <Form.Control
                      type="email"
                      name="user_email"
                      placeholder="Enter email"
                    />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>
                  <Button
                    onClick={Subscribe}
                    variant="primary"
                    value="Send"
                    type="submit"
                  >
                    Submit
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}

export default Virtuatlasfooter;
