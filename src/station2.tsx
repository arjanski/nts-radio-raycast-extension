import { play } from "./api/play";
import { STATION2_STREAM_URL } from "./constants/constants";
import { getErrorMessage } from "./utils/getError";

export default async function Command() {
  try {
    await play(STATION2_STREAM_URL);
  } catch (err) {
    const error = getErrorMessage(err);
    console.log("Error when playing station 1 stream:", error);
  }
}
