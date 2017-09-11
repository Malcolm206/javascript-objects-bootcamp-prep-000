var playlist = { Kanye: "Gold Digger"}
function updatePlaylist(object, artist, song) {
  return Object.assign({}, object, { [artist]: song })
}
function removeFromPlaylist(object, artistName) {
  return delete object.artistName
}
