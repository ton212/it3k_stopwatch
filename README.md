# IT3Kings 15th Stopwatch

A stopwatch for IT3Kings 15th which helded by King's Mongkut Institution of Technology Ladkrabang.

The program is consists of two parts, a display and a controller. Those two needed to be run on the same machine, ideal for two screens setup machine (one for display and one for controller).

## URLs
 - `http://localhost:8080/` - Display
 - `http://localhost:8080/controller` - Controller

## How It's Work
 - This program use Storage API events for vuex mutation synchronizing.
 - Mutation runs on one tab will be sync via browser's localStorage to runs on others.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```
