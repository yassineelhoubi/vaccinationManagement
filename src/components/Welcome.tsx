import imgVaccine from '../assets/imgVaccine.jpeg'
import imgStatistics from '../assets/statistics.svg'
const Welcome: React.FC = () => {
    return (
        <div className="flex flex-col lg:flex-row lg:h-max space-x-4 space-y-4 ">
            <div className="lg:w-1/2">
                <div className="flex flex-col justify-center items-center h-full space-y-4">
                    <p className="text-2xl max-w-xl font-black">Welcome to the coronavirus <span className="text-indigo-500">vaccination campaign portal</span></p>
                    <img className="lg:max-w-xl md:max-w-md" src={imgStatistics} alt="" />
                </div>
            </div>
            <div className="lg:w-1/2 flex align-center">
                <img src={imgVaccine} />
            </div>
        </div>
    )
}

export { Welcome }