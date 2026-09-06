/* OBLIVIAN OS - Live Messaging & Calls
   All code created by: amaanallen2016-web */

const MessagingApp = {
    myCode: localStorage.getItem('user_text_code') || 'USER_' + Math.random().toString(36).substr(2, 9).toUpperCase(),
    contacts: [],
    
    open: function() {
        let content = `
            <div style="display: flex; flex-direction: column; height: 100%;">
                <div style="margin-bottom: 15px; padding: 10px; background: rgba(102, 0, 204, 0.2); border-radius: 4px;">
                    <strong>YOUR TEXT CODE:</strong><br>
                    <span style="color: #ff00ff; font-size: 1.2em;">${this.myCode}</span>
                    <p style="font-size: 0.8em; margin-top: 5px;">Share this code with others to connect</p>
                </div>
                
                <div style="margin-bottom: 15px;">
                    <input type="text" id="connectCode" placeholder="Enter friend's text code..." style="width: 100%;">
                    <button onclick="MessagingApp.connectWithCode()" style="width: 100%; margin-top: 8px;">Connect</button>
                </div>
                
                <div id="messageContainer" style="flex: 1; overflow-y: auto; margin-bottom: 15px; padding: 10px; background: rgba(0, 0, 0, 0.3); border-radius: 4px; border: 1px solid #6600cc;">
                    <p style="text-align: center; color: #666;">No messages yet...</p>
                </div>
                
                <div style="display: flex; gap: 5px;">
                    <input type="text" id="messageInput" placeholder="Type message..." style="flex: 1;">
                    <button onclick="MessagingApp.sendMessage()" style="width: 100px;">Send</button>
                    <button onclick="MessagingApp.call()" style="width: 100px; background: linear-gradient(135deg, #ff00ff, #ff0088);">📞 Call</button>
                </div>
            </div>
        `;
        os.createWindow('💬 Messaging & Calls', content, 600, 500);
    },
    
    connectWithCode: function() {
        const code = document.getElementById('connectCode').value;
        if(code) {
            os.showNotification('Connected', `Connected to ${code}`, 'success');
            document.getElementById('connectCode').value = '';
        }
    },
    
    sendMessage: function() {
        const msg = document.getElementById('messageInput').value;
        if(msg) {
            const container = document.getElementById('messageContainer');
            container.innerHTML += `<div class="chat-message sent"><strong>You:</strong> ${msg}</div>`;
            document.getElementById('messageInput').value = '';
            container.scrollTop = container.scrollHeight;
        }
    },
    
    call: function() {
        os.showNotification('Calling', 'Initiating voice call...', 'success');
    }
};
