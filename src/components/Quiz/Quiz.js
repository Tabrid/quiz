import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Quiz = ({ quiz }) => {
  const { id, name, logo, total } = quiz;
  return (
    <Col>
      <Card>
        <Card.Img variant="top" src={logo} className="bg-dark" height="250" />
        <Card.Body>
          <Card.Title>
            {" "}
            <h4 className="highlight"> {name} </h4>
          </Card.Title>
          <Card.Text>
            <strong className="highlight"> Total Question: {total} </strong>{" "}
            <br />
          </Card.Text>{" "}
          <Link to={`/question/${id}`} className="btn btn-primary">
            Attempt Quiz{" "}
            <FontAwesomeIcon className="text-light ms-3" icon={faArrowRight} />{" "}
          </Link>{" "}
        </Card.Body>{" "}
      </Card>{" "}
    </Col>
  );
};

export default Quiz;
