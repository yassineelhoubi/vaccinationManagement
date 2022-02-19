import { Features, Header, VaccinationProcess, Welcome } from "../components"


const Home = () => {
    return (
        <div className="bg-white lg:pb-12">
            <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
                <Header />
                <Welcome/>
                <div className="px-20">
                    <VaccinationProcess />
                </div>
            </div>
        </div>
    )
}

export { Home }