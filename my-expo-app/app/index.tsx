import { StyleSheet, Text, View } from "react-native";

import Colors from "../constants/Colors";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome, Builder! 👋</Text>
      <Text style={styles.subtitle}>This is your Expo Go playground.</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Get started in 3 quick steps</Text>
        <Text style={styles.step}>1. Open a screen file (screen2, screen3, or screen4)</Text>
        <Text style={styles.step}>2. Read the comment at the top — it's your Claude prompt!</Text>
        <Text style={styles.step}>3. Paste Claude's code in, save, and watch it appear</Text>
      </View>

      <Text style={styles.footer}>made with ❤️ + AI</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingHorizontal: 24,
    paddingTop: 96,
    paddingBottom: 48
  },
  header: {
    color: Colors.text,
    fontSize: 32,
    fontWeight: "700",
    marginBottom: 10
  },
  subtitle: {
    color: Colors.textMuted,
    fontSize: 17,
    marginBottom: 28
  },
  card: {
    backgroundColor: Colors.card,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 16,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 12,
    elevation: 5
  },
  cardTitle: {
    color: Colors.primary,
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 12
  },
  step: {
    color: Colors.text,
    fontSize: 15,
    lineHeight: 24,
    marginBottom: 10
  },
  footer: {
    marginTop: "auto",
    color: Colors.accent,
    fontSize: 14,
    textAlign: "center"
  }
});
