import React from 'react';

const exports = {};

exports.Wrapper = class extends React.Component {
  render() {
    const {content} = this.props;
    return (
      <div className="App">
        <header className="App-header" id="root">
          <h1>
            Catching 21<br/>
            By: Jose Jaramillo &amp; Marco Rojas
          </h1>
          {content}
        </header>
      </div>
    );
  }
}

exports.ConnectAccount = class extends React.Component {
  render() {
    return (
      <div className="Game">
        Please wait while we connect your account.
      </div>
    )
  }
}

exports.FundAccount = class extends React.Component {
  render() {
    const {bal, standardUnit, defaultFundAmt, parent} = this.props;
    const amt = (this.state || {}).amt || defaultFundAmt;
    return (
      <div>
        <h2>Fund account</h2>
        <br />
        Balance: {bal} {standardUnit}
        <hr />
        Would you like to fund your account with additional {standardUnit}?
        <br />
        (This only works on certain devnets)
        <br />
        <input
          type='number'
          placeholder={defaultFundAmt}
          onChange={(e) => this.setState({amt: e.currentTarget.value})}
        />
        <button onClick={() => parent.fundAccount(amt)}>Fund Account</button>
        <button onClick={() => parent.skipFundAccount()}>Skip</button>
      </div>
    );
  }
}

exports.DeployerOrAttacher = class extends React.Component {
  render() {
    const {parent} = this.props;
    return (
      <div>
        Please select a role:
        <br />
        <p>
          <button onClick={() => parent.selectDeployer()}>Deployer / Player</button>
          <br/>Set the wager, Deploy the contract, Players rules
        </p>
        <p>
          <button onClick={() => parent.selectAttacher()}>Attacher / Dealer</button>
          <br/>Attach to the Deployer's contract, Dealers rules, EXTRA FEE
        </p>
      </div>
    );
  }
}

exports.Rules = class extends React.Component {
  render () {
    const {parent} = this.props;
    return (
      <div className="Game">
        <h2>Welcome to Catching 21
          <br/>
          Game Rules
        </h2>
        <ul>
          <li>Player goes first and must try to get as close to 21 without going over</li>
          <li><strong>IF</strong> the Player doesn't bust, Dealers Turn begins</li>
          <li>Dealer <strong>MUST</strong> draw if less than Player</li>
          <li>Dealer pays an extra 5 ALGO to the contract</li>
          <li>First to win 3 hands wins the match</li>
          <li>Player can choose Ace as high / low just once per card</li>
          <li>Dealers total will automatically update if a high Ace causes a Bust</li>
        </ul>
        <button onClick={() => parent.afterRules()}>Accept Rules</button>
      </div>
    );
  }
}

export default exports;
