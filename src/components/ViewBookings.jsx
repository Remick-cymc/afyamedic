import React, {useState, useEffect} from 'react'
import axios from "axios"
const ViewBookings = () => {
const [data, setData] = useState([])
const [loading, setLoading] = useState(false)
const [errors, setErrors] = useState(null)
useEffect(() =>{
  // fetch the data from api 
  setLoading(true)
  axios.get("https://tukeiremick.pythonanywhere.com//api/viewbookings")
  .then((response) =>{
    setLoading(false)
    // console.log(response?.data)
    setData(response?.data)
  })
  .catch((error)=>{
    setLoading(false)
    setErrors(error?.message)
  })


}, [])
if (loading){
  return <div> Loading...</div>
}
if (errors){
  return <div> An Error Occured</div>
}
  return (
    <table class="table table-dark mt-3">
  <thead>
    <tr>
      <th scope="col">(Appointment Date)</th>
      <th scope="col">Appointment Time</th>
      <th scope="col">Booked For</th>
      <th scope="col">Booked Id</th>
      <th scope="col">Dependant ID</th>
      <th scope="col">Invoice No</th>
    
      <th scope="col">Member ID</th>
      
      <th scope="col">Status</th>
      <th scope="col">Test ID</th>
      <th scope="col">Where Taken</th>
    </tr>
  </thead>
  <tbody>
    {data?.map((viewbookings)  =>(
         <tr>
         <th scope="row">{ viewbookings?.appointment_date }</th>
         <td>{ viewbookings?.appointment_time }</td>
         <td>{ viewbookings?.booked_for }</td>
         <td>{ viewbookings?.booking_id }</td>
         <td>{ viewbookings?.dependant_id }</td>
         <td>{ viewbookings?.invoice_no }</td>
         
         <td>{ viewbookings?.member_id }</td>
       
         <td>{ viewbookings?.status }</td>
         <td>{ viewbookings?.test_id }</td>
         <td>{ viewbookings?.where_taken }</td>
       </tr>
    ))}
 
 
  </tbody>
</table>
  )
};

export default ViewBookings
