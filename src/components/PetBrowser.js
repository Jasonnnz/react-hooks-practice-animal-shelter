import React from "react";

import Pet from "./Pet";

function PetBrowser({pets, onAdoptPet}) {
  let filteredArr = pets.map((pet) => {
    return <Pet key={pet.id} onAdoptPet={onAdoptPet} pet={pet}/>
  })
  return <div className="ui cards">{filteredArr}</div>;
}

export default PetBrowser;
