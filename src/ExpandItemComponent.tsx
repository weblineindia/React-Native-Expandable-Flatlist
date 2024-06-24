import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  LayoutChangeEvent,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { componentStyle } from './styles';

type IProps = {
  navigation: any;
  routeName: string;
  id: number;
  index: number;
  featureName: string;
  numberOfLines: number;
  titleKey: string;
  subTitleKey: string;
  dateKey: string;
  descriptionKey: string;
  title: string;
  subTitle: string;
  date: string;
  description: string;
  color: string;
  showMoreStyle: StyleProp<TextStyle>;
  onMorePressed: (id: number) => void;
  onLessPressed: (id: number) => void;
  renderViewMore?: () => JSX.Element;
  renderViewLess?: () => JSX.Element;
  viewStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  subTitleStyle?: StyleProp<TextStyle>;
  textStyle?: StyleProp<TextStyle>;
  dateStyle?: StyleProp<TextStyle>;
};

const ExpandItemComponent = (props: IProps) => {
  const [isFullTextShown, setIsFullTextShown] = useState<boolean | null>(true);
  const [numberOfLines, setNumberOfLines] = useState<number | null>(
    props.numberOfLines !== undefined ? props.numberOfLines : 2
  );
  const [trimmedTextHeight, setTrimmedTextHeight] = useState<number | null>(
    null
  );
  const [fullTextHeight, setFullTextHeight] = useState<number | null>(null);
  const [shouldShowMore, setShouldShowMore] = useState<boolean | null>(false);

  useEffect(() => {
    console.log('---index---', props);
  }, [props]);

  const hideFullText = () => {
    if (isFullTextShown && trimmedTextHeight && fullTextHeight) {
      setShouldShowMore(trimmedTextHeight < fullTextHeight);
      setIsFullTextShown(false);
    }
  };

  const onLayoutTrimmedText = (event: LayoutChangeEvent) => {
    const { height } = event.nativeEvent.layout;
    setTrimmedTextHeight(height);
    hideFullText();
  };

  const onLayoutFullText = (event: LayoutChangeEvent) => {
    const { height } = event.nativeEvent.layout;
    setFullTextHeight(height);
    hideFullText();
  };

  const onPressMore = () => {
    console.log('======================MORE==============');
    console.log();
    console.log('====================================');
    if (props.onMorePressed) {
      props.onMorePressed(props.id);
    }
    setNumberOfLines(null);
  };

  const onPressLess = () => {
    console.log('===============Less=====================');
    console.log();
    console.log('====================================');
    if (props.onLessPressed) {
      props.onLessPressed(props.id);
    }
    setNumberOfLines(
      props.numberOfLines !== undefined ? props.numberOfLines : 2
    );
  };

  const renderViewMore = () => (
    <Text
      style={[componentStyle.viewMoreText, props.showMoreStyle]}
      onPress={onPressMore}
    >
      MORE
    </Text>
  );

  const renderViewLess = () => (
    <Text
      style={[componentStyle.viewMoreText, props.showMoreStyle]}
      onPress={onPressLess}
    >
      LESS
    </Text>
  );

  const renderFooter = () => {
    if (shouldShowMore) {
      if (numberOfLines > 0) {
        return (props.renderViewMore || renderViewMore)();
      }
      return (props.renderViewLess || renderViewLess)();
    }
    return null;
  };

  const renderFullText = () => {
    if (isFullTextShown) {
      return (
        <View
          onLayout={onLayoutFullText}
          style={componentStyle.fullTextWrapper}
        >
          <Text style={props.textStyle}>{props.description}</Text>
        </View>
      );
    }
    return null;
  };

  return (
    <View style={componentStyle.containerStyle}>
      <View style={[componentStyle.mainViewStyle, props.viewStyle]}>
        <View style={componentStyle.flexDirectionRowStyle}>
          {props.titleKey ? (
            <Text
              style={[componentStyle.titleKeyStyle, props.titleStyle]}
              numberOfLines={1}
            >
              {props.titleKey}
            </Text>
          ) : props.title ? (
            <Text
              style={[componentStyle.titleStyle, props.titleStyle]}
              numberOfLines={1}
            >
              {props.title}
            </Text>
          ) : null}
          {props.dateKey ? (
            <View style={componentStyle.dateView}>
              <Text
                style={[componentStyle.dateKeyStyle, props.dateStyle]}
                numberOfLines={1}
              >
                {props.dateKey}
              </Text>
            </View>
          ) : props.date ? (
            <Text
              style={[componentStyle.dateFontStyle, props.titleStyle]}
              numberOfLines={1}
            >
              {props.date}
            </Text>
          ) : null}
        </View>
        {props.subTitleKey ? (
          <Text
            style={[componentStyle.subTitleTextKeyStyle, props.subTitleStyle]}
          >
            {props.subTitleKey}
          </Text>
        ) : props.subTitle ? (
          <Text style={[componentStyle.subTitleTextStyle, props.subTitleStyle]}>
            {props.subTitle}
          </Text>
        ) : null}
        <View onLayout={onLayoutTrimmedText}>
          <Text
            numberOfLines={numberOfLines}
            style={[componentStyle.descriptionKeyTextStyle, props.textStyle]}
          >
            {props.descriptionKey}
          </Text>
        </View>
        {renderFooter()}
      </View>
      {renderFullText()}
    </View>
  );
};

export default ExpandItemComponent;
