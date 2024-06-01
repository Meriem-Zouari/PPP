/*
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import UserList from './pages/userlist/UserList';
import { userInputs,destinationsInfos} from './fromSource';
import UpdateUser from './pages/UpdateUser/UpdateUser';
import UpdateDestination from './pages/UpdateDestination/UpdateDestination';
import NewUser from './pages/newuser/NewUser';
import NewDestination from './pages/newdestination/NewDestination';
import DestinationsList from './pages/destinationslist/DestinationsList';


function Dashboard() {

  return (
    <div className="app">

      <Routes>
        <Route path="/"  >
          <Route index element={<Home/>} />
          <Route path="users" >
            <Route index element={<UserList/>}/>
            <Route path="newuser" element={< NewUser inputs={userInputs} title="Add New User" />} />
            <Route
              path="updateuser"
              element={<UpdateUser inputs={userInputs} title="Update User" />}
            />
          </Route>
          <Route path="destinations">
            <Route index element={<DestinationsList />} />
            <Route
              path="newdestination"
              element={<NewDestination inputs={destinationsInfos} title="Add New Destination" />}
            /> 
            <Route
              path="updatedestination"
              element={<UpdateDestination inputs={destinationsInfos} title="Update Destination" />}
            />
          </Route>
        </Route>

          
      </Routes>

    </div>
  );
}

export default Dashboard;
*/
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import UserList from './pages/userlist/UserList';
import { userInputs, destinationsInfos } from './fromSource';
import UpdateUser from './pages/UpdateUser/UpdateUser';
import UpdateDestination from './pages/UpdateDestination/UpdateDestination';
import NewUser from './pages/newuser/NewUser';
import NewDestination from './pages/newdestination/NewDestination';
import DestinationsList from './pages/destinationslist/DestinationsList';

function Dashboard() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="users" element={<UserList />} />
        <Route path="users/newuser" element={<NewUser inputs={userInputs} title="Add New User" />} />
        <Route path="users/updateuser" element={<UpdateUser inputs={userInputs} title="Update User" />} />
        <Route path="destinations" element={<DestinationsList />} />
        <Route path="destinations/newdestination" element={<NewDestination inputs={destinationsInfos} title="Add New Destination" />} />
        <Route path="destinations/updatedestination" element={<UpdateDestination inputs={destinationsInfos} title="Update Destination" />} />
      </Routes>
    </div>
  );
}

export default Dashboard;
