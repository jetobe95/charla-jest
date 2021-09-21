const { requestUsers,Axios } = require("../axios")

// jest.mock('../axios',()=>{
//     requestUsers:()=>
// })
jest.mock('../axios')
test('Obtener los usuarios',()=>{
    const users = requestUsers();
    // console.log(new Axios())
    expect(users).toBe();
})