//Type of module system in nodeJs
// 1. commonJs Module system
// 2. Es(ECMA script) Module system

export const divide = (a,b)=> a/b;  // named export
// export function divide(a,b){
//     return a/b;
// }
export const multiply = (a,b)=> a*b; // named export

const square = (a)=> a*a;

export default square; // default export