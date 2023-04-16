const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {

  chain: '',

  currentChain: [],

  getLength() {
    return this.currentChain.length
  },
  addLink(/* value */) {
    if(!arguments) this.currentChain.push('( )')
    const value = arguments[0]
    this.currentChain.push(`( ${value} )`)
    return this
  },
  removeLink(/* position */) {
    const index = arguments[0]
    if(Number.isInteger(index)) {
      if(index > 0 && index <= this.currentChain.length) {
        this.currentChain.splice(index-1,1)
        return this
      }
      else {
        this.currentChain.length = 0
        throw new Error(`You can't remove incorrect link!`)
      }
    }
    this.currentChain.length = 0
    throw new Error(`You can't remove incorrect link!`)
  },
  reverseChain() {
    this.currentChain.reverse()
    return this

  },
  finishChain() {
    this.chain = this.currentChain.join('~~')
    this.currentChain.length = 0
    return this.chain
  }
};

module.exports = {
  chainMaker
};
