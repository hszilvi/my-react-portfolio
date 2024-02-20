// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button'
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const ErrorMessage =({ message }) => {
  console.log('hello from error');
  return(
    <p className='text-sm px-3 mt-1 text-danger inline-block'>{message}</p>
  )

}

const Contact2 = () => {

  const { handleSubmit, register } = useForm();

  const onClick = (data) => console.log({data})
  // const [formData, setFormData] = useState( {
  //   email: '',
  //   message: ''
  // });

  // const handleInputChange = (event) => {
  //   let value = event.target.value;
  //   const name = event.target.name;
  //   if (name === 'email') {
  //     const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  //     if (value.match(validRegex)) {
  //       console.log(value)
  //             return true;
  //     } else {
  //         alert(`
  //         You need to add a valid email address!`);
  //     }
  //   }
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   })
  // }

  // const handleFormSubmit = (event) => {
    
  //   event.preventDefault();
  //   if (!formData.email || !formData.message) {
  //     alert ('Fill out the form please!')
  //   } setFormData({
  //     email: '',
  //     message: ''
  //   })
  //   // if () {

  //   // }
  // }


  return (
    <>
    {/* <Form >
      <h4>If you are interested in working together, get in touch with me.</h4>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" name="email" ref={register()} >
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" >
        <Form.Label>Your message...</Form.Label>
        
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <ErrorMessage message="Please enter valid email and text message." />
      <Button onClick={handleSubmit(onClick)}>Send message</Button>
    </Form> */}

    <form>
      <div className="form-group">
        <label>Email address</label>
        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" name='email' ref={register({
          required: true,
          pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        })}></input>
      </div>
      <div className="form-group">
        <label>Example textarea</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
      <ErrorMessage message="Please enter valid email and text message." />
      <button onClick={handleSubmit(onClick)}>Send me your message</button>
    </form>
  </>
  );
}

