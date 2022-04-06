import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Platform,
  Image,
} from "react-native";
import AwesomeButton from "react-native-really-awesome-button";
export default function App() {
  const [myNumbers, setNumbers] = useState([]);
  const [minVal, setMinVal] = useState(1);
  const [maxVal, setMaxVal] = useState(50);
  var numbers = [];

  const [randomNum1, setRandomNum1] = useState("-");
  const [randomNum2, setRandomNum2] = useState("-");
  const [randomNum3, setRandomNum3] = useState("-");
  const [randomNum4, setRandomNum4] = useState("-");
  const [randomNum5, setRandomNum5] = useState("-");
  const [randomNum6, setRandomNum6] = useState("-");
  const [randomNum7, setRandomNum7] = useState("-");

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

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{ flex: 0.2, justifyContent: "center", alignItems: "center" }}
      >
        <Text>"FOR THE WIN"</Text>
        <Image
          source={require("./source/assets/LottoMax.png")}
          style={{ width: 200, height: 100 }}
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

        <AwesomeButton
          width={buttonziseChange()}
          ExtraContent={<LinearGradient colors={["#BF953F", "FCF6BA"]} />}
          onPress={generateRandomNum}
          raiseLevel={8}
          borderRadius={100}
          height={100}
        >
          <Text style={styles.buttonText}>
            Press This Button To Get Lucky Numbers!
          </Text>
        </AwesomeButton>
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
function buttonziseChange() {
  if (Platform.OS === "ios" || Platform.OS === "android") {
    return 250;
  } else return 1000;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
    justifyContent: "center",
    alignItems: "center",
  },
  innercontainer: {
    backgroundColor: "gold",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    height: "15%",
    width: "100%",
  },
  circle: {
    borderRadius: 1000,
    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 1,
    width: "100%",
    height: "45%",
  },
  buttonText: {
    fontSize: fontSizeChange(40),
  },
  numberText: {
    fontSize: 30,
  },
});
