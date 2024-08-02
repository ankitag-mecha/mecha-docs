import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  mechaCloudSidebar: [
    {
      type: "category",
      label: "Provisioning",
      collapsible: true,
      collapsed: true,
      items: [
        "mecha-cloud/provisioning/tutorials",
        "mecha-cloud/provisioning/how-to-guides",
        "mecha-cloud/provisioning/concepts",
      ],
    },
    {
      type: "category",
      label: "Networking",
      collapsible: true,
      collapsed: true,
      items: [
        "mecha-cloud/networking/tutorials",
        "mecha-cloud/networking/how-to-guides",
        "mecha-cloud/networking/concepts",
      ],
    },
    {
      type: "category",
      label: "Telemetry",
      collapsible: true,
      collapsed: true,
      items: [
        "mecha-cloud/telemetry/tutorials",
        "mecha-cloud/telemetry/how-to-guides",
        "mecha-cloud/telemetry/concepts",
      ],
    },
    {
      type: "category",
      label: "Security",
      collapsible: true,
      collapsed: true,
      items: [
        "mecha-cloud/security/tutorials",
        "mecha-cloud/security/how-to-guides",
        "mecha-cloud/security/concepts",
      ],
    },
    {
      type: "category",
      label: "Reference",
      collapsible: true,
      collapsed: true,
      items: [
        "mecha-cloud/reference/mecha-agent",
        "mecha-cloud/reference/developer-cli",
        "mecha-cloud/reference/console",
        "mecha-cloud/reference/rest-api"
      ],
    },
    "mecha-cloud/status-page",
    // {
    //   type: "link",
    //   label: "Status Page", // sidebar label
    //   href: "/mecha-cloud/status-page"
    // },
  ],
};

export default sidebar.mechaCloudSidebar;
