export const config = {
    xField: 'explosionTime',
    yField: 'coefficient',
    columnStyle: {
        fill: 'green',
    },
    animation: {
        appear: {
            animation: 'wave-in', // Effects of the first animation
            duration: 1500, // Duration of the first animation
        },
    },
    slider: {
        start: 0,
        end: Infinity,
    },
};