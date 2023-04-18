# Catching 21
Catching 21 is a simplified card game, inspired by Blackjack, where the goal is to have a hand with a value as close to 21 as possible without exceeding it. The game is implemented as a Reach application and operates as a match, with the first player to win 3 hands claiming victory. Upon the match's conclusion, the contract balance is distributed accordingly.

# Rules
The player takes their turn first, deciding whether to "hit" and receive another card, or "stay" and lock in their current total.
Once the player stays, the dealer takes over, playing automatically.
The dealer continues to draw cards until their total surpasses the player's or exceeds 21.
To account for their "house" advantage, the dealer contributes an extra 5 ALGO fee.
How to Play
A player chooses their wager amount and submits it to the Dealer.
The Dealer accepts the wager and contributes an extra 5 ALGO fee.
Both the Player and Dealer are dealt two cards each, one of the Dealer's card is face down (hidden).
The Player can choose to "hit" (draw a new card) or "stay" (lock in their total).
If the player has an Ace, they can choose the value of Ace to be 1 or 11.
Once the Player decides to "stay", the Dealer takes their turn.
The Dealer's hidden card is revealed and they continue to draw cards until their total surpasses the Player's or exceeds 21.
The winner of the hand is determined and the tally is updated.
The game continues until one of the participants wins 3 hands.
The winner receives the contract balance, including the wagers and the extra dealer fee.
# Files
catching21.rsh - The main Reach program implementing the game logic.
README.md - This documentation file.
# Requirements
[Reach](https://github.com/reach-sh/reach-lang) - Install the Reach compiler to run the application.
[Docker](https://docs.docker.com/engine/install/) - Install Docker to run the application
# Running the Game
Install Reach by following the instructions on reach.sh.
Run the following commands:
$ reach init
$ ./reach react

The game will then start, and you can interact with it through the terminal.

# Authors
Jose Jaramillo
Marco Rojas
Please feel free to reach out with any questions or suggestions.

# Reach-Catching-21
![](/images/demo.gif)