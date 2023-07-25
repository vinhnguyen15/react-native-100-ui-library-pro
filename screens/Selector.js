import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Padding, Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const Selector = () => {
  return (
    <View style={styles.selector}>
      <Image
        style={styles.appIcon}
        contentFit="cover"
        source={require("../assets/-app-icon.png")}
      />
      <View style={[styles.labels, styles.labelsLayout]}>
        <View style={[styles.label, styles.labelLayout1]}>
          <Image
            style={styles.ovalIcon}
            contentFit="cover"
            source={require("../assets/oval1.png")}
          />
          <Text style={[styles.subtitle, styles.subtitleTypo]}>Design</Text>
        </View>
        <View style={[styles.label1, styles.labelPosition11]}>
          <Image
            style={styles.ovalIcon}
            contentFit="cover"
            source={require("../assets/oval1.png")}
          />
          <Text style={[styles.subtitle, styles.subtitleTypo]}>Hi-Tech</Text>
        </View>
        <View style={[styles.label2, styles.labelPosition10]}>
          <Image
            style={styles.ovalIcon}
            contentFit="cover"
            source={require("../assets/oval1.png")}
          />
          <Text style={[styles.subtitle, styles.subtitleTypo]}>Music</Text>
        </View>
        <View style={[styles.label3, styles.labelPosition9]}>
          <Image
            style={styles.ovalIcon}
            contentFit="cover"
            source={require("../assets/oval1.png")}
          />
          <Text style={[styles.subtitle, styles.subtitleTypo]}>Sport</Text>
        </View>
        <View style={[styles.label4, styles.labelPosition8]}>
          <Image
            style={styles.ovalIcon}
            contentFit="cover"
            source={require("../assets/oval1.png")}
          />
          <Text style={[styles.subtitle, styles.subtitleTypo]}>Technology</Text>
        </View>
        <View style={styles.label5}>
          <Image
            style={styles.ovalIcon}
            contentFit="cover"
            source={require("../assets/oval1.png")}
          />
          <Text style={[styles.subtitle5, styles.subtitleTypo]}>Science</Text>
        </View>
        <View style={[styles.label6, styles.labelLayout1]}>
          <Image
            style={styles.ovalIcon}
            contentFit="cover"
            source={require("../assets/oval1.png")}
          />
          <Text style={[styles.subtitle5, styles.subtitleTypo]}>Finances</Text>
        </View>
        <View style={[styles.label7, styles.labelPosition7]}>
          <Image
            style={styles.ovalIcon}
            contentFit="cover"
            source={require("../assets/oval1.png")}
          />
          <Text style={[styles.subtitle5, styles.subtitleTypo]}>Policy</Text>
        </View>
        <View style={[styles.label8, styles.labelPosition6]}>
          <Image
            style={styles.ovalIcon}
            contentFit="cover"
            source={require("../assets/oval1.png")}
          />
          <Text style={[styles.subtitle, styles.subtitleTypo]}>Biology</Text>
        </View>
        <View style={[styles.label9, styles.labelPosition7]}>
          <Image
            style={styles.ovalIcon}
            contentFit="cover"
            source={require("../assets/oval1.png")}
          />
          <Text style={[styles.subtitle5, styles.subtitleTypo]}>Human</Text>
        </View>
        <View style={[styles.label10, styles.labelPosition5]}>
          <Image
            style={styles.ovalIcon}
            contentFit="cover"
            source={require("../assets/oval1.png")}
          />
          <Text style={[styles.subtitle, styles.subtitleTypo]}>
            Data Science
          </Text>
        </View>
        <View style={[styles.label11, styles.labelPosition4]}>
          <Image
            style={styles.ovalIcon}
            contentFit="cover"
            source={require("../assets/oval1.png")}
          />
          <Text style={[styles.subtitle, styles.subtitleTypo]}>Future</Text>
        </View>
        <View style={[styles.label12, styles.labelPosition3]}>
          <Image
            style={styles.ovalIcon}
            contentFit="cover"
            source={require("../assets/oval1.png")}
          />
          <Text style={[styles.subtitle, styles.subtitleTypo]}>Market</Text>
        </View>
        <View style={styles.label13}>
          <Image
            style={styles.ovalIcon}
            contentFit="cover"
            source={require("../assets/oval1.png")}
          />
          <Text style={[styles.subtitle5, styles.subtitleTypo]}>
            Cryptocurrency
          </Text>
        </View>
        <View style={[styles.label14, styles.labelPosition2]}>
          <Image
            style={styles.ovalIcon}
            contentFit="cover"
            source={require("../assets/oval1.png")}
          />
          <Text style={[styles.subtitle, styles.subtitleTypo]}>
            Programming
          </Text>
        </View>
        <View style={[styles.label15, styles.labelPosition1]}>
          <Image
            style={styles.ovalIcon}
            contentFit="cover"
            source={require("../assets/oval1.png")}
          />
          <Text style={[styles.subtitle, styles.subtitleTypo]}>Culture</Text>
        </View>
        <View style={[styles.label16, styles.labelPosition]}>
          <Image
            style={styles.ovalIcon}
            contentFit="cover"
            source={require("../assets/oval1.png")}
          />
          <Text style={[styles.subtitle, styles.subtitleTypo]}>Self</Text>
        </View>
        <View style={styles.label17}>
          <Image
            style={styles.ovalIcon}
            contentFit="cover"
            source={require("../assets/oval1.png")}
          />
          <Text style={[styles.subtitle5, styles.subtitleTypo]}>
            Productivity
          </Text>
        </View>
        <View style={[styles.labels1, styles.timePosition]}>
          <View style={[styles.label18, styles.labelLayout]}>
            <Image
              style={styles.ovalIcon}
              contentFit="cover"
              source={require("../assets/oval2.png")}
            />
            <Text style={[styles.subtitle, styles.subtitleTypo]}>Design</Text>
          </View>
          <View style={[styles.label19, styles.labelLayout]}>
            <Image
              style={styles.ovalIcon}
              contentFit="cover"
              source={require("../assets/oval3.png")}
            />
            <Text style={[styles.subtitle, styles.subtitleTypo]}>Hi-Tech</Text>
          </View>
          <View style={[styles.label20, styles.labelLayout]}>
            <Image
              style={styles.ovalIcon}
              contentFit="cover"
              source={require("../assets/oval4.png")}
            />
            <Text style={[styles.subtitle, styles.subtitleTypo]}>Music</Text>
          </View>
          <View style={[styles.label21, styles.labelLayout]}>
            <Image
              style={styles.ovalIcon}
              contentFit="cover"
              source={require("../assets/oval5.png")}
            />
            <Text style={[styles.subtitle, styles.subtitleTypo]}>Sport</Text>
          </View>
          <View style={[styles.label22, styles.labelLayout]}>
            <Image
              style={styles.ovalIcon}
              contentFit="cover"
              source={require("../assets/oval6.png")}
            />
            <Text style={[styles.subtitle, styles.subtitleTypo]}>
              Technology
            </Text>
          </View>
          <View style={styles.label5}>
            <Image
              style={styles.ovalIcon}
              contentFit="cover"
              source={require("../assets/oval7.png")}
            />
            <Text style={[styles.subtitle5, styles.subtitleTypo]}>Science</Text>
          </View>
          <View style={[styles.label6, styles.labelLayout1]}>
            <Image
              style={styles.ovalIcon}
              contentFit="cover"
              source={require("../assets/oval8.png")}
            />
            <Text style={[styles.subtitle5, styles.subtitleTypo]}>
              Finances
            </Text>
          </View>
          <View style={[styles.label7, styles.labelPosition7]}>
            <Image
              style={styles.ovalIcon}
              contentFit="cover"
              source={require("../assets/oval9.png")}
            />
            <Text style={[styles.subtitle5, styles.subtitleTypo]}>Policy</Text>
          </View>
          <View style={[styles.label26, styles.labelLayout]}>
            <Image
              style={styles.ovalIcon}
              contentFit="cover"
              source={require("../assets/oval10.png")}
            />
            <Text style={[styles.subtitle, styles.subtitleTypo]}>Biology</Text>
          </View>
          <View style={[styles.label9, styles.labelPosition7]}>
            <Image
              style={styles.ovalIcon}
              contentFit="cover"
              source={require("../assets/oval11.png")}
            />
            <Text style={[styles.subtitle5, styles.subtitleTypo]}>Human</Text>
          </View>
          <View style={[styles.label28, styles.labelLayout]}>
            <Image
              style={styles.ovalIcon}
              contentFit="cover"
              source={require("../assets/oval12.png")}
            />
            <Text style={[styles.subtitle, styles.subtitleTypo]}>
              Data Science
            </Text>
          </View>
          <View style={[styles.label29, styles.labelLayout]}>
            <Image
              style={styles.ovalIcon}
              contentFit="cover"
              source={require("../assets/oval13.png")}
            />
            <Text style={[styles.subtitle, styles.subtitleTypo]}>Future</Text>
          </View>
          <View style={[styles.label30, styles.labelLayout]}>
            <Image
              style={styles.ovalIcon}
              contentFit="cover"
              source={require("../assets/oval14.png")}
            />
            <Text style={[styles.subtitle, styles.subtitleTypo]}>Market</Text>
          </View>
          <View style={styles.label13}>
            <Image
              style={styles.ovalIcon}
              contentFit="cover"
              source={require("../assets/oval15.png")}
            />
            <Text style={[styles.subtitle5, styles.subtitleTypo]}>
              Cryptocurrency
            </Text>
          </View>
          <View style={[styles.label32, styles.labelLayout]}>
            <Image
              style={styles.ovalIcon}
              contentFit="cover"
              source={require("../assets/oval16.png")}
            />
            <Text style={[styles.subtitle, styles.subtitleTypo]}>
              Programming
            </Text>
          </View>
          <View style={[styles.label33, styles.labelLayout]}>
            <Image
              style={styles.ovalIcon}
              contentFit="cover"
              source={require("../assets/oval17.png")}
            />
            <Text style={[styles.subtitle, styles.subtitleTypo]}>Culture</Text>
          </View>
          <View style={[styles.label34, styles.labelLayout]}>
            <Image
              style={styles.ovalIcon}
              contentFit="cover"
              source={require("../assets/oval18.png")}
            />
            <Text style={[styles.subtitle, styles.subtitleTypo]}>Self</Text>
          </View>
          <View style={styles.label17}>
            <Image
              style={styles.ovalIcon}
              contentFit="cover"
              source={require("../assets/oval19.png")}
            />
            <Text style={[styles.subtitle5, styles.subtitleTypo]}>
              Productivity
            </Text>
          </View>
          <View style={[styles.label36, styles.labelLayout]}>
            <Image
              style={styles.ovalIcon}
              contentFit="cover"
              source={require("../assets/oval20.png")}
            />
            <Text style={[styles.subtitle, styles.subtitleTypo]}>Dance</Text>
          </View>
        </View>
      </View>
      <Text
        style={[styles.description, styles.descriptionPosition]}
      >{`It is those feelings that drive our love 
of astronomy and our desire.`}</Text>
      <Text style={[styles.title, styles.timeTypo]}>{`Discover articles, 
news & posts`}</Text>
      <Image
        style={styles.appIcon1}
        contentFit="cover"
        source={require("../assets/app-icon.png")}
      />
      <View style={[styles.homeIndicator, styles.statusBarPosition]}>
        <View style={styles.backgroundPosition} />
        <View style={[styles.seperator, styles.label37Position]} />
      </View>
      <View style={[styles.statusBar, styles.statusBarPosition]}>
        <View style={styles.backgroundPosition} />
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
          <View style={styles.barsstatusBariphonextime}>
            <Text style={[styles.time, styles.timeTypo]}>9:41</Text>
          </View>
        </View>
      </View>
      <View
        style={[styles.controlsbuttonslightrounded, styles.descriptionPosition]}
      >
        <View style={[styles.background2, styles.backgroundPosition]} />
        <Text style={[styles.label37, styles.label37Position]}>
          Get Started
        </Text>
      </View>
      <Text
        style={[styles.haveAnAccount, styles.logInTypo]}
      >{`Have an account? `}</Text>
      <Text style={[styles.logIn, styles.logInTypo]}>Log In</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  labelsLayout: {
    height: 264,
    width: 590,
  },
  labelLayout1: {
    padding: Padding.p_9xs,
    flexDirection: "row",
    borderRadius: Border.br_2xl_5,
    height: "15.15%",
    position: "absolute",
  },
  subtitleTypo: {
    marginLeft: 10,
    textAlign: "left",
    fontFamily: FontFamily.sFProText,
    fontWeight: "500",
    lineHeight: 22,
    letterSpacing: 0,
    fontSize: FontSize.bodyBody17_size,
  },
  labelPosition11: {
    left: "0.34%",
    right: "78.81%",
    width: "20.85%",
    bottom: "21.21%",
    top: "63.64%",
  },
  labelPosition10: {
    left: "76.61%",
    right: "4.92%",
    width: "18.47%",
    bottom: "84.85%",
    top: "0%",
  },
  labelPosition9: {
    left: "46.1%",
    right: "35.93%",
    width: "17.97%",
    bottom: "63.64%",
    top: "21.21%",
  },
  labelPosition8: {
    left: "66.78%",
    right: "7.29%",
    width: "25.93%",
    bottom: "63.64%",
    top: "21.21%",
  },
  labelPosition7: {
    bottom: "42.42%",
    top: "42.42%",
  },
  labelPosition6: {
    left: "53.39%",
    right: "26.1%",
    width: "20.51%",
    bottom: "84.85%",
    top: "0%",
  },
  labelPosition5: {
    left: "72.03%",
    width: "27.97%",
    right: "0%",
    bottom: "42.42%",
    top: "42.42%",
  },
  labelPosition4: {
    left: "24.24%",
    right: "56.61%",
    width: "19.15%",
    bottom: "63.64%",
    top: "21.21%",
  },
  labelPosition3: {
    left: "29.32%",
    right: "50.85%",
    bottom: "0%",
    top: "84.85%",
    width: "19.83%",
  },
  labelPosition2: {
    left: "57.97%",
    right: "13.56%",
    width: "28.47%",
    bottom: "21.21%",
    top: "63.64%",
  },
  labelPosition1: {
    left: "51.86%",
    right: "27.8%",
    width: "20.34%",
    bottom: "0%",
    top: "84.85%",
  },
  labelPosition: {
    left: "74.92%",
    right: "9.32%",
    width: "15.76%",
    bottom: "0%",
    top: "84.85%",
  },
  timePosition: {
    left: 0,
    position: "absolute",
  },
  labelLayout: {
    backgroundColor: Color.iOSSystemBackgroundsLightSecondary,
    padding: Padding.p_9xs,
    flexDirection: "row",
    borderRadius: Border.br_2xl_5,
    height: "15.15%",
    position: "absolute",
  },
  descriptionPosition: {
    width: 295,
    left: 40,
    position: "absolute",
  },
  timeTypo: {
    fontFamily: FontFamily.largeTitle34,
    fontWeight: "500",
  },
  statusBarPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  label37Position: {
    left: "50%",
    position: "absolute",
  },
  backgroundPosition: {
    height: "100%",
    bottom: "0%",
    right: "0%",
    left: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  logInTypo: {
    lineHeight: 18,
    fontSize: FontSize.footnoteFootnote13_size,
    textAlign: "left",
    color: Color.iOSSystemGraysSystemGray6Dark,
    letterSpacing: 0,
    position: "absolute",
  },
  appIcon: {
    height: "62.93%",
    width: "137.87%",
    right: "-37.87%",
    bottom: "37.07%",
    borderRadius: 256,
    maxWidth: "100%",
    maxHeight: "100%",
    left: "0%",
    top: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  ovalIcon: {
    width: 32,
    height: 32,
  },
  subtitle: {
    color: Color.iOSSystemGraysSystemGray6Dark,
  },
  label: {
    backgroundColor: Color.iOSSystemFillsLightQuarternary,
    padding: Padding.p_9xs,
    flexDirection: "row",
    borderRadius: Border.br_2xl_5,
    height: "15.15%",
    left: "5.76%",
    right: "74.41%",
    width: "19.83%",
    bottom: "84.85%",
    top: "0%",
  },
  label1: {
    padding: Padding.p_9xs,
    flexDirection: "row",
    borderRadius: Border.br_2xl_5,
    height: "15.15%",
    position: "absolute",
    backgroundColor: Color.iOSSystemFillsLightQuarternary,
  },
  label2: {
    padding: Padding.p_9xs,
    flexDirection: "row",
    borderRadius: Border.br_2xl_5,
    height: "15.15%",
    position: "absolute",
    backgroundColor: Color.iOSSystemFillsLightQuarternary,
  },
  label3: {
    padding: Padding.p_9xs,
    flexDirection: "row",
    borderRadius: Border.br_2xl_5,
    height: "15.15%",
    position: "absolute",
    backgroundColor: Color.iOSSystemFillsLightQuarternary,
  },
  label4: {
    padding: Padding.p_9xs,
    flexDirection: "row",
    borderRadius: Border.br_2xl_5,
    height: "15.15%",
    position: "absolute",
    backgroundColor: Color.iOSSystemFillsLightQuarternary,
  },
  subtitle5: {
    color: Color.iOSSystemBackgroundsLightPrimary,
  },
  label5: {
    width: "21.02%",
    right: "78.47%",
    left: "0.51%",
    backgroundColor: Color.iOSSystemGraysSystemGray6Dark,
    bottom: "63.64%",
    top: "21.21%",
    padding: Padding.p_9xs,
    flexDirection: "row",
    borderRadius: Border.br_2xl_5,
    height: "15.15%",
    position: "absolute",
  },
  label6: {
    width: "22.37%",
    right: "49.32%",
    left: "28.31%",
    backgroundColor: Color.iOSSystemGraysSystemGray6Dark,
    padding: Padding.p_9xs,
    flexDirection: "row",
    borderRadius: Border.br_2xl_5,
    height: "15.15%",
    bottom: "84.85%",
    top: "0%",
  },
  label7: {
    right: "53.39%",
    left: "28.14%",
    backgroundColor: Color.iOSSystemGraysSystemGray6Dark,
    width: "18.47%",
    bottom: "42.42%",
    top: "42.42%",
    padding: Padding.p_9xs,
    flexDirection: "row",
    borderRadius: Border.br_2xl_5,
    height: "15.15%",
    position: "absolute",
  },
  label8: {
    padding: Padding.p_9xs,
    flexDirection: "row",
    borderRadius: Border.br_2xl_5,
    height: "15.15%",
    position: "absolute",
    backgroundColor: Color.iOSSystemFillsLightQuarternary,
  },
  label9: {
    width: "20%",
    right: "30.68%",
    left: "49.32%",
    backgroundColor: Color.iOSSystemGraysSystemGray6Dark,
    padding: Padding.p_9xs,
    flexDirection: "row",
    borderRadius: Border.br_2xl_5,
    height: "15.15%",
    position: "absolute",
    bottom: "42.42%",
    top: "42.42%",
  },
  label10: {
    padding: Padding.p_9xs,
    flexDirection: "row",
    borderRadius: Border.br_2xl_5,
    height: "15.15%",
    position: "absolute",
    backgroundColor: Color.iOSSystemFillsLightQuarternary,
  },
  label11: {
    padding: Padding.p_9xs,
    flexDirection: "row",
    borderRadius: Border.br_2xl_5,
    height: "15.15%",
    position: "absolute",
    backgroundColor: Color.iOSSystemFillsLightQuarternary,
  },
  label12: {
    padding: Padding.p_9xs,
    flexDirection: "row",
    borderRadius: Border.br_2xl_5,
    height: "15.15%",
    position: "absolute",
    backgroundColor: Color.iOSSystemFillsLightQuarternary,
  },
  label13: {
    width: "31.36%",
    right: "44.75%",
    left: "23.9%",
    backgroundColor: Color.iOSSystemGraysSystemGray6Dark,
    bottom: "21.21%",
    top: "63.64%",
    padding: Padding.p_9xs,
    flexDirection: "row",
    borderRadius: Border.br_2xl_5,
    height: "15.15%",
    position: "absolute",
  },
  label14: {
    padding: Padding.p_9xs,
    flexDirection: "row",
    borderRadius: Border.br_2xl_5,
    height: "15.15%",
    position: "absolute",
    backgroundColor: Color.iOSSystemFillsLightQuarternary,
  },
  label15: {
    padding: Padding.p_9xs,
    flexDirection: "row",
    borderRadius: Border.br_2xl_5,
    height: "15.15%",
    position: "absolute",
    backgroundColor: Color.iOSSystemFillsLightQuarternary,
  },
  label16: {
    padding: Padding.p_9xs,
    flexDirection: "row",
    borderRadius: Border.br_2xl_5,
    height: "15.15%",
    position: "absolute",
    backgroundColor: Color.iOSSystemFillsLightQuarternary,
  },
  label17: {
    width: "26.61%",
    right: "73.39%",
    bottom: "0%",
    top: "84.85%",
    backgroundColor: Color.iOSSystemGraysSystemGray6Dark,
    padding: Padding.p_9xs,
    flexDirection: "row",
    borderRadius: Border.br_2xl_5,
    height: "15.15%",
    left: "0%",
    position: "absolute",
  },
  label18: {
    left: "5.76%",
    right: "74.41%",
    width: "19.83%",
    bottom: "84.85%",
    top: "0%",
  },
  label19: {
    left: "0.34%",
    right: "78.81%",
    width: "20.85%",
    bottom: "21.21%",
    top: "63.64%",
  },
  label20: {
    left: "76.61%",
    right: "4.92%",
    width: "18.47%",
    bottom: "84.85%",
    top: "0%",
  },
  label21: {
    left: "46.1%",
    right: "35.93%",
    width: "17.97%",
    bottom: "63.64%",
    top: "21.21%",
  },
  label22: {
    left: "66.78%",
    right: "7.29%",
    width: "25.93%",
    bottom: "63.64%",
    top: "21.21%",
  },
  label26: {
    left: "53.39%",
    right: "26.1%",
    width: "20.51%",
    bottom: "84.85%",
    top: "0%",
  },
  label28: {
    left: "72.03%",
    width: "27.97%",
    right: "0%",
    bottom: "42.42%",
    top: "42.42%",
  },
  label29: {
    left: "24.24%",
    right: "56.61%",
    width: "19.15%",
    bottom: "63.64%",
    top: "21.21%",
  },
  label30: {
    left: "29.32%",
    right: "50.85%",
    bottom: "0%",
    top: "84.85%",
    width: "19.83%",
  },
  label32: {
    left: "57.97%",
    right: "13.56%",
    width: "28.47%",
    bottom: "21.21%",
    top: "63.64%",
  },
  label33: {
    left: "51.86%",
    right: "27.8%",
    width: "20.34%",
    bottom: "0%",
    top: "84.85%",
  },
  label34: {
    left: "74.92%",
    right: "9.32%",
    width: "15.76%",
    bottom: "0%",
    top: "84.85%",
  },
  label36: {
    width: "18.98%",
    right: "74.58%",
    left: "6.44%",
    bottom: "42.42%",
    top: "42.42%",
  },
  labels1: {
    top: 0,
    height: 264,
    width: 590,
  },
  labels: {
    top: 330,
    left: -55,
    position: "absolute",
  },
  description: {
    top: 224,
    fontSize: FontSize.calloutCallout16_size,
    lineHeight: 21,
    textAlign: "center",
    letterSpacing: 0,
    fontFamily: FontFamily.bodyBody17,
    color: Color.iOSSystemGraysSystemGray6Dark,
  },
  title: {
    top: 144,
    left: 58,
    fontSize: FontSize.titleTitle128_size,
    width: 260,
    textAlign: "center",
    letterSpacing: 0,
    color: Color.iOSSystemGraysSystemGray6Dark,
    position: "absolute",
  },
  appIcon1: {
    top: 80,
    left: 164,
    width: 48,
    height: 48,
    position: "absolute",
  },
  seperator: {
    marginLeft: -66.5,
    bottom: 10,
    borderRadius: Border.br_81xl,
    width: 134,
    height: 5,
    backgroundColor: Color.iOSSystemGraysSystemGray6Dark,
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
    fontSize: FontSize.headlineSubheadline15_size,
    lineHeight: 20,
    width: 54,
    top: "50%",
    textAlign: "center",
    letterSpacing: 0,
    left: 0,
    position: "absolute",
    color: Color.iOSSystemGraysSystemGray6Dark,
  },
  barsstatusBariphonextime: {
    height: "85.71%",
    top: "33.33%",
    bottom: "-19.05%",
    right: "0%",
    left: "0%",
    position: "absolute",
    overflow: "hidden",
    width: "100%",
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
  },
  background2: {
    borderRadius: Border.br_21xl,
    backgroundColor: Color.iOSSystemGraysSystemGray6Dark,
  },
  label37: {
    marginTop: -14,
    marginLeft: -62.5,
    fontSize: FontSize.titleTitle222_size,
    lineHeight: 28,
    top: "50%",
    fontFamily: FontFamily.largeTitle34,
    fontWeight: "500",
    textAlign: "center",
    letterSpacing: 0,
    color: Color.iOSSystemBackgroundsLightPrimary,
  },
  controlsbuttonslightrounded: {
    top: 696,
    height: 54,
  },
  haveAnAccount: {
    top: 760,
    left: 110,
    fontFamily: FontFamily.bodyBody17,
  },
  logIn: {
    marginTop: 354,
    left: "59.2%",
    top: "50%",
    fontFamily: FontFamily.largeTitle34,
    fontWeight: "500",
  },
  selector: {
    backgroundColor: Color.iOSSystemBackgroundsLightPrimary,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Selector;
