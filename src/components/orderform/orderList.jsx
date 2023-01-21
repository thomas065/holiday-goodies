import { Badge, Button } from 'reactstrap';
import { useState, useEffect } from 'react';

const goodies = [
    'Ginger Snaps',
    'Sugar Cookies',
    'Snickerdoodles',
    'Hot Pickles',
    'Sweet Pickles',
    'Cinnamon Rolls',
    'Pecan Puffs',
    'Olive Tapenade',
    'Pumpkin Bread',
    'Apple Sauce Cake',
    'English Muffins',
    'Raisin Scones',
    'Strawberry Butter',
    'Cinnamon Honey Butter',
    'Double Chocolate Cookies',
    'Chocolate Chip Cookies w/ Mocha Cream Filling',
    'No Bake Chocolate Peanut Butter Cookies',
    'Vanilla Orange Cranberry Cookies',
    'Rice Krispie Treats (Regular)',
    'Rice Krispie Treats (Chocolate)',
    'Other',
];

const OrderList = props => {
    const initialToastCounts =
        JSON.parse(localStorage.getItem('toastCounts')) || {};
    const [toastCounts, setToastCounts] = useState(initialToastCounts);

    useEffect(() => {
        localStorage.setItem('toastCounts', JSON.stringify(toastCounts));
    }, [toastCounts]);

    const listTreat = goodies.map(item => (
        <div
            key={item}
            className='d-flex align-items-center justify-content-center'
        >
            <Button
                color='primary w-100 text-wrap mb-2'
                onClick={() => {
                    setToastCounts(prevToastCounts => {
                        return {
                            ...prevToastCounts,
                            [item]: ((prevToastCounts[item] || 0) + 1) % 3,
                        };
                    });
                }}
            >
                {item + ' '}
                <Badge color='dark'>
                    {toastCounts[item] !== undefined ? toastCounts[item] : 0}
                </Badge>
            </Button>
        </div>
    ));
    return (
        <div className='d-flex flex-wrap justify-content-between'>
            {listTreat}
        </div>
    );
};

export default OrderList;
