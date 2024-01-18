import React from "react";

const Card = ({ pokemonData, loading, pokemonDetails }) => {
  const typeBackgrounds = {
    fire: "red",
    bug: "lime",
    poison: "purple",
    grass: "green",
    electric: "yellow",
    flying: "lightblue",
    normal: "silver",
    water: "blue",
    ground: "brown",
    fairy: "pink",
    fighting: "orange",
    psychic: "fuchsia",
    steel: "olive",
    rock: "grey",
    ice: "aqua",
    ghost: "silver",
    dragon: 'goldenrod',
    dark: 'indigo'
  };

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        pokemonData.map((item) => {
          return (
            <div
              className="card"
              key={item.id}
              onClick={() => pokemonDetails(item)}
            >
              <img src={item.sprites.front_default} alt="" />
              <h3>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</h3>
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                {item.types.map((pokemon, index) => {
                  return (
                      <div
                        className="type"
                        style={{
                          background: typeBackgrounds[pokemon.type.name],
                        }}
                        key={index}
                      >
                        {pokemon.type.name.charAt(0).toUpperCase() + pokemon.type.name.slice(1)}
                      </div>
                  );
                })}
              </div>
            </div>
          );
        })
      )}
    </>
  );
};

export default Card;
