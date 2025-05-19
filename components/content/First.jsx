import React from "react";
import { Checkbox } from "../ui/checkbox";
import { cn } from "@/lib/utils";

export const First = ({
  promptList,
  handlePromptClick,
  selectUserPrompts,
  selectAiPrompts
}) => {
  // console.log("promptList", promptList);
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Select prompt</h2>
      <p>Enter the basic information for your project.</p>

      <div className="flex flex-row gap-4 items-center justify-end">
        <div className="items-top flex space-x-2">
          <Checkbox id="user-prompt" onClick={selectUserPrompts} />
          <div className="grid gap-1.5 leading-none">
            <label
              htmlFor="user-prompt"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              your prompts
            </label>
          </div>
        </div>
        <div className="items-top flex space-x-2">
          <Checkbox id="Ai-prompt" onClick={selectAiPrompts} />
          <div className="grid gap-1.5 leading-none">
            <label
              htmlFor="Ai-prompt"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              ai prompts
            </label>
          </div>
        </div>
      </div>

      <div className="h-full w-full p-4 bg-gray-100/20 rounded-md flex flex-col items-center justify-center">
        {promptList.map((item, index) => (
          <div
            key={index}
            className="p-4 rounded cursor-pointer hover:bg-gray-200/50 w-full flex justify-between items-center gap-4"
          >
            <Checkbox
              checked={item.isSelected}
              onClick={() => handlePromptClick(index)}
            />
            <div
              className={cn(
                "w-full flex",
                item.key === "ai" ? "justify-items-start" : "justify-end"
              )}
            >
              {item.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
