import { getAuth } from "firebase/auth";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import app from "./firebase.init";
const auth = getAuth(app);
function App() {
  const handleOnBlur = (event) => {
    console.log(event.target.value);
  };
  const handleOnChange = (event) => {
    console.log(event.target.value);
  };
  const handleSubmit = (event) => {
    console.log("submit btn activate");
    event.preventDefault();
  };
  return (
    <div className="App">
      <div onSubmit={handleSubmit} className=" w-50 mx-auto bg-info p-4 ">
        <Form>
          <h1 className="text-primary mt-5">Registration Form</h1>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onBlur={handleOnBlur}
              type="email"
              placeholder="Enter email"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onChange={handleOnChange}
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default App;
