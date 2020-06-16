'use strict';

const { createHash } = require('crypto');
const signing = require('./signing');

/**
 * A simple validation function for transactions. Accepts a transaction
 * and returns true or false. It should reject transactions that:
 *   - have negative amounts
 *   - were improperly signed
 *   - have been modified since signing
 */
const isValidTransaction = transaction => {
  if (transaction.amount < 0) {
    return false;
  }
 

  const toSign = transaction.source
    + transaction.recipient
    + transaction.amount;

  return signing.verify(transaction.source, toSign, transaction.signature);


};

/**
 * Validation function for blocks. Accepts a block and returns true or false.
 * It should reject blocks if:
 *   - their hash or any other properties were altered
 *   - they contain any invalid transactions
 */
const isValidBlock = block => {
  // Your code here

};

/**
 * One more validation function. Accepts a blockchain, and returns true
 * or false. It should reject any blockchain that:
 *   - is a missing genesis block
 *   - has any block besides genesis with a null hash
 *   - has any block besides genesis with a previousHash that does not match
 *     the previous hash
 *   - contains any invalid blocks
 *   - contains any invalid transactions
 */
const isValidChain = blockchain => {
  // Your code here
  const realGenesis = JSON.stringify(this.createGenesisBlock());

  if (realGenesis !== JSON.stringify(this.chain[0])) {
    return false;
  }

  // Check the remaining blocks on the chain to see if there hashes and
  // signatures are correct
  for (let i = 1; i < this.chain.length; i++) {
    const currentBlock = this.chain[i];

    if (!currentBlock.hasValidTransactions()) {
      return false;
    }

    if (currentBlock.hash !== currentBlock.calculateHash()) {
      return false;
    }
  }

  return true;


};

/**
 * This last one is just for fun. Become a hacker and tamper with the passed in
 * blockchain, mutating it for your own nefarious purposes. This should
 * (in theory) make the blockchain fail later validation checks;
 */
const breakChain = blockchain => {
  // Your code here

};

module.exports = {
  isValidTransaction,
  isValidBlock,
  isValidChain,
  breakChain
};
