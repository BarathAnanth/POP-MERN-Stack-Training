function Home(props) {
  const styling = {
    textAlign: "center",
    backgroundColor: "#87CEEB",
    color: "white",
    padding: "20px",
    borderRadius: "10px",
  };

  return (
    <div>
      <h1 style={styling}>Home Page</h1>
      <h2>Below tag is for props</h2>
      <h3>Props: {props.hi} {props.hey}</h3>
    </div>
  );
}
export default Home;
