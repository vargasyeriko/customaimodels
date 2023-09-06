
 
import homeBanner from '@/assets/images/CAI/CAI_Home_Banner.jpeg'
import favicon from '@/assets/images/favicon.png'
import titleLogo from "@/assets/images/lizard_invert.png"

const config = {
    title: 'Yeriko',
    logo: titleLogo,
   
    tagline: '',
    url: 'https://yerikodj.com',
    baseURL: '/',
    favicon: favicon,
    homeImage: homeBanner,


    about: {


        title: 'A Bio...',
        description:"about me...",


    },




    navbar: {
        title: '',
        logo: titleLogo,
        items: [
         
          { to:'/about', label:'About' },
          { to:'/photo', label:'Photos' },
          
          { to:'https://instagram.com', icon:'Instagram' },
          { to:'https://twitter.com', icon:'Twitter' },
          
        ],
    },

   
    footer: {
        style: 'light',
        columns: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Blog',
                to: '/blog/',
              } 
            ],
          },
          {
            title: 'Community',
            items: [
            
              {
                label: 'Twitter',
                href: 'https://twitter.com/ethereumdegen',
              },

              {
                label: 'Degen Network',
                href: 'https://ethereum-degen-network.mn.co/',
              },
            ],
          },
          {
            title: 'More',
            items: [
             
              {
                label: 'GitHub',
                href: 'https://github.com/ethereumdegen/degen-portfolio',
              },

             
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} `,

        socials:{
          twitter:"https://twitter.com/ethereumdegen",
          github:"https://github.com/ethereumdegen/degen-portfolio"
        }
      }
    

}



export default config;

