import React from "react";
import NewWrestler from "../components/NewWrestler";
import NewMatch from "../components/NewMatch";

export default function Admin() {
  return (
    <div className="App">
      {/*Add a Wrestler*/}
      <h1>Add a Wrestler</h1>
      <NewWrestler />
      <h1>Add a Match</h1>
      {/*Add a Match*/}
      <NewMatch />
    </div>
  );
}
