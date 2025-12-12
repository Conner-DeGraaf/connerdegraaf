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
  <NavigationMenu className="fixed top-0 bg-black rounded-4xl">
    <NavigationMenuList className="flex font-semibold">
      
      <Avatar className="h-8 w-8 ml-2">
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

    </NavigationMenuList>
  </NavigationMenu>
 )
}

export default NavBar