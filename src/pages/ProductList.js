import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/NewsLetter";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const Container = styled.div`
  .title {
    margin: 20px;
  }
  .filtercontainer {
    display: flex;
    justify-content: space-between;
  }

  .filter {
    margin: 20px;
  }
  .filtertext {
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
  }
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;
const Option = styled.option``;

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const clickHandler = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };
  console.log(filters);
  // console.log(sort);

  return (
    <Container>
      <Navbar />
      <Announcement />
      <h1 className='title'>Dresses</h1>
      <div className='filtercontainer'>
        <div className='filter'>
          <span className='filtertext'>Filter Products:</span>
          <Select name='color' onChange={clickHandler}>
            <Option>Color</Option>
            <Option>WHITE</Option>
            <Option>BLACK</Option>
            <Option>RED</Option>
            <Option>BLUE</Option>
            <Option>YELLOW</Option>
            <Option>GREEN</Option>
            <Option>GREY</Option>
          </Select>
          <Select name='size' onChange={clickHandler}>
            <Option>Size</Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </div>
        <div className='filter'>
          <span className='filtertext'>Sort Products:</span>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value='newest'>Newest</Option>
            <Option value='asc'>Price (asc)</Option>
            <Option value='desc'>Price (desc)</Option>
          </Select>
        </div>
      </div>
      <Products sort={sort} filters={filters} cat={cat} />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
