import { Link } from 'react-router-dom'
import ThemeSwitcher from '../../features/theme/ThemeSwitcher'
import './header.scss'

const Header = () => {
	return (
		<header className='header'>
			<div className='container'>
				<div className='header__wrapper'>
					<h2 className='header__title'>
						<Link to='/'>Where is the world?</Link>
					</h2>
					<ThemeSwitcher />
				</div>
			</div>
		</header>
	)
}

export default Header
