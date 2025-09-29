// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract SimpleGame {
    // Game state
    uint256 public gameId = 0;
    uint256 public totalGames = 0;
    uint256 public totalWins = 0;
    uint256 public totalLosses = 0;
    uint256 public totalDraws = 0;
    
    // Game results
    struct GameResult {
        uint256 gameId;
        address player;
        uint8 playerChoice;
        uint8 computerChoice;
        uint8 result; // 0 = draw, 1 = win, 2 = loss
        uint256 timestamp;
    }
    
    mapping(uint256 => GameResult) public games;
    mapping(address => uint256[]) public playerGames;
    
    // Events
    event GamePlayed(
        uint256 indexed gameId,
        address indexed player,
        uint8 playerChoice,
        uint8 computerChoice,
        uint8 result
    );
    
    // Play a simple game (Rock Paper Scissors)
    function playGame(uint8 choice) public returns (uint8) {
        require(choice >= 1 && choice <= 3, "Invalid choice");
        
        gameId++;
        totalGames++;
        
        // Generate computer choice (1 = Rock, 2 = Paper, 3 = Scissors)
        uint8 computerChoice = uint8((block.timestamp + block.number) % 3) + 1;
        
        // Determine result
        uint8 result;
        if (choice == computerChoice) {
            result = 0; // Draw
            totalDraws++;
        } else if (
            (choice == 1 && computerChoice == 3) || // Rock beats Scissors
            (choice == 2 && computerChoice == 1) || // Paper beats Rock
            (choice == 3 && computerChoice == 2)   // Scissors beats Paper
        ) {
            result = 1; // Win
            totalWins++;
        } else {
            result = 2; // Loss
            totalLosses++;
        }
        
        // Store game result
        games[gameId] = GameResult({
            gameId: gameId,
            player: msg.sender,
            playerChoice: choice,
            computerChoice: computerChoice,
            result: result,
            timestamp: block.timestamp
        });
        
        playerGames[msg.sender].push(gameId);
        
        emit GamePlayed(gameId, msg.sender, choice, computerChoice, result);
        
        return result;
    }
    
    // Get player's game history
    function getPlayerGames(address player) public view returns (uint256[] memory) {
        return playerGames[player];
    }
    
    // Get game result by ID
    function getGameResult(uint256 _gameId) public view returns (GameResult memory) {
        return games[_gameId];
    }
    
    // Get game statistics
    function getGameStats() public view returns (
        uint256 _totalGames,
        uint256 _totalWins,
        uint256 _totalLosses,
        uint256 _totalDraws
    ) {
        return (totalGames, totalWins, totalLosses, totalDraws);
    }
    
    // Get player's win rate
    function getPlayerWinRate(address player) public view returns (uint256) {
        uint256[] memory playerGameIds = playerGames[player];
        if (playerGameIds.length == 0) return 0;
        
        uint256 wins = 0;
        for (uint256 i = 0; i < playerGameIds.length; i++) {
            if (games[playerGameIds[i]].result == 1) {
                wins++;
            }
        }
        
        return (wins * 100) / playerGameIds.length;
    }
}

