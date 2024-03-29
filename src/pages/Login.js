import { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { login } from "../redux/apiCalls";

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleLoginClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };
  return (
    <Container>
      <div className='wrapper'>
        <h1 className='title'>SIGN IN</h1>
        <Form>
          <Input
            placeholder='username'
            onChange={(e) => setUserName(e.target.value)}
          />
          <Input
            placeholder='password'
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleLoginClick}>LOGIN</Button>
          {/* <a className='link' href='#'>
            DO NOT YOU REMEMBER THE PASSWORD?
          </a>
          <a className='link' href='#'>
            CREATE A NEW ACCOUNT
          </a> */}
        </Form>
      </div>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;

  .wrapper {
    width: 25%;
    padding: 20px;
    background-color: white;
    .link {
      margin: 5px 0px;
      font-size: 12px;
      text-decoration: underline;
      cursor: pointer;
    }

    .title {
      font-size: 24px;
      font-weight: 300;
    }
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;
