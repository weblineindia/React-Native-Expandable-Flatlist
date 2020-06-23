import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './Styles';

type IProps = {
    navigation: any,
    routeName: String,
    id: Number,
    index: Number,
    featureName: String,
    numberOfLines: Number,
    titleKey: String,
    subTitleKey: String,
    dateKey: String,
    descriptionKey: String,
    title: String,
    subTitle: String,
    date: String,
    description: String,
    color: String,
    showMoreStyle: any,
    onMorePressed: function,
    onLessPressed: function,
};

export default class ExpandItemComponent extends Component<IProps> {
  constructor(props) {
    super(props);
    this.trimmedTextHeight = null;
    this.fullTextHeight = null;
    this.shouldShowMore = false;

    this.state = {
      isFulltextShown: true,
      numberOfLines: (this.props.numberOfLines != undefined) ? this.props.numberOfLines : 2,
    };
  }

  componentDidMount() { 
    console.log('---index---', this.props);
  }

    hideFullText = () => {
      if (
        this.state.isFulltextShown &&
            this.trimmedTextHeight &&
            this.fullTextHeight
      ) {
        this.shouldShowMore = this.trimmedTextHeight <
                this.fullTextHeight;
        this.setState({
          isFulltextShown: false,
        });
      }
    }

    /**
     * Method to show trimmed text Layout calculate height with minimum numberOfLines
     */

    onLayoutTrimmedText = (event) => {
      const { height } = event.nativeEvent.layout;
      this.trimmedTextHeight = height;
      this.hideFullText();
    }

    /**
     * Method to show full text Layout calculate Height with full text
     */

    onLayoutFullText = (event) => {
      const { height } = event.nativeEvent.layout;
      this.fullTextHeight = height;
      this.hideFullText();
    }

    /**
     * Method to handle numberOfLines with 'More' Button
     */

    onPressMore = () => {
      if (this.props.onMorePressed) {
        this.props.onMorePressed(this.props.id);
      }
      this.setState({ numberOfLines: null });
    }

    /**
     * Method to handle numberOfLines with 'Less' Button
     */

    onPressLess = () => {
      if (this.props.onLessPressed) {
        this.props.onLessPressed(this.props.id);
      }
      this.setState({
        numberOfLines: (this.props.numberOfLines != undefined) ? this.props.numberOfLines : 2,
      });
    }

    /**
     * Method to Return view for "More" button
     */

    renderViewMore = () => (
      <Text
        style={[styles.viewMoreText, this.props.showMoreStyle]}
        onPress={this.onPressMore}
      >
            MORE
      </Text>
    )

    /**
     * Return view for "More" button
     */

    renderViewLess = () => (
      <Text
        style={[styles.viewMoreText, this.props.showMoreStyle]}
        onPress={this.onPressLess}
      >
            LESS
      </Text>
    )

    /**
     * Handling More and Less button in the footer
     */

    renderFooter = () => {
      const { numberOfLines } = this.state;

      if (this.shouldShowMore === true) {
        if (numberOfLines > 0) {
          return (this.props.renderViewMore || this.renderViewMore)(this.onPressMore);
        }
        return (this.props.renderViewLess || this.renderViewLess)(this.onPressLess);
      }
      return null;
    }

    /**
     * render full text
     */

    renderFullText = () => {
      if (this.state.isFulltextShown) {
        return (
          <View
            onLayout={this.onLayoutFullText}
            style={styles.fullTextWrapper}
          >
            <Text style={this.props.textStyle}> {this.props.description} </Text>
          </View>
        );
      }
      return null;
    }

    render() {
      return (<View style={styles.containerStyle}>
        <View style={
          [{ paddingVertical: 12, paddingRight: 16 }, this.props.viewStyle]
        }
        >
          <View style={{ flexDirection: 'row' }}>
            {(this.props[this.props.titleKey] != undefined && this.props[this.props.titleKey] != '') ?
              <Text style={[{ fontSize: 17, fontWeight: '500', color: 'rgb(1, 1, 1)' }, this.props.titleStyle]} numberOfLines={1}>{this.props[this.props.titleKey]}</Text>
              : (this.props.title != undefined && this.props.title != '') ?
                <Text style={[{ ontSize: 17, fontWeight: '500', color: 'rgb(1, 1, 1)' }, this.props.titleStyle]} numberOfLines={1}>{this.props.title}</Text>
                : null}
            {(this.props[this.props.dateKey] != undefined && this.props[this.props.dateKey] != '') ?
              <View style={styles.dateView}>
                <Text style={[{ fontSize: 12, fontWeight: '200', color: 'rgb(1, 1, 1)' }, this.props.dateStyle]} numberOfLines={1}>{this.props[this.props.dateKey]}</Text>
              </View>
              : (this.props.date != undefined && this.props.date != '') ?
                <Text style={[{ fontSize: 22 }, this.props.titleStyle]} numberOfLines={1}>{this.props.date}</Text>
                : null}
          </View>
          {(this.props[this.props.subTitleKey] != '' && this.props[this.props.subTitleKey] != undefined) ?
            <Text style={[{
              fontSize: 14, fontWeight: '400', color: 'rgba(1, 1, 1, 0.7)', marginTop: 7,
            }, this.props.subTitleStyle]}
            >{this.props[this.props.subTitleKey]}
            </Text>
            : (this.props.subTitle != '' && this.props.subTitle != undefined) ?
              <Text style={[{
                fontSize: 14, fontWeight: '400', color: 'rgba(1, 1, 1, 0.7)', marginTop: 7,
              }, this.props.subTitleStyle]}
              >{this.props.subTitle}
              </Text>
              : null}
          <View onLayout={this.onLayoutTrimmedText}>
            <Text
              numberOfLines={this.state.numberOfLines}
              style={[{
                fontSize: 12, fontWeight: '300', color: 'rgb(1, 1, 1)', marginTop: 7,
              }, this.props.textStyle]}
            >{this.props[this.props.descriptionKey]}
            </Text>
          </View>
          {this.renderFooter()}
        </View>
        {this.renderFullText()}
              </View>
      );
    }
}
