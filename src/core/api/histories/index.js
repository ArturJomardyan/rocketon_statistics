const func = () => {
    const arr = [];
    for (let i = 1; i < 48; i++) arr.push(require(`./history_${i}.json`))
    return arr
}

export const cefHistories = func().map((data, index) => ({id: index + 1, data}));

