# React + Vite

1. To install React-Vite: 
```js 
npm create vite/@latest
```
2. Create .env file and add variables with prefix ```VITE_``` <br/>
For example:
```js
VITE_API_URL=http://api.example.com
```
3. To use .env variables:
```js
const API_URL = import.meta.env.VITE_API_URL;
```
4. To run project:
```js
npm run dev
```