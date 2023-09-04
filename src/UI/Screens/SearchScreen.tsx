import {
  Alert,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Quotes } from "../../Assets/Constants";
import filter from "lodash.filter";
import Ionicons from "react-native-vector-icons/Ionicons";

const SearchScreen: React.FC<any> = ({ navigation }) => {
  const [search, setSearch] = useState<string>("");
  const [data, setData] = useState<any>(Quotes);

  const handleSearch = (query: string) => {
    setSearch(query);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Pressable
          onPress={() => navigation.goBack()}
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 35,
          }}
        >
          <Ionicons name="arrow-back-outline" color={"#000000"} size={30} />
        </Pressable>
        <TextInput
          placeholder="Search Quote"
          clearButtonMode="always"
          style={styles.search}
          autoCapitalize="none"
          autoCorrect={false}
          value={search}
          onChangeText={(query) => handleSearch(query)}
        />
      </View>
      <Text style={{ color: "#FC6A03", fontSize: 20, fontWeight: "800" }}>All Quotes</Text>
      <FlatList
        data={Quotes}
        renderItem={({ item }) => {
          if (item.author.toLowerCase().includes(search.toLowerCase())) {
            return (
              <View style={{ marginBottom: 20, marginTop: 10 }}>
                <Text
                  style={{ marginBottom: 10, fontSize: 18, fontWeight: "200" }}
                >
                  {item.quote}
                </Text>
                <Text>{item.author}</Text>
              </View>
            );
          } else {
            return <></>;
          }
        }}
      />
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "#ffffff",
    marginBottom: 130
  },
  search: {
    borderBottomWidth: 1,
    height: 60,
    borderBottomColor: "#FC6A03",
    fontSize: 20,
    paddingLeft: 20,
    fontWeight: "700",
    marginBottom: 20,
  },
  dataConn: {
    borderTopWidth: 1,
    paddingTop: 5,
    paddingBottom: 5,
  },
});
