import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"



export default function Projects(){
    return(
    <div>
        <div className="text-center">
            <h1>Projects</h1>
            <hr className="mx-4"></hr>
        </div>
        <div className="grid md:grid-cols-3 p-10 space-y-10 sm:space-x-4">
            <Card className="projects_card">
                <CardHeader>Project 1</CardHeader>
                <CardContent>This is about project 1</CardContent>
            </Card>
            
            <Card className="projects_card">
                <CardHeader>Project 2</CardHeader>
                <CardContent>This is about project 2</CardContent>
            </Card>

            <Card className="projects_card">
                <CardHeader>Project 3</CardHeader>
                <CardContent>This is about project 3</CardContent>
            </Card>
        </div>
    </div>
    )
}