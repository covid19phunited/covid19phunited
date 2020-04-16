import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

export default function LGULinksScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <OptionButton
        label="Region CAR"
      />
      <OptionButton
        label="Region NCR"
      />
      <OptionButton
        label="Region I"
      />
      <OptionButton
        label="Region II"
      />
      <OptionButton
        label="Region III"
      />
      <OptionButton
        label="Region IV"
      />
      <OptionButton
        label="Region V"
      />
      <OptionButton
        label="Region VI"
      />
      <OptionButton
        label="Region VII"
      />
      <OptionButton
        label="Region VIII"
      />
      <OptionButton
        label="Region IX"
      />
      <OptionButton
        label="Region X"
      />
      <OptionButton
        label="Region XI"
      />
      <OptionButton
        label="Region XII"
      />
      <OptionButton
        label="Region XIII"
      />
    </ScrollView>
  );
}

function OptionButton({ icon, label, onPress, isLastOption }) {
  return (
    <RectButton style={[styles.option, isLastOption && styles.lastOption]} onPress={onPress}>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.optionIconContainer}>
          <Ionicons name={icon} size={22} color="rgba(0,0,0,0.35)" />
        </View>
        <View style={styles.optionTextContainer}>
          <Text style={styles.optionText}>{label}</Text>
        </View>
      </View>
    </RectButton>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  contentContainer: {
    paddingTop: 15,
  },
  optionIconContainer: {
    marginRight: 12,
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
});
