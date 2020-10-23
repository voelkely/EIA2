interface Card {
    id: number;
    rank: string;
    suit: string;
    image: string;
  }
  // Cpu ist der Computer, Hand ist der Spieler
  interface Player {
    hand: Card[],
    cpu: boolean,
    name: string,
  }
  
  interface Game {
    player1: Player;
    player2: Player;
    deck: Card[];
    currentPlay: Card[];
    currentPlayer: Player;
  }
  
  // jeder Spieler startet das Spiel mit 3 zufälligen Karten
  let initialNumberOfCards: number = 3;
  
  let hiddenCardSrc: string = 'img/cards/green_back.png'
  
  
  // null repräsentiert voerst nichts. Wird ein neues Spiel gestartet wird der Variable ein neues Objetc zugewiesen.
  let currentGame: Game = null;
  
  
  // =============== Wiedergabe ==================
  
  // function die ein volles Deck an Karten auf der rechten Seite darstellt 
  function renderDeck(deck: Card[], hideCards: boolean) {
    let deckElement : HTMLElement = document.getElementById("card-deck")
    renderCards(deck, deckElement, hideCards);
  };
  
  // function: die "hand" des jeweiligen Spielers 
  function renderPlayerHand(player: Player) {
    let container: HTMLElement = null;
    if (player.cpu) {
      container = document.getElementById('computer-player-hand')
    } else {
      container = document.getElementById('human-player-hand')
    };
  
    // Karten sichtbar ja oder nein?
    renderCards(player.hand, container, player.cpu);
  };
  
  
  // Karte wird vom Deck in die Mitte des Tisches gelegt
  function renderCurrentCard(card: Card) {
    let currentCardElement : HTMLElement = document.getElementById("current-card")
    renderCards([card], currentCardElement, false);
  }
  
  
  // function erstellt html elemente für jede Karte 
  function renderCards(cards: Card[], container: HTMLElement, hideCards: boolean) {
  
    // zu beginn ein leerer parent container
    container.innerHTML = '';
  
    
    cards.forEach(function(card : Card){
      let cardElement: HTMLElement;
  
      if (hideCards) {
        cardElement = createCardElement(hiddenCardSrc);
      } else {
        cardElement = createCardElement(card.image, card.id, true);
      };
  
      container.appendChild(cardElement);
    });
  }
  
  
  function createCardElement(imageSrc: string, cardId: number = null, selectable: boolean = false) {
    let cardElement : HTMLElement = document.createElement("span");
    cardElement.classList.add("card");
  
    if (selectable) {
      cardElement.classList.add("selectable");
      cardElement.dataset.cardId = cardId.toString();
      cardElement.addEventListener(
        'click', function() {
  
          // event handler weiss welche Karte ausgesucht wurde 
          userPlayCard(parseInt(this.dataset.cardId));
        }, false
      )
    }
  
    let cardImageElement : HTMLElement = document.createElement("img");
    cardImageElement.setAttribute("src", imageSrc);
    cardImageElement.setAttribute("alt", "card");
  
    cardElement.appendChild(cardImageElement);
  
    return cardElement;
  }
  
  // ================= Spiel ==================
  
  function startNewGame() {
    let game: Game = createNewGame();
    currentGame = game;
  
  
    // zu beginn zieht jeder Spieler 3 karten
    let i: number;
    for(i = 1; i <= initialNumberOfCards; i++) {
      game.player1.hand.push(drawRandomCard(game.deck));
      game.player2.hand.push(drawRandomCard(game.deck));
    }
  
  
    // Karten vom Computer (versteckt)
    renderPlayerHand(game.player1);
  
    // Meine Karten (sichtbar)
    renderPlayerHand(game.player2);
  
    // Erste Karte auf dem Tisch, startet das Spiel
    let initialCard = drawRandomCard(game.deck);
  
    // Spiel soll wissen welche Karte auf dem Tisch liegt
    game.currentPlay.push(initialCard);
  
  
    // update display
    renderCurrentCard(initialCard);
  
  
    // Karte wird durch kilcken gezogen
    document.getElementById('draw-card').addEventListener(
      'click', userDrawCard, false
    );
  
    // Das Deck verändert sich da eine neue Karte gezogen /geworfen wurde
    renderDeck(game.deck, true);
  
    // Spieler 2 (ich) beginnt zuerst
    setCurrentPlayer(game, game.player2);
  }
  
  // 2 sachen:
  // * der name des spielers blinkt
  // * speichert die info welcher Spieler grade dran ist
  function setCurrentPlayer(game: Game, player: Player) {
    let cpuPlayerHeadingElement: HTMLElement = document.getElementById("cpu-player-heading");
    let humanPlayerHeadingElement: HTMLElement = document.getElementById("human-player-heading");
  
    game.currentPlayer = player;
  
    if (player.cpu) {
      cpuPlayerHeadingElement.classList.add('blinking');
      humanPlayerHeadingElement.classList.remove('blinking');
    } else {
      cpuPlayerHeadingElement.classList.remove('blinking');
      humanPlayerHeadingElement.classList.add('blinking');
    }
  }
  
  // function eine zufällige Karte wird vom Deck gezogen
  
  function drawRandomCard(deck: Card[]) {
    let randomIndex: number = Math.floor((Math.random() * deck.length));
    let card: Card = deck.splice(randomIndex, 1)[0];
    return card;
  }
  
  // Spiel wird repräsentiert. Infos über:
  // 1. Die Spieler
  // 2. Karten Deck welches genutzt wird
  // 3. Karten die grade auf dem Tisch liegen
  // 4. wer grade dran ist
  function createNewGame() {
    let game: Game = {
      player1: createPlayer({cpu: true, name: 'Player 1 - Computer'}),
      player2: createPlayer({cpu: false, name: 'Player 2 - Human'}),
      deck: createNewDeck(),
      currentPlay: [],
      currentPlayer: null
    };
  
    return game
  }
  
  // Spieler hat 3 Eigenschaften:
  // * Karten die ich besitze
  // * ob es der Computer oder der Spieler ist
  // * der Name
  function createPlayer(options: any) {
    let player: Player = {
      hand: [],
      cpu: options.cpu,
      name: options.name
    }
  
    return player
  }
  
  // wenn der Sieler eine Karte spielt
  function userDrawCard() {
    if (currentGame.currentPlayer != currentGame.player2) {
      alert("It's computer's turn!");
      return;
    };
  
    // ein Spielzug
    draw(currentGame.player2);
  
    // nun ist der Computer dran
    setCurrentPlayer(currentGame, currentGame.player1);
  
    // dem Computer erlauben einen Spielzug durchzuführen
    computerPlayCard();
  }
  
  // wenn der Spieler eine Karte spielt
  function userPlayCard(cardId: number) {
    // checken, wer dran ist
    if (currentGame.currentPlayer != currentGame.player2) {
      alert("It's computer's turn!");
      return;
    };
  
    // Karten welcher der Speiler benutzt
    let cardIndex: number = currentGame.player2.hand.findIndex(function(card: Card) {
      return (card.id == cardId);
    });
    let card: Card = currentGame.player2.hand.splice(cardIndex, 1)[0];
  
    // checken, ob der Zug möglich ist 
    if (!isValidMove(card)) {
  
      // wenn nicht wird die vorherige Karte wieder sichtbar
      currentGame.player2.hand.push(card);
      alert('Invalid move!');
     
    } else {
  
      // spiel die karte
      makeMove(card, currentGame.player2);
  
      // jetzt ist wieder PC dran
      setCurrentPlayer(currentGame, currentGame.player1);
    
      // PC darf einen Spielzug durchführen
      computerPlayCard();
    }
  }
  
  // Logik des Computers
  function computerPlayCard() {
    let player: Player = currentGame.player1;
  
    // die erste Karte finden, welche der Computer spielen kann
    let cardIndex: number = player.hand.findIndex(isValidMove);
  
     // falls es keine gibt, muss der Computer eine karte ziehen
     if (cardIndex == -1) {
       draw(player);
     } else {
       let card: Card = player.hand.splice(cardIndex, 1)[0];
       makeMove(card, player);
     };
  
    // computer ist fertig, nun ist der Spieler dran
    setCurrentPlayer(currentGame, currentGame.player2);
  }