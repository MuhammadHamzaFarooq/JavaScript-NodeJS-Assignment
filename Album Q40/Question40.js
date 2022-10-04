//Q40: 
//Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.


const make_album = (artist_name, album_title, tracks = null) => {
    let album = {
        artist_name,
        album_title
    }
    if (tracks) {
        album["tracks"] = tracks
    }
    return album;
}

console.log(make_album("atif", "wo lamhy"));
console.log(make_album("ali zafar", "citi bajay gi"));
console.log(make_album("aima baig", "psl 5 song", 5));