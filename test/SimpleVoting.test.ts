import { expect } from "chai";
import pkg from "hardhat";
const { ethers } = pkg;

describe("Simple Voting System", function () {
  let voting: any;
  let owner: any;
  let voter1: any;
  let voter2: any;

  beforeEach(async function () {
    // Get signers
    [owner, voter1, voter2] = await ethers.getSigners();

    // Deploy a simple voting contract (without FHEVM for testing)
    const SimpleVoting = await ethers.getContractFactory("SimpleVoting");
    voting = await SimpleVoting.deploy();
    await voting.waitForDeployment();
  });

  describe("Deployment", function () {
    it("Should set the right owner", async function () {
      expect(await voting.owner()).to.equal(owner.address);
    });

    it("Should initialize with voting open", async function () {
      expect(await voting.isVotingOpen()).to.be.true;
    });

    it("Should initialize with zero votes", async function () {
      expect(await voting.getTotalVotes()).to.equal(0);
    });
  });

  describe("Voting Functionality", function () {
    it("Should allow voting when voting is open", async function () {
      await voting.connect(voter1).castVote(1);
      expect(await voting.getTotalVotes()).to.equal(1);
    });

    it("Should prevent voting when voting is closed", async function () {
      await voting.closeVoting();
      await expect(
        voting.connect(voter1).castVote(1)
      ).to.be.revertedWith("Voting is closed");
    });

    it("Should emit VoteCast event", async function () {
      await expect(voting.connect(voter1).castVote(1))
        .to.emit(voting, "VoteCast")
        .withArgs(voter1.address, 1);
    });
  });

  describe("Admin Functions", function () {
    it("Should allow owner to close voting", async function () {
      await voting.closeVoting();
      expect(await voting.isVotingOpen()).to.be.false;
    });

    it("Should allow owner to open voting", async function () {
      await voting.closeVoting();
      expect(await voting.isVotingOpen()).to.be.false;
      
      await voting.openVoting();
      expect(await voting.isVotingOpen()).to.be.true;
    });

    it("Should prevent non-owner from closing voting", async function () {
      await expect(
        voting.connect(voter1).closeVoting()
      ).to.be.revertedWith("Only owner can close voting");
    });

    it("Should emit VotingClosed event", async function () {
      await expect(voting.closeVoting())
        .to.emit(voting, "VotingClosed");
    });
  });

  describe("Vote Counting", function () {
    it("Should count votes correctly", async function () {
      await voting.connect(voter1).castVote(1);
      await voting.connect(voter2).castVote(2);
      
      expect(await voting.getTotalVotes()).to.equal(2);
      expect(await voting.getOption1Votes()).to.equal(1);
      expect(await voting.getOption2Votes()).to.equal(1);
    });
  });

  describe("Integration Tests", function () {
    it("Should complete full voting cycle", async function () {
      // 1. Cast votes
      await voting.connect(voter1).castVote(1);
      await voting.connect(voter2).castVote(2);
      
      // 2. Check results
      expect(await voting.getTotalVotes()).to.equal(2);
      
      // 3. Close voting
      await voting.closeVoting();
      expect(await voting.isVotingOpen()).to.be.false;
      
      // 4. Try to vote after closing (should fail)
      await expect(
        voting.connect(voter1).castVote(3)
      ).to.be.revertedWith("Voting is closed");
    });
  });
});
