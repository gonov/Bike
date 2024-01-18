import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

function ModalWindow({
  modalContent, setShow, show, setAllCandidate,
}) {
  const [modalCondition, setUpdatedCondition] = useState(modalContent);

  const handleChange = (e) => {
    const { city, title, start, finish } = e.target;
    setUpdatedCondition((prev) => ({
      ...prev,
      [city]: value,
      [title]: value,
      [start]: value,
      [finish]: value,
    }));
  };

  const handleSaveChanges = async () => {
    try {
      await axios.put(/api/edit/${updatedCandidate.id}, updatedCandidate);
      setShow(false);
      setAllCandidate((prev) => prev.map((oneprev) => (oneprev.id === updatedCandidate.id ? updatedCandidate : oneprev)));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Modal show={show}>
      <Modal.Header closeButton onClick={() => setShow(false)}>
        <Modal.Title>Маршрут</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
        <Form.Group controlId="formInput1">
            <Form.Label>Название маршрута</Form.Label>
            <Form.Control
              name="name"
              type="text"
              placeholder="Enter value for Title"
              value={updatedCandidate.name}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formInput1">
            <Form.Label>Населенный пункт</Form.Label>
            <Form.Control
              name="name"
              type="text"
              placeholder="Enter value for Title"
              value={updatedCandidate.name}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formInput2">
            <Form.Label>Старт</Form.Label>
            <Form.Control
              name="age"
              type="text"
              placeholder="Enter value for images"
              value={updatedCandidate.age}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formInput3">
            <Form.Label>Финиш</Form.Label>
            <Form.Control
              name="img"
              type="text"
              placeholder="Enter value for images"
              value={updatedCandidate.img}
              onChange={handleChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={() => setShow(false)}>
          Закрыть
        </Button>
        <Button variant="primary" onClick={handleSaveChanges}>
          Сохранить
        </Button>
      </Modal.Footer>
    </Modal>

  );
}

export default ModalWindow;