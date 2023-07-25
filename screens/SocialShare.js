import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const SocialShare = () => {
  return (
    <View style={[styles.socialShare, styles.socialShareLayout]}>
      <View style={styles.more}>
        <Image
          style={styles.imageIcon}
          contentFit="cover"
          source={require("../assets/image.png")}
        />
        <Image
          style={[styles.imageIcon1, styles.imageIconLayout]}
          contentFit="cover"
          source={require("../assets/image1.png")}
        />
        <Image
          style={[styles.imageIcon2, styles.imageIconLayout]}
          contentFit="cover"
          source={require("../assets/image2.png")}
        />
        <View style={styles.sectionHeadersLarge}>
          <View style={[styles.background, styles.backgroundPosition]}>
            <View style={[styles.color, styles.backgroundPosition]} />
          </View>
          <View style={styles.seperatorTop}>
            <View style={styles.color1} />
          </View>
          <View style={[styles.actionRight, styles.backgroundPosition]}>
            <View style={[styles.label, styles.labelLayout]}>
              <Text style={[styles.label1, styles.label1Typo]}>See All</Text>
            </View>
          </View>
          <Text style={[styles.heading, styles.symbolFlexBox1]}>
            More @john_a
          </Text>
        </View>
      </View>
      <View style={[styles.post, styles.postLayout]}>
        <View style={[styles.background1, styles.postLayout]}>
          <View style={[styles.color, styles.backgroundPosition]} />
        </View>
        <View style={[styles.rowComment, styles.rowLayout]}>
          <View style={[styles.background, styles.backgroundPosition]}>
            <View style={[styles.color, styles.backgroundPosition]} />
          </View>
          <View style={[styles.actionImage, styles.actionPosition1]}>
            <Image
              style={[styles.platterIcon, styles.platterIconLayout]}
              contentFit="cover"
              source={require("../assets/platter.png")}
            />
            <Text style={[styles.symbol, styles.timeFlexBox]}>􀎸</Text>
          </View>
          <View style={[styles.actionImage1, styles.actionPosition1]}>
            <Image
              style={[styles.platterIcon1, styles.platterIconLayout]}
              contentFit="cover"
              source={require("../assets/platter.png")}
            />
            <Text style={[styles.symbol, styles.timeFlexBox]}>􀋡</Text>
          </View>
          <Text style={[styles.comment, styles.timeLayout]}>
            Leave comment...
          </Text>
          <Image
            style={styles.placeholderIcon}
            contentFit="cover"
            source={require("../assets/placeholder.png")}
          />
        </View>
        <View style={[styles.description, styles.descriptionLayout]}>
          <Text style={[styles.description1, styles.descriptionLayout]}>
            I recently understood the words of my friend John Abott about music.
          </Text>
          <Text style={[styles.text, styles.textTypo]}>1420</Text>
          <Text style={[styles.text1, styles.textTypo]}>116</Text>
          <Text style={[styles.likes, styles.textPosition]}>likes</Text>
          <Text style={[styles.comments, styles.textPosition]}>comments</Text>
          <Text style={[styles.text2, styles.textPosition]}>{` · `}</Text>
          <Text style={[styles.nickname, styles.symbolFlexBox1]}>@john_a</Text>
        </View>
        <View style={[styles.actionReply, styles.actionPosition]}>
          <Text style={[styles.symbol2, styles.symbolFlexBox1]}>
            <Text style={styles.text3}>􀉌</Text>
            <Text style={styles.reply}> Reply</Text>
          </Text>
        </View>
        <View style={[styles.actionComment, styles.actionPosition]}>
          <Text style={[styles.symbol3, styles.label1Typo]}>􀉞</Text>
        </View>
        <View style={[styles.actionLike, styles.actionPosition]}>
          <Text style={[styles.symbol4, styles.symbolFlexBox1]}>
            <Text style={styles.text3}>􀊵</Text>
            <Text style={styles.reply}> Like</Text>
          </Text>
        </View>
        <Image
          style={[styles.imageIcon3, styles.barLayout]}
          contentFit="cover"
          source={require("../assets/image3.png")}
        />
        <View style={[styles.rowUser, styles.rowLayout]}>
          <View style={[styles.buttonMore, styles.backgroundPosition]}>
            <Text style={[styles.symbol5, styles.symbolFlexBox]}>􀍠</Text>
          </View>
          <Image
            style={styles.placeholderIcon1}
            contentFit="cover"
            source={require("../assets/placeholder1.png")}
          />
          <Text style={[styles.subtitle, styles.titlePosition]}>
            @jordi_m · 2h ago
          </Text>
          <Text style={[styles.title, styles.titlePosition]}>Jordi Moreno</Text>
          <Text style={[styles.official, styles.textTypo]}>􀇻</Text>
        </View>
      </View>
      <View style={[styles.tabBar, styles.barLayout]}>
        <Image
          style={[styles.backgroundIcon, styles.platterIconLayout]}
          contentFit="cover"
          source={require("../assets/background.png")}
        />
        <View style={[styles.tab4, styles.tabLayout]}>
          <Text style={[styles.symbol6, styles.symbolTypo]}>􀉭</Text>
          <Text style={[styles.label2, styles.labelPosition]}>Profile</Text>
        </View>
        <View style={[styles.tab3, styles.tabLayout]}>
          <Text style={[styles.symbol7, styles.symbolTypo]}>􀐋</Text>
          <Text style={[styles.label3, styles.labelPosition]}>Library</Text>
        </View>
        <View style={[styles.tab2, styles.tabLayout]}>
          <Text style={[styles.symbol6, styles.symbolTypo]}>􀦇</Text>
          <Text style={[styles.label2, styles.labelPosition]}>Browse</Text>
        </View>
        <View style={[styles.tab1, styles.tabLayout]}>
          <Text style={[styles.symbol6, styles.symbolTypo]}>􀎞</Text>
          <Text style={[styles.label2, styles.labelPosition]}>Home</Text>
        </View>
      </View>
      <View style={[styles.navigationBar, styles.barLayout]}>
        <Image
          style={[styles.backgroundIcon1, styles.platterIconLayout]}
          contentFit="cover"
          source={require("../assets/background1.png")}
        />
        <View
          style={[styles.barsnavigationBarsxrightg, styles.leftAccessoryLayout]}
        >
          <View style={[styles.button1, styles.button1Layout]}>
            <Text style={[styles.symbol10, styles.button1Layout]}>􀈂</Text>
          </View>
        </View>
        <View style={[styles.leftAccessory, styles.leftAccessoryLayout]}>
          <Text style={[styles.back, styles.backPosition]}>Back</Text>
          <Text style={[styles.chevron, styles.backPosition]}>􀆉</Text>
        </View>
        <Text style={[styles.title1, styles.textTypo]}>Post</Text>
      </View>
      <View style={[styles.homeIndicator, styles.barLayout]}>
        <View style={[styles.background, styles.backgroundPosition]} />
        <View style={styles.seperator} />
      </View>
      <View style={[styles.statusBar, styles.labelLayout]}>
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
            style={[styles.barsstatusBariphonextime, styles.socialShareLayout]}
          >
            <Text style={[styles.time, styles.textTypo]}>9:41</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  socialShareLayout: {
    overflow: "hidden",
    width: "100%",
  },
  imageIconLayout: {
    height: 125,
    width: 125,
    left: 282,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  backgroundPosition: {
    bottom: "0%",
    right: "0%",
  },
  labelLayout: {
    height: 44,
    position: "absolute",
  },
  label1Typo: {
    textAlign: "right",
    fontFamily: FontFamily.bodyBody17,
    lineHeight: 22,
    letterSpacing: 0,
    fontSize: FontSize.bodyBody17_size,
    position: "absolute",
  },
  symbolFlexBox1: {
    textAlign: "left",
    letterSpacing: 0,
  },
  postLayout: {
    height: 455,
    width: 375,
    left: 0,
    position: "absolute",
  },
  rowLayout: {
    height: "9.67%",
    position: "absolute",
  },
  actionPosition1: {
    bottom: "9.09%",
    top: "9.09%",
    width: "9.6%",
    height: "81.82%",
    position: "absolute",
  },
  platterIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  timeFlexBox: {
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",
  },
  timeLayout: {
    lineHeight: 20,
    fontSize: FontSize.headlineSubheadline15_size,
  },
  descriptionLayout: {
    width: 343,
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.largeTitle34,
    fontWeight: "500",
  },
  textPosition: {
    lineHeight: 21,
    fontSize: FontSize.calloutCallout16_size,
    marginTop: -33.5,
    textAlign: "left",
    color: Color.iOSSystemBackgroundsIOSSystemLabelsLightPrimary,
    top: "50%",
    letterSpacing: 0,
    position: "absolute",
  },
  actionPosition: {
    height: 22,
    top: 292,
    position: "absolute",
  },
  barLayout: {
    width: 375,
    left: 0,
  },
  symbolFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.headlineSubheadline151,
    textAlign: "center",
    lineHeight: 22,
    letterSpacing: 0,
    fontSize: FontSize.bodyBody17_size,
  },
  titlePosition: {
    left: 52,
    textAlign: "left",
    fontFamily: FontFamily.bodyBody17,
    letterSpacing: 0,
    position: "absolute",
  },
  tabLayout: {
    width: "25.07%",
    height: 50,
    top: 0,
    position: "absolute",
  },
  symbolTypo: {
    fontSize: FontSize.size_lg,
    left: "24.47%",
    top: "6%",
    width: "51.06%",
    height: "64%",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.headlineSubheadline151,
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",
  },
  labelPosition: {
    lineHeight: 16,
    fontSize: FontSize.captionCaption112_size,
    top: "66%",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  leftAccessoryLayout: {
    width: 180,
    height: 44,
    bottom: 0,
    position: "absolute",
  },
  button1Layout: {
    width: 44,
    height: 44,
    position: "absolute",
  },
  backPosition: {
    top: 10,
    textAlign: "left",
    color: Color.iOSSystemGraysSystemGray6Dark,
    lineHeight: 22,
    position: "absolute",
  },
  imageIcon: {
    width: 258,
    height: 258,
    borderRadius: Border.br_3xs,
    left: 16,
    top: 50,
    position: "absolute",
  },
  imageIcon1: {
    top: 50,
    height: 125,
    width: 125,
    left: 282,
  },
  imageIcon2: {
    top: 183,
  },
  color: {
    backgroundColor: Color.iOSSystemBackgroundsLightPrimary,
    left: "0%",
    top: "0%",
    height: "100%",
    bottom: "0%",
    position: "absolute",
    width: "100%",
  },
  background: {
    left: "0%",
    top: "0%",
    height: "100%",
    bottom: "0%",
    position: "absolute",
    width: "100%",
  },
  color1: {
    backgroundColor: Color.iOSSystemSeperatorsLightNonOpaque,
    height: 1,
    right: 0,
    top: 1,
    left: 0,
    position: "absolute",
  },
  seperatorTop: {
    height: "2%",
    width: "91.47%",
    top: "2%",
    right: "4.27%",
    bottom: "96%",
    left: "4.27%",
    position: "absolute",
  },
  label1: {
    top: 11,
    color: Color.iOSSystemGraysSystemGray6Dark,
    right: 0,
  },
  label: {
    width: 164,
    bottom: 0,
    right: 16,
  },
  actionRight: {
    height: "88%",
    width: "48%",
    top: "12%",
    left: "52%",
    position: "absolute",
  },
  heading: {
    marginTop: -12,
    fontSize: FontSize.titleTitle320_size,
    lineHeight: 24,
    color: Color.iOSSystemBackgroundsIOSSystemLabelsLightPrimary,
    top: "50%",
    fontFamily: FontFamily.bodyBody17,
    left: 16,
    position: "absolute",
  },
  sectionHeadersLarge: {
    height: 50,
    width: 375,
    top: 0,
    left: 0,
    position: "absolute",
  },
  more: {
    top: 552,
    width: 407,
    height: 308,
    left: 0,
    position: "absolute",
  },
  background1: {
    top: 0,
  },
  platterIcon: {
    right: "-925%",
    left: "925%",
    bottom: "-1377.78%",
    top: "1377.78%",
    maxHeight: "100%",
    maxWidth: "100%",
    height: "100%",
    width: "100%",
  },
  symbol: {
    marginTop: -11,
    color: Color.iOSSystemBackgroundsIOSSystemLabelsLightSecondary,
    top: "50%",
    fontFamily: FontFamily.bodyBody17,
    lineHeight: 22,
    fontSize: FontSize.bodyBody17_size,
    left: "0%",
    width: "100%",
  },
  actionImage: {
    right: "1.6%",
    left: "88.8%",
  },
  platterIcon1: {
    right: "-825%",
    left: "825%",
    bottom: "-1377.78%",
    top: "1377.78%",
    maxHeight: "100%",
    maxWidth: "100%",
    height: "100%",
    width: "100%",
  },
  actionImage1: {
    right: "11.2%",
    left: "79.2%",
  },
  comment: {
    marginTop: -10,
    left: "15.47%",
    color: Color.iOSSystemBackgroundsIOSSystemLabelsLightSecondary,
    textAlign: "left",
    letterSpacing: 0,
    top: "50%",
    fontFamily: FontFamily.bodyBody17,
    position: "absolute",
  },
  placeholderIcon: {
    top: 7,
    left: 14,
    width: 30,
    height: 30,
    position: "absolute",
  },
  rowComment: {
    top: "88.57%",
    bottom: "1.76%",
    left: "0%",
    right: "0%",
    width: "100%",
  },
  description1: {
    top: 23,
    textAlign: "left",
    letterSpacing: 0,
    color: Color.iOSSystemBackgroundsIOSSystemLabelsLightPrimary,
    fontFamily: FontFamily.bodyBody17,
    lineHeight: 22,
    fontSize: FontSize.bodyBody17_size,
    left: 0,
  },
  text: {
    lineHeight: 21,
    fontSize: FontSize.calloutCallout16_size,
    marginTop: -33.5,
    textAlign: "left",
    color: Color.iOSSystemBackgroundsIOSSystemLabelsLightPrimary,
    top: "50%",
    letterSpacing: 0,
    position: "absolute",
    left: "0%",
  },
  text1: {
    left: "25.66%",
    lineHeight: 21,
    fontSize: FontSize.calloutCallout16_size,
    marginTop: -33.5,
    textAlign: "left",
    color: Color.iOSSystemBackgroundsIOSSystemLabelsLightPrimary,
    top: "50%",
    letterSpacing: 0,
    position: "absolute",
  },
  likes: {
    left: "12.24%",
    fontFamily: FontFamily.bodyBody17,
  },
  comments: {
    left: "34.11%",
    fontFamily: FontFamily.bodyBody17,
  },
  text2: {
    left: "21.87%",
    fontFamily: FontFamily.bodyBody17,
  },
  nickname: {
    marginTop: 11.5,
    left: "27.41%",
    top: "50%",
    color: Color.iOSSystemGraysSystemGray6Dark,
    fontFamily: FontFamily.bodyBody17,
    lineHeight: 22,
    fontSize: FontSize.bodyBody17_size,
    position: "absolute",
  },
  description: {
    top: 328,
    height: 67,
    left: 16,
  },
  text3: {
    fontFamily: FontFamily.sFCompactDisplay,
  },
  reply: {
    fontFamily: FontFamily.bodyBody17,
  },
  symbol2: {
    color: Color.iOSSystemBackgroundsIOSSystemLabelsLightSecondary,
    lineHeight: 22,
    fontSize: FontSize.bodyBody17_size,
    top: 0,
    left: 0,
    position: "absolute",
  },
  actionReply: {
    right: 206,
    left: 102,
  },
  symbol3: {
    color: Color.iOSSystemBackgroundsIOSSystemLabelsLightSecondary,
    top: 0,
    left: 0,
  },
  actionComment: {
    left: 342,
    right: 16,
  },
  symbol4: {
    color: Color.iOSSystemTintsSystemRedLight,
    lineHeight: 22,
    fontSize: FontSize.bodyBody17_size,
    top: 0,
    left: 0,
    position: "absolute",
  },
  actionLike: {
    right: 304,
    left: 17,
  },
  imageIcon3: {
    top: 66,
    height: 210,
    position: "absolute",
  },
  symbol5: {
    height: "63.64%",
    width: "63.64%",
    top: "18.18%",
    left: "18.18%",
    color: Color.iOSSystemBackgroundsIOSSystemLabelsLightSecondary,
    position: "absolute",
  },
  buttonMore: {
    width: "12.43%",
    left: "87.57%",
    top: "0%",
    height: "100%",
    bottom: "0%",
    position: "absolute",
  },
  placeholderIcon1: {
    top: 2,
    width: 40,
    height: 40,
    left: 0,
    position: "absolute",
  },
  subtitle: {
    width: 233,
    top: 23,
    lineHeight: 20,
    fontSize: FontSize.headlineSubheadline15_size,
    color: Color.iOSSystemBackgroundsIOSSystemLabelsLightSecondary,
  },
  title: {
    color: Color.iOSSystemBackgroundsIOSSystemLabelsLightPrimary,
    lineHeight: 22,
    fontSize: FontSize.bodyBody17_size,
    top: 1,
  },
  official: {
    top: 3,
    left: 190,
    fontSize: FontSize.footnoteFootnote13_size,
    lineHeight: 18,
    textAlign: "left",
    letterSpacing: 0,
    color: Color.iOSSystemGraysSystemGray6Dark,
    position: "absolute",
  },
  rowUser: {
    width: "94.4%",
    top: "2.2%",
    right: "1.33%",
    bottom: "88.13%",
    left: "4.27%",
  },
  post: {
    top: 89,
  },
  backgroundIcon: {
    height: "100.6%",
    top: "-0.6%",
    left: "0%",
    bottom: "0%",
    right: "0%",
    width: "100%",
  },
  symbol6: {
    color: Color.iOSSystemTintsDisableLight,
  },
  label2: {
    color: Color.iOSSystemTintsDisableLight,
    fontFamily: FontFamily.bodyBody17,
  },
  tab4: {
    left: "74.93%",
    right: "0%",
  },
  symbol7: {
    color: Color.iOSSystemGraysSystemGray6Dark,
  },
  label3: {
    fontFamily: FontFamily.largeTitle34,
    fontWeight: "500",
    color: Color.iOSSystemGraysSystemGray6Dark,
  },
  tab3: {
    right: "24.8%",
    left: "50.13%",
  },
  tab2: {
    right: "49.87%",
    left: "25.07%",
  },
  tab1: {
    right: "74.93%",
    left: "0%",
  },
  tabBar: {
    top: 729,
    height: 83,
    position: "absolute",
  },
  backgroundIcon1: {
    bottom: 0,
    right: 0,
    top: 0,
    left: 0,
  },
  symbol10: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.headlineSubheadline151,
    textAlign: "center",
    lineHeight: 22,
    letterSpacing: 0,
    fontSize: FontSize.bodyBody17_size,
    color: Color.iOSSystemGraysSystemGray6Dark,
    top: 0,
    left: 0,
  },
  button1: {
    right: 5,
    bottom: 0,
  },
  barsnavigationBarsxrightg: {
    right: 0,
  },
  back: {
    left: 26,
    fontFamily: FontFamily.bodyBody17,
    top: 10,
    letterSpacing: 0,
    fontSize: FontSize.bodyBody17_size,
  },
  chevron: {
    left: 6,
    fontSize: FontSize.size_5xl,
    letterSpacing: -1,
    fontFamily: FontFamily.sFProText,
    fontWeight: "500",
    top: 10,
  },
  leftAccessory: {
    left: 0,
  },
  title1: {
    bottom: 12,
    left: "45.07%",
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",
    color: Color.iOSSystemBackgroundsIOSSystemLabelsLightPrimary,
    lineHeight: 22,
    fontSize: FontSize.bodyBody17_size,
  },
  navigationBar: {
    height: 88,
    top: 0,
    position: "absolute",
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
    lineHeight: 20,
    fontSize: FontSize.headlineSubheadline15_size,
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",
    color: Color.iOSSystemBackgroundsIOSSystemLabelsLightPrimary,
    top: "50%",
    left: 0,
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
    width: 375,
    left: 0,
    top: 0,
  },
  socialShare: {
    backgroundColor: Color.iOSSystemBackgroundsLightSecondary,
    flex: 1,
    height: 812,
  },
});

export default SocialShare;
