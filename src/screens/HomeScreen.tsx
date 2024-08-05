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
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { MainNavigationStackParamList } from "../route/MainNavigationStack";
import { TRANSPARENT_COLOR } from "../config/Config";

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
    image: require("../assets/modelOne.png"), // Replace with your image URLs
    level: "Level 3",
    country: "Ind",
  },
  {
    id: "2",
    name: "Queen neha",
    image: require("../assets/modelThree.png"),
    level: "Level 3",
    country: "Ind",
  },
  {
    id: "3",
    name: "Queen neha",
    image: require("../assets/modelFour.png"),
    level: "Level 3",
    country: "Ind",
  },
  {
    id: "4",
    name: "Queen neha",
    image: require("../assets/modelFive.png"),
    level: "Level 3",
    country: "Ind",
  },
];

export default function HomeScreen() {
  const renderItem = ({ item }: { item: Item }) => (
    <View style={styles.profileCard}>
      <Image source={item.image} style={styles.profileImage} />
      <View
        style={{
          position: "absolute",
          width: "100%",
          top: 200,
          flexDirection: "column",
          marginLeft: 10,
        }}
      >
        <Text style={styles.profileName}>{item.name}</Text>
        <View style={{ flexDirection: "row" }}>
          <Image
            source={lavelIcon}
            style={{ height: 20, width: 20, marginRight: 5 }}
          />
          <Text style={styles.profileLevel}>{item.level}</Text>
          <Image
            source={countryIcon}
            style={{ height: 20, width: 20, marginLeft: 5 }}
          />
          <Text style={styles.profileCountry}>{item.country}</Text>
        </View>
      </View>
      <ImageBackground source={roundRedBg} style={styles.videoIcon}>
        <Image source={videoIcon} style={{ height: 20, width: 20 }} />
      </ImageBackground>
    </View>
  );
  return (
    <>
      <ImageBackground
        source={splashBg}
        style={globalStyleSheet.imageModelStyle}
      >
        <SafeAreaView>
          <StatusBar barStyle="dark-content" />
          <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <View style={styles.header}>
              <Text style={styles.greeting}>Hello, John!</Text>
              <Image source={handLove} style={{ height: 38, width: 38 }} />
              <View style={{ flex: 1 }}></View>
              <Image source={chatIcon} style={{ height: 38, width: 38 }} />
            </View>
            <View style={styles.searchContainer}>
              <TextInput
                style={styles.searchInput}
                placeholder="Search your match"
              />
              <Icon
                name="search"
                size={24}
                color="gray"
                style={styles.searchIcon}
              />
            </View>
            <View style={styles.filters}>
              <Text style={styles.filterText}>All</Text>
              <Text style={styles.filterText}>India</Text>
              <Text style={styles.filterText}>Brazil</Text>
              <Text style={styles.filterText}>Philippines</Text>
            </View>
            <View style={styles.popularProfilesHeader}>
              <Text style={styles.popularProfilesTitle}>Popular profiles</Text>
              <Text style={styles.viewAll}>View all</Text>
            </View>
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              numColumns={2}
              contentContainerStyle={styles.profileList}
            />
          </ScrollView>
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
  scrollViewContent: {
    paddingHorizontal: 16,
    paddingBottom: 16,
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
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    height: 60,
    marginVertical: 20,
    paddingHorizontal: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  searchInput: {
    flex: 1,
    height: 40,
  },
  searchIcon: {
    marginLeft: 10,
  },
  filters: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  filterText: {
    fontSize: 16,
    color: "gray",
    marginVertical: 10,
  },
  popularProfilesHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  popularProfilesTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  viewAll: {
    color: "blue",
  },
  profileList: {
    justifyContent: "space-between",
  },
  profileCard: {
    backgroundColor: "transparent",
    margin: 8,
    width: "47%",
    height: 255,
    shadowColor: "transparent",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
  },
  profileImage: {
    width: "100%",
    height: 255,
    borderRadius: 8,
  },
  profileInfo: {
    marginTop: 10,
  },
  profileName: {
    fontSize: 16,
    fontWeight: "700",
    color: "white",
  },
  profileLevel: {
    fontSize: 14,
    color: "white",
    fontWeight: "500",
  },
  profileCountry: {
    fontSize: 14,
    color: "white",
    fontWeight: "500",
    marginLeft: 5,
  },
  videoIcon: {
    position: "absolute",
    bottom: 10,
    right: 10,
    height: 35,
    width: 35,
    justifyContent: "center",
    alignItems: "center",
  },
});
