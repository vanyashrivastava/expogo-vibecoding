import { ScrollView, StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Colors } from "../constants/Colors";

const steps = [
  {
    number: "1",
    text: "Open a screen file (screen2.tsx, screen3.tsx, or screen4.tsx)",
  },
  {
    number: "2",
    text: "Read the comment at the top — it's your Claude prompt!",
  },
  {
    number: "3",
    text: "Paste Claude's code in, save, and watch it appear ✨",
  },
];

export default function HomeScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      <StatusBar style="light" />

      <View style={styles.header}>
        <Text style={styles.greeting}>Welcome, Builder! 👋</Text>
        <Text style={styles.subtitle}>
          This is your Expo Go playground.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>🚀 Get Started in 3 Steps</Text>
        {steps.map((step) => (
          <View key={step.number} style={styles.step}>
            <View style={styles.stepBadge}>
              <Text style={styles.stepNumber}>{step.number}</Text>
            </View>
            <Text style={styles.stepText}>{step.text}</Text>
          </View>
        ))}
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>⚡ What's Inside</Text>
        <Text style={styles.bodyText}>
          This project has 3 blank screens ready for your ideas. Each one
          has a built-in Claude prompt at the top of the file to help you
          generate awesome UI code — no prior React Native experience
          needed!
        </Text>
      </View>

      <Text style={styles.footer}>made with ❤️ + AI</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  content: {
    padding: 24,
    paddingBottom: 48,
  },
  header: {
    marginBottom: 28,
    marginTop: 8,
  },
  greeting: {
    fontSize: 28,
    fontWeight: "700",
    color: Colors.text,
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 16,
    color: Colors.textMuted,
  },
  card: {
    backgroundColor: Colors.card,
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  cardTitle: {
    fontSize: 17,
    fontWeight: "600",
    color: Colors.primary,
    marginBottom: 16,
  },
  step: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 14,
  },
  stepBadge: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
    marginTop: 1,
  },
  stepNumber: {
    fontSize: 14,
    fontWeight: "700",
    color: Colors.background,
  },
  stepText: {
    flex: 1,
    fontSize: 15,
    color: Colors.text,
    lineHeight: 22,
  },
  bodyText: {
    fontSize: 15,
    color: Colors.textMuted,
    lineHeight: 22,
  },
  footer: {
    textAlign: "center",
    color: Colors.textMuted,
    fontSize: 14,
    marginTop: 12,
  },
});
