/* eslint-disable @typescript-eslint/no-explicit-any */
import './App.css';

import { Col, Row, Spin } from 'antd';
import { useEffect } from 'react';
import { Searcher } from './components/Searcher';
import PokemonList from './components/PokemonList';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';

import pokedux from './static/pokedux.png';
import { fetchPokemonsColorDetails, fetchPokemonsWithDetails } from './slices/dataSlice';

function App() {

  // const pokemons = useSelector((state: any) => state.pokemons);
  // const loading = useSelector((state: any) => state.loading);
  // const colorPokemons = useSelector((state: any) => state.colorPokemons);

  const pokemons = useSelector((state: any) => state.data.pokemons, shallowEqual);
  const colorPokemons = useSelector((state: any) => state.data.colors);
  const loading = useSelector((state: any) => state.ui.loading);

  const dispatch = useDispatch<any>();

  useEffect(() => {
    dispatch(fetchPokemonsWithDetails());
    dispatch(fetchPokemonsColorDetails());
  }, []);

  return (
    <div className='App'>
      <Row className='RowPokedux'>
        <div className='Pokedux'>
          <img src={pokedux} alt="Pokedux" />
          <h1 style={{ fontFamily: 'cursive' }}>Pokedux</h1>
        </div>
        <Searcher />
        <div></div>
      </Row>
      { loading ?
        <Col offset={1}>
          <Spin spinning size='large' />
        </Col>
        : <PokemonList pokemons={pokemons} color={colorPokemons} />
      }
    </div>
  )
}

export default App;
