import { useNavigate } from 'react-router-dom';

import {
    DirectoryItemContainer,
    BackgroundImg,
    Body,
} from './directory-item.styles';

const DirectoryItem = ({ category: { imageUrl, title, route } }) => {
    const navigate = useNavigate();

    const onNavigateHandler = () => navigate(route);
    return (
        <DirectoryItemContainer onClick={onNavigateHandler}>
            <BackgroundImg imageUrl={imageUrl} />
            <Body>
                <h2>{title}</h2>
                <p>Show Now</p>
            </Body>
        </DirectoryItemContainer>
    );
};

export default DirectoryItem;
