import React from "react";
import { Modal, ModalBody } from "react-bootstrap";
import InfoTable from '../../Tables/InfoTable';
import ConditionsTab from '../../Conditions/ConditionsTabs';

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
      <Modal.Body>{info.shortDescription && info.shortDescription}</Modal.Body>
      {info.longerDescription && info.longerDescription.map(descrip => <Modal.Body>{descrip}</Modal.Body>)}
      {info.table && (
        <Modal.Body>
          <InfoTable tableInfo={info.table} />
        </Modal.Body>
      )}
      {info.conditions.length > 0 &&
        <ModalBody>
          <ConditionsTab cardConditions={info.conditions} />
        </ModalBody>
      }
      {info.di && (<Modal.Footer className="d-inline"><b>Di Roll: </b>{info.di}</Modal.Footer>)}
    </Modal>
  );
}

export default InfoModal;
