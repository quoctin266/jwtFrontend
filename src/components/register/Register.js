import "./Register.scss";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import { useImmer } from "use-immer";
import {
  postCreateUser,
  validateEmail,
  validatePassword,
} from "../../service/userService";
import { toast } from "react-toastify";

const Register = (props) => {
  const navigate = useNavigate();
  const defaultError = "This field is required.";

  const [formdata, setFormdata] = useImmer({
    email: "",
    phone: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [validate, setValidate] = useImmer({
    email: true,
    phone: true,
    username: true,
    password: true,
    confirmPassword: true,
  });

  const handleChangeInput = (value, field) => {
    if (!value) {
      setValidate((draft) => {
        draft[field] = false;
      });
    } else
      setValidate((draft) => {
        draft[field] = true;
      });

    setFormdata((draft) => {
      draft[field] = value;
    });
  };

  const validateInput = () => {
    let formValidate = Object.values(formdata).every((item) => {
      if (!item) return false;
      return true;
    });

    if (!formValidate) {
      toast.error("Missing required fields.");
      return false;
    }

    if (!validateEmail(formdata.email)) {
      toast.error("Invalid email.");
      return false;
    }

    if (!validatePassword(formdata.password)) {
      toast.error("Invalid password.");
      return false;
    }

    if (formdata.password !== formdata.confirmPassword) {
      toast.error("Password confirm does not match.");
      return false;
    }

    return true;
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (validateInput()) {
      await postCreateUser(formdata);

      navigate("/login");
      toast.success("Register success.");
    }
  };

  return (
    <div className="register-container">
      <Container>
        <Row>
          <Col className="left d-none d-md-block pt-5" md={6}>
            <div className="brand">facebook</div>
            <div className="title">
              Facebook helps you connect and share with the people in your life
            </div>
          </Col>
          <Col className="right" md={6}>
            <div className="brand d-md-none">facebook</div>
            <Card>
              <Card.Body>
                <Form onSubmit={(e) => handleRegister(e)}>
                  <Row>
                    <Col>
                      <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Email:</Form.Label>
                        <Form.Control
                          name="email"
                          type="email"
                          placeholder="Email address"
                          value={formdata.email}
                          onChange={(e) =>
                            handleChangeInput(e.target.value, e.target.name)
                          }
                        />
                        {!validate.email && (
                          <div style={{ color: "red" }}>{defaultError}</div>
                        )}
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group className="mb-3" controlId="formGroupPhone">
                        <Form.Label>Phone number:</Form.Label>
                        <Form.Control
                          name="phone"
                          type="text"
                          placeholder="Phone number"
                          value={formdata.phone}
                          onChange={(e) =>
                            handleChangeInput(e.target.value, e.target.name)
                          }
                        />
                        {!validate.phone && (
                          <div style={{ color: "red" }}>{defaultError}</div>
                        )}
                      </Form.Group>
                    </Col>
                  </Row>
                  <Form.Group className="mb-3" controlId="formGroupUsername">
                    <Form.Label>Username:</Form.Label>
                    <Form.Control
                      name="username"
                      type="text"
                      placeholder="Username"
                      value={formdata.username}
                      onChange={(e) =>
                        handleChangeInput(e.target.value, e.target.name)
                      }
                    />
                    {!validate.username && (
                      <div style={{ color: "red" }}>{defaultError}</div>
                    )}
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control
                      name="password"
                      type="password"
                      placeholder="Password"
                      value={formdata.password}
                      onChange={(e) =>
                        handleChangeInput(e.target.value, e.target.name)
                      }
                    />
                    {!validate.password && (
                      <div style={{ color: "red" }}>{defaultError}</div>
                    )}
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formGroupCPassword">
                    <Form.Label>Re-enter password:</Form.Label>
                    <Form.Control
                      name="confirmPassword"
                      type="password"
                      placeholder="Password"
                      value={formdata.confirmPassword}
                      onChange={(e) =>
                        handleChangeInput(e.target.value, e.target.name)
                      }
                    />
                    {!validate.confirmPassword && (
                      <div style={{ color: "red" }}>{defaultError}</div>
                    )}
                  </Form.Group>
                  <Button
                    className="register-btn"
                    variant="primary"
                    type="submit"
                  >
                    Register
                  </Button>
                  <div className="forget">
                    <Form.Text className="text-muted">
                      Already have an account?
                    </Form.Text>
                  </div>
                  <hr />
                  <div className="loginbtn-container">
                    <Button
                      className="login-btn"
                      variant="success"
                      onClick={() => navigate("/login")}
                    >
                      Log In
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Register;
