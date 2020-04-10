import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

export default function LinksScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
    <OptionButton
        icon="md-globe"
        label="Laging Handa Powered by PCOO"
        onPress={() => WebBrowser.openBrowserAsync('https://www.covid19.gov.ph/')}
      />
      <OptionButton
        icon="md-flask"
        label="DOH Official Website"
        onPress={() => WebBrowser.openBrowserAsync('https://www.doh.gov.ph/')}
      />

      <OptionButton
        icon="logo-facebook"
        label="DOH Official FB Page"
        onPress={() => WebBrowser.openBrowserAsync('https://www.facebook.com/OfficialDOHgov/')}
      />

      <OptionButton
        icon="md-information-circle"
        label="Covid-19 Infographics"
        onPress={() => WebBrowser.openBrowserAsync('https://www.doh.gov.ph/2019-nCov/infographics')}
      />
      <OptionButton
        icon="ios-hammer"
        label="More items to be added soon"
        isLastOption
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
