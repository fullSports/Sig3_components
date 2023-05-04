import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

const SubMenu = ({
	item,
	key,
}: {
	item: {
		name: string;
		icon: string;
		subMenu: Array<{
			name: string;
			path: string;
		}>;
	};
	key: string;
}) => {
	const [closed, setClose] = useState(false);
	return (
		<li
			className={closed ? 'nav-item open' : 'nav-item '}
			onClick={() => setClose(!closed)}
			key={key ? key : 'li-submenu'}
		>
			<i className={`${item.icon} navlist-icon`}></i>
			<span>{item.name}</span>
			<i className="bi bi-caret-down-fill"></i>
			<span>
				{item.subMenu.map((child, index) => (
					<Link
						to="#"
						onClick={() => (window.location.href = `${child.path}`)}
						key={`sub-menu-li-${index}`}
					>
						<p className="nav-subitem" key={`sub-menu-p-${index}`}>
							<span key={`sub-menu-span-${index}`}> {child.name} </span>
						</p>
					</Link>
				))}
			</span>
		</li>
	);
};
export default SubMenu;
