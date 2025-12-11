import Ed from "./education";
import Job from "./job";
import Skills from "./skills";

export default function Home() {

    return (
        <div className="flex-col justify-center">
            <div className="flex flex-col items-center justify-center text-center h-full">
                <h1 className="font-semibold">Conner DeGraaf</h1>
                <p>Hello, I am a student at GVSU pursuing a CS degree.</p>
                <p>Take a look around and get to know me.</p>
            </div>

            <div className="p-10 lg:px-60 pb-0">
                <Skills></Skills>
            </div>

            <div>
                <Ed/>
            </div>

            <div className="flex justify-end">
                <Job/>
            </div>

            <footer className="bg-black h-20 border-t border-b rounded-t-2xl">

            </footer>

        </div>
    )
}