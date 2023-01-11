import React from "react";
import { Modal, Button, Text } from "@nextui-org/react";

const Noticia = (props) => {
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
  };
  if (props.visible) {
    return null;
  }
  return (
    <>
      <Modal
        scroll
        blur
        fullScreen
        width="600px"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        open={visible}
      >
        <Modal.Header css={{ backgroundColor: "#2eca6b" }}>
          <Text id="modal-title" size={18}>
            {props.título} - {props.autor}
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Text id="modal-description">{props.summary}</Text>
        </Modal.Body>
        <Modal.Footer>
          <Button
            auto
            flat
            css={{ backgroundColor: "#2eca6b", color: "white" }}
            onPress={closeHandler}
          >
            CLOSE
          </Button>
        </Modal.Footer>
      </Modal>
      <Button
        css={{ position: "absolute", bottom: 10, right: 10, color: "black", backgroundColor: "#2eca6b" }}
        size="xs"
        auto
        flat
        onPress={handler}
      >
        INFO
      </Button>
    </>
  );
};

export default Noticia;
