import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  mechaCloudSidebar: [
    {
      type: "category",
      label: "Console",
      collapsible: true,
      collapsed: true,
      items: [
        // "mecha-cloud/console/tutorials",
        {
          type: "category",
          label: "Tutorials",
          collapsible: true,
          collapsed: true,
          items: [
            "mecha-cloud/console/tutorials/create-account",
            "mecha-cloud/console/tutorials/secure-account",
            "mecha-cloud/console/tutorials/add-first-device",
            "mecha-cloud/console/tutorials/new-network",
            "mecha-cloud/console/tutorials/enable-networking",
            "mecha-cloud/console/tutorials/ssh-device",
            "mecha-cloud/console/tutorials/telemetry"
          ],
        },
        {
          type: "category",
          label: "How-to Guides",
          collapsible: true,
          collapsed: true,
          items: [
            "mecha-cloud/console/how-to-guides/account-management",
            "mecha-cloud/console/how-to-guides/generate-api-keys"
          ],
        }
        // "mecha-cloud/console/how-to-guides",
        // "mecha-cloud/console/concepts",
      ],
    },
    {
      type: "category",
      label: "REST API",
      collapsible: true,
      collapsed: true,
      items: [
        // "mecha-cloud/console/tutorials",
        {
          type: "category",
          label: "Tutorials",
          collapsible: true,
          collapsed: true,
          items: [
            "mecha-cloud/console/tutorials/create-account",
            "mecha-cloud/console/tutorials/secure-account",
            "mecha-cloud/console/tutorials/add-first-device",
            "mecha-cloud/console/tutorials/new-network",
            "mecha-cloud/console/tutorials/enable-networking",
            "mecha-cloud/console/tutorials/ssh-device",
            "mecha-cloud/console/tutorials/telemetry"
          ],
        },
        {
          type: "category",
          label: "How-to Guides",
          collapsible: true,
          collapsed: true,
          items: [
            "mecha-cloud/console/how-to-guides/account-management",
            "mecha-cloud/console/how-to-guides/generate-api-keys"
          ],
        }
        // "mecha-cloud/console/how-to-guides",
        // "mecha-cloud/console/concepts",
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
