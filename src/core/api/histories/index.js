const func = () => {
    const arr = [];
    for (let i = 48; i < 50; i++) arr.push(require(`./history_${i}.json`))
    return arr
}

export const cefHistories = func().map((data, index) => ({id: index + 1, data}));

