import {
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { Quotes } from "../../Assets/Constants";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "react-native-vector-icons/Ionicons";

const HomeScreen: React.FC<any> = ({ navigation }) => {
  const getAllQuotes = () => {
    return Quotes.map((i, j) => {
      return (
        <View key={j}>
          <Pressable
            onPress={() =>
              navigation.navigate("Details", {
                quote: i.quote,
                author: i.author,
                image: i.image,
              })
            }
            style={styles.dataConn}
          >
            <Text
              style={{
                alignSelf: "flex-start",
                fontSize: 18,
                fontWeight: "300",
                marginBottom: 30,
              }}
            >
              {i.quote}
            </Text>
            <Text style={{ alignSelf: "flex-end", fontWeight: "700" }}>
              {i.author}
            </Text>
          </Pressable>
        </View>
      );
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerConn}>
        <Text
          style={{
            alignSelf: "center",
            fontWeight: "700",
            fontSize: 20,
            color: "#ffffff",
          }}
        >
          Best Quotes
        </Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollView}
      >
        {getAllQuotes()}
      </ScrollView>
      <Pressable
        style={{
          position: "absolute",
          right: 30,
          bottom: 200,
          width: 80,
          height: 80,
          backgroundColor: "#FC6A03",
          justifyContent: "center",
          alignItems: "center",
          
        }}
      >
        <Ionicons name="grid-outline" color={"#ffffff"} size={40} />
      </Pressable>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {},
  innerConn: {
    backgroundColor: "#FC6A03",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  scrollView: {
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 50,
  },
  dataConn: {
    borderTopWidth: 1,
    paddingTop: 5,
    paddingBottom: 5,
  },
});
