const express = require("express")
const users = require("./MOCK_DATA.json")
const app = express();
const fs = require("fs")
const port = 8001;

//this middleware is used to send the data from postman to my vs code
app.use(express.urlencoded({extended: false}));

app.get('/api/users', (req, res) =>{
    return res.json(users)
})

app.get("/users", (req, res) => {
  const html = `
  <ul>
  ${users.map((user) => `<li> ${user.job_title} </li>`).join("")}
  </ul>
  `
  res.send(html);
})

app.route('/api/users/:id')
.get((req, res) => {
    const id = Number(req.params.id);
    if(id <= 0 || !users.find((user) => user.id === id) ){
        res.send('User NOT found')
    }
    const user = users.find((user) => user.id === id)
    return res.json(user);
})
.patch((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);

    if (!user) {
        return res.status(404).send('User NOT found');
    }

    // Update user data (assuming we can update fields from req.body)
    Object.assign(user, req.body);
    
   
    // Save updated data to the JSON file
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users, null, 2), (err) => {
        if (err) {
            return res.status(500).json({ status: "Error", message: "Failed to update user" });
        }

        console.log(user);
        return res.json({ status: "Success", message: "User updated", user });
    });
})
.delete((req, res) => {
    const id = Number(req.params.id);
    const userIndex = users.findIndex((user) => user.id === id);

    if (userIndex === -1) {
        return res.status(404).send('User NOT found');
    }

    // Remove the user from the array
    users.splice(userIndex, 1);

    // Save the updated users list to the JSON file
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users, null, 2), (err) => {
        if (err) {
            return res.status(500).json({ status: "Error", message: "Failed to delete user" });
        }

        return res.json({ status: "Success", message: "User deleted" });
    });
})

app.post('/api/users', (req, res) => {
    const body = req.body;
    users.push({...body, id: users.length+1})
    fs.writeFile('./MOCK_DATA.json', JSON.stringify((users), (err, data) => {
        return res.json({status : "Success", id: users.length})
    }))
})



//to get id dynamically the format we use is => app.get(api/users/:id)
// app.get('/api/users/:id', (req, res) => {
//     const id = Number(req.params.id);
//     if(id<0 || id>500){
//         res.send('User NOT found')
//     }
//     const user = users.find((user) => user.id === id)
//     return res.json(user);
// })


app.listen(port, () => {
    console.log(`server started at PORT : ${port}`);
})