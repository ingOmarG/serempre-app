export const SetFinish = (finish) => ({
    type: 'finish',
    payload: finish,
});

export const SetWarranty = (Initwarranty) => {
    return (
        {
            type: 'warranty',
            payload: Initwarranty,
        }
    )
};

export const Setfeatures = (features) => ({
    type: 'features',
    payload: features,
});

export const SetfinalPrice = (price) => ({
    type: 'price',
    payload: price,
});

