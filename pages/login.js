function login() {
    return `<form action="/submit" method="POST">
        <h2>Login Form</h2>

        <label for="name">Name:</label><br>
        <input
            type="name"
            id="name"
            name="name"
            placeholder="Enter your name"
            required
        ><br><br>
        <label for="email">Email:</label><br>
        <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
        ><br><br>

        <label for="password">Password:</label><br>
        <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            required
        ><br><br>

        <button type="submit">Submit</button>
    </form>`;
}

export default login;