import "./Register.scss";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

const Register = (props) => {
  const navigate = useNavigate();

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
                <Form>
                  <Row>
                    <Col>
                      <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Email:</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Email address"
                        />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group className="mb-3" controlId="formGroupPhone">
                        <Form.Label>Phone number:</Form.Label>
                        <Form.Control type="text" placeholder="Phone number" />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Form.Group className="mb-3" controlId="formGroupUsername">
                    <Form.Label>Username:</Form.Label>
                    <Form.Control type="text" placeholder="Username" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Re-enter password:</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                  <Button className="register-btn" variant="primary">
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
