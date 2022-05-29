import { Send } from "@material-ui/icons";
import styled from "styled-components";



const Newsletter = () => {
  return (
    <Container>
      <h1>Newsletter</h1>
      <div className='description'>
        Get timely updates from your favorite products.
      </div>
      <div className='inputcontainer'>
        <Input placeholder='Your email' />
        <button className='btn'>
          <Send />
        </button>
      </div>
    </Container>
  );
};


const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    font-size: 70px;
    margin-bottom: 20px;
  }

  .inputcontainer {
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
  }

  .description {
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
  }

  .btn {
    flex: 1;
    border: none;
    background-color: teal;
    color: white;
  }
`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;

export default Newsletter;
