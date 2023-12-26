// import { Link } from "react-router-dom"
// import './Navbar.css'
// import { Button } from "bootstrap"

// const Navbar = ({setSearch,size,data,setData}) =>{

//     const filterResult=(catItem)=>{
//         const result=data.filter((curData)=>{
//             return curData.category===catItem
//         })
//         console.log(result);
//         setData(result)
//     }
//     const filterResult2=(catItem)=>{
//         const result=data.filter((curData)=>{
//             return curData.category===catItem
//         })
//         setData(result)
//     }
//     const filterResult3=(catItem)=>{
//         const result=data.filter((curData)=>{
//             return curData.category===catItem
//         })
//         setData(result)
//     }
//     const filterResult4=(catItem)=>{
//         const result=data.filter((curData)=>{
//             return curData.category===catItem
//         })
//         setData(result)
//     }
//     return(
//         <div>
//             <nav className="navbar">
//             <article className="navart">
//                 <img  className="logo"src="https://logos-world.net/wp-content/uploads/2020/04/Amazon-Emblem.jpg"></img>
//                 <div><Link style={{color:'white',textDecoration:'none'}} to='/'>Home</Link></div>
//                 <div><input onChange={(e)=>setSearch(e.target.value)} type="search" placeholder="Search your Products" /></div>
//                 <div><Link style={{color:'white',textDecoration:'none'}} to='/cart'>🛒<sup>{size}</sup></Link></div>
//             </article>
//             <article className="cat">
//                 <button onClick={()=>filterResult(`men's clothing`)}>Men</button>
//                 <button onClick={()=>filterResult2(`women's clothing`)}>Women</button>
//                 <button onClick={()=>filterResult3(`electronics`)}>Electronics</button>
//                 <button onClick={()=>filterResult4(`jewelery`)}>Jewellery</button>
//                 <button>Sort by Price</button>

//             </article>
//             </nav>
//         </div>
//     )
// }
// export default Navbar
// import { Link } from "react-router-dom";
// import './Navbar.css';
// import { Button } from "bootstrap";

// const Navbar = ({ setSearch, size, data, setData }) => {
//   const filterResult = (catItem) => {
//     const result = data.filter((curData) => curData.category === catItem);
//     setData(result);
//   };

//   const sortDataByPrice = () => {
//     const sortedData = [...data].sort((a, b) => a.price - b.price);
//     setData(sortedData);
//   };

//   return (
//     <div>
//       <nav className="navbar">
//         <article className="navart">
//           <img className="logo" src="https://logos-world.net/wp-content/uploads/2020/04/Amazon-Emblem.jpg" alt="Logo"></img>
//           <div><Link style={{ color: 'white', textDecoration: 'none' }} to='/'>Home</Link></div>
//           <div><input onChange={(e) => setSearch(e.target.value)} type="search" placeholder="Search your Products" /></div>
//           <div><Link style={{ color: 'white', textDecoration: 'none' }} to='/cart'>🛒<sup>{size}</sup></Link></div>
//         </article>
//         <article className="cat">
//           <button onClick={() => filterResult(`men's clothing`)}>Men</button>
//           <button onClick={() => filterResult(`women's clothing`)}>Women</button>
//           <button onClick={() => filterResult(`electronics`)}>Electronics</button>
//           <button onClick={() => filterResult(`jewelery`)}>Jewellery</button>
//           <button onClick={sortDataByPrice}>Sort by Price</button>
//         </article>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Data from './Data';

const Navbar = ({ setSearch, size, data, setData }) => {
  const [sortOrder, setSortOrder] = useState('default');

  const handleSortChange = (order) => {
    setSortOrder(order);
    sortData(order);
  };

  const sortData = (order) => {
    let sortedData = [...data];
    if (order === 'lowToHigh') {
      sortedData.sort((a, b) => a.price - b.price);
    } else if (order === 'highToLow') {
      sortedData.sort((a, b) => b.price - a.price);
    }

    setData(sortedData);
  };

  const filterResult = (catItem) => {
    var newdata=Data;
    const result = newdata.filter((curData) => curData.category === catItem);
    setData(result);
  };

  return (
    <div>
      <nav className="navbar">
        <article className="navart">
         <Link to='/'> <img
            className="logo"
            src="https://logos-world.net/wp-content/uploads/2020/04/Amazon-Emblem.jpg"
            alt="Logo"
          /></Link>
          <div>
            <Link style={{ color: 'white', textDecoration: 'none' }} to="/home">
              Home
            </Link>
          </div>
          <div>
            <input
              onChange={(e) => setSearch(e.target.value)}
              type="search"
              placeholder="Search your Products"
            />
          </div>
          <div>
            <Link style={{ color: 'white', textDecoration: 'none' }} to="/cart">
              🛒<sup>{size}</sup>
            </Link>
          </div>
        </article>
        <article className="cat">
          <button onClick={() => filterResult(`men's clothing`)}>Men</button>
          <button onClick={() => filterResult(`women's clothing`)}>Women</button>
          <button onClick={() => filterResult(`electronics`)}>Electronics</button>
          <button onClick={() => filterResult(`jewelery`)}>Jewellery</button>
          <div className="sort-dropdown">
            <label htmlFor="sort">Sort by Price:</label>
            <select
              id="sort"
              value={sortOrder}
              onChange={(e) => handleSortChange(e.target.value)}
            >
              <option value="default">Default</option>
              <option value="lowToHigh">Low to High</option>
              <option value="highToLow">High to Low</option>
            </select>
          </div>
        </article>
      </nav>
    </div>
  );
};

export default Navbar;
