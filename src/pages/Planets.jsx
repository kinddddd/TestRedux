import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import axios from 'axios';
import { getPlanets } from '../redux/planets/planets.functions';

const Planets = () => {

    const dispatch = useDispatch();
    const {planets, isLoading, error} = useSelector(state => state.planets); 

    useEffect(() => {
        
        dispatch(getPlanets())

    },[])

  return (
    <div>
        {isLoading ? 'es true' : 'es false'}
    </div>
  )
}

export default Planets