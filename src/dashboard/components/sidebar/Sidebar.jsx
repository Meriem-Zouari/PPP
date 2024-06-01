import './Sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirports';
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="top">
        <Link to="/Dashboard" style={{ textDecoration: "none" }}>
          <span className="logo">Flighty</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/Dashboard" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className='icon' />
              <span>Dashboard</span>
            </li>
          </Link>
          <Link to="/Dashboard/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlinedIcon className='icon' />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/Dashboard/destinations" style={{ textDecoration: "none" }}>
            <li>
              <ConnectingAirportsIcon className='icon' />
              <span>Destinations</span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
