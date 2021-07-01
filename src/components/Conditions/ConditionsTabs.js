import React from "react";
import conditions from "../../dictionaries/conditions";
import InfoTable from "../Tables/InfoTable";
import { Tabs, Tab } from "react-bootstrap";

function ConditionsTabs({ cardConditions }) {
  const titlesToFilterOut = cardConditions.map((condition) =>
    condition.toLowerCase()
  );
  const conditionsToDisplay = conditions.filter((condition) =>
    titlesToFilterOut.some(
      (title) => title === condition.title.trim().toLowerCase()
    )
  );
  console.log(conditionsToDisplay)

  return (
    <Tabs className="mb-3">
      {conditionsToDisplay.map((condition, index) => (
        <Tab
          eventKey={condition.title.toLowerCase()}
          title={condition.title}
          key={index}
        >
          {condition.description.map((descrip, index) => (
            <ul key={index}>{descrip}</ul>
          ))}
          {condition.table && <InfoTable tableInfo={condition.table} />}
        </Tab>
      ))}
    </Tabs>
  );
}

export default ConditionsTabs;
