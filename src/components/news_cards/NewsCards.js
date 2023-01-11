import React, { useState } from "react";
import "./style/Card.css";
import noticias from "../../data/noticias.json";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const NewsCards = () => {
  //const [visible, setVisible] = useState(false);

  const [search, setSearch] = useState("");
  return (
    <>
      <h3>NOTICIAS</h3>
      <Container className="search_box">
        <Row>
          <Col>
            <input
              className="search"
              placeholder="Search..."
              onChange={(e) => setSearch(e.target.value)}
            />
          </Col>
        </Row>
      </Container>
      <Container className="contain">
        {noticias?.noticias
          ?.filter((item) => {
            return search.toLowerCase() === ""
              ? item
              : item.título.toLowerCase().includes(search) ||
                  item.autor.toLowerCase().includes(search);
          })
          .map((item) => {
            return (
              <>
                <Row>
                  <Col className="col" sm={4}>
                    <Card
                      key={item.id}
                      style={{ width: "300px", height: "400px" }}
                    >
                      <Card.Img
                        variant="top"
                        src={item.imagen}
                        alt={item.título}
                      />
                      <Card.Body>
                        <Card.Title>Autor: {item.autor}</Card.Title>
                        <Card.Text>{item.título}</Card.Text>
                        <Button className="button" variant="primary">
                          INFO
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </>
            );
          })}
      </Container>
    </>
  );
};

export default NewsCards;
