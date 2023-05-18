import { useState } from "react"
import { useActions } from "../hooks/useAction"
import { useTypedSelector } from "../hooks/useTypedSelector"
import { AnimatePresence, motion } from "framer-motion"

const Login: React.FC = () => {
    const { error, stateInstance} = useTypedSelector(state => state.login)
    const {fetchLogin} = useActions()
    const [valueId, setValueId] = useState('')
    const [valueToken, setValueToken] = useState('')

    const clickHandler: React.MouseEventHandler<HTMLButtonElement> = (event) => { 
        setValueId((document.getElementById("id") as HTMLInputElement).value);  
        setValueToken((document.getElementById("token") as HTMLInputElement).value); 
        fetchLogin(valueId, valueToken )
        setValueId("")
        setValueToken("")
    }
    const onChangeIdHandler = (event: React.ChangeEvent<HTMLInputElement>) => { 
        setValueId(event.target.value); 
    }
    const onChangeTokenHandler = (event: React.ChangeEvent<HTMLInputElement>) => { 
        setValueToken(event.target.value); 
    } 
    return (
    <AnimatePresence>
        {stateInstance !=="authorized" &&
            <div className="fixed top-0 left-0 w-full h-full bg-zinc-500 flex justify-center items-center">
                <motion.div className="bg-white p-5 rounded shadow-lg h-2/4 w-3/4 overflow-hidden"
                    initial={{ opacity: 0, y: 60, scale: 0.5 }}
                    animate={{opacity: 1, y: 0, scale: 1,
                    transition: { type: "spring", stiffness: 300 }
                    }}
                    exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
                >
                    <h1 className="text-2xl text-center">Login</h1>
                    {error && <p className="text-red-400">{error}</p>}
                    <div className="flex flex-col justify-around h-full">
                        <input type='text' 
                            id="id"
                            className="border py-2 px-4 nb-2 outline-0 rounded" 
                            placeholder="Enter your IdInstance..."
                            value={valueId}
                            onChange={onChangeIdHandler}/>
                        <input type='text' 
                            id="token"
                            className="border py-2 px-4 nb-2 outline-0 rounded" 
                            placeholder="Enter your IdInstance..."
                            value={valueToken}
                            onChange={onChangeTokenHandler}/>
                        <button className="bg-blue-200 text-slate-500 rounded py-1 hover:shadow-md duration-300" onClick={clickHandler}>Login</button>
                    </div>
                </motion.div>
            </div>
        }
    </AnimatePresence >);
}

export default Login;