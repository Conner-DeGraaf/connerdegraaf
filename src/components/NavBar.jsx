import {Link} from 'react-router'
import {Button} from './ui/button'
import { SunMoon } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

function NavBar(){
 return (
  <NavigationMenu>
    <NavigationMenuList className="flex font-semibold">
      
      <Avatar className="h-5 w-5 md:h-8 md:w-8">
        <AvatarImage src="/CTD.png"/>
        <AvatarFallback>CTD</AvatarFallback>
      </Avatar>

      <NavigationMenuItem>
        <NavigationMenuLink>  <Link to='/'>Home</Link>  </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink>  <Link to='/aboutme'>About</Link>  </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink>  <Link to='/projects'>Projects</Link>  </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink>  <Link to='/'>Contact</Link>  </NavigationMenuLink>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <Button className="bg-gray-200 text-black hover:bg-gray-700 hover:text-white h-auto w-auto">Resume</Button>
      </NavigationMenuItem>

    </NavigationMenuList>
  </NavigationMenu>
 )
}


export default NavBar

