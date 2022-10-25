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
    minHeight: '26px',
  },

  title: {
    fontSize: '1.12em',
    fontWeight: 600,
    color: textColor,
    marginBottom: '2px',
    alignSelf: 'center',
    paddingLeft: '5px',
    flexGrow: 1,
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  },

  fullTitle: {
    whiteSpace: 'wrap',
  },

  headerIcon: {
    flexGrow: 0,
    fontSize: '24px',
    color: textColor,
    height: '100%',
    lineHeight: '100%',
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
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: rowSpacing,
  },

  detailItem: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },

  tagCloud: {
    justifyContent: 'stretch',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: rowSpacing,
    alignItems: 'center',
  },

  tag: {
    color: textColor,
    paddingTop: '3px',
    paddingHorizontal: '6px',
    paddingBottom: '5px',
    margin: '2px',
    borderRadius: '2px',
    flexGrow: 1,
    textAlign: 'center',
    fontWeight: 600,

    textShadowColor: 'rgba(0, 0, 0, 0.6)',
    textShadowOffset: {width: 0, height: 1},
    textShadowRadius: 3
  },

  inlineIcon: {
    marginRight: '2px',
    color: textColor,
    fontSize: '20px',
  },
};

export default cards;
