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
    image: require("../assets/modelOne.png"),
    level: "Level 3",
    country: "Ind",
  },
  {
    id: "4",
    name: "Queen neha",
    image: require("../assets/modelOne.png"),
    level: "Level 3",
    country: "Ind",
  },
];

interface Profile {
  name: string;
  image: any; // Replace with the appropriate type if you have it
  count: string;
  hight: any;
}

interface TopProfileCardProps {
  profile: Profile;
}

interface BottomProfileCardProps {
  profile: Profile;
  index: number;
}

const BottomProfileCard: React.FC<BottomProfileCardProps> = ({
  profile,
  index,
}) => (
  <>
    <View style={styles.bottomProfileCard}>
      <View style={styles.bottomProfileInfo}>
        <Image
          source={require("../assets/award_coin.png")}
          style={styles.bottomProfileImage}
        />
        <View>
          <Text style={styles.profileName}>{profile.name}</Text>
        </View>
      </View>
      <Image
        source={require("../assets/right_arrow_black.png")}
        style={{ height: 15, width: 9 }}
      />
    </View>
    <View
      style={{
        height: 0.5,
        backgroundColor: "#919191",
        marginLeft: 20,
        marginRight: 20,
      }}
    ></View>
  </>
);

export default function ProfileScreen() {
  const bottomProfiles: Profile[] = [
    {
      name: "My coins",
      image: require("../assets/modelOne.png"),
      count: "1590000",
      hight: "0",
    },
    {
      name: "VIP points",
      image: require("../assets/modelThree.png"),
      count: "1590000",
      hight: "0",
    },
    {
      name: "Get free coins",
      image: require("../assets/modelThree.png"),
      count: "1590000",
      hight: "0",
    },
    {
      name: "Daily calendar",
      image: require("../assets/modelThree.png"),
      count: "1590000",
      hight: "0",
    },
    {
      name: "Settings",
      image: require("../assets/modelThree.png"),
      count: "1590000",
      hight: "0",
    },
  ];

  return (
    <>
      <ImageBackground
        source={splashBg}
        style={globalStyleSheet.imageModelStyle}
      >
        <SafeAreaView style={{ flex: 1, width: "98%" }}>
          <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
              <View
                style={{
                  backgroundColor: "#FF6F61",
                  borderRadius: 16,
                  marginLeft: 5,
                  marginRight: 16,
                  alignItems: "center",
                  width: "100%",
                  marginTop: 50,
                  flexDirection: "column",
                }}
              >
                <View style={{ padding: 10, flexDirection: "row" }}>
                  <Image
                    source={require("../assets/modelThree.png")}
                    style={styles.topProfileImage}
                  />
                  <View style={{ padding: 5, flex: 1 }}>
                    <Text style={styles.profileNameTop}>
                      {"Gorurab Banerjee"}
                    </Text>
                    <View
                      style={{ flexDirection: "row", alignContent: "center" }}
                    >
                      <View style={styles.profileIcons}>
                        <Image
                          source={require("../assets/award_coin.png")}
                          style={styles.awaredIcon}
                        />
                        <Text style={styles.profileCountTop}>{"22344"}</Text>
                      </View>
                      <View style={styles.profileIcons}>
                        <Image
                          source={require("../assets/award_lavel.png")}
                          style={styles.awaredIcon}
                        />
                        <Text style={styles.profileCountTop}>{"Lavel"}</Text>
                      </View>
                      <View style={styles.profileIcons}>
                        <Image
                          source={require("../assets/flag_circle.png")}
                          style={styles.awaredIcon}
                        />
                        <Text style={styles.profileCountTop}>{"IND"}</Text>
                      </View>
                    </View>
                  </View>
                  <Image
                    source={require("../assets/vip_icon.png")}
                    style={{ height: 80, width: 60, marginRight: 15 }}
                  />
                </View>

                <View
                  style={{
                    backgroundColor: "#fff",
                    borderRadius: 16,
                    height: 50,
                    width: "90%",
                    padding: 15,
                    marginLeft: 25,
                    marginRight: 25,
                    opacity: 0.3,
                    marginBottom: 30,
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      color: "#fff",
                      fontWeight: "500",
                      fontSize: 12,
                      flex: 1,
                    }}
                  >
                    #ABC1234567890
                  </Text>

                  <Image
                    source={require("../assets/share_or_show.png")}
                    style={{ height: 24, width: 24 }}
                  />
                </View>
              </View>
              <View style={styles.bottomProfilesContainer}>
                {bottomProfiles.map((profile, index) => (
                  <BottomProfileCard
                    key={index}
                    profile={profile}
                    index={index + 4}
                  />
                ))}
              </View>
            </ScrollView>
          </SafeAreaView>
        </SafeAreaView>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 50,
    marginBottom: 50,
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
  topProfilesContainer: {
    marginBottom: 16,
  },
  topProfileCard: {
    backgroundColor: "#FF6F61",
    borderRadius: 16,
    padding: 16,
    marginRight: 16,
    alignItems: "center",
    width: 120,
  },
  topProfileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 8,
  },
  profileName: {
    color: "#454545",
    fontSize: 16,
    fontWeight: "bold",
  },
  profileNameTop: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  profileIcons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
  profileCount: {
    color: "#919191",
    fontSize: 13,
    fontWeight: "400",
    marginLeft: 4,
    marginTop: 5,
  },
  profileCountTop: {
    color: "white",
    fontSize: 13,
    fontWeight: "400",
    marginLeft: 4,
    marginTop: 5,
  },
  bottomProfilesContainer: {
    marginTop: 16,
  },
  bottomProfileCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    marginBottom: 8,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  bottomProfileInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileIndex: {
    fontSize: 13,
    fontWeight: "400",
    marginRight: 16,
    color: "#919191",
  },
  bottomProfileImage: {
    width: 30,
    height: 30,
    marginRight: 16,
  },
  addFriendIcon: {
    marginLeft: "auto",
    height: 24,
    width: 24,
  },
  awaredIcon: {
    height: 20,
    width: 20,
  },
});
