import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
} from "react-native";
import React, { useContext } from "react";
import FitnessCards from "../components/FitnessCards";
import { FitnessItems } from "../Context";

const HomeScreen = () => {
  const {
    minutes,

    calories,

    workout,
  } = useContext(FitnessItems);
  return (
    <ScrollView style={{ marginTop: 40 }}>
      <View
        style={{
          flex: 1, // Makes the container fill the screen
          justifyContent: "center", // Centers the item vertically
          alignItems: "center", // Centers th
        }}
      >
        <View
          style={{
            borderRadius: 10,
            // backgroundColor: "#3234a8",
            padding: 10,
            height: "100%",
            width: "100%",
          }}
        >
          <View
            style={{
              backgroundColor: "black",
              // flex: 1, // Makes the View take up the full screen
              justifyContent: "center", // Centers the content vertically
              alignItems: "center", // Centers the content horizontally
            }}
          >
            <Text
              style={{
                width: 200,
                padding: 10,
                color: "white",
                fontWeight: "bold",
                fontSize: 22,
              }}
            >
              WORKOUT APP
            </Text>
          </View>

          <View
            style={{
              // backgroundColor: "#7afff6",
              backgroundColor: "black",
              borderRadius: 10,
              padding: 10,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 20,
              marginBottom: 30,
            }}
          >
            <View>
              <Text
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  color: "white",
                  fontSize: 18,
                }}
              >
                {workout}
              </Text>
              <Text style={{ color: "#D0D0D0", fontSize: 17, marginTop: 6 }}>
                WORKOUTS
              </Text>
            </View>

            <View>
              <Text
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  color: "white",
                  fontSize: 18,
                }}
              >
                {calories}
              </Text>
              <Text style={{ color: "#D0D0D0", fontSize: 17, marginTop: 6 }}>
                KCAL
              </Text>
            </View>

            <View>
              <Text
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  color: "white",
                  fontSize: 18,
                }}
              >
                {minutes}
              </Text>
              <Text style={{ color: "#D0D0D0", fontSize: 17, marginTop: 6 }}>
                MINS
              </Text>
            </View>
          </View>

          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Image
              style={{
                width: "90%",
                height: 120,
                marginTop: 20,
                borderRadius: 7,
              }}
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA-hjWWf_lFbYazaxJz6bHUYq5M3g9Y3otbA&s",
              }}
            />
          </View>
          <FitnessCards />
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
