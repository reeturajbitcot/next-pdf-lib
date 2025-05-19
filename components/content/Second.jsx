"use client";
import { PDFViewer } from "@react-pdf/renderer";
import { MyDocument } from "./MyDocument";

const Second = () => (
  <div className="flex-1 flex h-full flex-col">
    <h2 className="text-xl font-semibold">Select prompt</h2>
    <p>Enter the basic information for your project.</p>

    <div className="flex-1 h-full">
      <PDFViewer className="w-full h-full border">
        <MyDocument />
      </PDFViewer>
    </div>
  </div>
);

export default Second;
