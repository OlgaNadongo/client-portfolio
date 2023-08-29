import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const Contact = () => {
  return (
    <div className='text-[#5fbff9]'>
        <div className='w-screen text-center flex flex-col justify-center  max-w-[75%] m-auto'>
             <h1 className='text:xl font-bold'>Get in touch</h1>
             <Form className='text-white'>
             <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="email" placeholder="Full name" />
            </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      
      <Button variant="primary" type="submit" >
        Submit
      </Button>
    </Form>
            
        </div>
        
    </div>
  )
}

export default Contact