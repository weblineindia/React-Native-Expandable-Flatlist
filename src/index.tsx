import React from 'react';
import { FlatList, StyleProp, ViewStyle, TextStyle } from 'react-native';
import ExpandItemComponent from './ExpandItemComponent';

interface ExpandableFlatlistProps {
  data: Array<{ id: number; [key: string]: any }>;
  numberOfLines?: number;
  titleKey?: string;
  subTitleKey?: string;
  descriptionKey?: string;
  dateKey?: string;
  viewStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  subTitleStyle?: StyleProp<TextStyle>;
  textStyle?: StyleProp<TextStyle>;
  dateStyle?: StyleProp<TextStyle>;
  showMoreStyle?: StyleProp<TextStyle>;
  color?: string;
  onMorePressed?: () => void;
  onLessPressed?: () => void;
  renderViewMore?: () => JSX.Element;
  renderViewLess?: () => JSX.Element;
}

const ExpandableFlatlist = (props: ExpandableFlatlistProps) => {
  return (
    <FlatList
      data={props.data}
      renderItem={({ item, index }) => (
        <ExpandItemComponent
          {...item}
          {...index}
          numberOfLines={props.numberOfLines}
          titleKey={props.titleKey}
          subTitleKey={props.subTitleKey}
          descriptionKey={props.descriptionKey}
          dateKey={props.dateKey}
          viewStyle={props.viewStyle}
          titleStyle={props.titleStyle}
          subTitleStyle={props.subTitleStyle}
          textStyle={props.textStyle}
          dateStyle={props.dateStyle}
          showMoreStyle={props.showMoreStyle}
          color={props.color}
          onMorePressed={props.onMorePressed}
          onLessPressed={props.onLessPressed}
          renderViewMore={props.renderViewMore}
          renderViewLess={props.renderViewLess}
        />
      )}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default ExpandableFlatlist;
