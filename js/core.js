/* OBLIVIAN OS - Core System
   All code created by: amaanallen2016-web */

class OblivianOS {
    constructor() {
        this.windows = new Map();
        this.windowCounter = 0;
        this.activeWindow = null;
        this.zIndex = 100;
        this.init();
    }

    init() {
        this.updateClock();
        setInterval(() => this.updateClock(), 1000);
        document.addEventListener('click', (e) => this.handleDesktopClick(e));
        this.showWelcomeNotification();
    }

    updateClock() {
        const clock = document.getElementById('clock');
        if (clock) {
            const now = new Date();
            clock.textContent = now.toLocaleTimeString();
        }
    }

    showWelcomeNotification() {
        this.showNotification('OBLIVIAN OS', 'All code created by: amaanallen2016-web', 'success');
    }

    createWindow(title, content, width = 600, height = 400) {
        const id = `window-${this.windowCounter++}`;
        const container = document.getElementById('appContainer');
        
        const windowEl = document.createElement('div');
        windowEl.className = 'app-window';
        windowEl.id = id;
        windowEl.style.width = width + 'px';
        windowEl.style.height = height + 'px';
        windowEl.style.left = Math.random() * (window.innerWidth - width) + 'px';
        windowEl.style.top = Math.random() * (window.innerHeight - height - 40) + 'px';
        
        windowEl.innerHTML = `
            <div class="window-header">
                <div class="window-title">${title}</div>
                <div class="window-controls">
                    <button class="window-btn" onclick="os.minimizeWindow('${id}')">_</button>
                    <button class="window-btn" onclick="os.closeWindow('${id}')">X</button>
                </div>
            </div>
            <div class="window-content">${content}</div>
        `;
        
        if (container) container.appendChild(windowEl);
        this.makeWindowDraggable(id);
        this.bringToFront(id);
        this.windows.set(id, { title, element: windowEl });
        
        return windowEl;
    }

    makeWindowDraggable(id) {
        const windowEl = document.getElementById(id);
        const header = windowEl.querySelector('.window-header');
        let isDown = false;
        let offsetX = 0;
        let offsetY = 0;

        header.addEventListener('mousedown', (e) => {
            isDown = true;
            offsetX = e.clientX - windowEl.getBoundingClientRect().left;
            offsetY = e.clientY - windowEl.getBoundingClientRect().top;
            this.bringToFront(id);
        });

        document.addEventListener('mousemove', (e) => {
            if (isDown) {
                windowEl.style.left = (e.clientX - offsetX) + 'px';
                windowEl.style.top = (e.clientY - offsetY) + 'px';
            }
        });

        document.addEventListener('mouseup', () => {
            isDown = false;
        });
    }

    bringToFront(id) {
        const windowEl = document.getElementById(id);
        if (windowEl) {
            windowEl.style.zIndex = this.zIndex++;
            document.querySelectorAll('.app-window').forEach(w => {
                w.style.borderColor = '#6600cc';
            });
            windowEl.style.borderColor = '#00ffff';
            this.activeWindow = id;
        }
    }

    closeWindow(id) {
        const windowEl = document.getElementById(id);
        if (windowEl) {
            windowEl.remove();
            this.windows.delete(id);
        }
    }

    minimizeWindow(id) {
        const windowEl = document.getElementById(id);
        if (windowEl) {
            windowEl.style.display = windowEl.style.display === 'none' ? 'flex' : 'none';
        }
    }

    showNotification(title, message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = `<strong>${title}</strong><br>${message}`;
        notification.style.cssText = `
            position: fixed; bottom: 60px; right: 20px; background: rgba(10, 0, 30, 0.95);
            border: 2px solid #6600cc; border-radius: 8px; padding: 15px; color: #00ff88;
            box-shadow: 0 0 30px rgba(102, 0, 204, 0.6); z-index: 1500; animation: slideIn 0.3s ease;
        `;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.remove();
        }, 3000);
    }

    saveData(key, data) {
        localStorage.setItem(`oblivian_${key}`, JSON.stringify(data));
    }

    loadData(key, defaultValue = null) {
        const data = localStorage.getItem(`oblivian_${key}`);
        return data ? JSON.parse(data) : defaultValue;
    }
}

const os = new OblivianOS();

function openApp(appName) {
    const menu = document.getElementById('startMenu');
    if(menu) menu.classList.add('hidden');
    
    switch(appName) {
        case 'games': GamesApp.open(); break;
        case 'music': MusicApp.open(); break;
        case 'messaging': MessagingApp.open(); break;
        case 'ps4': PS4App.open(); break;
        case 'doblox': DobloxApp.open(); break;
        case 'vpn': VPNApp.open(); break;
        case 'settings': SettingsApp.open(); break;
    }
}

function toggleStartMenu() {
    const menu = document.getElementById('startMenu');
    if(menu) menu.classList.toggle('hidden');
}
