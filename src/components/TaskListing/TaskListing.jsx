import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import TaskItem from "../TaskItem/TaskItem";
import { useSelector } from "react-redux";

function CarList() {
  const initialTasks = useSelector((state) => state.tasks.tasks);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [years, setYears] = useState([]);
  const [selectedYear, setSelectedYear] = useState("all");

  const filterByYear = () => {
    if (selectedYear === "all") {
      setFilteredTasks(initialTasks);
    } else {
      setFilteredTasks(initialTasks.filter((c) => c.year == selectedYear));
    }
  };

  const getUniqueYears = async () => {
    const yearsSet = new Set();
    initialCars.forEach((car) => {
      yearsSet.add(car.year);
    });
    const updatedYears = Array.from(yearsSet);
    setYears(updatedYears.sort((a, b) => b - a));
  };

  useEffect(() => {
    getUniqueYears();
  }, []);

  useEffect(() => {
    filterByYear();
  }, [selectedYear]);

  return (
    <Container>
      <Row>
        <Col lg="12">
          <div className=" d-flex align-items-center gap-3 mb-5">
            <span className=" d-flex align-items-center gap-2">
              <i className="ri-sort-asc"></i> Sort By
            </span>

            <select>
              <option>Select</option>
              <option value="low">Low to High</option>
              <option value="high">High to Low</option>
            </select>
            <select onChange={(e) => setSelectedYear(e.target.value)}>
              <option value="all">Year</option>
              {years.map((year, index) => (
                <option key={index} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
        </Col>

        {filteredTasks.map((item) => (
          <TaskItem item={item} key={item.id} />
        ))}
      </Row>
    </Container>
  );
}

export default TaskList;
