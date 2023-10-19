import {FiGithub} from 'react-icons/fi'
import {AiFillLinkedin} from 'react-icons/ai'

const Footer = () => {
  return (
       <footer
      className="
             text-3xl text-black text-center 
            fixed
             bg-black
             inset-x-0 
             bottom-0 
             
             
               p-1"> 
          <div className=" justify-center flex gap-4 p-2">
    
             <FiGithub  color="white" />
               <AiFillLinkedin  color="white"/>
             
          </div>    
    </footer> 
        
  );
};

export default Footer;
