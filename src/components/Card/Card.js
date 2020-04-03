import React from 'react';
import pokemonType from '../../helpers/pokemonTypes';
import './style.css';

function Card({ pokemon }) {
    return (
        <div className="Card">
            <div className="Card_img">
                <img src={pokemon.sprites.front_default} alt="" />
            </div>
            <div className="Card_Name">
                {pokemon.name}
            </div>
            <div className="Card_Types">
                {pokemon.types.map(item => {
                    return (
                        <div className="Card_type" style={{ backgroundColor: pokemonType[item.type.name] }}>
                            {item.type.name}
                        </div>
                    )
                })}
            </div>
            <div className="Card_info">
                <div className="Card_data Card_data--weight">
                    <p className="title">Weight</p>
                    <p>{pokemon.weight}</p>
                </div>
                <div className="Card_data Card_data--height">
                    <p className="title">Height</p>
                    <p>{pokemon.height}</p>
                </div>
                <div className="Card_data Card_data--abilities">
                    <p className="title">abilities</p>
                    <p>{pokemon.abilities.map(item => {
                        return (
                            <div className="Card_ability">
                                {item.ability.name}
                            </div>
                        )
                    })}</p>
                </div>
            </div>
        </div>
    )
}

export default Card;