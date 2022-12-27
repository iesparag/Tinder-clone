import React, { useState } from "react";
import "./TinderCards.css";
import TinderCard from "react-tinder-card";

const TinderCards = () => {

  const [people, setPeople] = useState([
    {
      name: "Nrupul Dev",
      url: "https://masai-website-images.s3.ap-south-1.amazonaws.com/Nrupul_d3fe3b289a.jpg",
    },
    {
      name: "Yogesh Bhat",
      url: "https://masai-website-images.s3.ap-south-1.amazonaws.com/Yogesh_52e31f5560.jpg",
    },
    {
      name: "Aman Vats",
      url: "https://masai-website-images.s3.ap-south-1.amazonaws.com/aman_fbbc8625a4.jpg",
    },
    {
      name: "Albert Sebastian",
      url: "https://masai-website-images.s3.ap-south-1.amazonaws.com/Albert_28b73517f6.jpg",
    },
    {
      name: "Ritesh Firodiya",
      url: "https://masai-website-images.s3.ap-south-1.amazonaws.com/Ritesh_Firodiya_4_8a667ac9c8.jpg",
    },
    {
      name: "Swanand Kadam",
      url: "https://masai-website-images.s3.ap-south-1.amazonaws.com/swanand_d399feddf5.jpeg",
    },
    {
      name: "Ayushi Shah",
      url: "https://masai-website-images.s3.ap-south-1.amazonaws.com/Aayushi_527cd1c2a3.jpg",
    },
    {
      name: "Kratika Tripathi",
      url: "https://masai-website-images.s3.ap-south-1.amazonaws.com/Kritika_Tripathi_716c47cbbd.jpg",
    },
  ]);

  const swiped = (direction, nameToDelete) => {
    console.log("removing:" + nameToDelete )
    // setLastDirection(direction)
  }

  const outOfFrame = (name) => {
    console.log(name+"left the screen!")
  }

  return (
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up","down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div style={{ backgroundImage: `url(${person.url})` }}
            className="card" >
                <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
};

export default TinderCards;
