import "./Login.scss";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import { useImmer } from "use-immer";
import { postLogin } from "../../service/userService";
import { toast } from "react-toastify";

const Login = (props) => {
  const navigate = useNavigate();
  const [formdata, setFormdata] = useImmer({
    valueLogin: "",
    password: "",
  });

  const handleChangeInput = (value, field) => {
    setFormdata((draft) => {
      draft[field] = value;
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    let res = await postLogin(formdata);
    toast.warning(res.EM);
  };

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
                <Form onSubmit={handleLogin}>
                  <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Control
                      name="valueLogin"
                      type="text"
                      placeholder="Email address or phone number"
                      value={formdata.valueLogin}
                      onChange={(e) =>
                        handleChangeInput(e.target.value, e.target.name)
                      }
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Control
                      name="password"
                      type="password"
                      placeholder="Password"
                      value={formdata.password}
                      onChange={(e) =>
                        handleChangeInput(e.target.value, e.target.name)
                      }
                    />
                  </Form.Group>
                  <Button className="login-btn" variant="primary" type="submit">
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
