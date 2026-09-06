/* OBLIVIAN OS - Settings & Wallpapers
   All code created by: amaanallen2016-web */

const SettingsApp = {
    open: function() {
        const content = `
            <div>
                <h2 style="color: #ff00ff;">⚙️ Settings</h2>
                
                <div style="margin-top: 20px;">
                    <h3 style="color: var(--accent); margin-bottom: 15px;">🖼️ Wallpapers</h3>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                        <button onclick="SettingsApp.setWallpaper('gradient-purple')" style="padding: 15px; background: linear-gradient(135deg, #6600cc, #9933ff);">Purple Gradient</button>
                        <button onclick="SettingsApp.setWallpaper('gradient-dark')" style="padding: 15px; background: linear-gradient(135deg, #000, #1a0033);">Dark Theme</button>
                        <button onclick="SettingsApp.setWallpaper('gradient-neon')" style="padding: 15px; background: linear-gradient(135deg, #ff00ff, #00ffff);">Neon Theme</button>
                        <button onclick="SettingsApp.setWallpaper('gradient-oblivian')" style="padding: 15px; background: linear-gradient(135deg, #1a0033, #2d0052);">Oblivian Theme</button>
                    </div>
                </div>
                
                <div style="margin-top: 20px;">
                    <h3 style="color: var(--accent); margin-bottom: 15px;">🎨 Appearance</h3>
                    <div>
                        <label style="display: block; margin: 10px 0;">
                            <input type="checkbox" checked> Enable Animations
                        </label>
                        <label style="display: block; margin: 10px 0;">
                            <input type="checkbox" checked> Enable Sound Effects
                        </label>
                        <label style="display: block; margin: 10px 0;">
                            <input type="checkbox" checked> Show Notifications
                        </label>
                    </div>
                </div>
                
                <div style="margin-top: 20px;">
                    <h3 style="color: var(--accent); margin-bottom: 15px;">ℹ️ System Info</h3>
                    <p style="font-size: 0.9em;">OBLIVIAN OS v2.0</p>
                    <p style="font-size: 0.9em;">Created by: amaanallen2016-web</p>
                    <p style="font-size: 0.9em;">Features: 10k+ Games, VPN, Music, PS4 Emu, Doblox, Messaging & More</p>
                </div>
            </div>
        `;
        os.createWindow('⚙️ Settings', content, 600, 500);
    },
    
    setWallpaper: function(theme) {
        document.body.style.background = 'linear-gradient(135deg, #1a0033 0%, #2d0052 50%, #000 100%)';
        os.showNotification('Settings', 'Wallpaper changed!', 'success');
    }
};
