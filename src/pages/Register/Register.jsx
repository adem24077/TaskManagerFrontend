import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, FormGroup, Input } from "reactstrap";
import Helmet from "../../components/Helmet/Helmet";
import CommonSection from "../../components/CommonSection/CommonSection";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import FormInput from "../../components/FormInput/FormInput";
import "./register.css";
import authService from "../../services/authService";

const Register = () => {
  const [dateInputType, setDateInputType] = useState("text");

  const activateDateInput = () => {
    setDateInputType("date");
  };

  const UserInitialValues = {
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  };

  const UserValidationSchema = Yup.object().shape({
    username: Yup.string().max(30).required("Username is required"),
    email: Yup.string().email().required("Email is required"),
    password: Yup.string()
      .min(6, "Your password must have at least 6 charaters.")
      .max(120, "Your password can not exceed 120 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .min(6)
      .max(120)
      .required("Password confirmation doesn't match. Please try again.")
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
  });

  const UserOnSubmit = async (values, { resetForm }) => {
    // Handle form submission logic here
    console.log("Form submitted with values:", values);
    try {
      authService.userRegister(values);
    } catch (error) {
      console.error("Veri çekme hatası:", error);
    }
    resetForm();
  };

  return (
    <Helmet title="Register">
      <section className="register-page-section">
        <Container>
          <div className="register-container">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="register-user-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#register-user"
                  type="button"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                >
                  User
                </button>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="register-user"
                role="tabpanel"
                aria-labelledby="register-user-tab"
              >
                <Formik
                  initialValues={UserInitialValues}
                  validationSchema={UserValidationSchema}
                  onSubmit={UserOnSubmit}
                >
                  <Form>
                    <div className="user-register-body">
                      <div className="register-form page-form">
                        <FormInput
                          formGroupClass="m-top-20"
                          inputClass="form-control"
                          name="username"
                          placeholder="Username*"
                        />
                        <FormInput
                          inputClass="form-control"
                          type="email"
                          name="email"
                          placeholder="E-Posta*"
                        />
                        <FormInput
                          inputClass="form-control"
                          type="password"
                          name="password"
                          placeholder="Şifre*"
                        />
                        <FormInput
                          inputClass="form-control"
                          type="password"
                          name="confirmPassword"
                          placeholder="Şifre Tekrar*"
                        />
                      </div>
                    </div>
                    <div className="register-footer">
                      <button className="register-button" type="submit">
                        Kayıt Ol
                      </button>
                    </div>
                  </Form>
                </Formik>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </Helmet>
  );
};

export default Register;
