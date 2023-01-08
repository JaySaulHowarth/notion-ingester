/**
 * @file Manages Notion authentication
 */

const { Client } = require('@notionhq/client');

/**
* Authenticates with Notion using internal integration.
* @param {string} integrationToken token used to authenticate with a workspace. For details
* on how to generate this token see: 
* https://www.notion.so/help/add-and-manage-connections-with-the-api#add-connections-to-pages
*/
const internalIntegrationAuth = function( integrationToken ) {
    try {
        const notion = new Client({
            auth: integrationToken
        });
        return notion;
    } catch(e) {
        console.log(e);
    }

}

module.exports = { internalIntegrationAuth }
