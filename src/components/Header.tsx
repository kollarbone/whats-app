import {VscAccount, VscChromeClose} from "react-icons/vsc"
import { useActions } from "../hooks/useAction";

const Header: React.FC = () => {
    const { fetchUnlogin, fetchDeleteChat, fetchDeleteMessages} = useActions();
    const handleUnlogin = (event: React.MouseEvent<HTMLDivElement>) => {  
        window.location.reload();
        fetchUnlogin()
        fetchDeleteChat()
        fetchDeleteMessages()
      }
    return (
            <div className="bg-slate-500 p-2 text-slate-100 text-3xl flex justify-between">
                <div><VscAccount/></div>
                <div onClick={handleUnlogin} className="cursor-pointer hover:scale-110 duration-300">
                    <VscChromeClose/>
                </div>
            </div>
            );
}

export default Header;