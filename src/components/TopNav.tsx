
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faUser } from '@fortawesome/free-solid-svg-icons';

export default function TopNav() {
    return (
        <div className=" w-full bg-gray-800 text-white flex items-center p-4 " >
            <div className="ml-auto flex items-center space-x-4">
                <FontAwesomeIcon icon={faBell} className="cursor-pointer" />
                <FontAwesomeIcon icon={faUser} className="cursor-pointer" />
            </div>
        </div>
    );
}
