import './App.css';
import { People } from './people.js';
import './index.css';
import { useState } from 'react';

var options = { month: 'long' };
let thisDay = new Date().getDate();
let thisMonth = new Intl.DateTimeFormat('en-US', options).format(new Date());
let thisYear = new Date().getFullYear();

function App() {
	return (
		<div className='bday-box'>
			<h1 className='app-title'>Birthday Reminder App</h1>
			<h3 className='heading3'>Today's Birthdays</h3>
			<hr></hr>
			<WholeThing />
		</div>
	);
}
const WholeThing = () => {
	const CurrentBdays = People.filter(
		(person) =>
			thisDay === person.birthday && thisMonth === person.birthmonth,
	);
	const [list, setList] = useState(CurrentBdays);
	console.log(list);
	const clearList = (list) => {
		list = [];
		setList(list);
	};

	const Birthdays = () => {
		if (list.length === 0) {
			return <p>Birthdays clear today</p>;
		} else if (list !== []) {
			return (
				<>
					{list.map((item) => {
						return (
							<section key={item.id}>
								<img
									className='person-img'
									src={item.image.default}
									alt=''
								/>
								<h4 className='person-name'>{item.name}</h4>
								<p className='person-age'>
									{thisYear - item.birthyear} years old
								</p>
							</section>
						);
					})}
					<button className='btn' onClick={clearList}>
						Clear
					</button>
				</>
			);
		}
	};
	return Birthdays();
};

export default App;
