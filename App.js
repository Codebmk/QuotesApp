import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import * as list from './components/quotes'

export default class App extends Component {
  state={
    colors: ['#93867F', '#343633', '#7D70BA', '#2E86AB', '#890620', '#E2AEDD'
  ,'#E2AEDD', '#EB4511', '#533A7B', '#25171A', '#993955', '#25171A',
'#CCD6EB', '#EEF36A', '#3F3047', '#B2FFD6', '#A04668', '#0C1713', '#2B3D41', '#D9D7DD','#BC2C1A', '#7D1538', '#944BBB', '#7D1538', '#DBA8AC', '#BA5624', '#FFA552'],
    quotes: list.quotes,
    showColor: false
  }

  render() {
    let CurrColor = Math.floor(Math.random() * this.state.colors.length)
    let CurrentIndex = Math.floor(Math.random() * this.state.quotes.length)

    if(this.state.showColor){
      return (
        <View style={styles.main}>
          <View style={styles.quotes}>
            <Text style={styles.quoteTxt}>{this.state.quotes[CurrentIndex].quote}</Text>
            <Text style={styles.quoteAuthor}>__{this.state.quotes[CurrentIndex].author}</Text>
            <TouchableOpacity
              style={styles.nextBtn}
              onPress={()=>this.setState({showColor: false})}>
              <Text style={styles.nextBtnTxt}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      )
    }

    return (
      <View style={[styles.main, {backgroundColor: this.state.colors[CurrColor]}]}>
        <View style={styles.quotes}>
          <Text style={styles.quoteTxt}>{this.state.quotes[CurrentIndex].quote}</Text>
          <Text style={styles.quoteAuthor}>__{this.state.quotes[CurrentIndex].author}</Text>
          <TouchableOpacity
          style={styles.nextBtn}
            onPress={()=>this.setState({showColor: true})}>
            <Text style={styles.nextBtnTxt}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    )


  }
}

const styles = StyleSheet.create({
  main:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quotes:{
    margin: 20
  },
  quoteTxt:{
    fontSize: 30
  },
  quoteAuthor:{
    fontSize: 25,
    textAlign: 'right'
  },
  nextBtn:{
    marginTop: 40,
    borderRadius: 20,
    borderColor: 'green',
    borderWidth: 2.5,
    width: 100,
    alignItems: 'center',
    padding: 10
  },
  nextBtnTxt:{
    fontSize: 25,
    color: 'green'
  }

});
