import { Button } from 'antd';
import { StarFilled, StarOutlined } from '@ant-design/icons';

const StarButton = ({ isFavorite, onClick }) => {
    const Icon: any = isFavorite ? StarFilled : StarOutlined
    return <Button icon={<Icon />} onClick={onClick} />;
}

export default StarButton;