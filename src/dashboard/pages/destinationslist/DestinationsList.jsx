import './Destinations.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Destinationsdatatable from '../../components/destinationstatable/Destinationsdatatable'
const DestinationsList = () => {
  return (
    <div className='list' >
      <Sidebar/>
      <div className="listContainer">
        <Destinationsdatatable/>
      </div>
      
    </div>
  )
}
export default DestinationsList;