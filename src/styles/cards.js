import { colors } from 'styles';

const textColor = '#FFE';
const rowSpacing = '10px';

const cards = {
  taskCard: {
    ...colors.lightBkg,
    margin: '6px',
    padding: '6px',
    borderRadius: '3px',
  },

  cardHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },

  title: {
    fontSize: '1.12em',
    fontWeight: 600,
    color: textColor,
    marginBottom: '2px',
    alignSelf: 'center',
    paddingLeft: '5px',
  },

  description: {
    marginBottom: rowSpacing,
    fontStyle: 'italic',
    color: textColor,
  },

  plainText: {
    textAlign: 'center',
    color: textColor,
  },

  detailContainer: {
    marginTop: '6px',
    padding: '6px',
    paddingBottom: 0,
    flexDirection: 'column',
    borderTopWidth: '2px',
    ...colors.lightBorder,
  },

  detailRow: {
    justifyContent: 'space-between',
    alignItems: 'baseline',
    flexDirection: 'row',
    marginBottom: rowSpacing,
  },

  tagCloud: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: rowSpacing,
  },

  tag: {
    color: textColor,
    paddingTop: '2px',
    paddingHorizontal: '6px',
    paddingBottom: '4px',
    margin: '2px',
    borderRadius: '2px',
    flexGrow: 1,
    textAlign: 'center',
  },
};

export default cards;
