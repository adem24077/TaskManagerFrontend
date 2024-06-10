import React from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import "./car-item.css";
import axiosInstance from "../../core/utils/interceptors/axiosInterceptors";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { loadTask } from "../../store/task/TaskSlice";

const TaskItem = (props) => {
  const { id, title, description, createdDate, status } = props.item;
  const authState = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const test = async () => {
    if (authState.id !== 0) {
      dispatch(loadCar(id));
    } else {
      // navigate("/login")
      toast.error("Üye girişi yapmalısınız!");
    }
  };

  return (
    <Col xl="4" lg="6" md="6" sm="12" className="mb-5">
      <div className="car__item" key={id}>
        <div className="car__item-content mt-4">
          <h4 className="section__title text-center">{title}</h4>
          <h6 className="rent__price text-center mt-">
            {description} <span>/ Açıklama</span>
          </h6>

          <div className="car__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
            <span className=" d-flex align-items-center gap-1">
              <i className="ri-settings-2-line"></i> {status}
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i className="ri-timer-flash-line"></i> {createdDate}
            </span>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default TaskItem;
