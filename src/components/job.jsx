import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Job(){

    return(
        <div className="flex">
            <div className="flex-row w-full">
                <div className="job">
                    <Card className="border-0 text-[min(2.4vw,1em)]">
                        <CardHeader>Structured Learning Assistant(SLA)</CardHeader>
                        <CardContent>
                           <p>Work with professors to assistant students in a college class.</p>
                        </CardContent>
                        <CardFooter>
                            <p>Fall 2025 - Present</p>
                        </CardFooter>

                    </Card>
                </div>
                <div className="job">
                    <Card className="border-0 text-[min(2.4vw,1em)]">
                        <CardHeader>Tutoring at GVSU</CardHeader>
                        <CardContent>
                           <p>Work collaboratively with students to help with spesific areas in the course in 50 minute sessions.</p>
                        </CardContent>
                        <CardFooter>
                            <p>Winter/Spring 2025 - Present</p>
                        </CardFooter>
                    </Card>

                </div>
                <div className="job">
                    <Card className="border-0 text-[min(2.4vw,1em)]">
                        <CardHeader>Bosch Internship</CardHeader>
                        <CardContent>
                           <p>Work with enginers to solve a multitude of problems including: CNC, Tooling, and Procedures.</p>
                        </CardContent>
                        <CardFooter>
                            <p>Summer 2025</p>
                        </CardFooter>
                    </Card>

                </div>


            </div>
            <div className="bg-red h-[40*3] w-0.5 mr-20 md:mr-50 lg:mr-70"></div>

        </div>
    )
}