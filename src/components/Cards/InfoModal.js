import React from "react";
import { Modal, Table } from "react-bootstrap";

function InfoModal({ info, setShowInfoModal, showInfoModal }) {
  return (
    <Modal
      size="lg"
      show={showInfoModal}
      onHide={() => setShowInfoModal(false)}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
          {info.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>{info.longDescription ? info.longDescription : info.shortDescription}</Modal.Body>
      {info.table && (
        <Modal.Body>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                {info.table.tableColumns.map((val) => (
                  <th>{val}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {info.table.tableRows.map((val) => (
                <tr>
                  {Object.values(val).map((v) => (
                    <td>{v}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </Table>
        </Modal.Body>
      )}
      {info.di && (<Modal.Footer className="d-inline"><b>Di Roll: </b>{info.di}</Modal.Footer>)}
    </Modal>
  );
}

export default InfoModal;
