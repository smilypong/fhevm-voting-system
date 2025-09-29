import { ethers } from "hardhat";

async function main() {
  console.log("🚀 Deploying FHEVM Voting System...");

  // Get the contract factory
  const FHEVMVoting = await ethers.getContractFactory("FHEVMVoting");

  // Deploy the contract
  console.log("📝 Deploying contract...");
  const voting = await FHEVMVoting.deploy();

  // Wait for deployment to complete
  await voting.waitForDeployment();

  const contractAddress = await voting.getAddress();
  console.log("✅ FHEVM Voting contract deployed to:", contractAddress);

  // Log contract information
  console.log("\n📊 Contract Information:");
  console.log("Contract Address:", contractAddress);
  console.log("Owner:", await voting.owner());
  console.log("Voting Status:", await voting.isVotingOpen());

  // Save contract address to a file for frontend use
  const fs = require('fs');
  const contractInfo = {
    address: contractAddress,
    network: "hardhat",
    deployedAt: new Date().toISOString()
  };

  fs.writeFileSync(
    './frontend/contract-info.json', 
    JSON.stringify(contractInfo, null, 2)
  );

  console.log("\n💾 Contract info saved to frontend/contract-info.json");
  console.log("\n🎉 Deployment completed successfully!");
  console.log("\nNext steps:");
  console.log("1. Open frontend/index.html in your browser");
  console.log("2. Connect your MetaMask wallet");
  console.log("3. Start voting!");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
