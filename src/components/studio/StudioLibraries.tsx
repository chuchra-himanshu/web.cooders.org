import React from "react";
import * as Icons from "react-icons/si";
import { STUDIO_DATA } from "../../data";
import SidebarPanelWrapper from "./SidebarPanelWrapper";

const getIcon = (iconName: string) => {
  return (Icons as any)[iconName] || Icons.SiReact;
};

const StudioLibraries: React.FC<StudioLibrariesPropsInterface> = ({
  handleSelectLibrary,
  selectedLibraryTitle,
}) => {
  return (
    <SidebarPanelWrapper>
      <div className="flex items-center justify-between flex-wrap">
        {STUDIO_DATA.LIBRARIES.filter((lib) => lib.visibility).map(
          (lib, index) => {
            const IconComponent = getIcon(lib.logo);
            return (
              <div
                key={index}
                className={`w-[98px] mb-[7px] h-[80px] rounded-[10px] cursor-pointer transition-all ease-in-out duration-200 hover:bg-accent/5 hover:text-accent flex flex-col items-center justify-center gap-[6px] ${
                  selectedLibraryTitle == lib.title
                    ? "bg-accent/5 text-accent"
                    : "text-text-secondary bg-overlay-primary"
                }`}
                onClick={() => handleSelectLibrary(lib.title)}
              >
                <IconComponent size={26} />
                <p className="text-[13px] font-medium">{lib.title}</p>
              </div>
            );
          }
        )}
      </div>
    </SidebarPanelWrapper>
  );
};

export default StudioLibraries;
