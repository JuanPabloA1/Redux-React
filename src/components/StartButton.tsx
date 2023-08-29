import { Button } from 'antd';
import { StarFilled, StarOutlined } from '@ant-design/icons';
import { IStarButton } from '../interface/IStarButton';

export const StartButton = ({isFavorite, onClick}: IStarButton) => {

    const Icon = isFavorite ? StarFilled : StarOutlined
    return <Button icon={<Icon />} onClick={onClick} />
}
