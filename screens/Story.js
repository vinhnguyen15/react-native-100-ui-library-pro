import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontFamily, FontSize, Border, Color } from "../GlobalStyles";

const Story = () => {
  return (
    <View style={styles.story}>
      <Image
        style={styles.videoIcon}
        contentFit="cover"
        source={require("../assets/video.png")}
      />
      <LinearGradient
        style={styles.gradient}
        locations={[0, 1]}
        colors={["rgba(0, 0, 0, 0)", "#000"]}
      />
      <View style={styles.formComment}>
        <View style={[styles.buttonEffects, styles.buttonPosition1]}>
          <Text style={[styles.symbol, styles.symbolFlexBox]}>􀎸</Text>
        </View>
        <View style={[styles.buttonSend, styles.buttonPosition1]}>
          <Text style={[styles.symbol, styles.symbolFlexBox]}>􀈟</Text>
        </View>
        <View style={[styles.platter, styles.platterPosition]} />
        <View style={[styles.platter1, styles.platterPosition]} />
        <Text style={styles.comment}>Comment...</Text>
      </View>
      <View style={styles.timelineInfo}>
        <View style={[styles.timeline, styles.timelinePosition]}>
          <View style={[styles.rectangle, styles.rectangleLayout]} />
          <View style={[styles.rectangle1, styles.rectanglePosition]} />
          <View style={[styles.rectangle2, styles.rectanglePosition]} />
          <View style={[styles.rectangle3, styles.rectangleLayout]} />
        </View>
        <Text style={[styles.min, styles.minSpaceBlock]}>30min</Text>
        <Text style={[styles.username, styles.timeTypo]}>@Tom_ad</Text>
        <Image
          style={styles.placeholderIcon}
          contentFit="cover"
          source={require("../assets/placeholder2.png")}
        />
        <View style={[styles.button, styles.buttonPosition]}>
          <Text style={[styles.symbol2, styles.symbolFlexBox]}>􀆄</Text>
        </View>
        <View style={[styles.button1, styles.buttonPosition]}>
          <Text style={[styles.symbol2, styles.symbolFlexBox]}>􀍠</Text>
        </View>
      </View>
      <View style={styles.homeIndicator}>
        <View style={[styles.background, styles.backgroundPosition]} />
        <View style={styles.seperator} />
      </View>
      <View style={[styles.statusBar, styles.timelinePosition]}>
        <View style={[styles.background, styles.backgroundPosition]} />
        <Image
          style={styles.batteryIcon}
          contentFit="cover"
          source={require("../assets/battery.png")}
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
        <View style={styles.timeStyle}>
          <View
            style={[styles.barsstatusBariphonextime, styles.backgroundPosition]}
          >
            <Text style={[styles.time, styles.timeTypo]}>9:41</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonPosition1: {
    bottom: "0%",
    top: "0%",
    height: "100%",
  },
  symbolFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.headlineSubheadline151,
    lineHeight: 22,
    letterSpacing: 0,
    fontSize: FontSize.bodyBody17_size,
    left: "18.18%",
    top: "18.18%",
    width: "63.64%",
    height: "63.64%",
    textAlign: "center",
    position: "absolute",
  },
  platterPosition: {
    borderRadius: Border.br_xl,
    bottom: "4.55%",
    right: "28.25%",
    top: "4.55%",
    width: "71.75%",
    height: "90.91%",
    left: "0%",
    position: "absolute",
  },
  timelinePosition: {
    top: 0,
    position: "absolute",
  },
  rectangleLayout: {
    backgroundColor: Color.iOSSystemLabelsDarkTertiary,
    borderRadius: Border.br_11xs,
    width: "32.56%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  rectanglePosition: {
    borderRadius: Border.br_11xs,
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    backgroundColor: Color.iOSSystemBackgroundsLightPrimary,
  },
  minSpaceBlock: {
    marginTop: -6,
    color: Color.iOSSystemBackgroundsLightPrimary,
    textAlign: "left",
  },
  timeTypo: {
    fontFamily: FontFamily.largeTitle34,
    fontWeight: "500",
    lineHeight: 20,
    fontSize: FontSize.headlineSubheadline15_size,
    top: "50%",
    letterSpacing: 0,
    position: "absolute",
  },
  buttonPosition: {
    top: "15.38%",
    width: "12.36%",
    height: "84.62%",
    bottom: "0%",
    position: "absolute",
  },
  backgroundPosition: {
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  videoIcon: {
    top: 44,
    borderRadius: 5,
    height: 672,
    width: 375,
    left: 0,
    position: "absolute",
  },
  gradient: {
    top: 197,
    left: 375,
    height: 153,
    transform: [
      {
        rotate: "-180deg",
      },
    ],
    opacity: 0.4,
    backgroundColor: "transparent",
    width: 375,
    position: "absolute",
  },
  symbol: {
    color: Color.iOSSystemGraysSystemGray6Dark,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.headlineSubheadline151,
    lineHeight: 22,
    letterSpacing: 0,
    fontSize: FontSize.bodyBody17_size,
    left: "18.18%",
    top: "18.18%",
    width: "63.64%",
    height: "63.64%",
  },
  buttonEffects: {
    left: "87.57%",
    right: "0%",
    width: "12.43%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  buttonSend: {
    right: "12.43%",
    left: "75.14%",
    width: "12.43%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  platter: {
    borderStyle: "solid",
    borderColor: "rgba(60, 60, 67, 0.29)",
    borderWidth: 1.2,
  },
  platter1: {
    backgroundColor: Color.iOSSystemFillsLightQuarternary,
  },
  comment: {
    marginTop: -10,
    left: "4.52%",
    color: Color.iOSSystemBackgroundsIOSSystemLabelsLightSecondary,
    textAlign: "left",
    fontFamily: FontFamily.bodyBody17,
    lineHeight: 20,
    fontSize: FontSize.headlineSubheadline15_size,
    top: "50%",
    letterSpacing: 0,
    position: "absolute",
  },
  formComment: {
    top: 730,
    left: 16,
    width: 354,
    height: 44,
    position: "absolute",
  },
  rectangle: {
    right: "33.72%",
    left: "33.72%",
  },
  rectangle1: {
    right: "67.44%",
    width: "32.56%",
    borderRadius: Border.br_11xs,
    left: "0%",
  },
  rectangle2: {
    width: "25.29%",
    right: "40.99%",
    left: "33.72%",
  },
  rectangle3: {
    left: "67.44%",
    right: "0%",
  },
  timeline: {
    left: 2,
    width: 344,
    height: 3,
  },
  min: {
    left: "33.71%",
    color: Color.iOSSystemBackgroundsLightPrimary,
    fontFamily: FontFamily.bodyBody17,
    lineHeight: 20,
    fontSize: FontSize.headlineSubheadline15_size,
    marginTop: -6,
    top: "50%",
    letterSpacing: 0,
    position: "absolute",
  },
  username: {
    left: "12.36%",
    color: Color.iOSSystemBackgroundsLightPrimary,
    marginTop: -6,
    textAlign: "left",
  },
  placeholderIcon: {
    top: 15,
    width: 30,
    height: 30,
    left: 0,
    position: "absolute",
  },
  symbol2: {
    color: Color.iOSSystemBackgroundsLightPrimary,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.headlineSubheadline151,
    lineHeight: 22,
    letterSpacing: 0,
    fontSize: FontSize.bodyBody17_size,
    left: "18.18%",
    top: "18.18%",
    width: "63.64%",
    height: "63.64%",
  },
  button: {
    left: "87.64%",
    right: "0%",
  },
  button1: {
    right: "12.36%",
    left: "75.28%",
  },
  timelineInfo: {
    top: 61,
    left: 14,
    width: 356,
    height: 52,
    position: "absolute",
  },
  background: {
    bottom: "0%",
    top: "0%",
    height: "100%",
    left: "0%",
  },
  seperator: {
    marginLeft: -66.5,
    bottom: 10,
    left: "50%",
    borderRadius: Border.br_81xl,
    backgroundColor: Color.iOSSystemBackgroundsIOSSystemLabelsLightPrimary,
    width: 134,
    height: 5,
    position: "absolute",
  },
  homeIndicator: {
    top: 778,
    height: 34,
    width: 375,
    left: 0,
    position: "absolute",
  },
  batteryIcon: {
    marginTop: -4,
    right: 15,
    width: 25,
    height: 11,
    top: "50%",
    position: "absolute",
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
    width: 54,
    textAlign: "center",
    fontWeight: "500",
    color: Color.iOSSystemGraysSystemGray6Dark,
    left: 0,
  },
  barsstatusBariphonextime: {
    height: "85.71%",
    top: "33.33%",
    bottom: "-19.05%",
    overflow: "hidden",
  },
  timeStyle: {
    height: "47.73%",
    width: "14.4%",
    top: "15.91%",
    right: "80%",
    bottom: "36.36%",
    left: "5.6%",
    position: "absolute",
  },
  statusBar: {
    height: 44,
    width: 375,
    left: 0,
  },
  story: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.iOSSystemBackgroundsLightPrimary,
  },
});

export default Story;
