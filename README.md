# 🗳️ FHEVM Voting System

A privacy-preserving blockchain voting system built with FHEVM (Fully Homomorphic Encryption Virtual Machine) technology.

## 🚀 Features

- **Privacy-Preserving Voting**: Votes are encrypted using FHEVM technology
- **Transparent Results**: Publicly verifiable results on blockchain
- **Real-time Updates**: Live voting statistics and instant results
- **Mobile Responsive**: Works on all devices and screen sizes
- **Admin Controls**: Complete voting management system
- **Live Server**: Multiple demo ports for testing

## 🛠️ Technology Stack

- **Smart Contracts**: Solidity with FHEVM integration
- **Frontend**: HTML, CSS, JavaScript with Ethers.js
- **Blockchain**: Ethereum with FHEVM support
- **Development**: Hardhat framework
- **Live Server**: Node.js with live-server

## 📱 Live Demo

### Quick Start Commands

```bash
# Start main demo (port 3000)
npm run live

# Start FHEVM demo (port 3001)  
npm run live-frontend

# Start simple voting (port 3002)
npm run live-voting

# Start general server (port 8080)
npm run serve
```

### Demo Links

| Demo | URL | Port | Description |
|------|-----|------|-------------|
| **Main Demo** | http://localhost:3000 | 3000 | Complete voting system |
| **FHEVM Demo** | http://localhost:3001 | 3001 | Privacy-preserving voting |
| **Simple Voting** | http://localhost:3002 | 3002 | Basic voting interface |
| **Demo Hub** | http://localhost:8080 | 8080 | All demos in one place |

## 🏗️ Installation

```bash
# Clone the repository
git clone https://github.com/smilypong/fhevm-voting-system.git
cd fhevm-voting-system

# Install dependencies
npm install

# Compile contracts
npm run compile

# Run tests
npm run test
```

## 🚀 Development

### Smart Contract Development

```bash
# Start local blockchain
npm run node

# Deploy contracts
npm run deploy

# Run demo script
npm run demo
```

### Frontend Development

```bash
# Start live server
npm run live

# Start specific demo
npm run live-frontend  # FHEVM demo
npm run live-voting    # Simple voting
```

## 📁 Project Structure

```
fhevm-voting-system/
├── contracts/              # Smart contracts
│   ├── FHEVMVoting.sol    # Main FHEVM voting contract
│   └── SimpleVoting.sol    # Simple voting contract
├── frontend/               # Frontend applications
│   ├── index.html         # FHEVM demo
│   ├── voting-app.html    # Simple voting
│   └── contract-info.json # Contract configuration
├── scripts/                # Deployment scripts
├── test/                   # Test files
├── demo.html              # Main demo
├── index.html             # Demo hub
└── package.json           # Dependencies and scripts
```

## 🔧 Available Scripts

```bash
npm run compile        # Compile smart contracts
npm run test          # Run test suite
npm run deploy        # Deploy to localhost
npm run deploy-simple # Deploy simple voting
npm run demo          # Run demo script
npm run node          # Start local blockchain
npm run live          # Start main demo server
npm run live-frontend # Start FHEVM demo server
npm run live-voting   # Start simple voting server
npm run serve         # Start general server
```

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

## 🔐 Security Features

- **FHEVM Encryption**: Votes are encrypted using fully homomorphic encryption
- **Blockchain Security**: Tamper-proof voting records
- **Privacy Protection**: Individual votes remain private
- **Transparent Results**: Publicly verifiable outcomes

## 📊 Voting Process

1. **Vote Casting**: Users select their choice and cast encrypted votes
2. **Encryption**: Votes are encrypted using FHEVM technology
3. **Blockchain Storage**: Encrypted votes are stored on blockchain
4. **Result Calculation**: Results are computed without revealing individual votes
5. **Public Verification**: Anyone can verify the results

## 🛠️ Troubleshooting

### Port Already in Use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use different port
live-server --port=3001
```

### Contract Not Found
```bash
# Deploy contracts first
npm run deploy-simple
```

## 📚 Documentation

- [Live Server Guide](LIVE_SERVER_GUIDE.md) - Complete live server setup
- [Deployment Guide](DEPLOYMENT_GUIDE.md) - Smart contract deployment
- [Quick Start](QUICK_START.md) - Getting started guide
- [Sepolia Setup](SEPOLIA_SETUP.md) - Testnet configuration

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License - see the [package.json](package.json) file for details.

## 🎉 Acknowledgments

- FHEVM team for the encryption technology
- Hardhat framework for smart contract development
- Ethers.js for blockchain interaction
- Live-server for development server

---

**Happy Voting! 🗳️**