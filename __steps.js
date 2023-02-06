// install node.js in your machine
// npm i -g typescript
// tsc => command ready...

// initialize typescript project ...
/**
 * tsc --init
 * tsconfig.json --> ### "rootDir": "./src" , "outDir": "./output"
 * folder -> src -> script.ts and output -> tsc compile and create script.js. root -> index.js  and navigate script.js file to output folder. Ex. src="./output/script.js"
 * tsc -w ==> automatic compile .ts file into .js file and get instant updated output.
 */

/** ====module - system ====
 * create a classes folder inside src folder.
 * export ts file and import it expected file as .js file.
 * modify some configuration in __tsconfig.json__ file ==>
 *          "target": "es6"
 *          "module": "es2015"
 *
 * __index.html__ file modify script tag ==>
 *          <script type="module" src="./output/script.js"></script>
 */
