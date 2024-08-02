import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";
import apiSidebar from "./apis/sidebar";
import hardwareSidebar from "./hardware/sidebar";
import mechanixOsSidebar from "./mechanix-os/sidebar";
import mechaCloudSidebar from "./mecha-cloud/sidebar";

const sidebars: SidebarsConfig = {
  // hardwareSidebar: [
  //   {
  //     type: 'autogenerated',
  //     dirName: 'hardware',   // hardware location is docs/hardware
  //   },
  // ],
  hardwareSidebar,
  mechanixOsSidebar,
  mechaCloudSidebar,
  apiSidebar
};

export default sidebars;
