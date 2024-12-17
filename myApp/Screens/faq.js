import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Faq() {
  const [expandedQuestion, setExpandedQuestion] = useState(null);

  const handleQuestionPress = (questionId) => {
    if (expandedQuestion === questionId) {
      setExpandedQuestion(null);
    } else {
      setExpandedQuestion(questionId);
    }
  };

  const faqData = [
    {
      id: 1,
      question: "How do I reset my password?",
      answer:
        "To reset your password, navigate to the Profile page then the Edit account page, from there, you can change your password",
    },
    {
      id: 2,
      question: "How can I contact customer support?",
      answer:
        "You can contact our customer support team through whatsapp on +2349021659980",
    },
    {
      id: 3,
      question: "What is the purpose of the school updates app?",
      answer:
        "The school updates app is an app basically for knowing whats going on in the school directly from your smart phones. Easy isn't it?",
    },
    {
      id: 4,
      question: "Is the app available for both iOS and Android?",
      answer: "Yes, the app is compatible with both iOS and Android",
    },
    {
      id: 5,
      question: "How frequently are the updates posted in the app?",
      answer:
        "Our VUNA journalist are always handy with hot gists and gossips, so as soon as something good comes in, we UPDATE",
    },
    {
      id: 6,
      question: "Can I share updates from the app with my friends",
      answer:
        "This is the first version of our app, so for now all you can do is to invite your friends install the application, just hit Invite a friend on the profile page",
    },
    {
      id: 7,
      question:
        "Are the updates specific to my school or can I access updates from other schools as well",
      answer:
        "As the name implies, VUNA updates. For now!. There will soon be Abuja university updates",
    },
    {
      id: 8,
      question:
        "How can I suggest an update or news item to be included in the app?",
      answer:
        "To suggest any updates or news, please contact our Chief editor @ 07040556959. Don't forget, it costs you extra to advertise!",
    },
    {
      id: 9,
      question: "How can I unsubscribe or stop receiving updates if needed?",
      answer:
        "You can turn off the notifications settings from the settings page in profile page",
    },
    {
      id: 10,
      question:
        "Can parents also access the app to stay informed about school updates?",
      answer:
        "NO",
    },
  ];

  return (
    <ImageBackground
      style={styles.container}
      source={require("../assets/first2.png")}
    >
      <SafeAreaView>
        <Text style={styles.header}>Frequently Asked Questions</Text>
        {faqData.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.questionContainer}
            onPress={() => handleQuestionPress(item.id)}
          >
            <Text style={styles.question}>{item.question}</Text>
            {expandedQuestion === item.id && (
              <Text style={styles.answer}>{item.answer}</Text>
            )}
          </TouchableOpacity>
        ))}
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  header:{
    fontSize: 24,
    alignSelf: "center",
    fontWeight: "bold",
    marginBottom: 10
  },
  questionContainer: {
    marginBottom: 20,
  },
  question: {
    fontSize: 20,
    marginBottom: 5,
  },
  answer: {
    fontSize: 18,
    marginBottom: 10,
  },
});
