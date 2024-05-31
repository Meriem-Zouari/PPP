import React from 'react'
import {useParams} from 'react-router-dom'
import Usersidebar from '../../components/Userprofile/Usersidebar'
import Accountsettings from '../../components/Userprofile/Accountsettings'
import './Userprofile.css'
import Changepassword from '../../components/Userprofile/Changepassword'
import Yourflight from '../../components/Userprofile/Yourflight'
import Legalnotice from '../../components/Userprofile/Legalnotice'

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
