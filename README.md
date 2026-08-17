# Misa Pesic's Windows Utility

[![Version](https://img.shields.io/github/v/release/mpesic84/winutil-app?color=%230567ff&label=Latest%20Release&style=for-the-badge)](https://github.com/mpesic84/winutil-app/releases/latest)
![Downloads](https://img.shields.io/github/downloads/mpesic84/winutil-app/winutil.ps1?label=Total%20Downloads&style=for-the-badge)

A curated compilation of Windows system tasks streamline **installs**, debloat with **tweaks**, troubleshoot with **config**, and configure **Windows updates**. Run it fresh on every new Windows install.

This is a fork of [ChrisTitusTech/winutil](https://github.com/ChrisTitusTech/winutil), maintained here under [mpesic84/winutil-app](https://github.com/mpesic84/winutil-app). See [LICENSE](LICENSE) for attribution.

![Title Screen](docs/src/assets/branding/title-screen.png)


---

## Quick Start

> **WinUtil must be run as Administrator** Because it performs system-wide changes.

Open PowerShell or Terminal as admin, then run:

**Stable Branch (recommended)**
```ps1
irm https://github.com/mpesic84/winutil-app/releases/latest/download/winutil.ps1 | iex
```

**Development Branch**
```ps1
irm https://raw.githubusercontent.com/mpesic84/winutil-app/main/windev.ps1 | iex
```

### How to open an admin terminal

- **Start menu:** Right-click Start → *Windows PowerShell (Admin)* or *Terminal (Admin)*
- **Search:** Press the `Windows key`, and type `PowerShell` or `Terminal`, then `Ctrl + Shift + Enter`

---

## Automation / Presets

Apply a predefined configuration without manual selection:

```powershell
& ([ScriptBlock]::Create((irm https://github.com/mpesic84/winutil-app/releases/latest/download/winutil.ps1))) -Preset Standard
```

| Preset | Description |
|--------|-------------|
| `Standard` | Balanced defaults for most users |
| `Minimal` | Minimal changes to suit every user |
| `Advanced` | Deep tweaks for power users |

To view exactly what each preset does, see:
https://github.com/mpesic84/winutil-app/blob/main/config/preset.json

---

## Build & Develop

See https://github.com/mpesic84/winutil-app/blob/main/.github/CONTRIBUTING.md

---

## Resources

- [Original Project (ChrisTitusTech/winutil)](https://github.com/ChrisTitusTech/winutil)
- [Original Documentation](https://winutil.christitus.com/)
- [Report an Issue](https://github.com/mpesic84/winutil-app/issues)

---

## Support

- Leave a ⭐ to show support!

## Sponsors

<!-- sponsors --><!-- sponsors -->

---

## Contributors

[![Contributors](https://contrib.rocks/image?repo=mpesic84/winutil-app)](https://github.com/mpesic84/winutil-app/graphs/contributors)

Thanks to everyone who has contributed time and effort to this project, and to [ChrisTitusTech](https://github.com/ChrisTitusTech) and contributors for the original project this fork is based on. Keep rocking 🍻
