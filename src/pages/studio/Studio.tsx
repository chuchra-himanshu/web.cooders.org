import React from "react";
import { Sidebar, SidebarHeader } from "../../components";
import { BuilderButton } from "../../elements";

const Studio: React.FC = () => {
  return (
    <section className="flex relative w-screen">
      <Sidebar>
        <SidebarHeader
          selectedPanelIndex={0}
          handleIconButtonClick={() => {}}
        />
      </Sidebar>
      <BuilderButton />
      <section className="w-full"></section>
    </section>
  );
};

export default Studio;
