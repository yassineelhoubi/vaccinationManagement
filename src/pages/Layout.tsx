import { Button } from "../components"

const Layout = () => {
    return (
        <div className="h-screen flex justify-center items-center">
            <div className="border-2 border-slate-700 h-96 w-2/6 bg-teal-400 flex flex-col justify-center items-center rounded">
                <div className="h-4/5 w-4/5 flex flex-col justify-center items-center rounded-md space-y-4">
                <h2 className="text-wider">what is your birth date ?</h2>
                <div className="mb-6 flex justify-between">
                     <input
                        type="number"
                        placeholder="DD ?"
                        className="w-1/5 rounded py-3 px-[14px] text-body-color text-base border border-[f0f0f0] outline-none focus-visible:shadow-none
                        focus:border-primary "
                        />
                     <input
                        type="number"
                        placeholder="MM ?"
                        className="w-1/5 rounded py-3 px-[14px] text-body-color text-base border border-[f0f0f0] outline-none focus-visible:shadow-none
                        focus:border-primary "
                        />
                     <input
                        type="number"
                        placeholder="YYYY ?"
                        className="w-3/6 rounded py-3 px-[14px] text-body-color text-base border border-[f0f0f0] outline-none focus-visible:shadow-none
                        focus:border-primary "
                        />
                  </div>
                </div>
                <Button/>
            </div>
        </div>
    )
}

export {Layout}