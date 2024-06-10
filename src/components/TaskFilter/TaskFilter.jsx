import React, { useEffect, useState } from "react";
import "./task-filter.css";
import axiosInstance from "../../core/utils/interceptors/axiosInterceptors";

function TaskFilter({
  title,
  id,
  description,
  creationDate,
  status,
  userId = "secondary",
}) {
  const [taskData, setTaskData] = useState([]);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axiosInstance.get("tasks/getAll");
      setTaskData(response.data);
    } catch (error) {
      console.error("Veri çekme hatası:", error);
      setError("Veri çekme hatası");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <input type="checkbox" className="btn-check" id={id} />
      <label
        for={id}
        className={`btn btn-outline-${userId} filter-btn-outline filter-btn-outline-hover`}
      >
        {title}
        {description}
        {creationDate}
        {status}
      </label>
    </>
  );
}

export default TaskFilter;
