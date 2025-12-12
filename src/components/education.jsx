import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Ed(){

    return(
        <div className="flex my-2 space-x-4 px-4">
            <div className="bg-red h-[40*3] w-1 md:ml-20 lg:ml-50 rounded-3xl"></div>
            <div className="flex-row w-full space-y-4">
                <div className="ed">
                    <Card className="border-0 text-[min(2.4vw,1em)]">
                        <CardHeader>Grand Valley State University</CardHeader>
                        <CardContent>
                           <p>Bachelor's Computer Science </p> 
                            <p>Minor in Mathematics</p>
                        </CardContent>
                        <CardFooter>
                            <p>2024-2028</p>
                        </CardFooter>

                    </Card>
                </div>
                <div className="ed">
                    <Card className="border-0 text-[min(2.4vw,1em)]">
                        <CardHeader>Lake Michigan College</CardHeader>
                        <CardContent>
                           <p>Associate's in General Science</p>
                        </CardContent>
                        <CardFooter>
                            <p>2022-2024</p>
                        </CardFooter>
                    </Card>

                </div>
                <div className="ed">
                    <Card className="border-0 text-[min(2.4vw,1em)]">
                        <CardHeader>Math & Sciecne Center</CardHeader>
                        <CardContent>
                           <p>Highschool Math Program at Andrew's University</p>
                        </CardContent>
                        <CardFooter>
                            <p>2018-2022</p>
                        </CardFooter>
                    </Card>

                </div>


            </div>

        </div>
    )
}