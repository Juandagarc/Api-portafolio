# Notion API

This project sets up a REST API that integrates with the Notion API. It provides endpoints to interact with Notion databases, pages, and blocks.

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository to your local machine.
2. Install the dependencies by running `npm install`.
3. Create a `.env` file in the root directory of the project and add your Notion API key as `NOTION_API_KEY`.
4. Start the server by running `npm start`.

## API Endpoints

The following endpoints are available:

### `GET /databases/:databaseId`

Returns the properties and contents of a Notion database.

### `POST /databases/:databaseId/pages`

Creates a new page in a Notion database.

### `GET /pages/:pageId`

Returns the properties and contents of a Notion page.

### `PATCH /pages/:pageId`

Updates the properties and contents of a Notion page.

### `POST /pages/:pageId/blocks`

Adds a new block to a Notion page.

### `PATCH /blocks/:blockId`

Updates the properties and contents of a Notion block.

## Project Structure

The project has the following file structure:

```
notion-api
├── src
│   ├── controllers
│   │   └── notion.controller.js
│   ├── routes
│   │   └── notion.routes.js
│   ├── utils
│   │   └── notion.utils.js
│   ├── app.js
│   └── server.js
├── package.json
├── .env
├── .gitignore
└── README.md
```

- `src/controllers/notion.controller.js`: This file exports a class `NotionController` which has methods to handle requests to the Notion API. It uses the `notion.utils.js` file to make requests to the Notion API.
- `src/routes/notion.routes.js`: This file exports a function `setRoutes` which sets up the routes for the Notion API. It uses the `NotionController` to handle the requests.
- `src/utils/notion.utils.js`: This file exports a function `makeRequest` which makes requests to the Notion API using the `axios` library. It also exports an object `notionEndpoints` which contains the endpoints for the Notion API.
- `src/app.js`: This file is the entry point of the application. It creates an instance of the express app and sets up middleware and routes.
- `src/server.js`: This file exports a function `startServer` which starts the express server and listens on a specified port.
- `.env`: This file contains environment variables for the application, including the Notion API key.
- `package.json`: This file is the configuration file for npm. It lists the dependencies and scripts for the project.
- `README.md`: This file contains the documentation for the project.

## Dependencies

This project uses the following dependencies:

- `axios`: for making HTTP requests to the Notion API.
- `dotenv`: for loading environment variables from the `.env` file.
- `express`: for building the REST API.
- `nodemon`: for automatically restarting the server during development.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.