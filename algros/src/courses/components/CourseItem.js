import React, { useState } from "react";
import { Link } from "react-router-dom";

import Avatar from "../../shared/components/UIElements/Avatar";
import Card from "../../shared/components/UIElements/Card";
import Modal from "../../shared/components/UIElements/Modal";
import Button from "../../shared/components/FormElements/Button";

import "./CourseItem.css";

const CourseItem = (props) => {
  const [showMap, setShowMap] = useState(false);

  const openProblemsListHandler = () => setShowMap(true);

  const closeProblemsListHandler = () => setShowMap(false);
  return (
    <React.Fragment>
      <Modal
        show={showMap}
        onCancel={closeProblemsListHandler}
        header='Course problem list' // change this to courses name
        contentClass="course-item__modal-content"
        footerClass="course-item__modal-actions"
        footer={<Button onClick={closeProblemsListHandler}>CLOSE</Button>}
      >
        <div className="map-container">
            <h2>Problems list</h2>
        </div>
      </Modal>
      <li className="course-item">
        <Card className="course-item__content">
          {/*<Link to={`/${props.id}/course`}> */}
            {/*<div className="course-item__image">
              <Avatar image={props.image} alt={props.name} />
  </div>*/}
            <div className="course-item__info">
              <h2>{props.name}</h2>
              <Button inverse onClick={openProblemsListHandler}>
                Course Problems
              </Button>
            </div>
         {/* </Link> */}
        </Card>
      </li>
    </React.Fragment>
  );
};

export default CourseItem;
