import React from 'react';
 
import { observer } from "mobx-react";

import { useOutletContext } from 'react-router-dom';

import frontendConfig from '@/config/frontend-config'

import HomeBanner from '@/assets/images/yeriko_banner_sepia.jpeg';
import PageSection from '@/views/components/page-section/Main.jsx';


function Home() {





  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
 
      {/*  Page content */}
      <main className="flex-grow container mx-auto max-w-xl">

        {/*  Page sections */}
       <PageSection>

        <img
          src={HomeBanner}
        />

       </PageSection>


       <PageSection>  
        <div className="py-4">
        <p className="text-white font-bold text-xl">
          {frontendConfig.about.title}
        </p>

        <p className="text-white   ">

          Hello my name is yeriko..

         
        </p>


        </div>
        </PageSection>


        {/*<FeatureCode />*/}

      <div>
 
        
 

      </div>


      </main>
 

     

    </div>
  );
}

export default observer(Home);