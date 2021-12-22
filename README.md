# React Native Expandable Flatlist Component

A lightweight node module to expand and collapse text of any item in the flatlist in React Native.

## Getting started

- [Installation](#installation)
- [Supported versions](#supported-versions)
- [Usage](#usage)
- [Props](#props)
- [Methods](#methods)
- [Want to Contribute?](#want-to-contribute?)
- [Need Help?](#need-help?)
- [Collection of Components](#collection-of-components)
- [Changelog](#changelog)
- [License](#license)
- [Keywords](#keywords)

## Installation

`$ npm install rn-weblineindia-expandable-flatlist --save`

## Supported versions

ReactNative 0.60 - 0.63 is supported for v1.0.1 of this module.

## Usage

```javascript
import ExpandableFlatlist from 'rn-weblineindia-expandable-flatlist';

//sample array
const arrayList = [
  {
    id: 'one',
    title: 'First Item',
  },
  {
    id: 'two',
    title: 'Second Item',
  },
  {
    id: 'three',
    title: 'Third Item',
  },
];

<ExpandableFlatlist
  data={arrayList}        // arrayList is a list which wants display
  titleKey="title"
/>
  
```

## Change Layout for `More` and `Less` button

```javascript
renderViewLess = (onPress) => {
    return (
      <TouchableOpacity 
        onPress={onPress} 
        style={{ 
          // Style for more button...
         }}
      >
        <Text>"Lable text for button..."</Text>
      </TouchableOpacity>
    )
  } 

  <ExpandableFlatlist
    renderViewMore={this.renderViewMore}
  />
```

## Props

| **Props**      | **Type**          | **Required**       | **Description**                                                               |
|----------------|-------------------|--------------------|-------------------------------------------------------------------------------|
| data           | `array`           | Yes                | Array List to be displayed\.                                     |
| numberOfLines  | `number`          | Optional           | Number of lines to be displayed after that it will show option of Show more\. |
| titleKey       | `string`          | Optional           | Key which is used for title in the list\.                                     |
| subTitleKey    | `string`          | Optional           | Key which is used for subTitle in the list\.                                  |
| descriptionKey | `string`          | Optional           | Key which is used for description in the list\.                               |
| dateKey        | `string`          | Optional           | Key which is used for date in the list\.                                      |
| viewStyle      | `[object, array]` | Optional           | Styles is passed to the View for single item of flatlist\.                    |
| titleStyle     | `[object, array]` | Optional           | Styles is passed to the title\.                                               |
| subTitleStyle  | `[object, array]` | Optional           | Styles is passed to the sub title\.                                           |
| textStyle      | `[object, array]` | Optional           | Styles is passed to text\(description\)                                       |
| dateStyle      | `[object, array]` | Optional           | Styles is passed to the date\.                                                |
| color          | `[object, array]` | Optional           | Color to be displayed for \`More` and `Less`\.                                |

## Methods

| **Methods**    | **Description**               |
|----------------|-------------------------------|
| renderViewMore | Render view\-more component\. |
| renderViewLess | Render view\-less component\. |

-----

## Want to Contribute?

- Created something awesome, made this code better, added some functionality, or whatever (this is the hardest part).
- [Fork it](http://help.github.com/forking/).
- Create new branch to contribute your changes.
- Commit all your changes to your branch.
- Submit a [pull request](http://help.github.com/pull-requests/).

-----

## Need Help? 

We also provide a free, basic support for all users who want to use this ReactNative Expandable Flatlist component in their software project. In case you want to customize this Expandable Flatlist component to suit your development needs, then feel free to contact our [ReactNative developers](https://www.weblineindia.com/hire-react-native-developers.html).

-----

## Collection of Components

We have built many other components and free resources for software development in various programming languages. Kindly click here to view our [Free Resources for Software Development](https://www.weblineindia.com/software-development-resources.html).

------

## Changelog

Detailed changes for each release are documented in [CHANGELOG.md](./CHANGELOG.md).

## License

[MIT](LICENSE)

[mit]: https://github.com/weblineindia/React-Native-Expandable-Flatlist/blob/master/LICENSE

### Keywords

 rn-weblineindia-expandable-flatlist, react-native-expandable-flatlist, expandable-flatlist, expandable, collapse, viewmore, viewless,  react-native