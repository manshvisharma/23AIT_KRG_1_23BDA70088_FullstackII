import React, { useState } from "react";

function ActivityForm({ addActivity }) {

  const [name, setName] = useState("");
  const [category, setCategory] = useState("Travel");
  const [carbon, setCarbon] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newActivity = {
      name: name,
      category: category,
      carbon: carbon
    };

    addActivity(newActivity);

    // clear form
    setName("");
    setCategory("Travel");
    setCarbon("");
  };

  return (
    <form onSubmit={handleSubmit}>

      <input
        type="text"
        placeholder="Activity Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option>Travel</option>
        <option>Energy</option>
        <option>Waste</option>
      </select>

      <input
        type="number"
        placeholder="Carbon Saved (kg)"
        value={carbon}
        onChange={(e) => setCarbon(e.target.value)}
        required
      />

      <button type="submit">
        Add Activity
      </button>

    </form>
  );
}

export default ActivityForm;