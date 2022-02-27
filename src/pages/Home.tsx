import { VaccinationProcess, Welcome } from "../components"


const Home: React.FC = () => {
    return (
        <>
            <Welcome />
            <div className="px-20">
                <VaccinationProcess />
            </div>
        </>

    )
}

export { Home }