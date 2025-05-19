"use client";
import { useEffect, useState } from "react";
import EditPanel from "./EditPanel";
import Header from "./Header";
import { steps } from "@/lib/constant";
import Content from "./content/Content";
// import SiderPanel from "./SiderPanel";

const data = [
  { user: "1", ai: "2" },
  { user: "3", ai: "4" },
  { user: "5", ai: "6" },
  { user: "7", ai: "8" },
  { user: "9", ai: "10" }
];

const Main = () => {
  const [promptList, setPromptList] = useState([]);
  const [currentStep, setCurrentStep] = useState(1);

  useEffect(() => {
    setPromptList(updatePrompList(data));
  }, [data]);

  const updatePrompList = (rawData) =>
    rawData.flatMap((item) =>
      Object.entries(item).map(([key, value]) => ({
        key,
        value,
        isSelected: false
      }))
    );

  const handlePromptClick = (clickedPair) => {
    setPromptList((prevPairs) =>
      prevPairs.map((pair) =>
        pair.key === clickedPair.key && pair.value === clickedPair.value
          ? { ...pair, isSelected: true }
          : { ...pair, isSelected: false }
      )
    );
  };

  const selectUserPrompts = () => {
    setPromptList((prevPairs) =>
      prevPairs.map((pair) =>
        pair.key === "user"
          ? !pair.isSelected
            ? { ...pair, isSelected: true }
            : { ...pair, isSelected: false }
          : { ...pair }
      )
    );
  };

  const selectAiPrompts = () => {
    setPromptList((prevPairs) =>
      prevPairs.map((pair) =>
        pair.key === "ai"
          ? !pair.isSelected
            ? { ...pair, isSelected: true }
            : { ...pair, isSelected: false }
          : { ...pair }
      )
    );
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="h-12 bg-white">
        <Header />
      </div>
      <div className="flex-1 overflow-hidden flex h-full">
        <div className="flex-1 p-6 flex flex-col h-full">
          <Content
            currentStep={currentStep}
            promptList={promptList}
            handlePromptClick={handlePromptClick}
            selectUserPrompts={selectUserPrompts}
            selectAiPrompts={selectAiPrompts}
          />
        </div>
        <div className="w-80">
          <EditPanel
            steps={steps}
            currentPage={currentStep}
            handleNext={handleNext}
            handlePrev={handlePrev}
            currentStep={currentStep}
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
