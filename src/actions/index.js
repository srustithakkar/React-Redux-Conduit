// action creator
export const selectSong = (song) => {
  // Return action
  return {
    type: "SONG_SELECTED",
    payLoad: song,
  };
};
