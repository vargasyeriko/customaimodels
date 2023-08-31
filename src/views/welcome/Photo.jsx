import React from 'react';
 
import { observer } from "mobx-react";

import { useOutletContext } from 'react-router-dom';


import HomeBanner from '@/assets/images/home-banner.png';
import PageSection from '@/views/components/page-section/Main.jsx';


import dj1 from '@/assets/images/photos/dj1.jpg';
import dj2 from '@/assets/images/photos/dj2.jpg';
import dj3 from '@/assets/images/photos/dj3.jpg';
import dj4 from '@/assets/images/photos/dj4.jpg';
import self1 from '@/assets/images/photos/self1.jpg';
import self2 from '@/assets/images/photos/self2.jpg';
import yoga1 from '@/assets/images/photos/yoga1.jpg';



const photos = [ 
  dj1,dj2,dj3,dj4,self1,self2,yoga1 
]


function Home() {





  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
 
      {/*  Page content */}
      <main className="flex-grow container mx-auto max-w-xl">

        {/*  Page sections */}
      


       <PageSection>
      <div className="flex flex-wrap">

        {photos.map((photo, index) => 
          <div className="w-full  p-2" key={index}>
            <img
            src={photo}
            className="inline-block"
              />
          </div>
        )}

      </div>
        

        </PageSection>

 

      <div>
 
        
 

      </div>


      </main>
 

     

    </div>
  );
}

export default observer(Home);