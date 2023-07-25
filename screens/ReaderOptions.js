import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";

const ReaderOptions = () => {
  return (
    <View style={styles.readerOptions}>
      <Text style={styles.of245}>158 of 245</Text>
      <View style={styles.content}>
        <Text style={[styles.chapterI, styles.mTypo]}>Chapter IV</Text>
        <Text
          style={styles.salvationOvercomeT}
        >{`Salvation overcome truth superiority free selfish ascetic fearful evil sexuality grandeur transvaluation. `}</Text>
        <Text style={styles.salvationOvercomeT1}>􀟇􀟇􀟇</Text>
        <Text style={styles.marvelousJusticeHoContainer}>
          <Text>
            <Text style={[styles.m, styles.mTypo]}>M</Text>
            <Text style={styles.arvelousJusticeHope}>
              arvelous justice hope convictions oneself against war inexpedient
              against ideal insofar spirit. Salvation depths madness passion
              prejudice disgust play against. Overcome good decrepit oneself
              horror oneself depths ultimate hope will depths ascetic. Reason
              endless truth victorious superiority self justice.
            </Text>
          </Text>
          <Text style={styles.arvelousJusticeHope}> </Text>
          <Text style={styles.arvelousJusticeHope}>
            Mountains good play overcome free abstract dead marvelous against
            evil against ultimate. Disgust faith revaluation disgust virtues.
            Decieve virtues justice good deceptions. Abstract horror aversion
            burying contradict will free grandeur faith good suicide battle
            ocean. Oneself gains dead ultimate suicide hope christian insofar
            endless holiest zarathustra snare. Overcome aversion enlightenment
            decieve disgust virtues ocean ultimate horror truth madness
            sexuality.
          </Text>
        </Text>
      </View>
      <View style={styles.navigationBar}>
        <Image
          style={[styles.backgroundIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/background9.png")}
        />
        <View style={[styles.button1, styles.buttonPosition]}>
          <Text style={[styles.symbol, styles.symbolPosition]}>􀊫</Text>
        </View>
        <View style={[styles.button11, styles.buttonPosition]}>
          <Text style={[styles.symbol, styles.symbolPosition]}>􀅐</Text>
        </View>
        <View style={[styles.button12, styles.buttonPosition]}>
          <Text style={[styles.symbol, styles.symbolPosition]}>􀆉</Text>
        </View>
        <View style={[styles.button13, styles.buttonPosition]}>
          <Text style={[styles.symbol, styles.symbolPosition]}>􀋲</Text>
        </View>
        <Text style={[styles.title, styles.timeTypo]}>{` `}</Text>
      </View>
      <View style={styles.barshomeIndicatordark}>
        <View style={[styles.background, styles.colorIconPosition]} />
        <View style={[styles.seperator, styles.colorBg1]} />
      </View>
      <View style={[styles.barsstatusBariphoneXdark, styles.symbolPosition]}>
        <View style={[styles.background, styles.colorIconPosition]} />
        <Image
          style={styles.batteryIcon}
          contentFit="cover"
          source={require("../assets/battery2.png")}
        />
        <Image
          style={styles.wifiIcon}
          contentFit="cover"
          source={require("../assets/wifi4.png")}
        />
        <Image
          style={styles.mobileSignalIcon}
          contentFit="cover"
          source={require("../assets/mobile-signal2.png")}
        />
        <View style={styles.timeStyle}>
          <Text style={[styles.time, styles.timeTypo]}>9:41</Text>
        </View>
      </View>
      <View style={styles.progressLine}>
        <View style={[styles.track, styles.trackLayout]} />
        <View style={[styles.fill, styles.trackLayout]} />
        <Image
          style={[styles.ovalIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/oval.png")}
        />
      </View>
      <View style={[styles.popover, styles.popoverPosition]}>
        <View style={[styles.popoverContent, styles.colorIconPosition]}>
          <Image
            style={[styles.maskIcon, styles.maskIconLayout]}
            contentFit="cover"
            source={require("../assets/mask2.png")}
          />
          <Image
            style={[styles.rowBackground, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/row--background.png")}
          />
          <View style={[styles.rowFonts, styles.rowFontsPosition]}>
            <View style={[styles.background, styles.colorIconPosition]}>
              <View style={[styles.color, styles.colorBg1]} />
            </View>
            <View style={[styles.seperator1, styles.popoverPosition]}>
              <View style={[styles.color1, styles.colorBg]}>
                <View style={[styles.separator, styles.separatorPosition]} />
                <View
                  style={[styles.leftInsetMask, styles.separatorPosition]}
                />
              </View>
            </View>
            <View
              style={[
                styles.controlstableViewrowxacce,
                styles.leftDetailPosition,
              ]}
            >
              <View style={[styles.disclosure, styles.trackPosition]}>
                <Text style={[styles.disclosure1, styles.disclosureTypo]}>
                  􀆊
                </Text>
              </View>
              <View style={styles.detail}>
                <Text style={[styles.detail1, styles.detailPosition]}>
                  Times
                </Text>
              </View>
            </View>
            <View style={[styles.leftDetail, styles.leftDetailPosition]}>
              <View style={[styles.title1, styles.trackPosition]}>
                <Text style={[styles.title2, styles.titlePosition]}>Fonts</Text>
              </View>
            </View>
          </View>
          <View style={styles.seperator2}>
            <View style={[styles.color2, styles.colorBg]} />
          </View>
          <View style={styles.rowsFontSize}>
            <View style={[styles.rowDecreaseFontSize, styles.rowLayout]}>
              <View style={[styles.background, styles.colorIconPosition]}>
                <View style={[styles.color, styles.colorBg1]} />
              </View>
              <Text style={[styles.a, styles.aTypo]}>A</Text>
            </View>
            <View style={[styles.rowIncreaseFontSize, styles.rowLayout]}>
              <View style={[styles.background, styles.colorIconPosition]}>
                <View style={[styles.color, styles.colorBg1]} />
              </View>
              <Text style={[styles.a1, styles.a1Position]}>A</Text>
            </View>
            <View style={styles.seperatorPosition}>
              <View style={[styles.color2, styles.colorBg]} />
            </View>
            <View style={styles.seperator4}>
              <View style={[styles.color2, styles.colorBg]} />
            </View>
            <View style={styles.seperator5}>
              <View style={[styles.color2, styles.colorBg]} />
            </View>
          </View>
          <View style={[styles.slidersGlyphs, styles.rowFontsPosition]}>
            <View style={[styles.background, styles.colorIconPosition]}>
              <View style={[styles.color, styles.colorBg1]} />
            </View>
            <View style={[styles.slider, styles.colorIconLayout]}>
              <View style={[styles.background6, styles.popoverPosition]}>
                <View style={[styles.color, styles.colorBg1]} />
              </View>
              <View style={[styles.track1, styles.trackPosition]} />
              <View style={[styles.fill1, styles.fillPosition]} />
              <Image
                style={[styles.knobIcon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/knob1.png")}
              />
            </View>
            <Text style={[styles.leftIcon, styles.iconTypo]}>􀆬</Text>
            <Text style={[styles.rightIcon, styles.iconTypo]}>􀆮</Text>
          </View>
          <View style={styles.seperator6}>
            <View style={[styles.color2, styles.colorBg]} />
          </View>
        </View>
        <Image
          style={[styles.popoverPointerIcon, styles.popoverIconLayout]}
          contentFit="cover"
          source={require("../assets/popover-pointer.png")}
        />
      </View>
      <View style={[styles.popover1, styles.popoverLayout]}>
        <View style={[styles.popoverContent, styles.colorIconPosition]}>
          <Image
            style={[styles.maskIcon1, styles.maskIconLayout]}
            contentFit="cover"
            source={require("../assets/mask3.png")}
          />
          <Image
            style={[styles.rowBackground, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/row--background1.png")}
          />
          <View style={[styles.rowFonts, styles.rowFontsPosition]}>
            <View style={[styles.background, styles.colorIconPosition]}>
              <View style={[styles.color11, styles.colorIconPosition]} />
            </View>
            <View style={[styles.seperator1, styles.popoverPosition]}>
              <View style={[styles.color1, styles.colorBg]}>
                <View style={[styles.separator, styles.separatorPosition]} />
                <View
                  style={[styles.leftInsetMask, styles.separatorPosition]}
                />
              </View>
            </View>
            <View
              style={[
                styles.controlstableViewrowxacce,
                styles.leftDetailPosition,
              ]}
            >
              <View style={[styles.disclosure, styles.trackPosition]}>
                <Text style={[styles.disclosure3, styles.disclosureTypo]}>
                  􀆊
                </Text>
              </View>
              <View style={styles.detail}>
                <Text style={[styles.detail3, styles.detailPosition]}>
                  Times
                </Text>
              </View>
            </View>
            <View style={[styles.leftDetail, styles.leftDetailPosition]}>
              <View style={[styles.title1, styles.trackPosition]}>
                <Text style={[styles.title4, styles.titlePosition]}>Fonts</Text>
              </View>
            </View>
          </View>
          <View style={styles.seperator2}>
            <View style={[styles.color2, styles.colorBg]} />
          </View>
          <View style={styles.rowsFontSize}>
            <View style={[styles.rowDecreaseFontSize, styles.rowLayout]}>
              <View style={[styles.background, styles.colorIconPosition]}>
                <View style={[styles.color11, styles.colorIconPosition]} />
              </View>
              <Text style={[styles.a2, styles.aTypo]}>A</Text>
            </View>
            <View style={[styles.rowIncreaseFontSize, styles.rowLayout]}>
              <View style={[styles.background, styles.colorIconPosition]}>
                <View style={[styles.color11, styles.colorIconPosition]} />
              </View>
              <Text style={[styles.a3, styles.a1Position]}>A</Text>
            </View>
            <View style={styles.seperatorPosition}>
              <View style={styles.color16} />
            </View>
            <View style={styles.seperator4}>
              <View style={styles.color16} />
            </View>
            <View style={styles.seperator5}>
              <View style={[styles.color2, styles.colorBg]} />
            </View>
          </View>
          <View style={[styles.slidersGlyphs, styles.rowFontsPosition]}>
            <View style={[styles.background, styles.colorIconPosition]}>
              <View style={[styles.color11, styles.colorIconPosition]} />
            </View>
            <View style={[styles.slider, styles.colorIconLayout]}>
              <View style={[styles.background6, styles.popoverPosition]}>
                <View style={[styles.color, styles.colorBg1]} />
              </View>
              <View style={[styles.track2, styles.trackPosition]} />
              <View style={[styles.fill2, styles.fillPosition]} />
              <Image
                style={[styles.knobIcon1, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/knob2.png")}
              />
            </View>
            <Text style={[styles.leftIcon1, styles.iconTypo1]}>􀆬</Text>
            <Text style={[styles.rightIcon1, styles.iconTypo1]}>􀆮</Text>
          </View>
          <View style={styles.seperator6}>
            <View style={[styles.color2, styles.colorBg]} />
          </View>
        </View>
        <Image
          style={[styles.popoverPointerIcon1, styles.popoverIconLayout]}
          contentFit="cover"
          source={require("../assets/popover-pointer1.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mTypo: {
    letterSpacing: 0,
    fontFamily: FontFamily.largeTitle34,
    fontWeight: "500",
  },
  iconLayout: {
    maxHeight: "100%",
    position: "absolute",
  },
  buttonPosition: {
    width: "11.73%",
    height: "50%",
    bottom: "0%",
    top: "50%",
    position: "absolute",
  },
  symbolPosition: {
    height: 44,
    left: 0,
    top: 0,
    position: "absolute",
  },
  timeTypo: {
    fontFamily: FontFamily.headlineSubheadline151,
    fontWeight: "600",
    letterSpacing: 0,
    textAlign: "center",
    position: "absolute",
  },
  colorIconPosition: {
    right: "0%",
    left: "0%",
    width: "100%",
  },
  colorBg1: {
    backgroundColor: Color.iOSSystemBackgroundsLightPrimary,
    position: "absolute",
  },
  trackLayout: {
    height: 2,
    borderRadius: Border.br_10xs,
    marginTop: -1,
    top: "50%",
  },
  popoverPosition: {
    display: "none",
    position: "absolute",
  },
  maskIconLayout: {
    borderRadius: Border.br_3xs,
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  rowFontsPosition: {
    height: "22%",
    right: "0%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  colorBg: {
    backgroundColor: Color.iOSSystemSeperatorsLightNonOpaque,
    height: 1,
  },
  separatorPosition: {
    backgroundColor: Color.silver,
    height: 1,
    left: 0,
    position: "absolute",
  },
  leftDetailPosition: {
    width: 359,
    bottom: 0,
    top: 0,
    position: "absolute",
  },
  trackPosition: {
    left: 16,
    right: 16,
    position: "absolute",
  },
  disclosureTypo: {
    height: 22,
    width: 10,
    right: -1,
    top: 11,
    fontFamily: FontFamily.headlineSubheadline151,
    fontWeight: "600",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    lineHeight: 22,
    fontSize: FontSize.bodyBody17_size,
    letterSpacing: 0,
    textAlign: "center",
    position: "absolute",
  },
  detailPosition: {
    textAlign: "right",
    marginTop: -11,
    right: 0,
    lineHeight: 22,
    fontSize: FontSize.bodyBody17_size,
    fontFamily: FontFamily.bodyBody17,
    letterSpacing: 0,
    top: "50%",
    position: "absolute",
  },
  titlePosition: {
    marginTop: -11,
    lineHeight: 22,
    fontSize: FontSize.bodyBody17_size,
    left: 0,
    fontFamily: FontFamily.bodyBody17,
    textAlign: "left",
    letterSpacing: 0,
    top: "50%",
    position: "absolute",
  },
  rowLayout: {
    width: 124,
    top: 1,
    height: 44,
    position: "absolute",
  },
  aTypo: {
    fontFamily: FontFamily.sFProRounded,
    lineHeight: 24,
    fontSize: FontSize.titleTitle320_size,
    left: "48.39%",
    marginTop: -12,
    letterSpacing: 0,
    textAlign: "center",
    fontWeight: "500",
    top: "50%",
    position: "absolute",
  },
  a1Position: {
    left: "46.77%",
    marginTop: -17,
    fontFamily: FontFamily.sFProRounded,
    letterSpacing: 0,
    fontSize: FontSize.titleTitle128_size,
    textAlign: "center",
    top: "50%",
    position: "absolute",
  },
  colorIconLayout: {
    height: "100%",
    top: "0%",
  },
  fillPosition: {
    left: "4.27%",
    right: "50.13%",
    width: "45.6%",
    height: 2,
    borderRadius: Border.br_10xs,
    marginTop: -1,
    top: "50%",
    position: "absolute",
  },
  iconTypo: {
    color: Color.iOSSystemGraysSystemGray2Light,
    top: 10,
    lineHeight: 24,
    fontSize: FontSize.titleTitle320_size,
    letterSpacing: 0,
    textAlign: "center",
    fontFamily: FontFamily.largeTitle34,
    fontWeight: "500",
    position: "absolute",
  },
  popoverIconLayout: {
    height: 23,
    width: 34,
    left: 164,
    position: "absolute",
  },
  popoverLayout: {
    height: 214,
    left: 111,
    top: 74,
    width: 248,
  },
  iconTypo1: {
    top: 10,
    lineHeight: 24,
    fontSize: FontSize.titleTitle320_size,
    fontFamily: FontFamily.sFCompactDisplay,
    letterSpacing: 0,
    textAlign: "center",
    color: Color.iOSSystemBackgroundsLightPrimary,
    fontWeight: "500",
    position: "absolute",
  },
  of245: {
    marginTop: 331,
    left: "41.87%",
    fontSize: FontSize.captionCaption112_size,
    lineHeight: 16,
    textAlign: "center",
    fontFamily: FontFamily.largeTitle34,
    fontWeight: "500",
    color: Color.iOSSystemBackgroundsLightPrimary,
    top: "50%",
    position: "absolute",
  },
  chapterI: {
    marginTop: -321,
    left: "26.37%",
    fontSize: FontSize.titleTitle128_size,
    letterSpacing: 0,
    textAlign: "center",
    color: Color.iOSSystemBackgroundsLightPrimary,
    top: "50%",
    position: "absolute",
  },
  salvationOvercomeT: {
    marginTop: -218,
    lineHeight: 21,
    fontSize: FontSize.calloutCallout16_size,
    left: "0%",
    letterSpacing: 0,
    textAlign: "center",
    color: Color.iOSSystemBackgroundsLightPrimary,
    fontFamily: FontFamily.largeTitle34,
    fontWeight: "500",
    top: "50%",
    position: "absolute",
    width: "100%",
  },
  salvationOvercomeT1: {
    marginTop: -263,
    color: Color.plum,
    fontFamily: FontFamily.sFCompactDisplay,
    lineHeight: 21,
    fontSize: FontSize.calloutCallout16_size,
    left: "0%",
    letterSpacing: 0,
    textAlign: "center",
    fontWeight: "500",
    top: "50%",
    position: "absolute",
    width: "100%",
  },
  m: {
    fontSize: FontSize.largeTitle34_size,
    lineHeight: 41,
  },
  arvelousJusticeHope: {
    fontFamily: FontFamily.bodyBody17,
    lineHeight: 21,
    fontSize: FontSize.calloutCallout16_size,
    letterSpacing: 0,
  },
  marvelousJusticeHoContainer: {
    marginTop: -141,
    height: 462,
    textAlign: "left",
    left: "0%",
    color: Color.iOSSystemBackgroundsLightPrimary,
    top: "50%",
    position: "absolute",
    width: "100%",
  },
  content: {
    top: 87,
    left: 32,
    width: 311,
    height: 642,
    position: "absolute",
  },
  backgroundIcon: {
    maxWidth: "100%",
    maxHeight: "100%",
    bottom: "0%",
    overflow: "hidden",
    right: "0%",
    left: "0%",
    width: "100%",
    top: "0%",
    height: "100%",
  },
  symbol: {
    width: 44,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    height: 44,
    color: Color.iOSSystemGraysSystemGray6Dark,
    lineHeight: 22,
    fontSize: FontSize.bodyBody17_size,
    fontFamily: FontFamily.bodyBody17,
    letterSpacing: 0,
    textAlign: "center",
  },
  button1: {
    right: "1.33%",
    left: "86.93%",
  },
  button11: {
    right: "16.27%",
    left: "72%",
  },
  button12: {
    right: "86.93%",
    left: "1.33%",
  },
  button13: {
    right: "72%",
    left: "16.27%",
  },
  title: {
    bottom: 12,
    left: "49.87%",
    color: Color.iOSSystemGraysSystemGray6Dark,
    lineHeight: 22,
    fontSize: FontSize.bodyBody17_size,
    fontWeight: "600",
  },
  navigationBar: {
    height: 88,
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
  },
  background: {
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  seperator: {
    marginLeft: -66.5,
    bottom: 10,
    borderRadius: Border.br_81xl,
    width: 134,
    height: 5,
    left: "50%",
  },
  barshomeIndicatordark: {
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
    marginTop: -3.5,
    fontSize: FontSize.headlineSubheadline15_size,
    width: 54,
    left: 0,
    color: Color.iOSSystemBackgroundsLightPrimary,
    top: "50%",
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
  barsstatusBariphoneXdark: {
    width: 375,
  },
  track: {
    backgroundColor: Color.iOSSystemLabelsDarkTertiary,
    right: 0,
    left: 0,
    position: "absolute",
  },
  fill: {
    width: 222,
    backgroundColor: Color.plum,
    left: 0,
    position: "absolute",
  },
  ovalIcon: {
    width: "2.99%",
    right: "32.24%",
    left: "64.78%",
    maxWidth: "100%",
    maxHeight: "100%",
    bottom: "0%",
    overflow: "hidden",
    top: "0%",
    height: "100%",
  },
  progressLine: {
    height: "1.23%",
    width: "89.33%",
    top: "94.09%",
    right: "5.33%",
    bottom: "4.68%",
    left: "5.33%",
    position: "absolute",
    overflow: "hidden",
  },
  maskIcon: {
    bottom: "0%",
    right: "0%",
    left: "0%",
    width: "100%",
    top: "0%",
    height: "100%",
  },
  rowBackground: {
    height: "30.5%",
    top: "69.5%",
    maxWidth: "100%",
    maxHeight: "100%",
    bottom: "0%",
    overflow: "hidden",
    right: "0%",
    left: "0%",
    width: "100%",
  },
  color: {
    bottom: "0%",
    right: "0%",
    left: "0%",
    width: "100%",
    top: "0%",
    height: "100%",
  },
  separator: {
    right: -16,
    top: 1,
  },
  leftInsetMask: {
    width: 16,
    top: 0,
  },
  color1: {
    width: 232,
    height: 1,
  },
  seperator1: {
    height: "2.27%",
    top: "97.73%",
    bottom: "0%",
    right: "0%",
    left: "0%",
    width: "100%",
  },
  disclosure1: {
    color: Color.iOSSystemBackgroundsIOSSystemLabelsLightTertiary,
  },
  disclosure: {
    bottom: "0%",
    top: "0%",
    height: "100%",
  },
  detail1: {
    color: Color.iOSSystemBackgroundsIOSSystemLabelsLightSecondary,
  },
  detail: {
    right: 35,
    bottom: 0,
    width: 44,
    top: 0,
    position: "absolute",
  },
  controlstableViewrowxacce: {
    right: 0,
  },
  title2: {
    color: Color.iOSSystemBackgroundsIOSSystemLabelsLightPrimary,
  },
  title1: {
    bottom: 0,
    top: 0,
  },
  leftDetail: {
    left: 0,
  },
  rowFonts: {
    top: "46%",
    bottom: "32%",
  },
  color2: {
    top: 1,
    height: 1,
    right: 0,
    left: 0,
    position: "absolute",
  },
  seperator2: {
    bottom: 64,
    height: 1,
    right: 0,
    left: 0,
    position: "absolute",
  },
  a: {
    color: Color.iOSSystemBackgroundsIOSSystemLabelsLightPrimary,
  },
  rowDecreaseFontSize: {
    left: 0,
  },
  a1: {
    color: Color.iOSSystemBackgroundsIOSSystemLabelsLightPrimary,
  },
  rowIncreaseFontSize: {
    left: 124,
  },
  seperatorPosition: {
    transform: [
      {
        rotate: "90deg",
      },
    ],
    left: 125,
    right: 79,
    bottom: 44,
    height: 1,
    position: "absolute",
  },
  seperator4: {
    bottom: 0,
    height: 1,
    right: 0,
    left: 0,
    position: "absolute",
  },
  seperator5: {
    bottom: 44,
    height: 1,
    right: 0,
    left: 0,
    position: "absolute",
  },
  rowsFontSize: {
    top: 47,
    height: 45,
    width: 248,
    left: 0,
    position: "absolute",
  },
  background6: {
    bottom: "0%",
    right: "0%",
    left: "0%",
    width: "100%",
    top: "0%",
    height: "100%",
  },
  track1: {
    backgroundColor: Color.iOSSystemFillsLightPrimary,
    height: 2,
    borderRadius: Border.br_10xs,
    marginTop: -1,
    top: "50%",
  },
  fill1: {
    backgroundColor: Color.accentLight,
  },
  knobIcon: {
    height: "63.64%",
    marginLeft: -14.5,
    top: "18.18%",
    bottom: "18.18%",
    width: 28,
    left: "50%",
  },
  slider: {
    right: 39,
    left: 40,
    bottom: "0%",
    top: "0%",
    position: "absolute",
  },
  leftIcon: {
    left: 18,
  },
  rightIcon: {
    right: 16,
    color: Color.iOSSystemGraysSystemGray2Light,
  },
  slidersGlyphs: {
    bottom: "78%",
    top: "0%",
  },
  seperator6: {
    bottom: 156,
    height: 1,
    right: 0,
    left: 0,
    position: "absolute",
  },
  popoverContent: {
    height: "93.46%",
    top: "6.54%",
    bottom: "0%",
    position: "absolute",
  },
  popoverPointerIcon: {
    top: 0,
  },
  popover: {
    height: 214,
    left: 111,
    top: 74,
    width: 248,
  },
  maskIcon1: {
    height: "180%",
    width: "138.71%",
    top: "-38%",
    right: "-6.45%",
    bottom: "-42%",
    left: "-32.26%",
  },
  color11: {
    backgroundColor: Color.gray_100,
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  disclosure3: {
    color: Color.gray_100,
  },
  detail3: {
    color: Color.iOSSystemBackgroundsLightPrimary,
  },
  title4: {
    color: Color.iOSSystemBackgroundsLightPrimary,
  },
  a2: {
    color: Color.iOSSystemBackgroundsLightPrimary,
  },
  a3: {
    color: Color.iOSSystemBackgroundsLightPrimary,
  },
  color16: {
    top: 1,
    height: 1,
    backgroundColor: Color.iOSSystemLabelsDarkTertiary,
    right: 0,
    left: 0,
    position: "absolute",
  },
  track2: {
    height: 2,
    borderRadius: Border.br_10xs,
    marginTop: -1,
    top: "50%",
    backgroundColor: Color.iOSSystemLabelsDarkTertiary,
  },
  fill2: {
    backgroundColor: Color.plum,
  },
  knobIcon1: {
    height: "102.27%",
    marginLeft: -23,
    top: "5.68%",
    bottom: "-7.95%",
    width: 45,
    left: "50%",
  },
  leftIcon1: {
    left: 17,
  },
  rightIcon1: {
    right: 14,
  },
  popoverPointerIcon1: {
    top: 2,
  },
  popover1: {
    position: "absolute",
  },
  readerOptions: {
    backgroundColor: Color.iOSSystemGraysSystemGray6Dark,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default ReaderOptions;
