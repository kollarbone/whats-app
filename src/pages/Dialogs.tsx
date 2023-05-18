
import { useState } from "react";
import Header from "../components/Header";
import { useTypedSelector } from "../hooks/useTypedSelector"
import {GrAdd} from "react-icons/gr"
import { useActions } from "../hooks/useAction";
import {VscAccount, VscChromeClose} from "react-icons/vsc"
import Messages from "../components/Messages";
import { motion } from "framer-motion";

const Dialogs: React.FC = () => {
    const { stateInstance, IdInstance, ApiTokenInstance } = useTypedSelector(state => state.login)
    const {chatInfo, error} = useTypedSelector(state => state.chat)
    const [valueNumber, setValueNumber] = useState('')
    const [chatId, setChatId] = useState('')
    const {fetchChat, fetchDeleteChat} = useActions()
    const [active, setActive] =useState<string|null>("")
    const [empty, setEmpty] = useState(false)

    const onChangeNumberHandler = (event: React.ChangeEvent<HTMLInputElement>) => { 
        setValueNumber(event.target.value);
        setEmpty(false)
    }
    const handleAddChat: React.MouseEventHandler<HTMLButtonElement> = (event) => { 
        setValueNumber((document.getElementById("chat") as HTMLInputElement).value);  
        let number = valueNumber + "@c.us"
        fetchChat(number, IdInstance, ApiTokenInstance )
        setValueNumber("")
        setEmpty(true)
    }
    const handleChat = (event: React.MouseEvent<HTMLDivElement>) => {  
        const chatId = event.currentTarget.getAttribute('data-chatid');
         if (chatId) {
          setChatId(chatId); 
          setActive(chatId)
        } 
      }
    
    return (<>
            {stateInstance === "authorized" && 
                <div className="grid grid-cols-2 gap-1 h-screen">
                    <div>
                        <Header/>
                        <div className="flex flex-col">
                            <div className="bg-slate-400 p-4 text-lg mb-1  flex justify-between items-center">
                                <input type='text' 
                                    id="chat"
                                    className="border py-1 px-3 nb-2 outline-0 rounded" 
                                    placeholder="Enter phone number"
                                    value={valueNumber}
                                    onChange={onChangeNumberHandler}/>
                                    {empty?
                                        <button onClick={fetchDeleteChat} className="hover:scale-110 duration-300">
                                            <VscChromeClose/>
                                        </button>:
                                        <button onClick={handleAddChat} className="hover:scale-110 duration-300">
                                            <GrAdd />
                                        </button>}
                            </div> 
                            {error && <p className="text-red-400">{error}</p>}
                            {chatInfo && chatInfo.map((item, index)=>
                                (<motion.div className={active === item.chatId ? 
                                    "bg-slate-50 p-5 mb-1 cursor-pointer flex justify-between items-center duration-200":
                                    "bg-slate-300 p-5 mb-1 cursor-pointer flex justify-between items-center duration-200"} key={index} 
                                    data-chatid={item.chatId} 
                                    onMouseDown={handleChat}
                                    initial={{ opacity: 0, y: -60 }}
                                    animate={{opacity: 1, y: 0}}>
                                    <VscAccount className="text-xl text-slate-700"/>
                                    <p className="text-lg text-slate-700">{item.name?item.name:item.chatId}</p>
                                </motion.div>)
                            )}
                        </div>
                    </div>
                    {chatInfo.map((item)=> chatId===item.chatId) && chatId && <Messages chatId ={chatId}/>}
                </div>
            }
        </>);
}

export default Dialogs;