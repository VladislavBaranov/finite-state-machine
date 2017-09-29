class FSM {
    /**
     * Creates new FSM instance.
     * @param config
     */
    constructor(config) {}

    /**class FSM {
    /**
     * Creates new FSM instance.
     * @param config
     */
    constructor(config) {}
    
    config = {
      initial: 'normal',
      states: {
          normal: {
              transitions: {
                  study: 'busy',
              }
          },
          busy: {
              transitions: {
                  get_tired: 'sleeping',
                  get_hungry: 'hungry',
              }
          },
          hungry: {
              transitions: {
                  eat: 'normal'
              },
          },
          sleeping: {
              transitions: {
                  get_hungry: 'hungry',
                  get_up: 'normal',
              },
          },
      }
  };
    /**
     * Returns active state.
     * @returns {String}
     */
    getState() {
      return config.initial;
    }

    /**
     * Goes to specified state.
     * @param state
     */
    changeState(state) {
      var ind = ['normal','sleeping','hungry','busy'].indexOf(state);
      if (ind<0) {throw Error;}
      else config.initial=state;   
    }

    /**
     * Changes state according to event transition rules.
     * @param event
     */
    trigger(event) {
      function Iterate(config) {
      for (prop in config) {
        if (config.hasOwnProperty(prop) && isNaN(prop)) {
           // проверяем правильность event , если не соответствует выбрасываем исключение
           // если соответстует  присваем initial значение event
          if (event!=='study'||event!=='get_tired'||event!=='get_hungry'||event!=='eat'||event!=='get_up'){
            throw Error;}
          else if (prop==event) config.initial=event;  
          }
          Iterate(config[prop]);
        }
      }
      
    }

    /**
     * Resets FSM state to initial.
     */
    reset() {
      return config.initial='normal';  
    }

    /**
     * Returns an array of states for which there are specified event transition rules.
     * Returns all states if argument is undefined.
     * @param event
     * @returns {Array}
     */
    getStates(event) {
      var arr = [];
      function Iterate(config) {
        for (prop in config) {
          if (config.hasOwnProperty(prop) && isNaN(prop)) {
             // 
             // 
            if (event=){
              
            }
            Iterate(config[prop]);
          }
        }
    }

    /**
     * Goes back to previous state.
     * Returns false if undo is not available.
     * @returns {Boolean}
     */
    undo() {}

    /**
     * Goes redo to state.
     * Returns false if redo is not available.
     * @returns {Boolean}
     */
    redo() {}

    /**
     * Clears transition history
     */
    clearHistory() {}
}

module.exports = FSM;
     * Returns active state.
     * @returns {String}
     */
    getState() {}

    /**
     * Goes to specified state.
     * @param state
     */
    changeState(state) {}

    /**
     * Changes state according to event transition rules.
     * @param event
     */
    trigger(event) {}

    /**
     * Resets FSM state to initial.
     */
    reset() {}

    /**
     * Returns an array of states for which there are specified event transition rules.
     * Returns all states if argument is undefined.
     * @param event
     * @returns {Array}
     */
    getStates(event) {}

    /**
     * Goes back to previous state.
     * Returns false if undo is not available.
     * @returns {Boolean}
     */
    undo() {}

    /**
     * Goes redo to state.
     * Returns false if redo is not available.
     * @returns {Boolean}
     */
    redo() {}

    /**
     * Clears transition history
     */
    clearHistory() {}
}

module.exports = FSM;

/** @Created by Uladzimir Halushka **/
