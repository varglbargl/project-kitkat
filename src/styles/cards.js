const textColor = '#FFE';
const rowSpacing = '10px';

const cards = {
  taskCard: {
    margin: '6px',
    padding: '6px',
    borderRadius: '3px',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
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

  detailColumn: {
    flexDirection: 'column',
    padding: '6px',
    paddingBottom: 0,
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

  tagSpacer: {
    flexGrow: 4,
  }
};

export default cards;
