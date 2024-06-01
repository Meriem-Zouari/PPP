import React from 'react'
import './Accountsettings.css'

const Accountsettings = () => {
  return (
    <div className='accountsettings' >
      <h1 className='mainhead1' >Personal Informations</h1>
      <div className='form' >
        <div className='form-group'>
          <label htmlFor="name">Your Name<span>*</span></label>
          <input type="text" name='name' id='name' />
        </div>
        <div className='form-group'>
          <label htmlFor="phone">Phone/Mobile<span>*</span></label>
          <input type="text" name='phone' id='phone' />
        </div>
        <div className='form-group'>
          <label htmlFor="email">Your Email<span>*</span></label>
          <input type="email" name='email' id='email' />
        </div>
      </div>

      <button className='mainbutton1' >Save Changes</button>
      
    </div>
  )
}

export default Accountsettings