function calculateStar(price: number) {
    const value = Math.round(price / 200);

    if (value < 1) {
        return 1;
    }

    return value;
}

export default calculateStar;
