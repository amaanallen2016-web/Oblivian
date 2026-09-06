/* OBLIVIAN OS - PS4 Emulator
   CREATED BY: amaanallen2016-web
   ALL CODE BELONGS TO: amaanallen2016-web */

const PS4App = {
    open: function() {
        const content = `
            <div style="text-align: center;">
                <h2 style="color: #ff00ff;">🎮 PS4 Emulator</h2>
                <p>CREATED BY: amaanallen2016-web</p>
                
                <div style="margin: 20px 0; padding: 20px; background: rgba(102, 0, 204, 0.2); border-radius: 8px;">
                    <p>PS4 Emulation Status: <span style="color: #00ff88;">✓ Ready</span></p>
                </div>
                
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                    <button onclick="PS4App.launchGame('God of War')">God of War</button>
                    <button onclick="PS4App.launchGame('Horizon')">Horizon</button>
                    <button onclick="PS4App.launchGame('Spiderman')">Spiderman</button>
                    <button onclick="PS4App.launchGame('Elden Ring')">Elden Ring</button>
                </div>
                
                <p style="margin-top: 15px; font-size: 0.9em;">Created by: amaanallen2016-web - ALL CODE ORIGINAL</p>
            </div>
        `;
        os.createWindow('🎮 PS4 Emulator', content, 600, 400);
    },
    
    launchGame: function(game) {
        os.showNotification('PS4 Emulator', `Launching ${game}...`, 'success');
    }
};
