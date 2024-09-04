import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  hardwareSidebar: [
    {
      type: "category",
      label: "Getting Started",
      collapsible: true,
      collapsed: false,
      items: ["hardware/get-started", "hardware/specifications"],
    },
    {
      type: "category",
      label: "Connectivity",
      collapsible: true,
      collapsed: true,
      items: [
        "hardware/connectivity/ssh-connectivity",
        "hardware/connectivity/serial-console",
        "hardware/connectivity/public-key-auth",
        "hardware/connectivity/putty-connectivity",
      ],
    },
    {
      type: "category",
      label: "Kernel",
      collapsible: true,
      collapsed: true,
      items: [
        "hardware/kernel/basics",
        "hardware/kernel/device-tree",
        "hardware/kernel/working-with-kernel",
        "hardware/kernel/build-from-source"
      ],
    },
    {
      type: "category",
      label: "Bootloader",
      collapsible: true,
      collapsed: true,
      items: [
        "hardware/bootloader/basics",
        // "hardware/bootloader/working-with-u-boot/uboot-commands",
        {
          type: "category",
          label: "Working With U-Boot",
          collapsible: true,
          collapsed: true,
          items: [
            "hardware/bootloader/working-with-uboot/uboot-commands",
            "hardware/bootloader/working-with-uboot/mount-usb-storage",
            "hardware/bootloader/working-with-uboot/working-with-variables",
            "hardware/bootloader/working-with-uboot/change-boot-logo"
          ],
        },
        "hardware/bootloader/debugging-u-boot",
        "hardware/bootloader/build-from-source"
      ],
    },
    {
      type: "category",
      label: "Peripherals",
      collapsible: true,
      collapsed: true,
      items: [
        "hardware/peripherals/soc",
        "hardware/peripherals/wireless-bt",
        "hardware/peripherals/camera",
        "hardware/peripherals/audio-in-out",
        "hardware/peripherals/display",
        "hardware/peripherals/pci-e",
        "hardware/peripherals/motion",
        "hardware/peripherals/rgb-led",
        "hardware/peripherals/rtc",
        "hardware/peripherals/security",
        "hardware/peripherals/power",
        "hardware/peripherals/ethernet",
        "hardware/peripherals/usb",
        "hardware/peripherals/gpio",
        "hardware/peripherals/mikrobus"
      ],
    },
    {
      type: "category",
      label: "Mechanicals",
      collapsible: true,
      collapsed: true,
      items: [
        "hardware/mechanicals/3d-drawings",
        "hardware/mechanicals/schematics",
        "hardware/mechanicals/extensions",
        "hardware/mechanicals/mounting-system",
        "hardware/mechanicals/revisions"
      ],
    },
    {
      type: "category",
      label: "Labs",
      collapsible: true,
      collapsed: true,
      items: [
        "hardware/labs/yocto",
        "hardware/labs/android",
        "hardware/labs/cortex-m4"
      ],
    },
  ],
};

export default sidebar.hardwareSidebar;
