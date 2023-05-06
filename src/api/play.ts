import { runAppleScript } from "run-applescript";
import { buildScriptEnsuringMusicIsRunning } from "../utils/applescript";
import { getErrorMessage } from "../utils/getError";

const audioApplication = "music";

export async function play(streamUrl: string) {
  try {
    if (audioApplication == "music") {
      streamUrl = await runAppleScript(`try
        tell application "Music"
          launch
          tell application "System Events"
            repeat while "Music" is not in (name of every process whose background only is false)
              delay 0.5
            end repeat
          end tell

          try
            set trackIDs to get id of URL tracks
            open location "${streamUrl}"
            repeat with newID in (get id of URL tracks)
                if newID is not in trackIDs then
                    set theStream to track id newID
                    set name of theStream to "Raycast: NTS"
                    return contents of newID
                end if
            end repeat
          on error
            open location "${streamUrl}"
            delay 0.5
            try
              set name of URL track 1 to "Raycast: NTS"
              return id of URL track 1
            on error
              return ""
            end try
          end try
        end tell
      on error
        return "err:noapp"
      end try`);
    } else if (audioApplication == "quicktime") {
      streamUrl = await runAppleScript(`try
        tell application "QuickTime Player"
          open location "${streamUrl}"
          repeat while visible of window 1 = false
            delay 0.5
          end repeat
          delay 1
          set visible of window 1 to false
          return name of document 1
        end tell
      on error
        return "err:noapp"
      end try`);
    } else if (audioApplication == "vlc") {
      streamUrl = await runAppleScript(`try
        tell application "VLC"
          open location "${streamUrl}"
          return path of current item
        end tell
      on error
        return "err:noapp"
      end try`);
    } else if (audioApplication == "vox") {
      streamUrl = await runAppleScript(`try
        tell application "Vox"
          playUrl "${streamUrl}"
          return track 
        end tell
      on error
        return "err:noapp"
      end try`);
    }
  } catch (err) {
    const error = getErrorMessage(err);

    if (
      error?.toLocaleLowerCase().includes("no active device") ||
      error?.toLocaleLowerCase().includes("restricted device")
    ) {
      const script = buildScriptEnsuringMusicIsRunning(`open location "${streamUrl}"`);
      await runAppleScript(script);
      return;
    }

    console.log("play.ts Error: ", error);
    throw new Error(error);
  }
}
