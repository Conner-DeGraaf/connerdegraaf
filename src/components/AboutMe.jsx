import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function AboutMe(){

    return(
        <div>
            <div className="text-center">
                <h1>About Me</h1>
                <hr className="mx-4"></hr>
            </div>

            <div className="flex flex-col items-center sm:flex-row sm:items-start p-4 sm:space-x-4 space-y-4"> 
                <img src="/about_image.jpg" className="bg-gray-100 md:w-100"/>
                <div className="text-[min(4vw,1em)]">
                    <h2>Who am I?</h2>
                    <hr></hr>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum modi cumque minus voluptatem ipsum nesciunt a labore natus unde et quod quidem, explicabo illo numquam, esse iure atque nobis dolore.</p>
                    <br></br>
                    <h2>Plans For This Website</h2>
                    <hr></hr>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos id harum nam laborum beatae est repudiandae, autem deleniti, neque iste sunt explicabo dolor? Culpa quaerat et ratione ea quibusdam officia.</p>
                </div>
            </div>

            <div className="text-center">
                <h1>Hobbies</h1>
                <hr className="mx-4"></hr>
            </div>

            <div className="flex flex-col justify-center space-y-7 sm:flex-row sm:justify-evenly m-4 sm:space-x-3">
                <Card className="hobby_card">
                    <CardHeader>Hobby 1</CardHeader>
                    <CardContent>
                        <p>This is hobby 1</p>
                    </CardContent>
                </Card>

                <Card className="hobby_card">
                    <CardHeader>Hobby 2</CardHeader>
                    <CardContent>
                        <p>This is hobby 2</p>
                    </CardContent>
                </Card>

                <Card className="hobby_card">
                    <CardHeader>Hobby 3</CardHeader>
                    <CardContent>
                        <p>This is hobby 3</p>
                    </CardContent>
                </Card>
            </div>

        </div>
    )
}