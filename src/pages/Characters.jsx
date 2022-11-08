import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import axios from 'axios';
import { getCharacters } from '../redux/characters/characters.functions';

const Characters = () => {

    const dispatch = useDispatch();
    const {characters, isLoading, error} = useSelector(state => state.characters); 

    useEffect(() => {
        
        dispatch(getCharacters())

    },[])

  return (
    <div>
        {characters.map((character) => {
          return (
            <div key={character.id}>
              <p>{character.name}</p>
              <img src={character.image} alt={character.name} />
          </div>
          )
        })}
    </div>
  )
}

export default Characters