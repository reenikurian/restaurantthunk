import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function RestCard({restaurant}) {
  return (
    <>
    <Link to={`/resturant_view/${restaurant?.id}`} style={{textDecoration:'none'}}>
    <Card style={{ width: '16rem' ,height:'22rem'}}>
      <Card.Img variant="top" src={restaurant.photograph} />
      <Card.Body>
        <Card.Title className='text-center text-warning' style={{fontSize:'20px'}}>{restaurant.name}</Card.Title>
        <Card.Text className='text-center'>
          Neighbour Hood:<span className='text-warning ms-2' >{restaurant.neighborhood}</span>
        </Card.Text>
      </Card.Body>
    </Card>
    </Link>
     
    </>
  )
}

export default RestCard