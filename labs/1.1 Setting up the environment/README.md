# Setting up the environment
<!-- Time: 10 min -->
1. Open a command prompt. cd to the [server](../../server) folder and run this.
```bash
npm install
npm run load-db
npm run start
```
You should see a message that the RESTful API data server is running on port 3008. 

*** Leave this server running at all times ***

2. Open any browser and browse to http://localhost:3008/menuitems
3. If you see JSON data, your server is running.

Congrats! You're done.