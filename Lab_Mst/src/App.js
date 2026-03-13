import React, { useState, useEffect } from "react";
import ActivityForm from "./ActivityForm";
import ActivityList from "./ActivityList";

function App() {

  const [activities, setActivities] = useState([]);

  // Initial data loading
  useEffect(() => {
    const sampleData = [
      { name: "Cycling", category: "Travel", carbon: 2 },
      { name: "Solar Usage", category: "Energy", carbon: 5 }
    ];

    setActivities(sampleData);
  }, []);

  // function to add activity
  const addActivity = (activity) => {
    setActivities([...activities, activity]);
  };

  return (
    <div className="container">
      <h1>Carbon Activity Tracker</h1>

      <ActivityForm addActivity={addActivity} />

      <ActivityList activities={activities} />

    </div>
  );
}

export default App;