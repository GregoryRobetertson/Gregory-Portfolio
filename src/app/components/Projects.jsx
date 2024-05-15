"use client";
import React from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function Projects({title, text, src, link}) {
  const styles = {
    borderTop: "1px solid #6f42c1",
    boxShadow:
      "0 0 2px rgba(111,66,193,.9),0 0 4px rgba(111,66,193,.4),0 0 1rem rgba(111,66,193,.3),0 0 4rem rgba(111,66,193,.1)",
    opacity: "1",
  };
  return (
    <>
      {console.log(title,text,src,link)}
      <div className="container mx-auto py-8">
        <Row xs={1} md={2} lg={3} className="g-4">
          <Col>
            <Card className="w-full h-full bg-transparent">
              <Card.Img
                variant="top"
                src={src}
                alt={title}
                className="h-96 object-cover"
              />
              <Card.Body className="text-white">
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                 {text}
                </Card.Text>
                <Button
                  href={link}
                  variant="primary"
                >
                  View More
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}
