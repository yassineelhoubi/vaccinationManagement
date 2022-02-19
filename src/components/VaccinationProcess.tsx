import imgMap from '../assets/map.png'
import imgProcess from '../assets/process.png'


const VaccinationProcess: React.FC = () => {
    return (
        <>
            <section className="pt-8" >
                <div className="flex flex-col mb-8">
                    <h1 className="text-2xl font-black ">vaccination process</h1>
                    <div className="bg-indigo-500 w-14 h-1"></div>
                </div>
                <div className="flex flex-col lg:flex-row justify-between gap-6 sm:gap-10 md:gap-16">


                    <div className="xl:w-5/12 flex flex-col justify-center lg:py-6 xl:py-12">
                        <div className="h-20">
                            <p className="text-xl font-black ">LOCATIONS </p>
                        </div>
                        <div className="h-60">
                            <img src={imgMap} className="h-full" alt="" />
                        </div>
                    </div>
                    <div className="xl:w-5/12 flex flex-col justify-center align-start  lg:py-6 xl:py-12">
                        <div className="lg:h-20 md:h-20 h-45">
                            <p className="text-xl font-black ">The practical aspect of vaccination against the emerging corona virus: the path of the future vaccine</p>
                        </div>
                        <div className="h-60 ">
                            <img src={imgProcess} className="h-full" alt="" />
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export { VaccinationProcess }