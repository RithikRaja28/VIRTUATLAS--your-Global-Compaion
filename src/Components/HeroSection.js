import React from 'react'
import { Button, Container } from 'react-bootstrap'
import {useTypewriter,Cursor} from 'react-simple-typewriter'

function HeroSection() {
    const [typeEffect] = useTypewriter({
      words: [
        "Mutilingual Language  ",
        "Real-Time Data Analytics  ",
        "Environmental Friendly  ",
        "Hub Interface  ",
        "AI-Powered Multilingual Navigation  ",
        "Smart Route Guidance in Your Language",
        "Dynamic Language Navigation Assistant",
      ],
      loop: {},
      typeSpeed: 90,
      deleteSpeed: 40,
    });
  return (
    <div>
      <div className="text-center">
        <Container className="mt-5">
          <br />
          <h1 className="display-2 text-light hero-profile">
            <q>
              Your Global Companion in{" "}
              <span style={{ color: "#6Cd4ee", fontWeight: "normal" }}>
                Every Language
              </span>{" "}
            , Every Journey !
            </q>
          </h1>
          <br />
          <br />
          <div className="me-4 text-center">
            <h4 className="m-5">
              <span style={{ fontWeight: "normal", color: "#1ca9c9" }}>
                {typeEffect}
              </span>
              <span style={{}}>
                <Cursor cursorStyle=" 🚗 " />
              </span>
            </h4>
          </div>
        </Container>
        <div className="text-center" style={{ marginTop: "110px" }}>
          <Button
            className="btn herobtn"
            style={{ border: "2px solid #6Cd4ee" }}
            variant="dark"
          >
            Get Started !
          </Button>
          <img
            src="way-unscreen.gif"
            style={{ width: "50px", height: "50px" }}
          ></img>
        </div>
      </div>
    </div>
  );
}

export default HeroSection
