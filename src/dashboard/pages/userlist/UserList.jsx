import './UserList.scss'
import Sidebar from "../../components/sidebar/Sidebar"
import UserDatatable from '../../components/userdatatable/UserDatatable'

const UserList = () => {
  return (
    <div className='list' >
      <Sidebar/>
      <div className="listContainer">
        <UserDatatable/>
      </div>
      
    </div>
  )
}
export default UserList
