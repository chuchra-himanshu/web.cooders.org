interface SidebarPropsInterface {
  children: ReactNode;
}

interface SidebarHeaderPropsInterface {
  selectedPanelIndex: number;
  handleIconButtonClick: (panel_index: number) => void;
}
