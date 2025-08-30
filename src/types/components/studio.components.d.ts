interface SidebarPropsInterface {
  children: ReactNode;
}

interface SidebarHeaderPropsInterface {
  selectedPanelIndex: number;
  handleSelectPanelIndex: (panel_index: number) => void;
}

interface StudioLibrariesPropsInterface {
  selectedLibraryTitle: string;
  handleSelectLibrary: (title: string) => void;
}

interface SidebarPanelWrapperPropsInterface {
  children: ReactNode;
}
