import React from 'react';
 
import { observer } from "mobx-react";

import { useOutletContext } from 'react-router-dom';


import HomeBanner from '@/assets/images/CAI/HomeBanner.jpeg';
import PageSection from '@/views/components/page-section/Main.jsx';

function Home() {





  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
 
      {/*  Page content */}
      <main className="flex-grow container mx-auto  ">

        {/*  Page sections */}
       <PageSection>

        <img
          src={HomeBanner}
          className="w-full"
        />

       </PageSection>


       <PageSection>
 

        </PageSection>



        {/*<FeatureCode />*/}

      <div>
 
        
 

      </div>


      </main>
 

     

    </div>
  );
}

export default observer(Home);