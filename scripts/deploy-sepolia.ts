import pkg from "hardhat";
const { ethers } = pkg;

async function main() {
  console.log("🚀 Deploying to Sepolia Testnet...");

  // Get the contract factory
  const SimpleVoting = await ethers.getContractFactory("SimpleVoting");

  // Deploy the contract
  console.log("📝 Deploying contract to Sepolia...");
  const voting = await SimpleVoting.deploy();

  // Wait for deployment to complete
  await voting.waitForDeployment();

  const contractAddress = await voting.getAddress();
  console.log("✅ Simple Voting contract deployed to:", contractAddress);

  // Log contract information
  console.log("\n📊 Contract Information:");
  console.log("Contract Address:", contractAddress);
  console.log("Network: Sepolia Testnet");
  console.log("Owner:", await voting.owner());
  console.log("Voting Status:", await voting.isVotingOpen());
  console.log("Total Votes:", await voting.getTotalVotes());

  // Save contract address to a file for frontend use
  const fs = require('fs');
  const contractInfo = {
    address: contractAddress,
    network: "sepolia",
    deployedAt: new Date().toISOString(),
    abi: SimpleVoting.interface.format("json")
  };

  fs.writeFileSync(
    './frontend/contract-info.json', 
    JSON.stringify(contractInfo, null, 2)
  );

  console.log("\n💾 Contract info saved to frontend/contract-info.json");
  
  // Demo voting
  console.log("\n🎮 Demo Voting:");
  const [owner, voter1, voter2, voter3] = await ethers.getSigners();
  
  console.log("Casting votes...");
  await voting.connect(voter1).castVote(1);
  await voting.connect(voter2).castVote(2);
  await voting.connect(voter3).castVote(1);
  
  console.log("Vote counts:");
  console.log("- Option 1:", await voting.getOption1Votes());
  console.log("- Option 2:", await voting.getOption2Votes());
  console.log("- Option 3:", await voting.getOption3Votes());
  console.log("- Total:", await voting.getTotalVotes());
  
  console.log("\n🎉 Deployment completed successfully!");
  console.log("\nNext steps:");
  console.log("1. Update contract address in frontend/zama-voting.html");
  console.log("2. Open frontend/zama-voting.html in your browser");
  console.log("3. Connect MetaMask to Sepolia network");
  console.log("4. Start voting!");
  console.log("\nContract Address:", contractAddress);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
