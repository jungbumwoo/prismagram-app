import React, { useState, useEffect } from 'react';
import { Ionicons } from "@expo/vector-icons";
import { Apploading, Font } from "expo";
import { Text, View } from 'react-native';

export default function App() {
  const [ loaded, setLoaded ] = useState(false);
  const preload = async() => {
    try {
      await Font.loadAsync({
        ...Ionicons.font
      });
      setLoaded(true);
    } catch(e) {
      console.log(e);
    }
  };
  useEffect(() => {
    preload()
  }, []);
  return loaded ? <View>
    <Text>asdfasdfdsafdfdfffffffffffffffffffff</Text>  
  </View> : (
  <Apploading />
  );
}
