/*
 * 🤖 CLAUDE PROMPT FOR THIS SCREEN
 * =========================================
 * Copy the prompt below into Claude (claude.ai) to generate
 * the code for this screen. Then paste Claude's response here,
 * replacing everything below this comment block.
 * =========================================
 *
 * PROMPT:
 * "Create a React Native screen component for an Expo Go app.
 *  I want this screen to be: [DESCRIBE YOUR IDEA HERE 🎨]
 *
 *  Requirements:
 *  - Use React Native core components only (View, Text, TouchableOpacity,
 *    ScrollView, TextInput, FlatList — whatever fits)
 *  - Use StyleSheet.create() for all styles
 *  - Dark background color: #0A0A0F
 *  - Accent color: #00FF88 (neon green) or #FF3CAC (neon pink)
 *  - The component must be a default export named Screen2
 *  - No external libraries beyond react-native and expo basics
 *  - Make it look polished and fun!"
 */

import { StyleSheet, Text, View } from "react-native";

import Colors from "../constants/Colors";

export default function Screen2() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>✏️ Screen 2</Text>
        <Text style={styles.subtitle}>Open this file and follow the prompt above!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    alignItems: "center",
    justifyContent: "center",
    padding: 24
  },
  card: {
    width: "100%",
    maxWidth: 380,
    borderWidth: 1,
    borderColor: Colors.primary,
    backgroundColor: Colors.card,
    borderRadius: 16,
    padding: 20
  },
  title: {
    color: Colors.text,
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 8,
    textAlign: "center"
  },
  subtitle: {
    color: Colors.textMuted,
    fontSize: 16,
    textAlign: "center",
    lineHeight: 24
  }
});
