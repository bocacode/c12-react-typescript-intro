import React from 'react'
import './App.css'

function ChildComponent(props: { someMoney: number | any; car: string }) {
	return (
		<h2>
			I'm child component with {props.someMoney} and car {props.car}
		</h2>
	)
}

function App() {
	const [counter, setCounter] = React.useState<number | boolean>(0)

	const handleFormSubmit = (e: React.FormEvent) => {
		e.preventDefault()
	}


	return (
		<div className='App'>
			<header className='App-header'>
				<h2>My typescript react app</h2>
				{counter}
				{/* @ts-ignore */}
				<button onClick={() => setCounter(counter + 1)}>+</button>

				<button onClick={() => setCounter(false)}>false</button>
				<ChildComponent someMoney={1200} car={'Tesla'} />

				<form action='' onSubmit={handleFormSubmit}>
					<label htmlFor=''>
						Email:
						<input type='email' />
					</label>
					<label htmlFor=''>
						Password:
						<input type='password' />
					</label>
				</form>
			</header>
		</div>
	)
}

export default App
