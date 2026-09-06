/* OBLIVIAN OS - Music App (Oblivian Songs)
   All code created by: amaanallen2016-web */

const MusicApp = {
    playlist: [
        { name: 'Phonk Mix Vol.1', artist: 'Oblivian', duration: '3:45' },
        { name: 'Neon Dreams', artist: 'Oblivian', duration: '4:02' },
        { name: 'Digital Echoes', artist: 'Oblivian', duration: '3:28' },
        { name: 'Cyber Wave', artist: 'Oblivian', duration: '3:55' }
    ],
    
    open: function() {
        let playlistHTML = '<h2 style="color: #ff00ff;">🎵 Oblivian Music Library</h2>';
        playlistHTML += '<p>Created by: amaanallen2016-web - ALL SONGS COLLECTION</p>';
        playlistHTML += '<div class="playlist">';
        
        this.playlist.forEach((song, index) => {
            playlistHTML += `
                <div class="playlist-item" onclick="MusicApp.playSong(${index})">
                    <span style="color: var(--secondary);">♫</span>
                    <div>
                        <strong>${song.name}</strong>
                        <br><small>${song.artist} - ${song.duration}</small>
                    </div>
                </div>
            `;
        });
        
        playlistHTML += '</div>';
        os.createWindow('🎵 Oblivian Music', playlistHTML, 600, 500);
    },
    
    playSong: function(index) {
        os.showNotification('Now Playing', this.playlist[index].name, 'success');
    }
};
