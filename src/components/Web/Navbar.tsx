import React from 'react'
import { Button } from '../ui/button'
import { useTheme } from '@/Context/Theme-Provider'

export default function Navbar():React.ReactNode {

  const { theme, setTheme } = useTheme();

  return (
    <>
    <div>Navbar</div>
    {theme === "dark" ? <Button onClick={() => {setTheme("light")}}>Light</Button> :
        <Button onClick={() => {setTheme("dark")}}>Dark</Button>
    }
    
    </>
  )
}
