import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const PrivacyPolicy = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.heading}>Privacy Policy</Text>
        <Text style={styles.paragraph}>
          At Vuna Update, we are committed to protecting the privacy of
          our users and keeping their personal information secure. This privacy
          policy outlines how we collect, use, and protect the information you
          provide us through our mobile application and services.
        </Text>

        <Text style={styles.heading}>Information We Collect</Text>
        <Text style={styles.paragraph}>
          We may collect personal information such as your name, email address,
          and other contact details when you interact with our mobile
          application or use our services. Additionally, we may collect
          non-personal information such as your device's unique identifier, IP
          address, and usage statistics for analytical purposes.
        </Text>

        <Text style={styles.heading}>How We Use Your Information</Text>
        <Text style={styles.paragraph}>
          The information we collect is used to provide and improve our
          services, communicate with you, respond to inquiries, and personalize
          your experience. We may also use your information for marketing
          purposes, such as sending you promotional materials or notifications.
          However, you have the option to opt out of receiving such
          communications.
        </Text>

        <Text style={styles.heading}>Information Sharing</Text>
        <Text style={styles.paragraph}>
          We may share your personal information with trusted third-party
          service providers who assist us in operating our mobile application
          and delivering our services. These providers are obligated to maintain
          the confidentiality and security of your information. We may also
          disclose your information when required by law or to protect our
          rights and safety.
        </Text>

        <Text style={styles.heading}>Data Security</Text>
        <Text style={styles.paragraph}>
          We take appropriate measures to protect your information from
          unauthorized access, alteration, or disclosure. However, please note
          that no method of transmission over the internet or electronic storage
          is 100% secure. Therefore, we cannot guarantee absolute security of
          your information.
        </Text>

        <Text style={styles.heading}>Third-Party Links</Text>
        <Text style={styles.paragraph}>
          Our mobile application may contain links to third-party websites or
          services. We are not responsible for the privacy practices or content
          of those websites. We encourage you to review the privacy policies of
          those websites before providing any personal information.
        </Text>

        <Text style={styles.heading}>Children's Privacy</Text>
        <Text style={styles.paragraph}>
          Our services are not intended for children under the age of 13. We do
          not knowingly collect personal information from children. If you
          believe that we have inadvertently collected information from a child,
          please contact us so that we can take appropriate measures to remove
          the information.
        </Text>

        <Text style={styles.heading}>Changes to the Privacy Policy</Text>
        <Text style={styles.paragraph}>
          We may update this privacy policy from time to time. Any changes will
          be posted on this page, and the revised policy will take effect
          immediately. We encourage you to review this policy periodically for
          any updates or changes.
        </Text>

        <Text style={styles.heading}>Contact Us</Text>
        <Text style={styles.paragraph}>
          If you have any questions or concerns about our privacy policy or the
          way we handle your personal information, please contact us through the
          contact information provided on our mobile application.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 16,
  },
});

export default PrivacyPolicy;
