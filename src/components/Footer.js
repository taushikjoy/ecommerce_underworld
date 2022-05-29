import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
  display: flex;

  .left {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
  }
  .desc {
    margin: 20px 0px;
  }

  .socialicon {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;

    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
  }

  .socialcontainer {
    display: flex;
  }

  .centre {
    flex: 1;
    padding: 20px;

    h3 {
      margin-bottom: 30px;
    }
  }

  .list {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    li {
      width: 50%;
      margin-bottom: 10px;
    }
  }
  .right {
    flex: 1;
    padding: 20px;
  }
  .contactitem {
    margin-bottom: 20px;
    display: flex;
    align-items: center;
  }
`;

const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <div className='left'>
        <h1>LAMA.</h1>
        <p className='desc'>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </p>
        <div className='socialcontainer'>
          <div className='socialicon' style={{ background: "#3B5999" }}>
            <Facebook />
          </div>
          <div className='socialicon' style={{ background: "#E4405F" }}>
            <Instagram />
          </div>
          <div className='socialicon' style={{ background: "#55ACEE" }}>
            <Twitter />
          </div>
          <div className='socialicon' style={{ background: "#E60023" }}>
            <Pinterest />
          </div>
        </div>
      </div>
      <div className='centre'>
        <h3>Useful Links</h3>
        <ul className='list'>
          <li>Home</li>
          <li>Cart</li>
          <li>Man Fashion</li>
          <li>Woman Fashion</li>
          <li>Accessories</li>
          <li>My Account</li>
          <li>Order Tracking</li>
          <li>Wishlist</li>
          <li>Wishlist</li>
          <li>Terms</li>
        </ul>
      </div>
      <div className='right'>
        <h3>Contact</h3>
        <div className='contactitem'>
          <Room style={{ marginRight: "10px" }} /> 622 Dixie Path , South
          Tobinchester 98336
        </div>
        <div className='contactitem'>
          <Phone style={{ marginRight: "10px" }} /> +1 234 56 78
        </div>
        <div className='contactitem'>
          <MailOutline style={{ marginRight: "10px" }} /> contact@lama.dev
        </div>
        <Payment src='https://i.ibb.co/Qfvn4z6/payment.png' />
      </div>
    </Container>
  );
};

export default Footer;
