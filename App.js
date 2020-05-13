import React, { useState, useEffect } from 'react';
import { Ionicons } from "@expo/vector-icons";
import { Apploading, Font } from "expo";
import { Text, View, AsyncStorage } from 'react-native';
import { InmemoryCache } from "apollo-cache-inmemory";
import { persistCache } from "apollo-cache-persist";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo-hooks";
import ApolloClientOptions from "./apollo";


export default function App() {
  const [ loaded, setLoaded ] = useState(false);
  const [ client, setClient ] = useState(null);
  const preload = async() => {
    try {
      await Font.loadAsync({
        ...Ionicons.font
      });
      await Asset.loadAsync([require("./assets/logo.png")]);
      const cache = new InmemoryCache();
      await persistCache({
        cache,
        storage: AsyncStorage
      });
      const client = new ApolloClient({
        cache,
        ...ApolloClientOptions
      });
      setLoaded(true);
      setClient(client);
    } catch(e) {
      console.log(e);
    }
  };
  useEffect(() => {
    preload()
  }, []);
  return loaded && client ? (
    <ApolloProvider client={client}>
      <View>
        <Text>ㅁㄴㅇㄻㅇㄻㄴㅇㄻㄴㅇㄻ</Text>
      </View>
    </ApolloProvider>
  ) : (
    <Apploading />
  );
}
