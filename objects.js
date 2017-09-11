var playlist = { Kanye: 'Gold Digger'}
function updatePlaylist(object, artist, song) {
  return Object.assign({}, object, { [artist]: song })
}
function removeFromPlaylist(object, artistName) {
  newPlaylist = object
  delete newPlaylist.artistName
  return newPlaylist
}
