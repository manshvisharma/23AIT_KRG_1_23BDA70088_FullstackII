import React from "react";

function ActivityList({ activities }) {

  return (
    <div>

      <h2>Activity List</h2>

      <table border="1">

        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Carbon Saved (kg)</th>
          </tr>
        </thead>

        <tbody>

          {activities.map((activity, index) => (
            <tr key={index}>
              <td>{activity.name}</td>
              <td>{activity.category}</td>
              <td>{activity.carbon}</td>
            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}

export default ActivityList;