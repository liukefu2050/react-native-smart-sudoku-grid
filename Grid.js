/*
 * A smart sudoku-grid for react-native apps
 * https://github.com/react-native-component/react-native-smart-sudoku-grid/
 * Released under the MIT license
 * Copyright (c) 2016 react-native-component <moonsunfall@aliyun.com>
 */

import React, {
  Component,
} from 'react'
import {
  View,
  StyleSheet,
  Dimensions,
} from 'react-native'

import PropTypes from 'prop-types';

const { width: deviceWidth } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
})

export default class SudokuGrid extends Component {

  static propTypes = {
      rowWidth: PropTypes.number,
      columnCount: PropTypes.number.isRequired,
      dataSource: PropTypes.array.isRequired,
      renderCell: PropTypes.func.isRequired,
      style: View.propTypes.style,
  }

  // 构造
    constructor(props) {
      super(props)
      // 初始状态
      this.state = {}

      this._columnWidth = (props.rowWidth || deviceWidth) / props.columnCount
    }

  render() {
    return (
      <View style={[this.props.style, styles.container, {width: this.props.rowWidth,}]}>
        {this._renderCells()}
      </View>
    )
  }

  _renderCells() {
      return this.props.dataSource.map((data, index, dataList) => {
          return (
            <View style={{width: this._columnWidth, }} key={`cell-${(data.key != null) ? data.key : index}`}>
              {this.props.renderCell(data, index, dataList)}
            </View>
          )
      })
  }

}
