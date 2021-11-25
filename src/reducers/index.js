import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'Human', duration: '4:20'},
        { title: 'Dracula', duration: '2:45'},
        { title: 'HUMBLE', duration: '3:02'},
        { title: 'pacs theme', duration: '1:32'}
    ];
};

const selectedSongReducer = (selectedSong=null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});