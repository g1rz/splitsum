import './App.sass';
import Header from './components/Header/Header';
import Users from './components/Users/Users';

function App() {
	return (
		<div className="App">
			<Header/>
			<main>
				<div className="container">
					<div className="row">
						<div className="column">
              <Users/>
            </div>
						<div className="column">test</div>
					</div>					
				</div>
			</main>
		</div>
	);
}

export default App;
