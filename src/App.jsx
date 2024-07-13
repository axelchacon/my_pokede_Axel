import { useState } from "react";
function App() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	function handleSubmit(event) {
		event.preventDefault();
		console.log({ email, password });
	}
	// / // 		<form
	// 			onSubmit={(e) => {
	// 				e.preventDefault();
	// 				console.log({ email, password });
	// 			}}>
	return (
		<div>
			<h1>Welcome to Poke Collection</h1>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="email">Email</label>
					<input
						type="email"
						name="email"
						id="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						placeholder="example@mail.com"
					/>
				</div>
				<div>
					<label htmlFor="password">Password</label>
					<input
						type="password"
						name="password"
						id="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						placeholder="******"
					/>
				</div>
				<button type="submit">Login</button>
			</form>
		</div>
	);
}

export default App;
