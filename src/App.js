import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import app from "./firebase.init";
import { useState } from "react";

const auth = getAuth(app);
function App() {
  const [email,setEmail] = useState('');
  const [password,setPassword]= useState('');
  const handleOnBlur = (event) => {
    setEmail(event.target.value);
  };
  const handleOnBlurPass = (event) => {
    setPassword(event.target.value);
  };
  const handleSubmit = (event) => {
    createUserWithEmailAndPassword(auth,email,password)
    .then(result=>{
      const user = result.user;
      console.log(user);

    })
    .catch(error=>{
      console.error(error);
    })
    console.log("submit btn activate",email ,password);
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
              required
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onBlur={handleOnBlurPass}
              type="password"
              placeholder="Password"
              required
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
