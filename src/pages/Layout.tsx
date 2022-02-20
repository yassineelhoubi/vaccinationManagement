import { NextPrevBtn, Age } from "../components"
import { useState } from "react";



const Layout = () => {
    const [value, setValue] = useState<string | null>(null);

    return (
        <div className=" flex justify-center items-center">
            <div className="  drop-shadow-2xl h-96 md:w-2/3 lg:w-1/2 w-full bg-sky-100  flex flex-col justify-center items-center rounded">
                <div className="h-4/5 w-4/5 flex flex-col justify-center items-center rounded-md space-y-4">
                    <h2 className="text-wider">What is your birth date ?</h2>
                    <div className="mb-6 flex justify-center">
                        <Age setValue={setValue} />
                    </div>
                </div>
                <NextPrevBtn name="Next" />
            </div>
        </div>
    )
}

export { Layout }