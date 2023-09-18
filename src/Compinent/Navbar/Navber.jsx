import { useState } from "react";
import Link from "../Link/Link";
import { HiMenuAlt1,HiX } from 'react-icons/hi';

const Navber = () => {
     const [open, setOpen] = useState(false)
     const route = [
          {"id": 1,"name": "Route 1","path": "/route1" },
          {"id": 2,"name": "Route 2","path": "/route2"},
          {"id": 3,"name": "Route 3","path": "/route3"},
          {"id": 4,"name": "Route 4","path": "/route4"},
          {"id": 5,"name": "Route 5","path": "/route5"}
     ]
        
     return (
          <nav className=""  >
               <div onClick={() => setOpen(!open)} className="text-2xl md:hidden bg-yellow-500 pl-1">
                    {
                         open === true ? <HiX></HiX> : <HiMenuAlt1></HiMenuAlt1> 
                    }
                    
               </div>
               <div className={`md:flex absolute md:static bg-orange-400 p-3 
               ${open ? '' : 'hidden'}
               rounded-2xl text-white`}>
                    {
                         route.map(navdata => <Link 
                              key={navdata.id}
                              route={navdata}
                              ></Link>)
                    }
               </div>
          </nav>
     );
};

export default Navber;