import React from 'react'

const AddNurse = () => {
  return (
  <div className='d-flex justify-content-center mt-5'>

  
    <div className='card shadow col-md-6 p-5'>
      <h1>Add Nurses</h1>
      <form action="">
        {/* Surname  */}
        <input type="text" placeholder='Enter surname' name='surname' className='form-control mb-4' />
        <input type="text" placeholder='Enter Others' name='Others' className='form-control mb-4' />
        <input type="text" placeholder='Enter gender' name='Gender' className='form-control mb-4' />
        <input type="email" placeholder='Enter email' name='email' className='form-control mb-4' />
        <input type="tel" placeholder='Enter tel(phone)' name='phone' className='phonenumber mb-4' />
        <input type="password" placeholder='Enter password' name='yourpassword' className='YourPassword mb-4' />
        <button type="submit" class="btn btn-primary">Register Nurse</button>
      </form>
    </div>
    </div>
  )
}

export default AddNurse
