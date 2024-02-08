import { Component } from "react";
import BestSpecalist from "./BestSpecalist";
import ClinicWithInnovation from "./ClinicWithInnovation";
import CustomersSays from "./CustomersSays";
import LandingPage from "./LandingPage";
import NavBar from "./NavBar";
import OurServices from "./OurServices";
import Speecalist from "./Speecalist";
import "./App.css";

const url = "https://admin.tomedes.com/api/v1/get-reviews?page=1";

class App extends Component {
  componentDidMount() {
    this.getData();
  }
  getData = async () => {
    const options = {
      method: "GET",
    };
    const response = await fetch(url, options);
    if (response.ok === true) {
      const data = await response.json();
      console.log(data);
    }
  };
  render() {
    return (
      <div className="container">
        <div className="">
          <NavBar />
          <BestSpecalist />
          <OurServices />
          <ClinicWithInnovation />
          <Speecalist />
          <CustomersSays />
          <LandingPage />
        </div>
      </div>
    );
  }
}
export default App;
