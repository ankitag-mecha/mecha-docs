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
            "mecha-cloud/console/how-to-guides/generate-api-keys",
            "mecha-cloud/console/how-to-guides/update-machine",
            "mecha-cloud/console/how-to-guides/certificate-management",
            "mecha-cloud/console/how-to-guides/metrics-on-grafana",
            "mecha-cloud/console/how-to-guides/logs-on-grafana",
            "mecha-cloud/console/how-to-guides/delete-network"
          ],
        },
        {
          type: "category",
          label: "References",
          collapsible: true,
          collapsed: true,
          items: [
            "mecha-cloud/console/references/two-factor-troubleshooting",
            "mecha-cloud/console/references/application-api-keys",
            "mecha-cloud/console/references/byok-networking",
            "mecha-cloud/console/references/analyse-metrics",
            "mecha-cloud/console/references/analyse-logs"
          ],
        },
        {
          type: "category",
          label: "Explainations",
          collapsible: true,
          collapsed: true,
          items: [
            "mecha-cloud/console/explainations/telemetry-importance",
            "mecha-cloud/console/explainations/understanding-log-streams",
            "mecha-cloud/console/explainations/log-types",
            "mecha-cloud/console/explainations/lgtm-stack",
            "mecha-cloud/console/explainations/open-telemetry",
            "mecha-cloud/console/explainations/networking-overview",
            "mecha-cloud/console/explainations/networking-components"
          ],
        }
        // "mecha-cloud/console/how-to-guides",
        // "mecha-cloud/console/concepts",
      ],
    },
    {
      type: "category",
      label: "Mecha Agent",
      collapsible: true,
      collapsed: true,
      items: [
        "mecha-cloud/agent/overview",
        {
          type: "category",
          label: "Services",
          collapsible: true,
          collapsed: true,
          items: [
            "mecha-cloud/agent/services/provisioning",
            "mecha-cloud/agent/services/messaging",
            "mecha-cloud/agent/services/status",
            "mecha-cloud/agent/services/settings",
            "mecha-cloud/agent/services/networking",
            "mecha-cloud/agent/services/telemetry"
          ]
        }
      ]
    },
    "mecha-cloud/status-page",
  ],
};

export default sidebar.mechaCloudSidebar;
