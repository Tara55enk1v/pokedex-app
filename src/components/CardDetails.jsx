import React from "react";

const CardDetails = ({ data }) => {
  return (
    <>
      {!data ? (
        ""
      ) : (
        <div className="card-details">
          <img src={data.sprites.other.dream_world.front_default} alt="" />
          <h2>{data.name.charAt(0).toUpperCase() + data.name.slice(1)}</h2>
          <table>
            <tbody>
              <tr>
                <td>Type</td>
                <td>
                  {data.types.map((pokemon, index) => {
                    return <div key={index}>{pokemon.type.name.charAt(0).toUpperCase() + pokemon.type.name.slice(1)}</div>;
                  })}
                </td>
              </tr>
              <tr>
                <td>Attack</td>
                <td>{data.stats[1].base_stat}</td>
              </tr>
              <tr>
                <td>Defense</td>
                <td>{data.stats[2].base_stat}</td>
              </tr>
              <tr>
                <td>HP</td>
                <td>{data.stats[0].base_stat}</td>
              </tr>
              <tr>
                <td>SP Attack</td>
                <td>{data.stats[3].base_stat}</td>
              </tr>
              <tr>
                <td>SP Defense</td>
                <td>{data.stats[4].base_stat}</td>
              </tr>
              <tr>
                <td>Speed</td>
                <td>{data.stats[5].base_stat}</td>
              </tr>
              <tr>
                <td>Weight</td>
                <td>{data.weight}</td>
              </tr>
              <tr>
                <td>Total moves</td>
                <td>{data.moves.length}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default CardDetails;
