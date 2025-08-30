import React, { useMemo, useState } from "react";
import { Sidebar, SidebarHeader, StudioLibraries } from "../../components";
import { BuilderButton } from "../../elements";

const Studio: React.FC = () => {
  const [selectedPanelIndex, setSelectedPanelIndex] = useState(0);
  const [selectedLibraryTitle, setSelectedLibraryTitle] =
    useState("Material UI");

  const handleSelectPanelIndex = (panel_index: number) => {
    setSelectedPanelIndex(panel_index);
  };
  const handleSelectLibrary = (lib_title: string) => {
    setSelectedLibraryTitle(lib_title);
    handleSelectPanelIndex(1);
  };

  const panelComponents = useMemo(
    () => [
      <StudioLibraries
        key="studio_libraries"
        selectedLibraryTitle={selectedLibraryTitle}
        handleSelectLibrary={handleSelectLibrary}
      />,
    ],
    [selectedLibraryTitle]
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
