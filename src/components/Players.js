import React from "react";

class PlayerList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            playersInit: [],
            players: [],
            playerName: '',
            playerScore: ''
        };

        this.addPlayer = this.addPlayer.bind(this);
        this.addScore = this.addScore.bind(this);
        this.updatePlayerName = this.updatePlayerName.bind(this);
        this.updatePlayerScore = this.updatePlayerScore.bind(this);
    }

    componentDidMount() {
        this.setState({ players: this.state.playersInit })
    }
    componentDidUpdate() {
    }

    updatePlayerName(e) {
        this.setState({
            playerName: e.target.value
        })
    }

    updatePlayerScore(e) {
        this.setState({
            playerScore: e.target.value
        })
    }

    addScore(e) {
        e.preventDefault();
        const index = this.state.players.findIndex(player => player.name === e.target.id),
            players = [...this.state.players];
        // important to create a copy, otherwise you'll modify state outside of setState call
        var oldScore = Number(players[index].score);
        var newScore = oldScore + Number(this.state.playerScore);
        players[index].score = newScore;
        console.log(players);
        this.setState({
            players: players,
            playerScore: ''
        });
        e.target[0].value = '';
    }

    addPlayer(e) {
        e.preventDefault();
        if (this.state.playerName !== "") {
            this.setState({
                players: [...this.state.players,
                {
                    name: this.state.playerName,
                    score: 0
                }
                ],
                playerName: ''
            });
        }
    }


    render() {
        return (
            <div className="main">
                <form className="add-player" onSubmit={this.addPlayer}>
                    <input type="text" placeholder="Player Name" value={this.state.playerName}
                        onChange={this.updatePlayerName} />
                    <button type="submit">Add Player</button>
                </form>
                <div className="player-list">
                    <div>
                        {this.state.players.map((player) => {
                            return (
                                <div className="player" key={player.name}>
                                    <div className="player-info">
                                        {player.name} - {player.score}
                                    </div>
                                    <form className="add-score" id={player.name} onSubmit={this.addScore}>
                                        <input type="text" enterkeyhint="send" placeholder="Add Score"
                                            onChange={this.updatePlayerScore} />
                                        <button type="submit">Update Score</button>
                                    </form>
                                </div>
                            );
                        }
                        )}
                    </div>
                </div>
            </div>
        )
    }
}

export default PlayerList;