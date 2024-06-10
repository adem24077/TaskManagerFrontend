import React from "react";
import Helmet from "../../components/Helmet/Helmet";
import CommonSection from "../../components/CommonSection/CommonSection";
import CarList from "../../components/CarList/CarList";
import TaskFilter from "../../components/TaskFilter/TaskFilter";
import "./car-listing.css";

const CarListing = () => {
  return (
    <Helmet title="Cars">
      <CommonSection title="Task Listing" />
      <section className="task-listing">
        <div className="task-filter">
          <TaskFilter name="New" id="1" />
          <TaskFilter name="In Progress" id="2" />
          <TaskFilter name="Completed" id="3" />
        </div>

        <CarList />
      </section>
    </Helmet>
  );
};

export default TaskListing;
