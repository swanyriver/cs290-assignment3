/**
* Create an object literal with the following key value pairs:
* type: {string} 'Goldfish'
* brand: {string} 'Pepperidge Farm'
* flavor: {string} 'Cheddar'
* count: {number} 2000
* It should be returned directly by the following function
* @return {object} - the object literal
*/

function returnObjectLiteral() {
  //your code here
  return { type: 'Goldfish', brand: 'Pepperidge Farm', flavor: 'Cheddar', count: 2000};
  //end your code
}

/**
* Create a constructor function for a `MessageLog` object.
* @constructor
* @param {string} user - The user associated to the message log
* The string indicating the user should be stored in the user property of the
* object instances.
*
* In addition, the following methods should be
* callable on a MessageLog object:
* logMessage( {string} messageText, {number} direction) - This should log a
* message
* as either being sent or received. A direction of 0 indicates it is a message
* the user sent. A direction of 1 indicates it is a message the user received.
* Behavior for other numbers is undefined.
* getSentMessage({number} n) - returns as a string, the content of the nth most
* recently sent message. To conserve memory, the object should only keep the
* last 5 message. n=0 retrieves the most recent n=4 retrieves the least recent
* of the 5.
* totalSent() - returns an integer indicating the total number of messages sent
* totalReceived() - returns an integer indicating the total number of messages
* received
*/

//your code here

function MessageLog(user) {
  this.SENT = 0;
  this.RECIEVED = 1;
  this.MSGLIMIT = 5;
  this._totalSent = 0;
  this._totalRecieved = 0;
  this._sentMessages = [];
  this._recievedMessages = [];
  this.user = user;

  this.logMessage = function(messageText, direction) {
    if (direction == this.SENT) {
      this._totalSent++;
      if (this._sentMessages.push(messageText) > this.MSGLIMIT) {
        this._sentMessages.shift();
      }
    } else if (direction == this.RECIEVED) {
      this._totalRecieved++;
      if (this._recievedMessages.push(messageText) > this.MSGLIMIT) {
        this._recievedMessages.shift();
      }
    } else return undefined;
  };

  this.getSentMessage = function(n) {
    return this._sentMessages[this._sentMessages.length - 1 - n];
  };

  this.totalSent = function() {
    return this._totalSent;
  };

  this.totalReceived = function() {
    return this._totalRecieved;
  };
}

//end your code

/**
* Add a method to the MessageLog prototype:
* lastReceivedMessage() - returns the message text of the last message the user
* received.
*/
//your code here
MessageLog.prototype.lastReceivedMessage = function() {
  return this._recievedMessages[this._recievedMessages.length - 1];
};
//end your code

/**
* Create an instance of a `MessageLog` for the user "BlackHatGuy". Have the
* instance receive 3 messages: "foo", "bar" and "baz", received in that order.
* Assign it to the variable myLog.
*/

//your code here
var myLog = new MessageLog('BlackHatGuy');
myLog.logMessage('foo', 1);
myLog.logMessage('bar', 1);
myLog.logMessage('baz', 1);

//end your code
