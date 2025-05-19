import dynamic from "next/dynamic";
import { First } from "./First";

const Second = dynamic(() => import("@/components/content/Second"), {
  ssr: false
});

const Content = ({
  currentStep,
  promptList,
  handlePromptClick,
  selectUserPrompts,
  selectAiPrompts
}) => {
  return (
    <>
      {currentStep === 0 ? (
        <First
          promptList={promptList}
          handlePromptClick={handlePromptClick}
          selectUserPrompts={selectUserPrompts}
          selectAiPrompts={selectAiPrompts}
        />
      ) : currentStep === 1 ? (
        <Second />
      ) : (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Review Information</h2>
          <p>Review all the information you've entered.</p>
          <div className="h-64 bg-gray-100 rounded-md flex items-center justify-center">
            Step 3 Content Area
          </div>
        </div>
      )}
    </>
  );
};

export default Content;
