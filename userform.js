function userform(req,res){
res.write(`
                <form action="/submit" method="POST">

        <label for="firstname">First Name:</label><br>
        <input
            type="text"
            id="firstname"
            name="firstname"
            placeholder="Enter First Name"
            required
        >
        <br><br>

        <label for="lastname">Last Name:</label><br>
        <input
            type="text"
            id="lastname"
            name="lastname"
            placeholder="Enter Last Name"
            required
        >
        <br><br>

        <label for="email">Email:</label><br>
        <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter Email"
            required
        >
        <br><br>

        <label for="password">Password:</label><br>
        <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter Password"
            required
        >
        <br><br>

        <button type="submit">Submit</button>

    </form>  `)
    res.end()
}
module.exports  = userform;