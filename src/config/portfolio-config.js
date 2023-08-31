
 
import profileImage from '@/assets/images/punk1164.png'


import vibegraphImage from '@/assets/images/vibegraph_doodle.png'
 
import portfolioImage from '@/assets/images/portfolio_doodle.png'
import xcopyImage from '@/assets/images/xcopy_cult.gif'

import defiPenthouseImage from "@/assets/images/defipenthouse.jpg"


import degenGuideImage from '@/assets/images/degen_guide.png'

import ensApiImage from '@/assets/images/ensapi.png'

const config = {
    title: 'Ethereum Degen',
    socialHandle: '@ethereumdegen',
     
    profileImage: profileImage,

  
    items: [
      

        {
            title:"Defi Penthouse",
            description:"A youtube channel for ethereum applications.",
            image: defiPenthouseImage,
            link: "http://defipenthouse.com"

        },

        {
            title:"Ethereum for the Beginner Degen (FREE)",
            description:"The definitive online course for Ethereum including wallet creation, transactions, and the latest security+safety practices.",
            image: degenGuideImage,
            link: "https://ethereum-degen-network.mn.co/plans/288623?bundle_token=a23ac35eebfd2d734c0f02730df26035&utm_source=manual"

        },

        {
            title:"XCOPY Cult",
            description:"XCOPY fan website displaying original works.",
            image: xcopyImage,
            link: "https://xcopycult.com"

        },


        {
            title:"ENS API",
            description:"Fast & free api for ENS domain resolution.",
            image: ensApiImage,
            link: "https://ensapi.io"

        },
        {
            title:"Vibegraph",
            description:"A chain-data event scraping service for ethereum applications.",
            image: vibegraphImage,
            link: "https://github.com/ethereumdegen/vibegraph"

        },




    ]

}



export default config;
//module.exports = config;
