export const config = {
    xField: 'explosionTime',
    yField: 'coefficient',
    xAxis: {
        label: {
            autoRotate: false,
        },
    },
    columnStyle: {
        fill: 'green',
        lineWidth: 550,
        opacity: 0.2
    },
    animation: {
        // Configuration of the first animation
        appear: {
            animation: 'wave-in', // Effects of the first animation
            duration: 1500, // Duration of the first animation
        },
    },
    width: 100,
    slider: {
        start: 0,
        end: Infinity,
    },
};