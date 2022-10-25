const lightText = '#FFE';
const lightAccent = 'rgba(255, 255, 255, 0.1)'
const rainbow = ['red', 'orange', 'yellow', 'green', 'teal', 'blue', 'indigo', 'purple', 'magenta'];

const colors = {
  lightBkg: {
    backgroundColor: lightAccent,
  },

  lightBorder: {
    borderColor: lightAccent,
  },

  lightText: {
    color: lightText,
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
    backgroundColor: 'teal',
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
    if (typeof i !== 'number' || i % 1 !== 0) {
      console.error(new Error('colorByNumber expected an integer, got ' + i + '.'));
      return;
    }

    const hue = rainbow[i % rainbow.length];

    return colors[hue];
  }
};

export default colors;
