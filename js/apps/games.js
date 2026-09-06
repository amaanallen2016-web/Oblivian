/* OBLIVIAN OS - Games App
   All code created by: amaanallen2016-web */

const GamesApp = {
    open: function() {
        const content = `
            <div class="app-grid">
                <h2 style="grid-column: 1/-1; color: #ff00ff;">🎮 Games Library (10,000+ Games)</h2>
                <p style="grid-column: 1/-1;">Powered by amaanallen2016-web</p>
                
                <div class="game-item" onclick="GamesApp.playGame('Doblox')">
                    <div class="game-icon">🎯</div>
                    <div class="game-name">Doblox</div>
                    <div class="game-desc">Roblox Alternative</div>
                </div>
                
                <div class="game-item" onclick="GamesApp.playGame('Action Games')">
                    <div class="game-icon">⚔️</div>
                    <div class="game-name">Action</div>
                    <div class="game-desc">2000+ Titles</div>
                </div>
                
                <div class="game-item" onclick="GamesApp.playGame('Racing')">
                    <div class="game-icon">🏎️</div>
                    <div class="game-name">Racing</div>
                    <div class="game-desc">1500+ Titles</div>
                </div>
                
                <div class="game-item" onclick="GamesApp.playGame('Puzzle')">
                    <div class="game-icon">🧩</div>
                    <div class="game-name">Puzzle</div>
                    <div class="game-desc">1200+ Titles</div>
                </div>
                
                <div class="game-item" onclick="GamesApp.playGame('RPG')">
                    <div class="game-icon">⚡</div>
                    <div class="game-name">RPG</div>
                    <div class="game-desc">2500+ Titles</div>
                </div>
                
                <div class="game-item" onclick="GamesApp.playGame('Strategy')">
                    <div class="game-icon">♟️</div>
                    <div class="game-name">Strategy</div>
                    <div class="game-desc">800+ Titles</div>
                </div>
                
                <div class="game-item" onclick="GamesApp.playGame('Sports')">
                    <div class="game-icon">⚽</div>
                    <div class="game-name">Sports</div>
                    <div class="game-desc">1000+ Titles</div>
                </div>
                
                <div class="game-item" onclick="GamesApp.playGame('Adventure')">
                    <div class="game-icon">🗺️</div>
                    <div class="game-name">Adventure</div>
                    <div class="game-desc">1800+ Titles</div>
                </div>
            </div>
        `;
        os.createWindow('🎮 Games Library', content, 800, 600);
    },
    
    playGame: function(genre) {
        os.showNotification('OBLIVIAN Games', `Loading ${genre}... Created by amaanallen2016-web`, 'success');
    }
};
