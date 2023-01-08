/**
 * @file Notion page related endpoints
 */

/**
 * Retrieve a singe Notion page using its page ID.
 * @param notion Client used to send authenticated requests
 * @param {string} pageId Page ID for the Notion page being retrieved
 * @return Returns a promise that resolves to a Notion page
 */
const getPage = function(notion, pageId) {
    return notion.pages.retrieve({page_id: pageId});
}

module.exports = { getPage }