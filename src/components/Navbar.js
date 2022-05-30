import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Navbar() {
  const cartQuantity = useSelector((state) => state.cart.cartQuantity);
  return (
    <Container>
      <div className='wrapper'>
        <div className='searchbar'>
          <p>EN</p>
          <div className='abc'>
            <input type='text' />
            <SearchIcon
              style={{
                color: "gray",
                fontSize: "16px",
              }}
            />
          </div>
        </div>
        <div className='logo'>
          <h1>UnderWorld.</h1>
        </div>
        <div className='menu'>
          <div className='menuitem'>
            <div>REGISTER</div>
            <div>SIGN IN</div>
            <Link to ="/cart">
            <div>
              <Badge badgeContent={cartQuantity} color='primary'>
                <ShoppingCartOutlinedIcon />
              </Badge>
            </div>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  //color: white;
  height: 2rem;
  width: 100%;
  /* background-color: black; */
  font-size: 1rem;
  margin-bottom: 2rem;

  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .searchbar {
      display: flex;
      flex: 1;
      align-items: center;

      .abc {
        border: 1px solid gray;
        display: flex;
        align-items: center;
        margin-left: 25px;

        padding: 5px;
        height: 1rem;
        width: 30%;
      }

      input {
        border: none;
        outline: none;
      }
      p {
        font-weight: bold;
        margin-left: 25px;
      }
    }

    .logo {
      flex: 1;
      text-align: center;
      h1 {
        font-weight: bold;
      }
    }

    .menu {
      flex: 1;
      margin-right: 25px;

      .menuitem {
        font-size: 15px;
        cursor: pointer;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 1.4rem;
      }
    }
  }
`;

export default Navbar;
