import React, { useState } from "react";
import { Card, Button, Badge } from "react-bootstrap";
import "./InfoCard.css";
import InfoModal from "./InfoModal";

function InfoCard({ info }) {
  const [showInfoModal, setShowInfoModal] = useState(false);
  return (
    <>
      <Card className="info-card">
        <Card.Header className="text-end">
          {info.tags.map((tag, index) => (
            <Badge key={index} className="tag-pill">
              {tag}
            </Badge>
          ))}
        </Card.Header>
        <Card.Body>
          <Card.Title>{info.title}</Card.Title>
          <Card.Text>{info.shortDescription}</Card.Text>
          <Button variant="danger" onClick={() => setShowInfoModal(true)}>
            More Info
          </Button>
        </Card.Body>
        {info.di && (<Card.Footer><b>Di Roll: </b>{info.di}</Card.Footer>)}
      </Card>
      <InfoModal
        info={info}
        showInfoModal={showInfoModal}
        setShowInfoModal={setShowInfoModal}
      />
    </>
  );
}

export default InfoCard;
