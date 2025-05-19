import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4"
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

const pdfViewer = document.querySelector("pdf-viewer");
const shadowRoot = pdfViewer?.shadowRoot;
console.log("Shadow root:", shadowRoot);

if (shadowRoot) {
  const toolbar = shadowRoot.querySelector("#toolbar");
  if (toolbar) {
    toolbar.style.display = "none";
  } else {
    console.warn("Toolbar not found inside shadow root.");
  }
} else {
  console.warn("Shadow root not accessible.");
}

// Create Document Component
export const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Section #1</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
    </Page>
  </Document>
);
