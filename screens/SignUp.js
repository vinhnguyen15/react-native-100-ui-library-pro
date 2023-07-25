import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const SignUp = () => {
  return (
    <View style={styles.signUp}>
      <View style={styles.formSignUp}>
        <View style={styles.textLayout}>
          <View style={styles.rectangle} />
          <View style={[styles.rightDetail, styles.rightPosition]}>
            <View style={[styles.clearButton, styles.clearButtonLayout]}>
              <Text style={[styles.symbol, styles.symbolLayout]}>􀁡</Text>
            </View>
          </View>
          <View
            style={[
              styles.controlstextFieldxtextpla,
              styles.toolbarLogInPosition,
            ]}
          >
            <Text style={styles.placeholder}>Joe Doe</Text>
            <View style={[styles.cursor, styles.cursorLayout]}>
              <View style={styles.cursor1} />
            </View>
          </View>
        </View>
        <View style={[styles.textField1, styles.textLayout]}>
          <View style={styles.rectangle} />
          <View style={[styles.rightDetail, styles.rightPosition]}>
            <View style={[styles.clearButton, styles.clearButtonLayout]}>
              <Text style={[styles.symbol, styles.symbolLayout]}>􀁡</Text>
            </View>
          </View>
          <View
            style={[
              styles.controlstextFieldxtextpla,
              styles.toolbarLogInPosition,
            ]}
          >
            <Text style={styles.placeholder}>joe.doe@gmail.com</Text>
            <View style={[styles.cursor, styles.cursorLayout]}>
              <View style={styles.cursor1} />
            </View>
          </View>
        </View>
        <View style={[styles.textField1, styles.textLayout]}>
          <View style={styles.rectangle} />
          <View style={styles.rightPosition}>
            <View style={[styles.clearButton, styles.clearButtonLayout]}>
              <Text style={[styles.symbol, styles.symbolLayout]}>􀋮</Text>
            </View>
          </View>
          <View
            style={[
              styles.controlstextFieldxtextpla,
              styles.toolbarLogInPosition,
            ]}
          >
            <Text style={styles.placeholder}>*************</Text>
            <View style={[styles.cursor, styles.cursorLayout]}>
              <View style={styles.cursor1} />
            </View>
          </View>
        </View>
        <View style={[styles.textField1, styles.textLayout]}>
          <View style={[styles.background, styles.backgroundPosition]} />
          <Text style={[styles.label, styles.labelTypo]}>Sign In</Text>
        </View>
        <View style={styles.facebook}>
          <Text style={styles.signUpWith}>Sign up with Facebook</Text>
          <Image
            style={[styles.facebookLogoIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/facebook-logo.png")}
          />
        </View>
      </View>
      <Text
        style={[styles.description, styles.titleClr]}
      >{`Welcome to our adoption app!
I hope you will find what you are looking for!`}</Text>
      <Text style={[styles.title, styles.titleClr]}>Meow!</Text>
      <Image
        style={[styles.appIcon, styles.symbolLayout]}
        contentFit="cover"
        source={require("../assets/app-icon1.png")}
      />
      <View style={[styles.toolbarLogIn, styles.backgroundPosition]}>
        <Image
          style={[styles.backgroundIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/background10.png")}
        />
        <Text
          style={[styles.haveAnAccount, styles.logInTypo]}
        >{`Have an account? `}</Text>
        <Text style={[styles.logIn, styles.logInTypo]}>Log In</Text>
      </View>
      <View style={[styles.homeIndicator, styles.homeIndicatorPosition]}>
        <View style={[styles.background1, styles.backgroundPosition]} />
        <View style={styles.seperator} />
      </View>
      <View
        style={[styles.barsstatusBariphoneXlight, styles.homeIndicatorPosition]}
      >
        <View style={[styles.background1, styles.backgroundPosition]} />
        <Image
          style={[styles.batteryIcon, styles.labelPosition]}
          contentFit="cover"
          source={require("../assets/battery4.png")}
        />
        <Image
          style={styles.wifiIcon}
          contentFit="cover"
          source={require("../assets/wifi.png")}
        />
        <Image
          style={styles.mobileSignalIcon}
          contentFit="cover"
          source={require("../assets/mobile-signal.png")}
        />
        <View style={[styles.timeStyle, styles.cursorLayout]}>
          <View
            style={[
              styles.barsstatusBariphonextime,
              styles.toolbarLogInPosition,
            ]}
          >
            <Text style={styles.time}>9:41</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rightPosition: {
    left: "4.66%",
    bottom: "9.26%",
    right: "0%",
    top: "9.26%",
    width: "95.34%",
    height: "81.48%",
    position: "absolute",
  },
  clearButtonLayout: {
    height: 44,
    top: 0,
  },
  symbolLayout: {
    width: 40,
    position: "absolute",
  },
  toolbarLogInPosition: {
    left: "0%",
    position: "absolute",
  },
  cursorLayout: {
    height: "47.73%",
    position: "absolute",
  },
  textLayout: {
    height: 54,
    width: 343,
  },
  backgroundPosition: {
    bottom: "0%",
    right: "0%",
    width: "100%",
  },
  labelTypo: {
    fontFamily: FontFamily.largeTitle34,
    fontWeight: "500",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    left: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  titleClr: {
    color: Color.iOSSystemBackgroundsIOSSystemLabelsLightPrimary,
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",
  },
  logInTypo: {
    fontWeight: "600",
    lineHeight: 18,
    fontSize: FontSize.footnoteFootnote13_size,
    marginTop: -26.5,
    top: "50%",
    textAlign: "left",
    fontFamily: FontFamily.headlineSubheadline151,
    letterSpacing: 0,
    position: "absolute",
  },
  homeIndicatorPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  labelPosition: {
    top: "50%",
    position: "absolute",
  },
  rectangle: {
    height: "103.7%",
    width: "100.58%",
    top: "-1.85%",
    right: "-0.29%",
    bottom: "-1.85%",
    left: "-0.29%",
    borderStyle: "solid",
    borderColor: "rgba(60, 60, 67, 0.6)",
    borderWidth: 1,
    borderRadius: Border.br_21xl,
    position: "absolute",
    backgroundColor: Color.iOSSystemBackgroundsLightPrimary,
  },
  symbol: {
    top: 1,
    left: 2,
    fontSize: FontSize.bodyBody17_size,
    lineHeight: 22,
    display: "flex",
    justifyContent: "center",
    height: 42,
    textAlign: "center",
    letterSpacing: 0,
    color: Color.iOSSystemBackgroundsIOSSystemLabelsLightSecondary,
    fontFamily: FontFamily.headlineSubheadline151,
    width: 40,
    alignItems: "center",
  },
  clearButton: {
    right: 3,
    width: 44,
    position: "absolute",
  },
  rightDetail: {
    display: "none",
  },
  placeholder: {
    top: 11,
    fontSize: FontSize.titleTitle320_size,
    lineHeight: 24,
    width: 295,
    textAlign: "left",
    fontFamily: FontFamily.bodyBody17,
    color: Color.iOSSystemBackgroundsIOSSystemLabelsLightSecondary,
    letterSpacing: 0,
    left: 16,
    position: "absolute",
  },
  cursor1: {
    marginLeft: -0.72,
    bottom: 0,
    borderRadius: Border.br_11xs,
    width: 2,
    left: "50%",
    top: 0,
    position: "absolute",
  },
  cursor: {
    width: "1.05%",
    top: "27.27%",
    right: "90.53%",
    bottom: "25%",
    left: "8.42%",
    overflow: "hidden",
  },
  controlstextFieldxtextpla: {
    right: "4.66%",
    bottom: "9.26%",
    top: "9.26%",
    width: "95.34%",
    height: "81.48%",
    left: "0%",
  },
  textField1: {
    marginTop: 16,
  },
  background: {
    backgroundColor: Color.orangered,
    top: "0%",
    height: "100%",
    bottom: "0%",
    left: "0%",
    position: "absolute",
    borderRadius: Border.br_21xl,
  },
  label: {
    marginTop: -14,
    marginLeft: -36.5,
    fontSize: FontSize.titleTitle222_size,
    lineHeight: 28,
    color: Color.iOSSystemBackgroundsLightPrimary,
    top: "50%",
    position: "absolute",
    left: "50%",
    textAlign: "center",
    letterSpacing: 0,
    fontFamily: FontFamily.largeTitle34,
    fontWeight: "500",
  },
  signUpWith: {
    marginTop: -10.5,
    width: "83.41%",
    left: "16.59%",
    color: Color.iOSSystemGraysSystemGray6Dark,
    lineHeight: 21,
    fontSize: FontSize.calloutCallout16_size,
    fontFamily: FontFamily.largeTitle34,
    fontWeight: "500",
    top: "50%",
    textAlign: "left",
    letterSpacing: 0,
    position: "absolute",
  },
  facebookLogoIcon: {
    width: "8.78%",
    top: "4.76%",
    right: "91.22%",
    bottom: "9.52%",
    height: "85.71%",
  },
  facebook: {
    width: 205,
    height: 21,
    marginTop: 16,
  },
  formSignUp: {
    top: 312,
    alignItems: "center",
    left: 16,
    position: "absolute",
  },
  description: {
    top: 222,
    left: 25,
    width: 325,
    lineHeight: 21,
    fontSize: FontSize.calloutCallout16_size,
    color: Color.iOSSystemBackgroundsIOSSystemLabelsLightPrimary,
    fontFamily: FontFamily.bodyBody17,
  },
  title: {
    top: 176,
    fontSize: FontSize.titleTitle128_size,
    fontFamily: FontFamily.largeTitle34,
    fontWeight: "500",
    color: Color.iOSSystemBackgroundsIOSSystemLabelsLightPrimary,
    width: 343,
    left: 16,
  },
  appIcon: {
    top: 88,
    left: 168,
    height: 40,
  },
  backgroundIcon: {
    height: "100.6%",
    top: "-0.6%",
    bottom: "0%",
    right: "0%",
    width: "100%",
  },
  haveAnAccount: {
    left: "29.33%",
    color: Color.iOSSystemBackgroundsIOSSystemLabelsLightSecondary,
  },
  logIn: {
    left: "60.27%",
    color: Color.orangered,
  },
  toolbarLogIn: {
    height: "10.22%",
    top: "89.78%",
    left: "0%",
    position: "absolute",
  },
  background1: {
    top: "0%",
    height: "100%",
    bottom: "0%",
    left: "0%",
    position: "absolute",
  },
  seperator: {
    marginLeft: -66.5,
    bottom: 10,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.iOSSystemBackgroundsIOSSystemLabelsLightPrimary,
    width: 134,
    height: 5,
    left: "50%",
    position: "absolute",
  },
  homeIndicator: {
    top: 778,
    height: 34,
  },
  batteryIcon: {
    marginTop: -4,
    right: 15,
    width: 25,
    height: 11,
  },
  wifiIcon: {
    width: 15,
    height: 11,
  },
  mobileSignalIcon: {
    width: 17,
    height: 11,
  },
  time: {
    marginTop: -9,
    fontSize: FontSize.headlineSubheadline15_size,
    width: 54,
    left: 0,
    fontWeight: "600",
    color: Color.iOSSystemGraysSystemGray6Dark,
    top: "50%",
    textAlign: "center",
    fontFamily: FontFamily.headlineSubheadline151,
    letterSpacing: 0,
    position: "absolute",
  },
  barsstatusBariphonextime: {
    top: "33.33%",
    bottom: "-19.05%",
    height: "85.71%",
    right: "0%",
    left: "0%",
    overflow: "hidden",
    width: "100%",
  },
  timeStyle: {
    width: "14.4%",
    top: "15.91%",
    right: "80%",
    bottom: "36.36%",
    left: "5.6%",
  },
  barsstatusBariphoneXlight: {
    height: 44,
    top: 0,
  },
  signUp: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.iOSSystemBackgroundsLightPrimary,
  },
});

export default SignUp;
