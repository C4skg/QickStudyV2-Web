const { app, BrowserWindow ,Notification,Tray, Menu} = require('electron');
const path = require('path');

const iconPath = path.join(__dirname,'../src/assets/logo.png');

let mainWindow,
tray;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 1250,
        height: 800,
        icon: iconPath,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        },
        titleBarStyle: 'hidden',
        titleBarOverlay: {
            color: 'rgba(0,0,0,0)',
            height: 35,
            symbolColor: 'white'
        }
    });
    mainWindow.loadFile(
        path.join(__dirname,"../dist/index.html")
    );

    mainWindow.on('will-resize',function(event,newBounds,details){
        if(
            newBounds.width <= 1000
            ||
            newBounds.height <= 600
        ){
            event.preventDefault();
        }
    })

    mainWindow.on('close',function(event){
        if(!mainWindow.isFocused()){
            'quit'
        }else{
            new Notification({
                title: "QickStudy已隐藏到托盘",
            }).show();
            event.preventDefault();
            mainWindow.hide();
        }
    })

    mainWindow.on('closed', function () {
        mainWindow = null;
    });

    // mainWindow.webContents.openDevTools()

}

app.on('ready', createWindow);

app.on('activate', function () {
    if (mainWindow === null) {
        createWindow();
    }
});

app.whenReady().then(()=>{
    tray = new Tray(iconPath);
    const contextMenu = Menu.buildFromTemplate([
    {
        label: '设置',
        click: function () {
            console.log('setting')
        }
    },
    {
        label: '退出',
        click: function () {
            if (process.platform !== 'darwin') {
                app.quit();
            }
        }
    }
    ]);
    tray.setToolTip('QickStudy');
    tray.setContextMenu(contextMenu);
    tray.on('double-click',function(){
    mainWindow.show();
    })
})