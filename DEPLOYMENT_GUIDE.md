# 🚀 Deployment Guide

## 🌐 Live Deployment Options

### Option 1: Local Development
```bash
# Start local blockchain
npm run node

# Deploy contract
npm run deploy-simple

# Open frontend
open frontend/voting-app.html
```

### Option 2: Testnet Deployment

#### Sepolia Testnet
```bash
# Add to hardhat.config.cjs
sepolia: {
  url: process.env.SEPOLIA_URL || "",
  accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
}

# Deploy to Sepolia
npx hardhat run scripts/deploy-simple-voting.ts --network sepolia
```

#### Environment Variables
Create `.env` file:
```
SEPOLIA_URL=https://sepolia.infura.io/v3/YOUR_PROJECT_ID
PRIVATE_KEY=your_private_key_here
```

### Option 3: Frontend Hosting

#### GitHub Pages
1. Push code to GitHub
2. Enable GitHub Pages
3. Update contract address in `frontend/contract-info.json`
4. Access via GitHub Pages URL

#### Netlify
1. Connect GitHub repository
2. Build command: `npm run compile`
3. Publish directory: `frontend/`
4. Deploy automatically

#### Vercel
1. Import GitHub repository
2. Framework: Other
3. Build command: `npm run compile`
4. Output directory: `frontend/`

## 🔧 Configuration

### Contract Address Update
After deployment, update `frontend/contract-info.json`:
```json
{
  "address": "0x...",
  "network": "sepolia",
  "deployedAt": "2024-01-01T00:00:00.000Z"
}
```

### Network Configuration
Update MetaMask to use correct network:
- **Local**: http://localhost:8545 (Chain ID: 1337)
- **Sepolia**: https://sepolia.infura.io (Chain ID: 11155111)

## 📱 Mobile Access

### Responsive Design
- Frontend is mobile-responsive
- Works on all devices
- Touch-friendly interface

### PWA Support
Add to `frontend/voting-app.html`:
```html
<link rel="manifest" href="manifest.json">
<meta name="theme-color" content="#667eea">
```

## 🔐 Security Considerations

### Production Checklist
- [ ] Use environment variables for sensitive data
- [ ] Verify contract on Etherscan
- [ ] Use HTTPS for frontend
- [ ] Implement rate limiting
- [ ] Add input validation

### Access Control
- Only contract owner can close/open voting
- Votes are immutable once cast
- Results are publicly verifiable

## 📊 Monitoring

### Contract Events
Monitor these events:
- `VoteCast(address indexed voter, uint8 option)`
- `VotingClosed()`
- `VotingOpened()`

### Analytics
Track:
- Total votes cast
- Voting patterns
- User engagement
- Error rates

## 🚀 Performance

### Optimization
- Use contract events for real-time updates
- Implement caching for results
- Optimize gas usage
- Use batch operations

### Scaling
- Consider layer 2 solutions
- Implement vote batching
- Use efficient data structures
- Monitor gas costs

---

**Ready to deploy? Let's go live! 🌐**
