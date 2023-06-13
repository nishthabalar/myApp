import logo from './logo.svg';
import './App.css';
// import Test from './Test';
// import Contact from './Contact';
// import { Button, Col, Image, Row } from 'react-bootstrap';
// import img1 from './images/nature.jpeg'
// import Home from './Home';
import { Routes, Route } from 'react-router-dom';
import FormDemo from './FormDemo';
import ApiDemo from './ApiDemo';
import ApiDemo2 from './ApiDemo2';
import ApiDemo3 from './ApiDemo3';
import StudentResult from './StudentResult';
import Product from './Product';
import ApiProducts from './ApiProducts';
import MenuReady from './MenuReady';
// import About from './About';
// import Regis from './Regis';
// import PropsDemo from './PropsDemo';
// import Carousel from './Carousel';
// import StateDemo from './StateDemo';
// import Calc from './Calc';
// import TicTacToe from './TicTacToe';
// import NumPuzzle from './NumPuzzle';
import AntdDemo from './AntdDemo';
import BlogHome from './BlogHome';
import BlogContact from './BlogContact';
import Blogs from './Blogs';
// you can give any name to images but it should not get repeat


// this is called jsx==> that allows us to write html tags in react js unlike javascript
function App() {
  return (
    <>
      {/* <Home></Home> */}
      {/* <h1 style={{ textTransform: 'uppercase' }}>Hello World</h1>
      <Test></Test>
      <Contact></Contact> */}
      {/* <Button className='m-2 p-2' variant='danger'>Click me</Button>
      <Row>
        <Col> */}
      {/* <Image src={img1}></Image> */}
      {/* <img src={img1}></img> */}
      {/* </Col>
        <Col>S</Col>
        <Col>T</Col>
      </Row> */}
      {/* <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/About' element={<About />}></Route>
        <Route path='/Register' element={<Regis />}></Route>
      </Routes> */}
      {/* <PropsDemo></PropsDemo> */}
      {/* <Carousel></Carousel> */}
      {/* <StateDemo></StateDemo> */}
      {/* <Calc></Calc> */}
      {/* <TicTacToe></TicTacToe> */}
      {/* <NumPuzzle></NumPuzzle> */}
      {/* <Routes>
        <Route path='/' element={<Calc />}></Route>
        <Route path='/TicTacToe' element={<TicTacToe />}></Route>
        <Route path='/NumPuzzle' element={<NumPuzzle />}></Route>
      </Routes> */}
      {/* <AntdDemo></AntdDemo> */}
      {/* <FormDemo></FormDemo> */}
      {/* <ApiDemo></ApiDemo> */}
      {/* <ApiDemo2></ApiDemo2> */}
      <Routes>
        {/* <Route path='/' element={<ApiDemo />}></Route>
        <Route path='/ApiDemo2' element={<ApiDemo2 />}></Route> */}
        <Route path='/' element={<ApiDemo3 />}></Route>
        <Route path='/product/:id' element={<Product />}></Route>
      </Routes >
      {/* <StudentResult></StudentResult> */}
      {/* <Routes> */}
      {/* <Route path='/' element={<ApiProducts />}></Route> */}
      {/* <Route path='/Menu' element={<MenuReady />}></Route> */}
      {/* <Route path='/' element={<ApiProducts />}></Route> */}
      {/* </Routes> */}
      {/* <Routes>
        <Route path='/' element={<BlogHome />}></Route>
        <Route path='/Contact' element={<BlogContact />}></Route>
        <Route path='/Blogs' element={<Blogs />}></Route>
        <Route path='/Menu' element={<MenuReady />}></Route>
      </Routes> */}
    </>
  );
}

export default App;
