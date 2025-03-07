import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Jumbotron } from "./migration";

const Certifications = ({ heading, message, img, imageSize }) => {
  return (
    <Jumbotron
      id="certifications"
      className="m-0"
      style={{ backgroundColor: "white" }}
    >
      <h2 className="display-4 pb-5 text-center">{heading}</h2>
      <div className="row">
        <div className="col-md-5">
          <p className="lead">{message}</p>
        </div>
        <div className="col-md-7">
          <Carousel>
            {img.map((value, index) => {
              return (
                <Carousel.Item key={index}>
                  <img
                    className="d-block w-100"
                    src={value.img}
                    alt="First slide"
                    width={imageSize.width}
                    height={imageSize.height}
                    style={{borderRadius: 20, borderColor: "black"}}
                  />
                  
                </Carousel.Item>
              );
            })}
          </Carousel>
        </div>
      </div>
    </Jumbotron>
  );
};

export default Certifications;
