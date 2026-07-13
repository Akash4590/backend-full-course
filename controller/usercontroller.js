import { userlist } from "../model/usermodel.js";

export  function handleuser(req, res) {
    const userdata = userlist ();         
    res.render("user",{user:userdata});
    console.log(userdata)
}