const textColor = '#FFE';
const rainbow = ['red', 'orange', 'yellow', 'green', 'teal', 'blue', 'indigo', 'purple', 'magenta'];

const colors = {
  lightText: {
    color: textColor,
  },

  red: {
    backgroundColor: 'maroon',
  },

  orange: {
    backgroundColor: 'sienna',
  },

  yellow: {
    backgroundColor: 'olive',
  },

  green: {
    backgroundColor: 'forestgreen',
  },

  teal: {
    backgroundColor: 'steelblue',
  },

  blue: {
    backgroundColor: 'royalblue',
  },

  indigo: {
    backgroundColor: 'slateblue',
  },

  purple: {
    backgroundColor: 'rebeccapurple',
  },

  magenta: {
    backgroundColor: 'darkmagenta',
  },

  randomColor: () => {
    const hue = rainbow[Math.floor(Math.random() * rainbow.length)];

    return colors[hue];
  },

  colorByNumber: (i) => {
    const hue = rainbow[i % rainbow.length];

    return colors[hue];
  }
};

export default colors;
