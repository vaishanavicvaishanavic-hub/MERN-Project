//function App() {
//  return (
//    <div className="App">
//      <h1>Hello, friends!</h1>
//      <p>Chai Peelo</p>
//  </div>
//  );
//}

import "./App.css" ;
function App(){
  const trainerName="Nirmal";
  const trainingDays=3;
  return(
    <main className="app">
      <section className="welcome-card">
        <p className="day-label">React Day {trainingDays}</p>
        <h1 className="title">College Course Explore</h1>
    <p>Trainer:{trainerName}</p>
    <p>React Learning Project</p>
    <p>Used React,JSK,component,CSS</p>
      </section>
      </main>
  );
  
export default App;
