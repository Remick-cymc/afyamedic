import React from 'react'

const AddLabtest = () => {
  return (

    <div className='d-flex justify-content-center mt-5'>

    

    <div className='card shadow col-md-6 p-5'>
      <h1>AddLabtest</h1>
      <form action="">
        <input type="text" placeholder='Enter Test name' name='Test name' className='form-control mb-3' />
        <input type="number" placeholder='Enter discount' name='Test discount' className='form-control mb-3' />
        <input type="text" placeholder='Enter Test Description' name='Test Description' className='form-control mb-3' />
        <input type="number" placeholder='Enter Test cost' name='Test cost' className='form-control mb-3' />
        <input type="text" placeholder='More_info' name='More_info' className='form-control mb-3' />
        <input type="text" placeholder='Availability' name='Test availability' className='form-control mb-3' />
      </form>
    </div>
    </div>
    
  )
}

export default AddLabtest
