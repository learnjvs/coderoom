import React, { Component } from 'react';

const DM = React.createContext();



class DungeonMaster extends Component {
  constructor(props){
    super(props)
    this.state = {
      keysCollected: 0,

      text: {
          introText: "You wake up to find yourself in a dimly lit room. Wondering where you are you start to explore your small surroundings...",
          deskText: "You head to the desk and search amongst the scattered sheets of paper: ",
          nightstandText: "Wondering what might be inside you open the nightstand drawer: ",
          bedText: "Hoping no monsters attack, you cautiously peek under the bed: ",
          completionText: "Congratulations on completion of the challenge. You received 28 keys!",
          bossChallengeText: "You have collected all the keys to the keyboard. Time for the Boss battle!",
          bossDefeatText: "CONGRATULATIONS!!! You have succesfully defeated the Boss Challenge and ESCAPED!!!"
      },

      activeNarrative: ['This is the first paragraph', 'This is the second paragraph.'],

      promptText: '',
      button1: {active: false, text: 'Check desk'},
      button2: {active: false, text: 'Open nightstand drawer!'},
      button3: {active: false, text: 'Look under bed'},
      button4: {visible: false, text: 'Challenge the boss'},
      goToDesk: function() {
        // here we add the relevant narrative text to the active narrative array
        this.state.activeNarrative.push()
        // set button1 active so it's greyed out
        this.setState({button1: {active: true}});
      },
      goToNightstand: function() {
        // here we add the relevant narrative text to the active narrative array
        this.state.activeNarrative.push()
        // set button1 active so it's greyed out
        this.setState({button2: {active: true}});
      },
      goToBed: function() {
        // here we add the relevant narrative text to the active narrative array
        this.state.activeNarrative.push()
        // set button1 active so it's greyed out
        this.setState({button3: {active: true}});
      },
      challengeCompleted: function() {
        // here we add the relevant narrative text to the active narrative array
        activeNarrative.push();
        // we also need to add 28 keys to the player's total keys
        keysCollected += 28;
        // finally upon completion, change the interactive container back to the page with the 3 buttons ---the clicked button should be unclickable from other function.
      },
      bossChallengeCompleted: function() {
        // here we add the relevant narrative text to the active narrative array
        activeNarrative.push();
        // we also need to redirect the player to the winner screen
      }
    }
    this.state.goToDesk = this.state.goToDesk.bind(this);
    this.state.goToBed = this.state.goToBed.bind(this);
    this.state.goToNightstand = this.state.goToNightstand.bind(this);
    this.state.challengeCompleted = this.state.challengeCompleted.bind(this);
    this.state.bossChallengeCompleted = this.state.bossChallengeCompleted.bind(this);

    // bind in-state functions here
}

render() {
    return (
        <DM.Provider value={this.state}>
            {this.props.children}
        </DM.Provider>
    );
  }
}

export { DungeonMaster,  DM };