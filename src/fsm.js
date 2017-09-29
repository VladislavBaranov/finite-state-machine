class FSM {
    /**
     * Creates new FSM instance.
     * @param config
     */
    constructor(config) {
        if (!arguments.length)
            throw Error();

        this.config = config;
        this.historyStaties = [];
        this.historyStaties.push({name: config.initial, value: this.config.states[config.initial]});
        this.currentState = config.initial;
        this.currentPosition = this.historyStaties.length - 1;
    }

    /**
     * Returns active state.
     * @returns {String}
     */
    getState() {
        //return this.historyStaties[this.historyStaties.length - 1].name;
        return this.currentState;
    }

    /**
     * Goes to specified state.
     * @param state
     */
    changeState(state) {
        let find = Object.keys(this.config.states).indexOf(state);
        if (find < 0)
            throw  Error();

        this.historyStaties.push({name: state, value: this.config.states[state]});
        //return this.historyStaties[this.historyStaties.length - 1].name;
        this.currentState = state;
        this.currentPosition = this.historyStaties.length;
        return this.currentState;
    }

    /**
     * Changes state according to event transition rules.
     * @param event
     */
    trigger(event) {
        let newStateName = null;
        if (this.historyStaties[this.historyStaties.length - 1].value.transitions.hasOwnProperty(event)) {
            newStateName = this.historyStaties[this.historyStaties.length - 1].value
                .transitions[event];

            this.historyStaties.push({
                name: newStateName,
                value: this.config.states[newStateName]
            });
            this.currentState = this.historyStaties[this.historyStaties.length - 1].name;
            this.currentPosition = this.historyStaties.length;
        }
        else {
            throw Error();
        }
    }

    /**
     * Resets FSM state to initial.
     */
    reset() {
        this.historyStaties.push({name: this.config.initial, value: this.config.states[this.config.initial]});
        this.currentState = this.config.initial;
        this.currentPosition = this.historyStaties.length;
    }

    /**
     * Returns an array of states for which there are specified event transition rules.
     * Returns all states if argument is undefined.
     * @param event
     * @returns {Array}
     */
    getStates(event) {
        if (!arguments.length)
            return Object.keys(this.config.states);

        let findStates = [];
        for (let key in this.config.states) {
            if (this.config.states[key].transitions.hasOwnProperty(event)) {
                findStates.push(key);
            }
        }

        return findStates;
    }

    /**
     * Goes back to previous state.
     * Returns false if undo is not available.
     * @returns {Boolean}
     */
    undo() {
        if (this.historyStaties.length === 1) {
            return false;
        }
        else {
            this.currentPosition--;
            if (this.currentPosition <= 0) {
                return false;
            }
            this.currentState = this.historyStaties[this.currentPosition - 1].name;
            return true;
        }
    }

    /**
     * Goes redo to state.
     * Returns false if redo is not available.
     * @returns {Boolean}
     */
    redo() {
        if (this.historyStaties.length === 1) {
            return false;
        }
        else {
            this.currentPosition++;
            if (this.currentPosition > this.historyStaties.length) {
                return false;
            }


            this.currentState = this.historyStaties[this.currentPosition - 1].name;
            return true;
        }
    }

    /**
     * Clears transition history
     */
    clearHistory() {
        this.historyStaties = [{name: this.config.initial, value: this.config.states[this.config.initial]}];
        this.currentState = this.config.initial;
        this.currentPosition = 1;
    }
}

module.exports = FSM;

/** @Created by Uladzimir Halushka **/
