/**
 * @file Notion page related endpoints
 */

/**
 * Retrieve a single Notion page's properties.
 * @param notion Client used to send authenticated requests
 * @param {string} pageId Page ID for the Notion page being retrieved
 * @return Returns a promise that resolves to a pages properties
 */
const getPageProperties = function(notion, pageId) {
    return notion.pages.retrieve({page_id: pageId});
}

/**
 * Retrieve a single Notion page's content (block children).
 * @param {*} notion Client used to send authenticated requests
 * @param {string} pageId Page ID for the Notion page being retrieved
 * @return Returns a promise that resolves to a pages content (block children)
 */
const getPageContent = function(notion, pageId) {
    return notion.blocks.children.list({
        block_id: pageId,
        page_size: 50
    });
}

/**
 * Retrieve a Notion page (properties & block children)
 * @param {*} notion 
 * @param {string} pageId 
 * @return Returns a page object
 */
const getPage = async function(notion, pageId) {
    var page = {
        properties: "",
        content: ""
    }

    page.properties = await getPageProperties(notion, pageId);
    page.content = await getPageContent(notion,pageId);

    return page;
    
}

/**
 * Retrieve properties from multiple Notion pages.
 * @param notion Client used to send authenticated requests
 * @param {string} pageIds Array of page IDs for the Notion pages being retrieved
 * @return Returns an array of page properties
 */
const getPages = function(notion, pageIds) {
    const pages = [];

    for(i=0, n=pageIds.length; i < n; i++) {
        const page = getPage(notion, pageIds[i])
        pages.push(page);
    }

    Promise.all(pages).then((pages) => {
        return pages
    }).catch((e) => {
        console.error(e.message, e)
    })
}

module.exports = { 
    getPage,
    getPages,
    getPageContent,
    getPageProperties
}