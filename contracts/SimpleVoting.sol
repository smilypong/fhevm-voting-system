// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract SimpleVoting {
    // Vote counts for each option
    uint32 private _option1Votes;
    uint32 private _option2Votes;
    uint32 private _option3Votes;
    uint32 private _totalVotes;
    
    // Voting status
    bool public votingOpen = true;
    address public owner;
    
    // Events
    event VoteCast(address indexed voter, uint8 option);
    event VotingClosed();
    event VotingOpened();
    
    constructor() {
        owner = msg.sender;
    }
    
    // Cast a vote (1, 2, or 3)
    function castVote(uint8 vote) public {
        require(votingOpen, "Voting is closed");
        require(vote >= 1 && vote <= 3, "Invalid vote option");
        
        if (vote == 1) {
            _option1Votes++;
        } else if (vote == 2) {
            _option2Votes++;
        } else if (vote == 3) {
            _option3Votes++;
        }
        
        _totalVotes++;
        emit VoteCast(msg.sender, vote);
    }
    
    // Get vote counts
    function getOption1Votes() public view returns (uint32) {
        return _option1Votes;
    }
    
    function getOption2Votes() public view returns (uint32) {
        return _option2Votes;
    }
    
    function getOption3Votes() public view returns (uint32) {
        return _option3Votes;
    }
    
    function getTotalVotes() public view returns (uint32) {
        return _totalVotes;
    }
    
    // Admin functions
    function closeVoting() public {
        require(msg.sender == owner, "Only owner can close voting");
        votingOpen = false;
        emit VotingClosed();
    }
    
    function openVoting() public {
        require(msg.sender == owner, "Only owner can open voting");
        votingOpen = true;
        emit VotingOpened();
    }
    
    // Check if voting is active
    function isVotingOpen() public view returns (bool) {
        return votingOpen;
    }
}
