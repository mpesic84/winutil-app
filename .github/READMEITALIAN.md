# Misa Pesic's Windows Utility

[![Version](https://img.shields.io/github/v/release/mpesic84/winutil-app?color=%230567ff&label=Latest%20Release&style=for-the-badge)](https://github.com/mpesic84/winutil-app/releases/latest)
![GitHub Downloads (specific asset, all releases)](https://img.shields.io/github/downloads/mpesic84/winutil-app/winutil.ps1?label=Total%20Downloads&style=for-the-badge)

Questa utility è una raccolta di attività Windows che eseguo personalmente su ogni sistema che utilizzo. È progettata per snellire le *installazioni*, rimuovere i componenti superflui tramite *ottimizzazioni*, risolvere problemi tramite la *configurazione*, e riparare *aggiornamenti* di Windows. Sono estremamente selettivo riguardo ai contributi per mantenere questo progetto pulito ed efficiente.

Questo è un fork di [ChrisTitusTech/winutil](https://github.com/ChrisTitusTech/winutil), mantenuto qui su [mpesic84/winutil-app](https://github.com/mpesic84/winutil-app). Vedi [LICENSE](../LICENSE) per l'attribuzione.

![screen-install](/docs/src/assets/branding/title-screen.png)

## 💡 Come usarlo

Winutil deve essere eseguito con privilegi di amministratore, poiché apporta modifiche all'intero sistema. Per farlo, avvia PowerShell come amministratore. Ecco alcuni modi per procedere:

1. **Metodo del menu di Start:**
   - Fai clic con il tasto destro sul menu Start.
   - Scegli "Windows PowerShell (esegui come Amministratore)" (per Windows 10) o "Terminale (esegui come Amministratore)" (per Windows 11).

2. **Metodo tramite ricerca:**
   - Premi il tasto Windows.
   - Digita "PowerShell" o "Terminal" (per Windows 11).
   - Premi `Ctrl + Shift + Invio` oppure fai clic con il tasto destro e seleziona "Esegui come amministratore" per avviarlo con privilegi elevati.

### Comando di avvio

#### Branch stabile (Consigliato)

```ps1
irm "https://github.com/mpesic84/winutil-app/releases/latest/download/winutil.ps1" | iex
```
#### Branch Sviluppatore

```ps1
irm "https://raw.githubusercontent.com/mpesic84/winutil-app/main/windev.ps1" | iex
```

### Automazione

Winutil supporta anche preset predefiniti che applicano automaticamente configurazioni comuni:

- `Standard`
- `Minimal`
- `Advanced`

Esempio:

```powershell
& ([ScriptBlock]::Create((irm "https://github.com/mpesic84/winutil-app/releases/latest/download/winutil.ps1"))) -Preset Standard
```

Per vedere esattamente cosa fa ogni preset, consulta:
https://github.com/mpesic84/winutil-app/blob/main/config/preset.json

In caso di problemi, consulta i [Problemi noti](https://winutil.christitus.com/knownissues/) o [Apri una segnalazione](https://github.com/mpesic84/winutil-app/issues)

## 🎓 Documentazione

### [Progetto originale (ChrisTitusTech/winutil)](https://github.com/ChrisTitusTech/winutil)

### [Documentazione originale di WinUtil](https://winutil.christitus.com/)

## 🛠️ Build & Sviluppo

> [!NOTE]
> Winutil è uno script piuttosto esteso, per questo è suddiviso in più file che vengono combinati in un unico file `.ps1` tramite un compilatore personalizzato. Questo rende la manutenzione del progetto molto più semplice.

Ottieni una copia del codice sorgente. Puoi farlo tramite l'interfaccia di GitHub (**Code** > **Download ZIP**), oppure clonando (scaricando) la repo tramite git.

Se git è installato, esegui i seguenti comandi in una finestra PowerShell per clonare e accedere alla directory del progetto:
```ps1
git clone --depth 1 "https://github.com/mpesic84/winutil-app.git"
cd winutil-app
```

Per compilare il progetto, esegui lo script di compilazione in una finestra PowerShell (i permessi di amministratore NON sono richiesti):
```ps1
.\Compile.ps1
```

Troverai un nuovo file chiamato `winutil.ps1`, creato dallo script `Compile.ps1`. Ora puoi eseguirlo come amministratore e apparirà una nuova finestra. Goditi la tua versione compilata di WinUtil :)

> [!TIP]
> Per ulteriori informazioni sull'utilizzo di WinUtil e su come contribuire allo sviluppo, ti invitiamo a leggere le [Linee guida per i contributi](https://github.com/mpesic84/winutil-app/blob/main/.github/CONTRIBUTING.md).

## 💖 Supporto
- Per sostenere il progetto moralmente e mentalmente, non dimenticare di lasciare una ⭐️!

## 🏅 Grazie a tutti i collaboratori
Un ringraziamento speciale per aver dedicato il vostro tempo ad aiutare Winutil a crescere, e al progetto originale [ChrisTitusTech/winutil](https://github.com/ChrisTitusTech/winutil) su cui questo fork si basa. Grazie mille! Continuate così 🍻.

[![Contributori](https://contrib.rocks/image?repo=mpesic84/winutil-app)](https://github.com/mpesic84/winutil-app/graphs/contributors)
