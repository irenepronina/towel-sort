module.exports = function towelSort(matrix = []) {
    return matrix.reduce((accumulator, current, i) => {
        if (i % 2 === 0) return accumulator.concat(current);
        return accumulator.concat(current.reverse());
    }, []);
};
