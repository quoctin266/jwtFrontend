import "./Login.scss";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const navigate = useNavigate();

  return (
    <div className="login-container">
      <Container>
        <Row>
          <Col className="left d-none d-md-block pt-5" md={6}>
            <div className="brand">facebook</div>
            <div className="title">
              Facebook helps you connect and share with the people in your life
            </div>
          </Col>
          <Col className="right" md={5}>
            <div className="brand d-md-none">facebook</div>
            <Card>
              <Card.Body>
                <Form>
                  <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Control
                      type="email"
                      placeholder="Email address or phone number"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                  <Button className="login-btn" variant="primary">
                    Log In
                  </Button>
                  <div className="forget">
                    <Form.Text className="text-muted">
                      Forgotten password?
                    </Form.Text>
                  </div>
                  <hr />
                  <div className="registerbtn-container">
                    <Button
                      className="register-btn"
                      variant="success"
                      onClick={() => navigate("/register")}
                    >
                      Create new account
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

export default Login;
