// write your code below!
var name = "Susan"
var height = 74
var message = ` ${name} is ${height} inches tall`
describe('Height', () => {
-    it('is greater than 40', () => {
+    it('is less than 40', () => {
       expect(index.height).toBeLessThan(40)
     })
   })
module.exports = {name, height, message}
