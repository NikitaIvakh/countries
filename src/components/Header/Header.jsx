import { Link } from 'react-router-dom'
import { useCleanup } from '../../features/controls/use-cleanup'
import { ThemeSwitcher } from '../../features/theme/ThemeSwitcher'
import './header.scss'

const Header = () => {
	const cleanUp = useCleanup()

	return (
		<header className='header'>
			<div className='header__container'>
				<div className='header__wrapper'>
					<Link className='header__title' to='/' onClick={cleanUp}>
						Where is the world?
					</Link>
					<ThemeSwitcher />
				</div>
			</div>
		</header>
	)
}
export default Header
