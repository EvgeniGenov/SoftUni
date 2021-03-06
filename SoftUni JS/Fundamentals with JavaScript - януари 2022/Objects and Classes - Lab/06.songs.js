function playlist(input) {

    class Song {
        constructor(list, name, time) {
            this.list = list;
            this.name = name;
            this.time = time;
            this.print = () => console.log(this.name);
        }
    }

    let numberOfSongs = input.shift();
    let desiredPlaylist = input.pop();

    let songs = [];

    for (let i = 0; i < numberOfSongs; i++) {
        let currentInput = input[i];
        let currentArray = currentInput.split('_');
        let currentSong = new Song(currentArray[0], currentArray[1], currentArray[2]);
        songs.push(currentSong);
    }

    if (desiredPlaylist === 'all') {
        songs.forEach(s => s.print());
    } else {
        songs
            .filter(s => s.list === 'desiredPlaylist')
            .forEach(s => s.print());
    }

}
playlist([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite'
]);