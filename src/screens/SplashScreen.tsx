import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  ImageBackground,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { globalStyleSheet } from "../style/GlobleStyle";
import splashBg from "../assets/sp_bg.png";
import splashBgTop from "../assets/splash_top_bg.png";
import googleIcon from "../assets/googleIcon.png";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { MainNavigationStackParamList } from "../route/MainNavigationStack";

type Props = NativeStackScreenProps<MainNavigationStackParamList, "Splash">;

export default function SplashScreen({ navigation }: Props) {
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle="dark-content" />
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <ImageBackground
              style={globalStyleSheet.imageModelStyle}
              source={splashBg}
            >
              <Image
                style={globalStyleSheet.imageModelTopStyle}
                source={splashBgTop}
              />
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  position: "relative",
                  top:-50
                }}
              >
                <View style={{ flexDirection: "row", marginTop: 20 }}>
                  <Text
                    style={{
                      fontSize: 30,
                      fontWeight: 700,
                      color: "#000000",
                      marginRight: 5,
                    }}
                  >
                    Find your
                  </Text>
                  <Text
                    style={{
                      fontSize: 30,
                      fontWeight: 700,
                      color: "#FE4040",
                      marginLeft: 5,
                    }}
                  >
                    first
                  </Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <Text
                    style={{
                      fontSize: 30,
                      fontWeight: "700",
                      color: "#FE4040",
                      marginRight: 5,
                    }}
                  >
                    demo
                  </Text>
                  <Text
                    style={{
                      fontSize: 30,
                      fontWeight: "700",
                      color: "#000000",
                      marginLeft: 5,
                    }}
                  >
                    matches
                  </Text>
                </View>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "500",
                    color: "#787878",
                    marginTop: 15,
                    marginLeft: 25,
                    marginRight: 25,
                    textAlign: "center",
                  }}
                >
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form.
                </Text>
              </View>

              <View style={{ position: "absolute", bottom: 0 }}>
                <View
                  style={{
                    marginTop: 10,
                    alignItems: "center",
                    marginBottom: 10,
                    flexDirection: "row",
                    marginLeft: 16,
                    marginRight: 16,
                  }}
                >
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Dashboard")}
                  >
                    <View
                      style={[globalStyleSheet.round, globalStyleSheet.black]}
                    >
                      <Text style={globalStyleSheet.btnText}>
                        Login with mobile number
                      </Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <View
                      style={[
                        globalStyleSheet.roundNoWidth,
                        globalStyleSheet.white,
                      ]}
                    >
                      <Image
                        style={globalStyleSheet.imageGoogleIcon}
                        source={googleIcon}
                      />
                    </View>
                  </TouchableOpacity>
                </View>

                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "500",
                    color: "#787878",
                    marginLeft: 25,
                    marginRight: 25,
                    textAlign: "center",
                  }}
                >
                  App version 1234.9
                </Text>
              </View>
            </ImageBackground>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
