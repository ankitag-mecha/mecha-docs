import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  mechanixOsSidebar: [
    {
      type: "category",
      label: "Using the GUI",
      collapsible: true,
      collapsed: false,
      items: [
        "mechanix-os/using-gui/mechanix-shell",
        "mechanix-os/using-gui/settings-app",
      ],
    },
    {
      type: "category",
      label: "Functions",
      collapsible: true,
      collapsed: true,
      items: [
        "mechanix-os/functions/wayland",
        "mechanix-os/functions/network-manager",
        "mechanix-os/functions/bluetooth",
        "mechanix-os/functions/video",
        "mechanix-os/functions/audio",
        "mechanix-os/functions/key-store",
      ],
    },
    {
      type: "category",
      label: "Installing Apps",
      collapsible: true,
      collapsed: true,
      items: [
        "mechanix-os/installing-apps/package-manager",
        "mechanix-os/installing-apps/using-flatpak",
      ],
    }
  ],
};

export default sidebar.mechanixOsSidebar;
