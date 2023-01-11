import React, { useState } from "react";
import "./style/Card.css";
import noticias from "../../data/noticias.json";
import { Container, Row, Col, Card } from "react-bootstrap";
import Noticia from "../../view/Noticia";

const NewsCards = ({ título }) => {
  const [visible, setVisible] = useState(false);

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
                        <Noticia
                          onClose={() => setVisible(false)}
                          título={item.título}
                          show={visible === título}
                          autor={item.autor}
                          photo={item.imagen}
                          info={item.descripcion}
                          summary={<div dangerouslySetInnerHTML={{ __html: item.cuerpo }}></div>}
                        >
                          {item.descripcion}
                        </Noticia>
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
