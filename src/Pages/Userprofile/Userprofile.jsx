import React from 'react'
import {useParams} from 'react-router-dom'
import Usersidebar from '../../Components/Userprofile/Usersidebar'
import Accountsettings from '../../Components/Userprofile/Accountsettings'
import './Userprofile.css'
import Changepassword from '../../Components/Userprofile/Changepassword'
import Yourflight from '../../Components/Userprofile/Yourflight'
import Legalnotice from '../../Components/Userprofile/Legalnotice'

const Userprofile = () => {
  const {activepage} = useParams()
  //alert(activepage)


  return (
    <div className='userprofile' >
      <div className='title' ><h1>My Profile</h1></div>
      {/*<div>Userprofile , showing {activepage}</div>*/ }
      <div className='userprofilein' >
        <div className='left' >
          <Usersidebar  activepage={activepage} />
        </div>
        <div className='right' >
          {activepage === 'accountsettings' && <Accountsettings/> }
          {activepage === 'changepassword' && <Changepassword/> }
          {activepage === 'yourflight' && <Yourflight/> }
          {activepage === 'legalnotice' && <Legalnotice/> }

        </div>

      </div>
      
    </div>
  )
}

export default Userprofile