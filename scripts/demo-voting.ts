import pkg from "hardhat";
const { ethers } = pkg;

async function main() {
  console.log("🎮 Starting Voting System Demo...");

  // Get signers
  const [owner, voter1, voter2, voter3, voter4, voter5] = await ethers.getSigners();
  
  console.log("👥 Participants:");
  console.log("- Owner:", owner.address);
  console.log("- Voter 1:", voter1.address);
  console.log("- Voter 2:", voter2.address);
  console.log("- Voter 3:", voter3.address);
  console.log("- Voter 4:", voter4.address);
  console.log("- Voter 5:", voter5.address);

  // Deploy contract
  console.log("\n📝 Deploying Simple Voting contract...");
  const SimpleVoting = await ethers.getContractFactory("SimpleVoting");
  const voting = await SimpleVoting.deploy();
  await voting.waitForDeployment();
  
  const contractAddress = await voting.getAddress();
  console.log("✅ Contract deployed to:", contractAddress);

  // Initial status
  console.log("\n📊 Initial Status:");
  console.log("- Voting Open:", await voting.isVotingOpen());
  console.log("- Total Votes:", await voting.getTotalVotes());

  // Demo voting
  console.log("\n🗳️ Demo Voting Process:");
  
  console.log("\n1. Voter 1 votes for Option 1 (Innovation)");
  await voting.connect(voter1).castVote(1);
  
  console.log("2. Voter 2 votes for Option 2 (Sustainability)");
  await voting.connect(voter2).castVote(2);
  
  console.log("3. Voter 3 votes for Option 1 (Innovation)");
  await voting.connect(voter3).castVote(1);
  
  console.log("4. Voter 4 votes for Option 3 (Community)");
  await voting.connect(voter4).castVote(3);
  
  console.log("5. Voter 5 votes for Option 2 (Sustainability)");
  await voting.connect(voter5).castVote(2);

  // Check results
  console.log("\n📈 Voting Results:");
  const totalVotes = await voting.getTotalVotes();
  const option1Votes = await voting.getOption1Votes();
  const option2Votes = await voting.getOption2Votes();
  const option3Votes = await voting.getOption3Votes();
  
  console.log("- Total Votes:", totalVotes.toString());
  console.log("- Option 1 (Innovation):", option1Votes.toString());
  console.log("- Option 2 (Sustainability):", option2Votes.toString());
  console.log("- Option 3 (Community):", option3Votes.toString());

  // Admin functions demo
  console.log("\n🔧 Admin Functions Demo:");
  
  console.log("Closing voting...");
  await voting.closeVoting();
  console.log("- Voting Open:", await voting.isVotingOpen());
  
  console.log("Trying to vote after closing (should fail)...");
  try {
    await voting.connect(voter1).castVote(1);
    console.log("❌ This should not happen!");
  } catch (error) {
    console.log("✅ Correctly prevented voting after closing");
  }
  
  console.log("Reopening voting...");
  await voting.openVoting();
  console.log("- Voting Open:", await voting.isVotingOpen());

  // Final results
  console.log("\n🏆 Final Results:");
  console.log("- Total Votes:", (await voting.getTotalVotes()).toString());
  console.log("- Option 1 (Innovation):", (await voting.getOption1Votes()).toString());
  console.log("- Option 2 (Sustainability):", (await voting.getOption2Votes()).toString());
  console.log("- Option 3 (Community):", (await voting.getOption3Votes()).toString());

  // Determine winner
  const finalOption1 = await voting.getOption1Votes();
  const finalOption2 = await voting.getOption2Votes();
  const finalOption3 = await voting.getOption3Votes();
  
  let winner = "Tie";
  let maxVotes = 0;
  
  if (finalOption1 > maxVotes) {
    maxVotes = finalOption1;
    winner = "Option 1 (Innovation)";
  }
  if (finalOption2 > maxVotes) {
    maxVotes = finalOption2;
    winner = "Option 2 (Sustainability)";
  }
  if (finalOption3 > maxVotes) {
    maxVotes = finalOption3;
    winner = "Option 3 (Community)";
  }
  
  console.log("\n🎉 Winner:", winner, "with", maxVotes.toString(), "votes");

  console.log("\n✅ Demo completed successfully!");
  console.log("\nNext steps:");
  console.log("1. Open frontend/voting-app.html in your browser");
  console.log("2. Connect MetaMask and use the voting interface");
  console.log("3. Contract address:", contractAddress);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
