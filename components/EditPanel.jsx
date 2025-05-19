import React from "react";
import { Button } from "./ui/button";
import { Stepper } from "./ui/Stepper";

export default function EditPanel({
  steps,
  currentPage,
  handleNext,
  handlePrev,
  currentStep
}) {
  return (
    <div className="w-full h-full border-l bg-gray-50 p-4 overflow-y-auto">
      <div className="flex flex-col gap-6 h-full">
        <h2 className="text-lg font-semibold">Edit Properties</h2>
        <div className="flex flex-col gap-4 justify-between h-full">
          <Stepper steps={steps} currentStep={currentStep} />
          <div className="pt-4 flex justify-between ">
            <Button
              variant="outline"
              onClick={handlePrev}
              disabled={currentStep === 0}
            >
              Previous
            </Button>
            <Button onClick={handleNext}>
              {currentStep !== steps.length - 1 ? "Next" : "Download"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
