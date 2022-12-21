import './title.styles.scss';

const Title = () => {
    const date = new Date();
    const bakingYear = date.getFullYear();
    return (
        <div className='holiday-font overlay'>
            <h1>Christmas Baking</h1>
            <h2>{bakingYear}</h2>
        </div>
    );
};

export default Title;
