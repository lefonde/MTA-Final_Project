import React from "react";

import Card from "../../shared/components/UIElements/Card";
import CourseItem from "./CourseItem";
import "./CoursesList.css";

const CoursesList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <Card>
          <h2>No courses found.</h2>
        </Card>
      </div>
    );
  }

  return (
    <ul className="courses-list">
      {props.items.map((course) => (
        <CourseItem
          key={course.id}
          id={course.id}
          //image={course.image}
          name={course.name}
        />
      ))}
    </ul>
  );
};

export default CoursesList;
