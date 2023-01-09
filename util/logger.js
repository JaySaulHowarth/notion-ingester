/**
 * @file Custom logger implementation
 */

const BLUE = '[94m';
const YELLOW = '[33m';
const RED = '[91m';

/**
 * Styled logging for informational messages
 * @param {string} message informational message
 */
const info = function(message) {
    console.log(`\x1b${BLUE}INFO: ${message} \x1b[0m`);
}

/**
 * Styled logging for warning messages
 * @param {string} message warning message
 */
const warning = function(message) {
    console.log(`\x1b${YELLOW}WARNING: ${message} \x1b[0m`);
}

/**
 * Styled logging for error messages
 * @param {string} message error message
 */
const error = function(message) {
    console.log(`\x1b${RED}ERROR: ${message} \x1b[0m`);
}

module.exports = {
    info,
    warning,
    error
}