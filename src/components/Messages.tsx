import {AiOutlineSend} from "react-icons/ai"
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useEffect, useState } from "react";
import { useActions } from "../hooks/useAction";
import { VscAccount,VscRefresh } from "react-icons/vsc";

interface IMessages {
    chatId: string;
  }
  const Messages: React.FC<IMessages> = ({ chatId }) => {
    const { IdInstance, ApiTokenInstance } = useTypedSelector(state => state.login);
    const { messages, error } = useTypedSelector(state => state.message);
    const [message, setMessage] = useState('');
    const { fetchMessage, getMessage } = useActions();
    const [newMessageData, setNewMessageData] = useState(false);
    const [sendingMessage, setSendingMessage] = useState({id:chatId, text:""})
    const onChangeMessageHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
      setMessage(event.target.value);
    };

    const handleAddMessage: React.MouseEventHandler<HTMLButtonElement> = async (event) => {
      await fetchMessage(chatId, IdInstance, ApiTokenInstance, message);
      setSendingMessage({id: chatId, text: message})
      setMessage('');
      setNewMessageData(true);
    };

    const test = async () => {
      await getMessage(chatId, IdInstance, ApiTokenInstance);
      
    };

    useEffect(() => {
      test();
      if (newMessageData) {
        test();
        setNewMessageData(false);
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [chatId, newMessageData]);

    const handleReloadMessages: React.MouseEventHandler<HTMLButtonElement> = async (event) => {
      await getMessage(chatId, IdInstance, ApiTokenInstance);
    };

    return (
      <div className=" bg-slate-500 p-2 text-slate-100 text-xl flex justify-between overflow-hidden">
          <div className="flex flex-col justify-between w-full">
            <button onClick={handleReloadMessages}>
              <VscRefresh className="text-3xl"/>
            </button>
            {error && <p className="text-red-400">{error}</p>}
            <div className="overflow-auto h-full chat_messages">
              {messages.length !== 0 && messages.slice(0).reverse().map((item, index) => (
                <div key={index}>
                  {item.type === "incoming" &&
                    <div className="flex items-center text-left justify-start">
                      <VscAccount className="text-2xl mr-2 text-slate-300"/>
                      <p className="p-2 m-1 rounded bg-slate-600">{item.textMessage}</p>
                    </div>}
                  {item.type === "outgoing" &&
                    <div className="flex items-center mr-2 text-right justify-end">
                      <p className="rounded bg-slate-600 p-2 m-1">{item.textMessage}</p>
                    </div>}
                    
                </div>
                
              ))}
              {sendingMessage.id === chatId && sendingMessage.text &&
                <div className="flex items-center mr-2 text-right justify-end">
                  <p className="rounded bg-slate-600 p-2 m-1">{sendingMessage.text}</p>
                </div>}
            </div>
            <div className="flex items-center w-full p-3 border-t border-gray-300">
              <input
                type="text"
                id="message"
                placeholder="Message"
                className="py-2 pl-4 w-full mx-3 bg-gray-100 rounded outline-none focus:text-gray-700"
                name="message"
                required
                value={message}
                onChange={onChangeMessageHandler}
              />
              <button onClick={handleAddMessage}>
                <AiOutlineSend/>
              </button>
            </div>
          </div>
      </div>
    );
  }

export default Messages;