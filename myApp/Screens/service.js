import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const Service = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.heading}>Terms of Service</Text>
        <Text style={styles.sectionHeading}>Effective Date: 06/06/2023</Text>

        <Text style={styles.sectionHeading}>
          1. Applicability and Eligibility
        </Text>
        <Text style={styles.text}>
          <Text style={styles.bold}>1.1 Applicability:</Text> These Terms apply
          to all users of the VUNA Updates App (referred to as "the App"),
          including registered users and guests. By using the App, you represent
          and warrant that you are at least 18 years old and have the legal
          capacity to enter into these Terms.
        </Text>

        <Text style={styles.sectionHeading}>2. User Responsibilities</Text>
        <Text style={styles.text}>
          <Text style={styles.bold}>2.1 Account Creation:</Text> To access
          certain features of the App, you may be required to create an account.
          You are responsible for providing accurate and up-to-date information
          during the registration process and maintaining the confidentiality of
          your account credentials.
        </Text>

        <Text style={styles.text}>
          <Text style={styles.bold}>2.2 Acceptable Use:</Text> When using the
          App, you agree to: - Comply with all applicable laws and regulations -
          Respect the rights and privacy of other users - Use the App only for
          its intended purposes and in accordance with these Terms - Not engage
          in any activities that may disrupt or interfere with the functioning
          of the App - Not attempt to gain unauthorized access to the App or any
          user accounts - Not use the App to transmit any harmful or unlawful
          content
        </Text>

        <Text style={styles.sectionHeading}>3. Intellectual Property</Text>
        <Text style={styles.text}>
          <Text style={styles.bold}>3.1 Ownership:</Text> The App and all its
          content, including but not limited to text, graphics, images, logos,
          and software, are the property of the Company and are protected by
          intellectual property laws. You agree not to copy, modify, distribute,
          or create derivative works based on the App or its content without
          prior written consent from the Company.
        </Text>

        <Text style={styles.sectionHeading}>4. Privacy</Text>
        <Text style={styles.text}>
          <Text style={styles.bold}>4.1 Privacy Policy:</Text> The collection
          and use of your personal information by the App are governed by our
          Privacy Policy. By using the App, you consent to the collection, use,
          and sharing of your information as described in the Privacy Policy.
        </Text>

        <Text style={styles.sectionHeading}>5. Disclaimer of Warranties</Text>
        <Text style={styles.text}>
          <Text style={styles.bold}>5.1 No Warranty:</Text> The App is provided
          on an "as is" and "as available" basis. We do not warrant that the App
          will be error-free, uninterrupted, or secure, or that any defects will
          be corrected. We disclaim all warranties, whether express, implied, or
          statutory, including but not limited to warranties of merchantability,
          fitness for a particular purpose, and non-infringement.
        </Text>

        <Text style={styles.sectionHeading}>6. Limitation of Liability</Text>
        <Text style={styles.text}>
          <Text style={styles.bold}>6.1 Exclusion of Liability:</Text> To the
          maximum extent permitted by law, the Company and its officers,
          directors, employees, agents, and affiliates shall not be liable for
          any indirect, incidental, special, consequential, or exemplary damages
          arising out of or in connection with your use of the App, even if
          advised of the possibility of such damages.
        </Text>

        <Text style={styles.sectionHeading}>
          7. Modifications and Termination
        </Text>
        <Text style={styles.text}>
          <Text style={styles.bold}>7.1 Modification:</Text> We reserve the
          right to modify, suspend, or discontinue the App, or any part thereof,
          at any time without prior notice or liability.
        </Text>

        <Text style={styles.text}>
          <Text style={styles.bold}>7.2 Termination:</Text> We may terminate or
          suspend your access to the App immediately, without prior notice or
          liability, for any reason whatsoever, including, without limitation,
          if you breach these Terms.
        </Text>

        <Text style={styles.sectionHeading}>
          8. Governing Law and Dispute Resolution
        </Text>
        <Text style={styles.text}>
          <Text style={styles.bold}>8.1 Governing Law:</Text> These Terms shall
          be governed by and construed in accordance with the laws of the
          Nigerian app developers constitution.
        </Text>

        <Text style={styles.text}>
          <Text style={styles.bold}>8.2 Dispute Resolution:</Text> Any disputes
          arising out of or relating to these Terms or the use of the App shall
          be resolved through binding arbitration in accordance with the rules
          of Puchik arbitration. The arbitration shall take place in Leicester,
          UK, and the language of arbitration shall be English Language.
        </Text>

        <Text style={styles.sectionHeading}>9. Entire Agreement</Text>
        <Text style={styles.text}>
          These Terms constitute the entire agreement between you and the
          Company regarding your use of the App and supersede any prior
          agreements or understandings.
        </Text>

        <Text style={styles.footerText}>
          If you have any questions or concerns regarding these Terms, please
          contact us at +2349021659980.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  sectionHeading: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
  bold: {
    fontWeight: "bold",
  },
  footerText: {
    fontSize: 14,
    marginTop: 20,
    fontStyle: "italic",
  },
});

export default Service;
