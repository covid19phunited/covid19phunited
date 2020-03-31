import * as React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

const BLUE = "#428AF8";
const LIGHT_GRAY = "#D3D3D3";

export default class FeedbackScreen extends React.Component {

  state = {
    isFocused: false
  };

  handleFocus = event => {
    this.setState({isFocused: true});
    if(this.props.onFocus) {
      this.props.onFocus(event);
    }
  };

  handleBlur = event => {
    this.setState({isFocused: false});
    if(this.props.onBlur) {
      this.props.onBlur(event);
    }
  };

  /**
   * <!--
        TODO: form - name - required
        TODO: form - email - not required
        TODO: form - feedback area - required
        TODO: form - submit button
       -->
   */

   render() {

    const { isFocused } = this.state;
    const { onFocus, onBlur, ...otherProps } = this.props;

    console.log(this.state);

    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

        <View style={styles.feedbackForm}>

          <Text style={styles.placeholder}>Name</Text>
          <TextInput style={styles.textField}
            selectionColor={BLUE} 
            underlineColorAndroid={isFocused ? BLUE : LIGHT_GRAY}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            {...otherProps}
          />

          <Text style={styles.placeholder}>Email Address</Text>
          <TextInput style={styles.textField}
            selectionColor={BLUE} 
            underlineColorAndroid={isFocused ? BLUE : LIGHT_GRAY}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            {...otherProps}
          />

          <Text style={styles.placeholder}>Feedback and Suggestions</Text>
          <TextInput style={[styles.textField, styles.feedbackField]}
            multiline={true}
            selectionColor={BLUE} 
            underlineColorAndroid={isFocused ? BLUE : LIGHT_GRAY}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            {...otherProps}
          />

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.btntext}>Submit</Text>
            </TouchableOpacity>
          </View>

         </View>

      </ScrollView>
    );
   }

  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  contentContainer: {
    paddingTop: 10,
  },
  optionIconContainer: {
    marginRight: 12,
  },
  feedbackForm: {
    alignSelf: 'stretch',
    padding:20
  },  
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: '#ededed',
  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  optionText: {
    fontSize: 15,
    alignSelf: 'flex-start',
    marginTop: 1,
  },
  textField: {
    borderColor: LIGHT_GRAY,
    padding: 10,
    color: 'black',
    borderWidth: 1,
    borderRadius: 5,
    textAlignVertical: 'top'
  },
  feedbackField: {
    height: 100,
  },
  buttonContainer: {
    alignSelf: 'flex-end'
  },
  button: {
      alignSelf: 'flex-start',
      alignItems: 'center',
      paddingHorizontal: 30,
      paddingVertical: 10,
      marginTop:30,
      borderRadius: 5,
      borderColor: BLUE,
      borderWidth:2
  },
  btntext: {
    fontSize: 14
  },
  placeholder: {
    marginTop: 15,
    marginBottom: 5
  }
});