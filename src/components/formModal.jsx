import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function FormModal({ show, setShow, setNewSubmission }) {
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function submitLog(e) {
    e.preventDefault();

    const log = {
      name: e.target[0].value,
      message: e.target[1].value,
      date: (new Date()).toString(),
    };

    axios.post('/log/', log)
      .then(() => alert('Phew. It is done.'))
      .then(() => setNewSubmission(log))
      .catch(() => alert('couldn\'t add log'));

    handleClose();
  }

  return (
      <Modal show={show} onHide={handleClose} centered >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">new log entry</Modal.Title>
        </Modal.Header>
          <Form onSubmit={submitLog}>
            <Modal.Body>
                <Form.Group className="mb-3" controlId="form-name">
                  <Form.Label>name</Form.Label>
                  <Form.Control type="text" placeholder="enter your name" maxLength="32" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="form-message">
                  <Form.Label>message</Form.Label>
                  <Form.Control as="textarea" placeholder="..." maxLength="512" required />
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" type="submit">
                Save
              </Button>
            </Modal.Footer>
          </Form>
      </Modal>
    )
  }

  export default FormModal
