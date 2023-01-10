import React from "react";
import "./style/Card.css";
import noticias from "../../data/noticias.json";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const NewsCards = () => {
  return (
    <>
      <Container className="contain">
        {noticias?.noticias?.map((item) => {
          return (
            <>
              <Row>
                <Col className="col" sm={4}>
                  <Card key={item.id} style={{ width: "300px", height: "400px" }}>
                    <Card.Img
                      variant="top"
                      src={item.imagen}
                      alt={item.título}
                    />
                    <Card.Body>
                      <Card.Title>Autor: {item.autor}</Card.Title>
                      <Card.Text>{item.título}</Card.Text>
                      <Button variant="primary">INFO</Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </>
          );
        })}
      </Container>
      <div>
        {noticias?.noticias?.map((item) => {
          return (
            <div key={item.id}>
              <h6>
                {item.título} - {item.autor}
              </h6>
              <img className="card_image" src={item.imagen} alt={item.título} />
              <br />
              <div dangerouslySetInnerHTML={{ __html: item.cuerpo }}></div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default NewsCards;
