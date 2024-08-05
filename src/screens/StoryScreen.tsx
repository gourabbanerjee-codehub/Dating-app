import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  FlatList,
  TextInput,
  StyleSheet,
} from "react-native";
import React from "react";
import { globalStyleSheet } from "../style/GlobleStyle";
import splashBg from "../assets/sp_bg.png";
import handLove from "../assets/handLove.png";
import chatIcon from "../assets/chatIcon.png";
import countryIcon from "../assets/countryIcon.png";
import lavelIcon from "../assets/lavelIcon.png";
import roundRedBg from "../assets/redRoundBg.png";
import videoIcon from "../assets/videoIcon.png";
import Icon from "react-native-vector-icons/Ionicons";

type ProfileData = {
  id: string;
  name: string;
  image: string;
  level: string;
  country: string;
};
interface Item {
  id: string;
  name: string;
  image: any;
  level: string;
  country: string;
}

const data: Item[] = [
  {
    id: "1",
    name: "Queen neha",
    image: require("../assets/modelTwo.png"), // Replace with your image URLs
    level: "Level 3",
    country: "Ind",
  },
  {
    id: "2",
    name: "Queen neha",
    image: require("../assets/modelOne.png"),
    level: "Level 3",
    country: "Ind",
  },
  {
    id: "3",
    name: "Queen neha",
    image: require("../assets/modelThree.png"),
    level: "Level 3",
    country: "Ind",
  },
  {
    id: "4",
    name: "Queen neha",
    image: require("../assets/modelFour.png"),
    level: "Level 3",
    country: "Ind",
  },
];

export default function StoryScreen() {
  const renderItem = ({ item }: { item: Item }) => (
    <View style={styles.profileCard}>
      <Image source={item.image} style={styles.profileImage} />
      <View style={styles.profileInfo}>
        <Image source={item.image} style={styles.profileAvatar} />
        <Text style={styles.profileName}>{item.name}</Text>
        <View style={styles.profileIcons}>
          <Icon name="ellipse" size={14} color="green" />
          <Text style={styles.profileCount}>{10}</Text>
        </View>
        <Icon
          name="ellipsis-vertical"
          size={24}
          color="white"
          style={styles.menuIcon}
        />

        <View style={styles.buttonContainer}>
          <View
            style={{
              flexDirection: "row",
              alignContent: "center",
              justifyContent: "center",
              backgroundColor: "transparent",
              width: 300,
              marginLeft: 20,
            }}
          >
            <TouchableOpacity style={styles.iconButton}>
              <Image
                source={require("../assets/chat_with_bg.png")}
                style={styles.iconButton}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Image
                source={require("../assets/video_with_bg.png")}
                style={styles.iconButton}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Image
                source={require("../assets/add_contact_with_bg.png")}
                style={styles.iconButton}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
  return (
    <>
      <ImageBackground
        source={splashBg}
        style={globalStyleSheet.imageModelStyle}
      >
        <SafeAreaView style={{ flex: 1, width: "90%" }}>
          <StatusBar barStyle="dark-content" />
          <View style={styles.header}>
            <Text style={styles.greeting}>Popular Shows</Text>
            <View style={{ flex: 1 }}></View>
            <Image source={chatIcon} style={{ height: 38, width: 38 }} />
          </View>
          <View style={{ marginTop: 10 }}>
            <FlatList
              horizontal
              numColumns={1}
              pagingEnabled
              data={data}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </SafeAreaView>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 50,
  },
  greeting: {
    fontSize: 30,
    fontWeight: "700",
    color: "#000000",
    marginRight: 5,
  },
  scrollViewContent: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 16,
  },
  profileCard: {
    backgroundColor: "transparent",
    borderRadius: 18,
    overflow: "hidden",
    marginHorizontal: 0,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    width: 370,
  },
  profileImage: {
    width: "100%",
    height: 650,
  },
  profileInfo: {
    position: "absolute",
    top: 16,
    left: 16,
    right: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  profileAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "white",
  },
  profileName: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 8,
  },
  profileIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileCount: {
    color: "white",
    fontSize: 14,
    marginLeft: 4,
  },
  menuIcon: {
    marginLeft: "auto",
  },
  buttonContainer: {
    position: "absolute",
    top: 500,
  },
  iconButton: {
    alignItems: "center",
    justifyContent: "center",
    height: 64,
    width: 64,
    margin: 15,
  },
});
