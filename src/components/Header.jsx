import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { searchRestuarant } from '../redux/restaurantSlice';

function Header() {
    const dispatch=useDispatch();
  return (
    <>
          <Navbar variant='dark mt-3' >
        <Container>
            <Link to={'/'} style={{textDecoration:'none',overflowY:'hidden'}}>
            <div className='d-flex justify-content-between align-items-center'>
            <Navbar.Brand >
            <img
              alt=""
              src="https://icons.veryicon.com/png/o/miscellaneous/8atour/restaurant-17.png"
              width="30"
              height="30"
              className="d-inline-block align-top me-3"
            />{' '}
            CATHY'S <span className='text-warning'>RESTAURANT</span> 
          </Navbar.Brand>
          <input onChange={(e)=>dispatch(searchRestuarant(e.target.value))} type="text" className='form-control ms-0 w-50' placeholder='Search by Neighbourhood' />
          </div>
            </Link>
       
        </Container>
      </Navbar>
    </>
  )
}

export default Header