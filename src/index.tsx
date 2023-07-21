import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <head>
      <link href="https://fonts.googleapis.com/css2?family=Overpass:wght@400;700&display=swap" rel="stylesheet" />
    </head>

    <main className="flex min-h-screen bg-very-dark-blue items-center flex-col justify-center font-overpass">
      <div className="bg-dark-blue rounded-xl w-80 h-80 p-5">
        
          <img className="fixed" src="/icon-star.svg" alt=""></img>
        
        <div className="flex pt-12 text-white text-xl font-bold ">How did we do?</div>
        <div className="text-light-grey text-xs py-2 "> Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</div>
      <form>

     {/* Need to make css file - Rating for buttons */}
     <div className="flex space-x-4 text-light-grey py-8 justify-around ">
        <button >1</button>
        <button >2</button>
        <button >3</button>
        <button >4</button>
        <button >5</button>
        </div>


        <div>
        <button className="bg-orange rounded-full text-white py-3 w-72 text-xs font-bold">S U B M I T</button>
        </div>
        </form>

      </div>
      
    </main>
    


  </React.StrictMode>
);


