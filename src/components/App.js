import React, { useState } from "react";
import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });

  function fetchAllPets(){
    if (filters.type === "all"){
      fetch('http://localhost:3001/pets')
      .then(res => res.json())
      .then(pets => setPets(pets))
    } else {
      fetch(`http://localhost:3001/pets?type=${filters.type}`)
      .then(res => res.json())
      .then(pets => setPets(pets))
    }
  }

  function findPetById(id){
  
    let filteredPet = pets.map((pet) => {
      return pet.id === id ? {...pet, isAdopted: true} : pet });
    setPets(filteredPet)
  
  }
  
  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters onChangeType={setFilters} onFindPetsClick={fetchAllPets} />
          </div>
          <div className="twelve wide column">
            <PetBrowser pets={pets} onAdoptPet={findPetById}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
