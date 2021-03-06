/*
 * Copyright (c) 2016, salesforce.com, inc.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification, are permitted provided
 * that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of conditions and the
 * following disclaimer.
 *
 * Redistributions in binary form must reproduce the above copyright notice, this list of conditions and
 * the following disclaimer in the documentation and/or other materials provided with the distribution.
 *
 * Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or
 * promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED
 * WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A
 * PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
 * ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED
 * TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
 * HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 */
 
import React from 'react';

import {
  StyleSheet,
  Text,
  View,
  PixelRatio
} from 'react-native';

module.exports = React.createClass({

  getDefaultProps(){
    return {
      size: 50,
      iconCode: "\uEA03",
      iconColor: "#54698d",
      bgColor: 'transparent',
      iconScale: 1,
      fontName: 'SalesforceDesignSystemIconsUtility'
    };
  },

  propTypes: {
    size: React.PropTypes.number,
    iconScale: React.PropTypes.number,
    iconCode: React.PropTypes.string,
    iconColor: React.PropTypes.string,
    bgColor: React.PropTypes.string,
    fontName: React.PropTypes.string
  },

  getIconGlyphStyle () {
    const size = this.props.size*this.props.iconScale;
    return {
      fontFamily: this.props.fontName,
      fontSize: PixelRatio.roundToNearestPixel(size),
      color: this.props.iconColor,
      textAlign:'center',
      backgroundColor:'transparent',
      height: PixelRatio.roundToNearestPixel(size),
      alignSelf:'center',
      textAlignVertical:'bottom',
      lineHeight:Math.round(size),
    };
  },

  getIconStyle () {
    return {
      alignItems:'center',
      justifyContent:'center',
      borderRadius: this.props.size/10,
      height:this.props.size,
      width:this.props.size,
      backgroundColor:this.props.bgColor,
      alignSelf:'center',
      flex:1
    };
  },


  render () {
    return <View {... this.props} style={this.getIconStyle()} >
      <Text style={this.getIconGlyphStyle()}>
        {this.props.iconCode}
      </Text>
    </View>;
  }

});