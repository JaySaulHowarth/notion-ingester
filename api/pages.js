/**
 * @file Notion page related endpoints
 */

/**
 * Retrieve a singe Notion page.
 * @param notion Client used to send authenticated requests
 * @param {string} pageId Page ID for the Notion page being retrieved
 * @return Returns a promise that resolves to a Notion page
 */
const getPage = function(notion, pageId) {
    return notion.pages.retrieve({page_id: pageId});
}

/**
 * Retrieve a multiple Notion pages.
 * @param notion Client used to send authenticated requests
 * @param {string} pageIds Array of page IDs for the Notion pages being retrieved
 * @return Returns an array of pages
 */
const getPages = function(notion, pageIds) {
    const pages = [];

    for(i=0, n=pageIds.length; i < n; i++) {
        const page = getPage(notion, pageIds[i])
        pages.push(page);
    }

    Promise.all(pages).then((pages) => {
        return pages
    })
}

module.exports = { 
    getPage,
    getPages
}