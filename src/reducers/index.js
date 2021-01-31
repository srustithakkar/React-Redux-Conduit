import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Pehla Nasha", duration: "2:30" },
    { title: "Dreams", duration: "4:30" },
    { title: "Your Song", duration: "6:30" },
    { title: "Lean on Me", duration: "5:00" },
  ];
};
const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};
export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
