import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  Image,
  StatusBar,
} from "react-native";
import { Lobster_400Regular, useFonts } from "@expo-google-fonts/lobster";
import { LinearGradient } from "expo-linear-gradient";
import AwesomeButton from "react-native-really-awesome-button";
import styles from "./Styles";
export default function Lottopage() {
  const [myNumbers, setNumbers] = useState([]);
  const [minVal, setMinVal] = useState(1);
  const [maxVal, setMaxVal] = useState(50);
  var numbers = [];

  const [randomNum1, setRandomNum1] = useState("?");
  const [randomNum2, setRandomNum2] = useState("?");
  const [randomNum3, setRandomNum3] = useState("?");
  const [randomNum4, setRandomNum4] = useState("?");
  const [randomNum5, setRandomNum5] = useState("?");
  const [randomNum6, setRandomNum6] = useState("?");
  const [randomNum7, setRandomNum7] = useState("?");

  function generateRandomNum() {
    var randNum = Math.floor(Math.random() * maxVal) + minVal;
    while (numbers.length != 7) {
      while (validDuplicate(numbers, randNum)) {
        randNum = Math.floor(Math.random() * maxVal) + minVal;
      }
      numbers.push(randNum);
    }
    setRandomNum1(numbers[0]);
    setRandomNum2(numbers[1]);
    setRandomNum3(numbers[2]);
    setRandomNum4(numbers[3]);
    setRandomNum5(numbers[4]);
    setRandomNum6(numbers[5]);
    setRandomNum7(numbers[6]);
  }
  function validDuplicate(array, number) {
    for (var i = 0; i < array.length; i++) {
      if (array[i] == number) {
        return true;
      }
    }
    return false;
  }

  let [fontsLoaded] = useFonts({
    Lobster_400Regular,
  });

  if (!fontsLoaded) {
    return <Text>...</Text>;
  } else
    return (
      <SafeAreaView style={[styles.AndroidSafeArea, { flex: 1 }]}>
        <LinearGradient
          style={{ ...StyleSheet.absoluteFillObject }}
          colors={["#38ef7d", "#FCF6BA", "#AA771C"]}
        />
        <View
          style={{
            flex: 0.2,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 30,
          }}
        >
          <Image
            source={require("./assets/LottoMax.png")}
            style={{
              width: "100%",
              height: undefined,
              resizeMode: "contain",
              flex: 1,
            }}
          />
        </View>
        <View style={styles.container}>
          <View style={styles.innercontainer}>
            <View style={styles.circle}>
              <Text style={styles.numberText}>{randomNum1}</Text>
            </View>
            <View style={styles.circle}>
              <Text style={styles.numberText}>{randomNum2}</Text>
            </View>
            <View style={styles.circle}>
              <Text style={styles.numberText}>{randomNum3}</Text>
            </View>
            <View style={styles.circle}>
              <Text style={styles.numberText}>{randomNum4}</Text>
            </View>
            <View style={styles.circle}>
              <Text style={styles.numberText}>{randomNum5}</Text>
            </View>
            <View style={styles.circle}>
              <Text style={styles.numberText}>{randomNum6}</Text>
            </View>
            <View style={styles.circle}>
              <Text style={styles.numberText}>{randomNum7}</Text>
            </View>
          </View>
          <View style={{ margin: 20 }}>
            <AwesomeButton
              width={buttonsizeChange()}
              onPress={generateRandomNum}
              raiseLevel={8}
              borderRadius={100}
              height={100}
            >
              <LinearGradient
                style={{
                  height: "100%",
                  width: linearsizeChange(),
                  justifyContent: "center",
                  alignItems: "center",
                }}
                colors={["#BF953F", "#FCF6BA", "#AA771C"]}
              >
                <Image
                  style={{ width: 80, height: 80 }}
                  source={require("./assets/dollar2.png")}
                />
              </LinearGradient>
            </AwesomeButton>
          </View>
        </View>
      </SafeAreaView>
    );
}

function fontSizeChange(size) {
  if (Platform.OS === "ios" || Platform.OS === "android") {
    return size - 21;
  } else {
    return size;
  }
}
function buttonsizeChange() {
  if (Platform.OS === "ios" || Platform.OS === "android") {
    return 300;
  } else return 600;
}
function linearsizeChange() {
  if (Platform.OS === "ios" || Platform.OS === "android") {
    return "100%";
  } else return "2000%";
}
