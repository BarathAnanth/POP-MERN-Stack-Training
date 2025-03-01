import { Outlet } from 'react-router-dom';
import AddHabit from '../components/Habits/AddHabit';
import ViewWeekly from '../components/Habits/ViewWeekly';

const Dashboard = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-4 bg-light p-4">
          <AddHabit />
        </div>
        <div className="col-md-8 p-4">
          <ViewWeekly />
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Dashboard;