import './title.styles.scss';
import Countdown from "../countdown/countdown";

const Title = () => {
    return (
        <>
            <div className='holiday-font'>
                <h1 className='title'>Nene's Christmas Goodies</h1>
                <p className='blink'>Orders begin on November 1st</p>
            </div>
            <Countdown />
        </>
    );
};

export default Title;
