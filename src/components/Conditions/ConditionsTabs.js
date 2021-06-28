import React from "react";
import conditions from "../../dictionaries/conditions";
import { Tabs, Tab } from "react-bootstrap";

function ConditionsTabs({ cardConditions }) {
  const titlesToFilterOut = cardConditions.map(condition => condition.toLowerCase());
  const conditionsToDisplay = conditions.filter(condition => titlesToFilterOut.some(title => title === condition.title.trim().toLowerCase()));

  return (
    <Tabs className="mb-3">
      {conditionsToDisplay
        .map((condition, index) => 
          <Tab
            eventKey={condition.title.toLowerCase()}
            title={condition.title}
            key={index}
          >
            {condition.description.map((descrip, index) => (
              <ul key={index}>{descrip}</ul>
            ))}
          </Tab>
        )}
    </Tabs>
  );
}

export default ConditionsTabs;
