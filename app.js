const { internalIntegrationAuth } = require('./auth/authenticate');
const config = require('./config.json');
const pages = require('./api/pages')

const notion = internalIntegrationAuth(config.notionInternalIntegrationToken);
const page = pages.getPage(notion, '0e5e8964-a71f-475b-b1e6-ec44e9e88a23');

page.then((page) => {
    console.log(page);
})
