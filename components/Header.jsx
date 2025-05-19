import { Button } from "./ui/button";

const Header = () => {
  return (
    <div className="h-full flex items-center p-4 px-8 border-b">
      <div className="flex items-center justify-between w-full">
        <h4 className="font-bold">My App</h4>
        <Button>Download</Button>
      </div>
    </div>
  );
};

export default Header;
