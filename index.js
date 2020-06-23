// import { NativeModules } from 'react-native';

// const { ExpandableFlatlist } = NativeModules;

// export default ExpandableFlatlist;

import React, { Component } from 'react';
import { FlatList } from 'react-native';
import ExpandItemComponent from './ExpandItemComponent';

export default class ExpandableFlatlist extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <FlatList data={this.props.data}
                    renderItem={
                        ({ item,index }) => (<
                            ExpandItemComponent {...item} {...index }
                            numberOfLines={this.props.numberOfLines}
                            titleKey={this.props.titleKey}
                            subTitleKey={this.props.subTitleKey}
                            descriptionKey={this.props.descriptionKey}
                            dateKey={this.props.dateKey}
                            viewStyle={this.props.viewStyle}
                            titleStyle={this.props.titleStyle}
                            subTitleStyle={this.props.subTitleStyle}
                            textStyle={this.props.textStyle}
                            dateStyle={this.props.dateStyle}
                            showMoreStyle={this.props.showMoreStyle}
                            color={this.props.color}
                            onMorePressed={this.props.onMorePressed}
                            onLessPressed={this.props.onLessPressed}
                            renderViewMore={this.props.renderViewMore}
                            renderViewLess={this.props.renderViewLess}
                        />
                        )
                    }
                    keyExtractor={item => item.id.toString()}
                />
            </>
        );
    }
}