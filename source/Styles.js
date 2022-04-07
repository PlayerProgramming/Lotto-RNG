import { StyleSheet, Platform, StatusBar } from "react-native";
export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  innercontainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    height: "20%",
    width: "100%",
  },
  circle: {
    borderRadius: 1000,
    backgroundColor: "#4ee44e",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 1,
    width: "100%",
    height: "45%",
  },
  buttonText: {
    backgroundColor: "transparent",
    fontSize: fontSizeChange(40),
  },
  buttonImage: {
    width: 100,
    height: 100,
  },
  numberText: {
    fontFamily: "Lobster_400Regular",
    fontSize: 25,
  },
  AndroidSafeArea: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

function fontSizeChange(size) {
  if (Platform.OS === "ios" || Platform.OS === "android") {
    return size - 21;
  } else {
    return size;
  }
}
