import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const Feed = () => {
  return (
    <View style={[styles.feed, styles.feedLayout]}>
      <View style={styles.barsnavigationBarslightlar}>
        <Image
          style={[styles.backgroundIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/background7.png")}
        />
        <View style={[styles.userpic, styles.userpicLayout]}>
          <View style={styles.user}>
            <Text style={[styles.text, styles.textTypo]}>􀓣</Text>
          </View>
        </View>
        <View style={[styles.rightAccessory, styles.userpicLayout]}>
          <View style={styles.label}>
            <Text style={styles.label1}>Action</Text>
          </View>
        </View>
        <Text style={[styles.title, styles.titleTypo]}>Today</Text>
        <Text style={styles.label2}>May 18</Text>
      </View>
      <View style={[styles.statusBar, styles.barPosition]}>
        <View style={[styles.background, styles.iconPosition]} />
        <Image
          style={styles.batteryIcon}
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
        <View style={styles.timeStyle}>
          <View style={[styles.barsstatusBariphonextime, styles.feedLayout]}>
            <Text style={styles.time}>9:41</Text>
          </View>
        </View>
      </View>
      <View style={[styles.cards, styles.titlePosition]}>
        <View style={styles.cardLayout}>
          <Image
            style={[styles.maskIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/mask.png")}
          />
          <Text style={[styles.subtitle, styles.subtitlePosition1]}>
            {" "}
            · May 6, 2020
          </Text>
          <Text style={[styles.title1, styles.subtitlePosition]}>
            Wendy’s global same-store sales steadily
          </Text>
          <Text style={[styles.subtitle1, styles.subtitlePosition]}>
            FOR YOU
          </Text>
          <Text style={[styles.subtitle2, styles.subtitlePosition]}>
            Convictions horror justice prejudice chaos aversion morality play
            right virtues.
          </Text>
        </View>
        <View style={[styles.cardArticle1, styles.cardLayout]}>
          <Image
            style={[styles.maskIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/mask1.png")}
          />
          <Text style={[styles.subtitle, styles.subtitlePosition1]}>
            {" "}
            · May 6, 2020
          </Text>
          <Text style={[styles.title1, styles.subtitlePosition]}>
            Wendy’s global same-store sales steadily
          </Text>
          <Text style={[styles.subtitle1, styles.subtitlePosition]}>
            FOR YOU
          </Text>
          <Text style={[styles.subtitle2, styles.subtitlePosition]}>
            Convictions horror justice prejudice chaos aversion morality play
            right virtues.
          </Text>
        </View>
      </View>
      <View style={[styles.homeIndicator, styles.barPosition]}>
        <View style={[styles.background, styles.iconPosition]} />
        <View style={styles.seperator} />
      </View>
      <View style={[styles.tabBar, styles.barPosition]}>
        <Image
          style={[styles.backgroundIcon1, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/background8.png")}
        />
        <View style={[styles.tab4, styles.tabLayout]}>
          <Text style={[styles.symbol, styles.symbolFlexBox]}>􀣋</Text>
          <Text style={[styles.label3, styles.labelTypo]}>Settings</Text>
        </View>
        <View style={[styles.tab3, styles.tabLayout]}>
          <Text style={[styles.symbol, styles.symbolFlexBox]}>􀉩</Text>
          <Text style={[styles.label3, styles.labelTypo]}>Profile</Text>
        </View>
        <View style={[styles.tab2, styles.tabLayout]}>
          <Text style={[styles.symbol, styles.symbolFlexBox]}>􀤦</Text>
          <Text style={[styles.label3, styles.labelTypo]}>My Articles</Text>
        </View>
        <View style={[styles.tab1, styles.tabLayout]}>
          <Text style={[styles.symbol3, styles.symbolFlexBox]}>􀾟</Text>
          <Text style={[styles.label6, styles.labelTypo]}>Discover</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  feedLayout: {
    overflow: "hidden",
    width: "100%",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  userpicLayout: {
    width: 180,
    height: 44,
    position: "absolute",
  },
  textTypo: {
    textAlign: "left",
    letterSpacing: 0,
    fontSize: FontSize.largeTitle34_size,
  },
  titleTypo: {
    fontFamily: FontFamily.largeTitle34,
    fontWeight: "500",
  },
  barPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  iconPosition: {
    bottom: "0%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  titlePosition: {
    left: 16,
    position: "absolute",
  },
  subtitlePosition1: {
    marginTop: 27,
    top: "50%",
  },
  subtitlePosition: {
    color: Color.iOSSystemBackgroundsLightPrimary,
    left: "4.66%",
    textAlign: "left",
    letterSpacing: 0,
    position: "absolute",
  },
  cardLayout: {
    height: 366,
    width: 343,
  },
  tabLayout: {
    height: 50,
    width: "25.07%",
    top: 0,
    position: "absolute",
  },
  symbolFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    left: "24.47%",
    top: "6%",
    width: "51.06%",
    height: "64%",
    textAlign: "center",
    fontFamily: FontFamily.headlineSubheadline151,
    fontSize: FontSize.bodyBody17_size,
    letterSpacing: 0,
    position: "absolute",
  },
  labelTypo: {
    lineHeight: 16,
    fontSize: FontSize.captionCaption112_size,
    top: "66%",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.bodyBody17,
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  backgroundIcon: {
    left: 0,
    maxWidth: "100%",
    bottom: 0,
    right: 0,
    top: 0,
    position: "absolute",
  },
  text: {
    fontFamily: FontFamily.sFCompactDisplay,
    color: Color.iOSSystemGraysSystemGray6Dark,
    lineHeight: 22,
    textAlign: "left",
    letterSpacing: 0,
    fontSize: FontSize.largeTitle34_size,
    height: 25,
    width: 36,
    left: 0,
    top: 0,
    position: "absolute",
  },
  user: {
    top: 10,
    left: 129,
    height: 25,
    width: 36,
    position: "absolute",
  },
  userpic: {
    right: 4,
    bottom: 6,
    height: 44,
  },
  label1: {
    top: 11,
    textAlign: "right",
    fontFamily: FontFamily.bodyBody17,
    fontSize: FontSize.bodyBody17_size,
    color: Color.iOSSystemGraysSystemGray6Dark,
    lineHeight: 22,
    letterSpacing: 0,
    right: 0,
    position: "absolute",
  },
  label: {
    right: 16,
    width: 164,
    height: 44,
    bottom: 0,
    position: "absolute",
  },
  rightAccessory: {
    bottom: 51,
    display: "none",
    height: 44,
    right: 0,
    width: 180,
  },
  title: {
    bottom: 8,
    lineHeight: 41,
    color: Color.iOSSystemBackgroundsIOSSystemLabelsLightPrimary,
    left: 16,
    position: "absolute",
    textAlign: "left",
    letterSpacing: 0,
    fontSize: FontSize.largeTitle34_size,
    fontFamily: FontFamily.largeTitle34,
    fontWeight: "500",
  },
  label2: {
    bottom: 53,
    textTransform: "uppercase",
    fontFamily: FontFamily.headlineSubheadline151,
    fontWeight: "600",
    lineHeight: 18,
    fontSize: FontSize.footnoteFootnote13_size,
    left: 16,
    textAlign: "left",
    color: Color.iOSSystemGraysSystemGray6Dark,
    letterSpacing: 0,
    position: "absolute",
  },
  barsnavigationBarslightlar: {
    height: "17.24%",
    bottom: "82.76%",
    left: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  background: {
    height: "100%",
    bottom: "0%",
    top: "0%",
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
    lineHeight: 20,
    fontSize: FontSize.headlineSubheadline15_size,
    top: "50%",
    fontFamily: FontFamily.headlineSubheadline151,
    fontWeight: "600",
    color: Color.iOSSystemGraysSystemGray6Dark,
    letterSpacing: 0,
    left: 0,
    position: "absolute",
  },
  barsstatusBariphonextime: {
    height: "85.71%",
    top: "33.33%",
    bottom: "-19.05%",
    left: "0%",
    right: "0%",
    position: "absolute",
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
    top: 0,
    width: 375,
  },
  maskIcon: {
    borderRadius: Border.br_3xs,
    height: "100%",
    bottom: "0%",
    top: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  subtitle: {
    left: "21.57%",
    color: Color.iOSSystemBackgroundsLightSecondary,
    lineHeight: 20,
    fontSize: FontSize.headlineSubheadline15_size,
    marginTop: 27,
    fontFamily: FontFamily.bodyBody17,
    textAlign: "left",
    letterSpacing: 0,
    position: "absolute",
  },
  title1: {
    top: "64.48%",
    fontSize: FontSize.titleTitle222_size,
    lineHeight: 28,
    width: "90.67%",
    color: Color.iOSSystemBackgroundsLightPrimary,
    left: "4.66%",
    fontFamily: FontFamily.largeTitle34,
    fontWeight: "500",
  },
  subtitle1: {
    marginTop: 27,
    top: "50%",
    color: Color.iOSSystemBackgroundsLightPrimary,
    left: "4.66%",
    lineHeight: 18,
    fontSize: FontSize.footnoteFootnote13_size,
    fontFamily: FontFamily.largeTitle34,
    fontWeight: "500",
  },
  subtitle2: {
    marginTop: 117,
    fontSize: FontSize.calloutCallout16_size,
    lineHeight: 21,
    width: "90.67%",
    color: Color.iOSSystemBackgroundsLightPrimary,
    left: "4.66%",
    top: "50%",
    fontFamily: FontFamily.bodyBody17,
  },
  cardArticle1: {
    marginTop: 16,
  },
  cards: {
    top: 140,
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
  },
  backgroundIcon1: {
    height: "100.6%",
    top: "-0.6%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  symbol: {
    color: Color.iOSSystemTintsDisableDark,
  },
  label3: {
    color: Color.iOSSystemTintsDisableDark,
  },
  tab4: {
    left: "74.93%",
    right: "0%",
  },
  tab3: {
    right: "24.8%",
    left: "50.13%",
  },
  tab2: {
    right: "49.87%",
    left: "25.07%",
  },
  symbol3: {
    color: Color.iOSSystemGraysSystemGray6Dark,
  },
  label6: {
    color: Color.iOSSystemGraysSystemGray6Dark,
  },
  tab1: {
    right: "74.93%",
    left: "0%",
  },
  tabBar: {
    top: 729,
    height: 83,
  },
  feed: {
    backgroundColor: Color.iOSSystemBackgroundsLightPrimary,
    flex: 1,
    height: 812,
  },
});

export default Feed;
