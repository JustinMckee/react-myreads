# MyReads Project

This is the final assessment project for Udacity's React Fundamentals course.

## Start

To get started right away:

- install all project dependencies with `npm install`
- start the development server with `npm start`

## Overview

```bash
├── README.md - This file.
├── LICENSE.txt # Udacity's educational license
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. Contains static HTML right now.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
    ├── components
        ├── Book.js # A single book with cover, title, authors, and controls
        ├── BookShelf.js # A grid of books within an unordered list
        ├── Header.js # A reusable site header with title
        ├── List.js # The outermost container for listing books on their respective shelfs
        ├── NotFound.js # Handles 404s
        ├── Search.js # A controlled components that handles queries and API method for searching
        ├── SearchResults.js # Displays a list of books that match a search query
        ├── ShelfChanger.js # Allows users to move books to different shelfs
```
