
# Setting up the environment
<!-- Time: 10 min -->


## Downloading starters and solutions
1. Make sure you have the prerequisites to install this.
- git
- node 18.11 or better

2. Get this whole repository and sub-repositories. (Note the --recurse-submodules flag. It's important)
```bash
git clone --recurse-submodule https://github.com/rapPayne/react_in_3_weeks.git
```
or
```bash
git clone --recurse-submodule git@github.com:rapPayne/react_in_3_weeks.git
```
[What if that submodule thing doesn't work?](#what-if-that-submodule-thing-doesnt-work)

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


## What if that submodule thing doesn't work?

Here are a couple of options.

### You could try these commands
1. From the empty server folder...
```bash
git submodule init
git submodule update
```

### You can download the server project separately
1. cd to literally anywhere else.
1. `git clone git@github.com:rapPayne/daam-server.git`
1. Then do the server parts in that folder. Namely, 
```bash
npm install
npm run load-db
npm run start
```
