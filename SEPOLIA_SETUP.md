# 🔗 Sepolia Testnet Setup

## 📋 Prerequisites

1. **MetaMask Wallet** - Install from [metamask.io](https://metamask.io)
2. **Sepolia ETH** - Get testnet ETH from [faucets](https://sepoliafaucet.com)
3. **Infura/Alchemy Account** - For RPC endpoint

## ⚙️ Environment Setup

### 1. Create .env file
```bash
# Create .env file
touch .env
```

### 2. Add configuration
```env
SEPOLIA_URL=https://sepolia.infura.io/v3/YOUR_PROJECT_ID
PRIVATE_KEY=your_private_key_here
```

### 3. Get Sepolia ETH
- Visit [Sepolia Faucet](https://sepoliafaucet.com)
- Enter your wallet address
- Request testnet ETH

## 🚀 Deployment Steps

### 1. Deploy to Sepolia
```bash
npm run deploy-sepolia
```

### 2. Update Frontend
After deployment, update the contract address in `frontend/zama-voting.html`:
```javascript
const contractAddress = "0x..."; // Your deployed contract address
```

### 3. Open Frontend
```bash
open frontend/zama-voting.html
```

## 🔧 MetaMask Configuration

### Automatic Network Switch
The frontend will automatically:
- ✅ Switch to Sepolia network
- ✅ Add Sepolia if not present
- ✅ Show network status

### Manual Network Setup
If automatic switch fails:
1. Open MetaMask
2. Click network dropdown
3. Select "Sepolia Test Network"
4. Or add custom network:
   - Network Name: Sepolia Test Network
   - RPC URL: https://sepolia.infura.io/v3/YOUR_PROJECT_ID
   - Chain ID: 11155111
   - Currency Symbol: ETH
   - Block Explorer: https://sepolia.etherscan.io

## 🧪 Testing

### 1. Connect Wallet
- Click "Connect Wallet"
- Approve connection in MetaMask
- Verify Sepolia network

### 2. Cast Vote
- Select voting option
- Click "Cast Your Vote"
- Confirm transaction in MetaMask
- Wait for confirmation

### 3. View Results
- Results update automatically
- Check transaction on Etherscan
- Verify vote count

## 🔍 Troubleshooting

### Common Issues

#### "MetaMask not installed"
- Install MetaMask browser extension
- Refresh the page

#### "Failed to connect wallet"
- Check MetaMask is unlocked
- Try refreshing the page
- Check browser permissions

#### "Transaction failed"
- Check you have Sepolia ETH
- Verify network is Sepolia
- Check gas settings

#### "Contract not found"
- Verify contract address
- Check contract is deployed
- Verify network connection

### Debug Steps

1. **Check Console**
   - Open browser dev tools
   - Look for error messages
   - Check network requests

2. **Verify Network**
   - Check MetaMask network
   - Verify chain ID is 11155111
   - Check RPC endpoint

3. **Check Contract**
   - Verify contract address
   - Check on Etherscan
   - Verify ABI matches

## 📊 Success Indicators

### ✅ Working Connection
- Wallet address displayed
- Network shows "Sepolia"
- Contract functions work
- Transactions confirm

### ✅ Successful Vote
- Transaction hash received
- Vote count increases
- Results update
- No error messages

## 🎯 Next Steps

After successful setup:
1. **Test Voting** - Cast test votes
2. **Check Results** - Verify vote counting
3. **Admin Functions** - Test admin controls
4. **Share Demo** - Show to others

---

**Ready to vote on Sepolia! 🗳️**
