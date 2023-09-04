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
  const [switchIcon, setSwitchIcon] = React.useState<boolean>(true);
  const [hideContent, setHideContent] = React.useState<boolean>(false);
  const [makeQuote, setMakeQuote] = React.useState<boolean>(true);
  const [bgColor, setBgColor] = React.useState<string>("#FC6A03");

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
      {hideContent ? (
        <View
          style={{
            backgroundColor: "#FC6A03",
            position: "absolute",
            right: 30,
            bottom: 300,
            width: 180,
            height: 180,
            padding: 15,
          }}
        >
          <View>
            <Pressable
              onPress={() => Alert.alert("This feature is currently being built!")}
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 35,
              }}
            >
              <Ionicons name="grid-outline" color={"#ffffff"} size={20} />
              <Text
                style={{
                  fontSize: 15,
                  color: "#ffffff",
                  marginLeft: 10,
                  fontWeight: "700",
                }}
              >
                Categories
              </Text>
            </Pressable>
            <Pressable
            onPress={() => {
              // setBgColor("#000000")
              navigation.navigate("Search");
            }}
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 35,
                // backgroundColor: bgColor,
                paddingTop: 10,
                paddingBottom: 10
              }}
            >
              <Ionicons name="search-outline" color={"#ffffff"} size={20} />
              <Text
                style={{
                  fontSize: 15,
                  color: "#ffffff",
                  marginLeft: 10,
                  fontWeight: "700",
                }}
              >
                Search Quotes
              </Text>
            </Pressable>
            <Pressable 
            onPress={() => Alert.alert("This feature is currently being built!")}
            // onPress={() => setMakeQuote(!makeQuote)}
            style={{ flexDirection: "row", alignItems: "center" }}>
              <Ionicons name="person-add-outline" color={"#ffffff"} size={20} />
              <Text
                style={{
                  fontSize: 15,
                  color: "#ffffff",
                  marginLeft: 10,
                  fontWeight: "700",
                }}
              >
                {makeQuote ? "Add your Quotes": "Feature Under development"}
              </Text>
            </Pressable>
          </View>
        </View>
      ) : null}
      <Pressable
        onPress={() => {
          setSwitchIcon(!switchIcon);
          setHideContent(!hideContent);
        }}
        style={{
          position: "absolute",
          right: 30,
          bottom: 200,
          width: 80,
          height: 80,
          backgroundColor: switchIcon ? "#FC6A03" : "#000000",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {switchIcon ? (
          <Ionicons name="grid-outline" color={"#ffffff"} size={40} />
        ) : (
          <Ionicons name="close-outline" color={"#ffffff"} size={40} />
        )}
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
