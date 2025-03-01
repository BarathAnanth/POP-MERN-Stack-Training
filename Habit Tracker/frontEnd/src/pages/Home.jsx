import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container text-center mt-5">
      <h1 className="display-4 text-primary mb-4">Track Your Habits</h1>
      <p className="lead mb-4">
        Build better habits and achieve your goals with daily tracking
      </p>
      <div className="d-grid gap-3 d-sm-flex justify-content-sm-center">
        <Link to="/signup" className="btn btn-primary btn-lg px-4">
          Get Started
        </Link>
        <Link to="/login" className="btn btn-outline-primary btn-lg px-4">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Home;