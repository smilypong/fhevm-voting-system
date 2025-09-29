# 🚀 FHEVM Voting System - Live Server Guide

## 📋 Overview
This guide explains how to run the FHEVM Voting System demos using live server.

## 🛠️ Setup Complete
✅ Live-server package installed  
✅ Scripts added to package.json  
✅ Demo hub created  
✅ Multiple demo links available  

## 🚀 Quick Start

### 1. Main Demo (Recommended)
```bash
npm run live
```
- **URL**: http://localhost:3000
- **Features**: Complete voting demo with live statistics
- **Best for**: Full demonstration

### 2. FHEVM Privacy Demo
```bash
npm run live-frontend
```
- **URL**: http://localhost:3001
- **Features**: Privacy-preserving voting with FHEVM
- **Best for**: Privacy demonstration

### 3. Simple Voting Demo
```bash
npm run live-voting
```
- **URL**: http://localhost:3002
- **Features**: Basic voting with smart contract integration
- **Best for**: Simple voting interface

### 4. General Server
```bash
npm run serve
```
- **URL**: http://localhost:8080
- **Features**: Serves all files from project root
- **Best for**: Development and testing

## 📱 Demo Links

| Demo | URL | Port | Description |
|------|-----|------|-------------|
| **Main Demo** | http://localhost:3000 | 3000 | Complete voting system |
| **FHEVM Demo** | http://localhost:3001 | 3001 | Privacy-preserving voting |
| **Simple Voting** | http://localhost:3002 | 3002 | Basic voting interface |
| **Demo Hub** | http://localhost:8080 | 8080 | All demos in one place |

## 🎯 Demo Features

### Main Demo (demo.html)
- 🗳️ Interactive voting interface
- 📊 Live results display
- 🔧 Admin controls
- 📱 Mobile responsive design
- ⚡ Real-time updates

### FHEVM Demo (frontend/index.html)
- 🔐 Privacy-preserving voting
- 🛡️ Encrypted vote casting
- 🔒 Secure results
- 👥 Multi-user support

### Simple Voting (frontend/voting-app.html)
- ⚡ Fast voting interface
- 🔗 Smart contract integration
- 📈 Real-time statistics
- 🎮 Easy to use

## 🛠️ Development Commands

```bash
# Start development server
npm run serve

# Run specific demo
npm run live          # Main demo
npm run live-frontend # FHEVM demo
npm run live-voting   # Simple voting

# Development workflow
npm run compile       # Compile contracts
npm run test         # Run tests
npm run deploy       # Deploy contracts
npm run node         # Start local blockchain
```

## 📁 File Structure

```
fhevm-new-project/
├── index.html              # Demo hub (main entry point)
├── demo.html              # Main demo
├── frontend/
│   ├── index.html         # FHEVM demo
│   ├── voting-app.html    # Simple voting
│   └── contract-info.json # Contract configuration
├── package.json           # Scripts and dependencies
└── LIVE_SERVER_GUIDE.md  # This guide
```

## 🔧 Troubleshooting

### Port Already in Use
If you get "port already in use" error:
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use different port
live-server --port=3001
```

### Browser Not Opening
If browser doesn't open automatically:
- Manually navigate to the URL shown in terminal
- Check firewall settings
- Try different browser

### Contract Not Found
If you see "Contract not deployed" error:
```bash
# Deploy contracts first
npm run deploy-simple
```

## 🎉 Success!

Your FHEVM Voting System is now running with live server! 

**Next Steps:**
1. Open http://localhost:3000 for main demo
2. Try voting in the interface
3. Check admin controls
4. View live results

## 📞 Support

If you encounter any issues:
1. Check the terminal for error messages
2. Verify all dependencies are installed
3. Ensure ports are available
4. Check browser console for JavaScript errors

---
**Happy Voting! 🗳️**
