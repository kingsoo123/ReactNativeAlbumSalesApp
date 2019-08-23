import React from 'react';
import { ScrollView, StyleSheet,View, Text } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default function LinksScreen(props) {
  return (
    <ScrollView style={styles.container}>
      {/**
       * Go ahead and delete ExpoLinksView and replace it with your content;
       * we just wanted to provide you with some helpful links.
       */}
      <ExpoLinksView />

      <View>
        <Text onPress={()=>props.navigation.navigate('Home')} >HomePage</Text>
      </View>
    </ScrollView>
  );
}

LinksScreen.navigationOptions = {
  header:null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
