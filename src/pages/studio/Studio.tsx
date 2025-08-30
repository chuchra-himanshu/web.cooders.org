import React, { useMemo, useState } from "react";
import {
  Sidebar,
  SidebarHeader,
  StudioComponents,
  StudioLibraries,
} from "../../components";
import { BuilderButton } from "../../elements";
import { STUDIO_DATA } from "../../data";

const Studio: React.FC = () => {
  const [selectedPanelIndex, setSelectedPanelIndex] = useState(0);
  const [selectedLibraryTitle, setSelectedLibraryTitle] =
    useState("Material UI");
  const [selectedComponent, setSelectedComponent] = useState<string>(
    STUDIO_DATA.COMPONENTS.items[0].title
  );

  const handleSelectPanelIndex = (panel_index: number) => {
    setSelectedPanelIndex(panel_index);
  };
  const handleSelectLibrary = (lib_title: string) => {
    setSelectedLibraryTitle(lib_title);
    handleSelectPanelIndex(1);
  };
  const handleSelectComponent = (title: string) => {
    setSelectedComponent(title);
  };

  const panelComponents = useMemo(
    () => [
      <StudioLibraries
        key="studio_libraries"
        selectedLibraryTitle={selectedLibraryTitle}
        handleSelectLibrary={handleSelectLibrary}
      />,
      <StudioComponents
        key="studio_components"
        selectedLibraryTitle={selectedLibraryTitle}
        selectedComponent={selectedComponent}
        handleSelectComponent={handleSelectComponent}
      />,
    ],
    [selectedLibraryTitle, selectedComponent]
  );

  return (
    <section className="flex relative w-screen">
      <Sidebar>
        <SidebarHeader
          selectedPanelIndex={selectedPanelIndex}
          handleSelectPanelIndex={handleSelectPanelIndex}
        />
        {panelComponents[selectedPanelIndex]}
      </Sidebar>
      <BuilderButton />
      <section className="w-full"></section>
    </section>
  );
};

export default Studio;
