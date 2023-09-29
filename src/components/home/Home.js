import Scrollbars from "react-custom-scrollbars-2";
import Navigation from "../navigation/Navigation";
import "./Home.scss";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router";

const Home = () => {
  return (
    <div className="home-container">
      <Navigation />
      <Scrollbars
        style={{ height: `calc(100vh - 48px)` }}
        autoHide
        // Hide delay in ms
        autoHideTimeout={1000}
        // Duration for hide animation in ms.
        autoHideDuration={200}
      >
        <Container>
          <Outlet />
        </Container>
      </Scrollbars>
    </div>
  );
};

export default Home;
