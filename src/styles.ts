// @flow
import { StyleSheet } from 'react-native';

const componentStyle = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: 'white',
  },
  mainViewStyle: {
    paddingVertical: 12,
    paddingRight: 16,
  },
  fullTextWrapper: {
    opacity: 0,
    position: 'absolute',
    left: 0,
    top: 0,
  },
  viewMoreText: {
    fontSize: 12,
    fontWeight: '300',
    color: 'rgba(1, 1, 1, 0.8)',
    right: 0,
    textAlign: 'right',
    marginTop: 5,
  },
  dateView: {
    flex: 1,
    alignItems: 'flex-end',
  },
  descriptionKeyTextStyle: {
    fontSize: 12,
    fontWeight: '300',
    color: 'rgb(1, 1, 1)',
    marginTop: 7,
  },
  subTitleTextStyle: {
    fontSize: 14,
    fontWeight: '400',
    color: 'rgba(1, 1, 1, 0.7)',
    marginTop: 7,
  },
  subTitleTextKeyStyle: {
    fontSize: 14,
    fontWeight: '400',
    color: 'rgba(1, 1, 1, 0.7)',
    marginTop: 7,
  },
  dateFontStyle: {
    fontSize: 22,
  },
  dateKeyStyle: {
    fontSize: 12,
    fontWeight: '200',
    color: 'rgb(1, 1, 1)',
  },
  titleStyle: {
    fontSize: 17,
    fontWeight: '500',
    color: 'rgb(1, 1, 1)',
  },
  titleKeyStyle: {
    fontSize: 17,
    fontWeight: '500',
    color: 'rgb(1, 1, 1)',
  },
  flexDirectionRowStyle: {
    flexDirection: 'row',
  },
});

export { componentStyle };
