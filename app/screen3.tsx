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
 *  - Accent color: #7B61FF (purple)
 *  - The component must be a default export named Screen3
 *  - No external libraries beyond react-native and expo basics
 *  - Make it look polished and fun!"
 */

import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/Colors";

export default function Screen3() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>✏️ Screen 3</Text>
        <Text style={styles.subtitle}>
          Open this file and follow the prompt above!
        </Text>
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
    padding: 24,
  },
  card: {
    borderWidth: 2,
    borderColor: Colors.secondary,
    borderRadius: 16,
    padding: 28,
    alignItems: "center",
    backgroundColor: Colors.card,
    width: "100%",
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    color: Colors.text,
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: Colors.textMuted,
    textAlign: "center",
    lineHeight: 24,
  },
});
