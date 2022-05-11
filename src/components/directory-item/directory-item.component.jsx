import {
    DirectoryItemContainer,
    BackgroundImg,
    Body,
} from './directory-item.styles';

const DirectoryItem = ({ category: { imageUrl, title } }) => {
    return (
        <DirectoryItemContainer>
            <BackgroundImg imageUrl={imageUrl} />
            <Body>
                <h2>{title}</h2>
                <p>Show Now</p>
            </Body>
        </DirectoryItemContainer>
    );
};

export default DirectoryItem;
