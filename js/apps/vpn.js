/* OBLIVIAN OS - VPN (Oblivian)
   All code created by: amaanallen2016-web */

const VPNApp = {
    isConnected: false,
    currentServer: 'US - New York',
    
    open: function() {
        const status = this.isConnected ? 
            '<span style="color: #00ff88;">🟢 Connected</span>' : 
            '<span style="color: #ff4444;">🔴 Disconnected</span>';
            
        const content = `
            <div style="text-align: center;">
                <h2 style="color: #ff00ff;">🔒 OBLIVIAN VPN</h2>
                <p>Created by: amaanallen2016-web</p>
                
                <div style="margin: 20px 0; padding: 20px; background: rgba(102, 0, 204, 0.2); border-radius: 8px;">
                    <p style="font-size: 0.9em; margin: 5px 0;">Status: ${status}</p>
                    <p style="font-size: 0.9em; margin: 5px 0;">Current Server: <strong>${this.currentServer}</strong></p>
                </div>
                
                <div style="margin: 20px 0;">
                    <button onclick="VPNApp.toggleConnection()" style="width: 100%; padding: 15px; font-size: 1.1em; background: linear-gradient(135deg, #ff00ff, #ff0088);">
                        ${this.isConnected ? 'Disconnect' : 'Connect'}
                    </button>
                </div>
                
                <div style="text-align: left; margin-top: 20px;">
                    <strong>Available Servers:</strong>
                    <button onclick="VPNApp.selectServer('US - New York')" style="width: 100%; margin: 5px 0;">🇺🇸 US - New York</button>
                    <button onclick="VPNApp.selectServer('UK - London')" style="width: 100%; margin: 5px 0;">🇬🇧 UK - London</button>
                    <button onclick="VPNApp.selectServer('JP - Tokyo')" style="width: 100%; margin: 5px 0;">🇯🇵 JP - Tokyo</button>
                    <button onclick="VPNApp.selectServer('AU - Sydney')" style="width: 100%; margin: 5px 0;">🇦🇺 AU - Sydney</button>
                </div>
            </div>
        `;
        os.createWindow('🔒 OBLIVIAN VPN', content, 500, 450);
    },
    
    toggleConnection: function() {
        this.isConnected = !this.isConnected;
        os.showNotification('VPN', this.isConnected ? 'Connected to VPN' : 'Disconnected from VPN', 'success');
        this.open();
    },
    
    selectServer: function(server) {
        this.currentServer = server;
        os.showNotification('VPN', `Connecting to ${server}...`, 'success');
        this.open();
    }
};
