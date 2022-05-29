import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Container = styled.div`
  .wrapper {
    padding: 20px;

    .title {
      font-weight: 300;
      text-align: center;
    }

    .top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 20px;

      .topbutton {
        padding: 10px;
        font-weight: 600;
        cursor: pointer;
        border: ${(props) => props.type === "filled" && "none"};
        background-color: ${(props) =>
          props.type === "filled" ? "black" : "transparent"};
        color: ${(props) => props.type === "filled" && "white"};
      }
      .toptext {
        text-decoration: underline;
        cursor: pointer;
        margin: 0px 10px;
      }
    }

    .bottom {
      display: flex;
      justify-content: space-between;

      .info {
        flex: 3;

        .product {
          display: flex;
          justify-content: space-between;

          .productdetail {
            flex: 2;
            display: flex;

            .details {
              padding: 20px;
              display: flex;
              flex-direction: column;
              justify-content: space-around;
            }
          }
          .pricedetails {
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            .productamountcontainer {
              display: flex;
              align-items: center;
              margin-bottom: 20px;
            }
          }
        }
      }
    }
  }
`;

const Image = styled.img`
  width: 200px;
`;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;


const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const Cart = () => {
  return (
    <Container>
      
      <Announcement />
      <div className='wrapper'>
        <h1 className='title'>YOUR BAG</h1>
        <div className='top'>
          <button className='topbutton'>CONTINUE SHOPPING</button>
          <div>
            <span className='toptext'>Shopping Bag(2)</span>
            <span className='toptext'>Your Wishlist (0)</span>
          </div>
          <button className='topbutton' type='filled'>
            CHECKOUT NOW
          </button>
        </div>
        <div className='bottom'>
          <div className='info'>
            <div className='product'>
              <div className='productdetail'>
                <Image src='https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A' />
                <div className='details'>
                  <span className='productname'>
                    <b>Product:</b> JESSIE THUNDER SHOES
                  </span>
                  <span className='productid'>
                    <b>ID:</b> 93813718293
                  </span>

                  <ProductColor color='black' />
                  <span className='productsize'>
                    <b>Size:</b> 37.5
                  </span>
                </div>
              </div>
              <div className='pricedetails'>
                <div className='productamountcontainer'>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </div>
                <ProductPrice>$ 30</ProductPrice>
              </div>
            </div>
            <Hr />
            <div className='product'>
              <div className='productdetail'>
                <Image src='https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png' />
                <div className='details'>
                  <span className='productname'>
                    <b>Product:</b> HAKURA T-SHIRT
                  </span>
                  <span className='productid'>
                    <b>ID:</b> 93813718293
                  </span>
                  <ProductColor color='gray' />
                  <span className='productsize'>
                    <b>Size:</b> M
                  </span>
                </div>
              </div>
              <div className='pricedetails'>
                <div className='productamountcontainer'>
                  <Add />
                  <ProductAmount>1</ProductAmount>
                  <Remove />
                </div>
                <ProductPrice>$ 20</ProductPrice>
              </div>
            </div>
          </div>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <span>Subtotal</span>
              <span>$ 80</span>
            </SummaryItem>
            <SummaryItem>
              <span>Estimated Shipping</span>
              <span>$ 5.90</span>
            </SummaryItem>
            <SummaryItem>
              <span>Shipping Discount</span>
              <span>$ -5.90</span>
            </SummaryItem>
            <SummaryItem type='total'>
              <span>Total</span>
              <span>$ 80</span>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </div>
      </div>
      <Footer />
    </Container>
  );
};

export default Cart;
