import React from 'react'
import Spinner from 'react-bootstrap/Spinner';

export default function LoaderComponent() {
  return (
    <Spinner animation="border" role="status">
         <span className="visually-hidden">Loading</span>
     </Spinner>
  )
}
