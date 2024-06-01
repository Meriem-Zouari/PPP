import './Home.scss'
import Sidebar from "../../components/sidebar/Sidebar"
import Widget from '../../components/widget/Widget'
import Featured from '../../components/featured/Featured'
import Chart from '../../components/chart/Chart'
import List from '../../components/table/Table'

const Home = () => {
  return (
    <div className='home' >
      <Sidebar/>
      <div className="homeContainer">
        <div className="widgets">
          <Widget type="user"/>
          <Widget type="destination"/>
          <Widget type="earning"/>
          <Widget type="balance"/>

        </div>
        <div className="charts">
          <Featured/>
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />

        </div>
        <div className="listContainer">
          <div className="listTitle">
            Latest Transaction
            <List/>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Home
