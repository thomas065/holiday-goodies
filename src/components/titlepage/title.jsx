import './title.styles.scss';

const Title = () => {
    const date = new Date();
    const bakingYear = date.getFullYear();
    return (
        <div className='holiday-font overlay'>
            <h1>Christmas Baking</h1>
            <h2>{bakingYear}</h2>
            <button className='push-me button'>
                <span className='front'>Login</span>
            </button>
        </div>
    );
};

export default Title;
