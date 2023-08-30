import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "react-native-vector-icons/Ionicons";

const DetailsScreen: React.FC<any> = ({ navigation, route }) => {
  const { quote, author, image } = route.params;
  return (
    <SafeAreaView>
      <View>
        <ImageBackground
          source={image}
          resizeMode="cover"
          style={{
            height: 450,
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Pressable
            onPress={() => navigation.goBack()}
            style={{ paddingLeft: 20, paddingTop: 20 }}
          >
            <Ionicons name="arrow-back-outline" color={"#ffffff"} size={40} />
          </Pressable>
          <Pressable
            // onPress={() => navigation.goBack()}
            style={{ paddingRight: 20, paddingTop: 20 }}
          >
            <Ionicons name="ellipsis-horizontal-outline" color={"#ffffff"} size={40} />
          </Pressable>
        </ImageBackground>
        {/* <Image source={image} style={{height: 350, width: "100%"}}/> */}
      </View>
      <View style={{alignSelf: "center", paddingTop: 20}}>
        <Text style={{ fontSize: 25, textAlign: "center", fontWeight: "200" }}>{quote}</Text>
        <Text style={{alignSelf: "flex-end", marginTop: 20, fontWeight: "700"}}>{author}</Text>
      </View>
    </SafeAreaView>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({});
