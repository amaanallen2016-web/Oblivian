/* OBLIVIAN OS - Doblox (Roblox Alternative)
   All code created by: amaanallen2016-web */

const DobloxApp = {
    open: function() {
        const content = `
            <div>
                <h2 style="color: #ff00ff;">🎯 Doblox</h2>
                <p>Roblox Alternative - Based on: amaanallen2016-web Doblox-Uncopylocked-Games</p>
                
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-top: 20px;">
                    <div class="doblox-game" onclick="DobloxApp.playGame('Adopt Me')">
                        <div style="font-size: 2em;">🐕</div>
                        <strong>Adopt Me</strong>
                        <small>Popular Game</small>
                    </div>
                    
                    <div class="doblox-game" onclick="DobloxApp.playGame('Jailbreak')">
                        <div style="font-size: 2em;">🚔</div>
                        <strong>Jailbreak</strong>
                        <small>Action</small>
                    </div>
                    
                    <div class="doblox-game" onclick="DobloxApp.playGame('Tower Defense')">
                        <div style="font-size: 2em;">🏰</div>
                        <strong>Tower Defense</strong>
                        <small>Strategy</small>
                    </div>
                    
                    <div class="doblox-game" onclick="DobloxApp.playGame('Tycoon')">
                        <div style="font-size: 2em;">💰</div>
                        <strong>Tycoon</strong>
                        <small>Business</small>
                    </div>
                    
                    <div class="doblox-game" onclick="DobloxApp.playGame('Obby')">
                        <div style="font-size: 2em;">🧗</div>
                        <strong>Obby Courses</strong>
                        <small>Platform</small>
                    </div>
                    
                    <div class="doblox-game" onclick="DobloxApp.playGame('RPG World')">
                        <div style="font-size: 2em;">⚔️</div>
                        <strong>RPG World</strong>
                        <small>Adventure</small>
                    </div>
                </div>
                
                <p style="margin-top: 20px; font-size: 0.9em;">500+ Games Available - Created by: amaanallen2016-web</p>
            </div>
        `;
        os.createWindow('🎯 Doblox', content, 700, 600);
    },
    
    playGame: function(game) {
        os.showNotification('Doblox', `Loading ${game}...`, 'success');
    }
};
