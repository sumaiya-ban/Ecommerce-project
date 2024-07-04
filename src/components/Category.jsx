import React, { useState } from 'react'
import List from './List'
import ListCome from './ListCome'
import { IoIosArrowForward } from "react-icons/io";
import { BiSolidCategory } from "react-icons/bi";

const Category = () => {
  let[categoryShow,setcategoryShow]=useState(false);
  return (
    <div  className="mr-4">
      <div onClick={()=>setcategoryShow(!categoryShow)} className='lg:hidden flex items-center gap-2 mt-2'>
      <BiSolidCategory />
      <h2 className='font-poppins text-lg text-black select-none'>Category</h2>
      </div>
      
      <List className={`mt-6 ${categoryShow? "block":"hidden"} lg:block`}>
        <ListCome className="font-poppins text-base font-normal leading-6 text-black flex justify-between items-center mt-4">
            Women's Fashion {true ?<IoIosArrowForward />:"" }
        </ListCome>
        <ListCome className="font-poppins text-base font-normal leading-6 text-black flex justify-between items-center mt-4">
        Men’s Fashion {true?<IoIosArrowForward />:"" }
        </ListCome>
        <ListCome className="font-poppins text-base font-normal leading-6 text-black flex justify-between items-center mt-4">
        Electronics {false ?<IoIosArrowForward />:"" }
        </ListCome>
        <ListCome className="font-poppins text-base font-normal leading-6 text-black flex justify-between items-center mt-4">
        Home & Lifestyle {false ?<IoIosArrowForward />:"" }
        </ListCome>
        <ListCome className="font-poppins text-base font-normal leading-6 text-black flex justify-between items-center mt-4">
        Medicine {false ?<IoIosArrowForward />:"" }
        </ListCome>
        <ListCome className="font-poppins text-base font-normal leading-6 text-black flex justify-between items-center mt-4">
        Sports & Outdoor {false ?<IoIosArrowForward />:"" }
        </ListCome>
        <ListCome className="font-poppins text-base font-normal leading-6 text-black flex justify-between items-center mt-4">
        Baby’s & Toys {false ?<IoIosArrowForward />:"" }
        </ListCome>
        <ListCome className="font-poppins text-base font-normal leading-6 text-black flex justify-between items-center mt-4">
        Groceries & Pets {false ?<IoIosArrowForward />:"" }
        </ListCome>
        <ListCome className="font-poppins text-base font-normal leading-6 text-black flex justify-between items-center mt-4">
        Health & Beauty {false ?<IoIosArrowForward />:"" }
        </ListCome>
      </List>
    </div>
  )
}

export default Category
