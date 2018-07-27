# Notes App

This is a very simple program for notes managment using command line.

## Getting Started

### Prerequisites

To run this project on your machine you need to have node.js and npm. 

### Installing
Once you have those tools, you could download the source code and go to the directory containing the source code and run 

```
npm install
```

### Usage

Now, you will be able to run the commands to add or remove or list your notes. 

- add note
```
node app.js add --title="your title here" --body="your body here"
```

- list notes
```
node app.js list
```

- read specific note
```
node app.js read --title="your title here"
```

- remove note
```
node app.js remove --title="your title here"
```

## Built With

* [Node.js](https://nodejs.org) - a JavaScript runtime built on Chrome's V8 JavaScript engine.