import React from "react";
import { Modal } from "react-bootstrap";
import InfoTable from '../../Tables/InfoTable';
import ConditionsTab from '../../Conditions/ConditionsTabs';
import './InfoModal.css';

function InfoModal({ info, setShowInfoModal, showInfoModal }) {
  return (
    <Modal
      size="lg"
      show={showInfoModal}
      onHide={() => setShowInfoModal(false)}
      aria-labelledby="example-modal-sizes-title-lg"
      scrollable
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
          {info.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>{info.shortDescription && info.shortDescription}</div>
        {info.longerDescription && info.longerDescription.map(descrip => <div>{descrip}</div>)}
        {info.table && (
          <div>
            <InfoTable tableInfo={info.table} />
          </div>
        )}
        {info.conditions.length > 0 &&
          <div>
            <ConditionsTab cardConditions={info.conditions} />
          </div>
        }
      </Modal.Body>
      {info.di && (<Modal.Footer className="d-inline"><b>Di Roll: </b>{info.di}</Modal.Footer>)}
    </Modal>
  );
}

export default InfoModal;
