
# Setting up the environment
<!-- Time: 10 min -->


## Downloading starters and solutions
1. Make sure you have the prerequisites to install this.
- git
- node 18.11 or better

2. Get this whole repository and sub-repositories. (Note the --recurse-submodules flag. It's important)
```bash
git clone --recurse-submodule git@github.com:rapPayne/react_in_3_weeks.git
```

## Starting the API data server
1. Open a command prompt. cd to the [server](../../server) folder and run this.
```bash
npm install
npm run load-db
npm run start
```
You should see a message that the RESTful API data server is running on port 3008. 

___Leave this server running at all times___

2. Open any browser and browse to http://localhost:3008/menuitems
3. If you see JSON data, your server is running.

Congrats! You're done.