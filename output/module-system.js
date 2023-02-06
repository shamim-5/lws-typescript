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
import { Singer } from "./classes/Singer.js";
const imran = new Singer("Imran", 31, "Bangladesh");
console.log(imran.name); // err
console.log(imran.country);
