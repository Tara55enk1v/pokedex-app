import React, { useEffect, useState } from "react";
import Card from "./Card";
import CardDetails from "./CardDetails";
import axios from "axios";

const Main = () => {
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/?limit=12");
  const [response, setResponse] = useState();
  const [pokemonData, setPokemonData] = useState([]);
  const [loadMore, setLoadMore] = useState("");
  const [loading, setLoading] = useState(true);
  const [pokemonInfo, setPokemonInfo] = useState();
  const [filter, setFilter] = useState([]);
  const [isShown, setIsShown] = useState(false);
  // const pokemonTypes = [
  //   { value: "fire", label: "fire" },
  //   { value: "bug", label: "bug" },
  //   { value: "poison", label: "poison" },
  //   { value: "grass", label: "grass" },
  //   { value: "electric", label: "electric" },
  //   { value: "flying", label: "flying" },
  //   { value: "normal", label: "normal" },
  //   { value: "water", label: "water" },
  //   { value: "ground", label: "ground" },
  //   { value: "fairy", label: "fairy" },
  //   { value: "fighting", label: "fighting" },
  //   { value: "psychic", label: "psychic" },
  //   { value: "steel", label: "steel" },
  //   { value: "ice", label: "ice" },
  //   { value: "ghost", label: "ghost" },
  //   { value: "dragon", label: "dragon" },
  //   { value: "dark", label: "dark" },
  //   { value: "rock", label: "rock" },
  // ];

  const fetchData = async () => {
    setLoading(true);
    const res = await axios.get(url);
    setResponse(res.data.results);
    setLoadMore(res.data.next);
    setLoading(false);
  };

  const getPokemon = async (res) => {
    res?.map(async (item) => {
      const result = await axios.get(item.url);
      setPokemonData((state) => {
        state = [...state, result.data];
        return state;
      });
    });
  };

  const handleSearchChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredPokemonData = pokemonData.filter((pokemon) => {
    return pokemon.types.some((item) => item.type.name.includes(filter));
  });

  useEffect(() => {
    fetchData();
  }, [url]);

  useEffect(() => {
    getPokemon(response);
  }, [response]);

  return (
    <div className="main">
      <div className="left-content">
        <Card
          pokemonData={filteredPokemonData ? filteredPokemonData : pokemonData}
          loading={loading}
          pokemonDetails={(pokeInfo) => setPokemonInfo(pokeInfo)}
        />
        <button
          className="loadMore"
          onClick={() => {
            setUrl(loadMore);
          }}
        >
          Load More
        </button>
      </div>
      <div className="right-content">
        <div className="filterBox">
          <input
            type="search"
            onChange={(e) => handleSearchChange(e)}
            placeholder="Filter Cards"
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
          ></input>
          {isShown && <div>All available types: fire, bug, poison, grass, electric, 
            flying, normal, water, ground, fairy, fighting, psychic, steel, ice, ghost, dragon, dark, rock.</div>}
        </div>
        <CardDetails data={pokemonInfo} />
      </div>
    </div>
  );
};

export default Main;
