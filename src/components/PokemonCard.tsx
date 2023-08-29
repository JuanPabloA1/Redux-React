import { Card } from 'antd';
import Meta from 'antd/lib/card/Meta';
import StarButton from './StarButton';
import { useDispatch } from 'react-redux'
import '../App.css';
import { setFavorite } from '../actions';

export const PokemonCard = ({name, image, color, types, id}) => {
  const dispatch = useDispatch();
  const typeString = types.map((elem) => elem.type.name).join(', ');

  const handleOnFavorite = () => {
    dispatch(setFavorite({pokemonId: id}));
  }

  return (
    <Card
      title={name[0].toUpperCase() + name.substring(1)}
      cover={<img src={image} alt={name} style={{ width: '150px', margin: '0 auto' }}/>}
      style={{ 
        background: `radial-gradient(#FFFFFF, ${color})`,
        fontFamily: 'Consolas',
        width: '190px',
        height: '230px',
        position: 'relative',
        bottom: '2.5em'
      }}
      extra={<StarButton isFavorite onClick={handleOnFavorite}/>}
    >
      <Meta title={typeString} className='color-type-pokemon' />
    </Card>
  )
}
