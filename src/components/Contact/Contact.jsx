import React from "react";
import { CURRENTLINE, CYAN, ORANGE, PURPLE, RED } from "../../helpers/colors";

const Contact = () => {
  return (
    <div className="col-md-6">
      <div style={{ backgroundColor: CURRENTLINE }} className="card my-2 ">
        <div className="card-body">
          <div className="row align-items-center d-flex justify-content-around">
            <div className="col-md-4 col-sm-4">
              <img
                src="https://placehold.co/200"
                alt=""
                style={{ border: `1px ${PURPLE}` }}
                className="img-fluid rounded"
              />
            </div>
            <div className="col-md-7 col-sm-7">
              <ul className="list-group">
                <li className="list-group-item list-group-item-dark">
                  Full Name:{" "}
                  <span className="fw-bold">Mahdi Aghamohammadi</span>
                </li>
                <li className="list-group-item list-group-item-dark">
                  Mobile: <span className="fw-bold">09033028413</span>
                </li>
                <li className="list-group-item list-group-item-dark">
                  Email: <span className="fw-bold">mahdi@gmail.com</span>
                </li>
              </ul>
            </div>
            <div className="col-md-1 col-sm-1 d-flex flex-column align-items-center">
              <button className="btn my-1" style={{ backgroundColor: ORANGE }}>
                <i className="fa fa-eye"></i>
              </button>
              <button className="btn my-1" style={{ backgroundColor: CYAN }}>
                <i className="fa fa-pencil"></i>
              </button>
              <button className="btn my-1" style={{ backgroundColor: RED }}>
                <i className="fa fa-trash"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
