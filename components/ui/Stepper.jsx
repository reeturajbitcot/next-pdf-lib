import { cn } from "@/lib/utils";

export function Stepper({ steps, currentStep }) {
  return (
    <div className="flex items-center flex-col justify-center w-max">
      {steps.map((step, index) => (
        <div key={index} className="flex items-center flex-col relative">
          <div className="absolute top-0 left-full ml-4 w-max">
            <p className="text-[10px] font-semibold text-slate-400">
              STEP {index + 1}
            </p>
            <h6
              className={cn(
                "text-sm font-semibold",
                index === currentStep ? "text-green-900" : "text-slate-400"
              )}
            >
              {step}
            </h6>
          </div>
          <div
            className={cn(
              "w-7 h-7 shrink-0 mx-[-1px] border-2 flex items-center justify-center rounded-full",
              index <= currentStep ? "border-green-500" : "border-gray-300"
            )}
          >
            {index >= currentStep ? (
              <span
                className={cn(
                  "w-3 h-3 rounded-full",
                  index === currentStep ? "bg-green-500" : "bg-gray-300"
                )}
              ></span>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 fill-green-500"
                viewBox="0 0 24 24"
              >
                <path
                  d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                  data-original="#000000"
                />
              </svg>
            )}
          </div>
          {index < steps.length - 1 && (
            <div
              className={cn(
                "w-0.5 h-16",
                index < currentStep ? "bg-green-500" : "bg-gray-300"
              )}
            ></div>
          )}
        </div>
      ))}
    </div>
  );
}

/* <div className="flex items-center flex-col relative">
        <div className="absolute top-0 left-full ml-4 w-max">
          <p className="text-[10px] font-semibold text-slate-400">STEP 3</p>
          <h6 className="text-sm font-semibold text-slate-900">
            Subscription plan
          </h6>
        </div>
        <div className="w-7 h-7 shrink-0 mx-[-1px] border-2 border-green-500 flex items-center justify-center rounded-full">
          <span className="w-3 h-3 bg-green-500 rounded-full"></span>
        </div>
        <div className="w-0.5 h-16 bg-gray-300"></div>
      </div>
      <div className="flex items-center flex-col relative">
        <div className="absolute top-0 left-full ml-4 w-max">
          <p className="text-[10px] font-semibold text-slate-400">STEP 4</p>
          <h6 className="text-sm text-slate-400 font-semibold">
            Payment details
          </h6>
        </div>
        <div className="w-7 h-7 shrink-0 mx-[-1px] border-2 flex items-center justify-center rounded-full">
          <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
        </div>
      </div> */
