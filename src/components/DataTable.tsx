 import React from 'react';
 import Carousel from './Carousel';
 
 interface User {
  nameApt: string;
  desc: string;
  pic: string;
  pic2: string;
  pic3: string;
  pic4: string;
  pic5: string;
  pic6: string;
  pic7: string;
  pic8: string;
}

 const users: User[] = [
    {
      nameApt: 'Apartamento',
      desc: "Apartamento para uma estadia de duas pessoas, cama de casal comfortável, cozinha completa e vista expledinda para o mar.",
      pic: '/photos/ap301.jpg',
      pic2: '/photos/ap302.jpg',
      pic3: '/photos/ap303.jpg',
      pic4: '/photos/ap304.jpg',
      pic5: '/photos/ap305.jpg',
      pic6: '/photos/ap306.jpg',
      pic7: '/photos/ap307.jpg',
      pic8: '/photos/ap308.jpg',
    },
    {
      nameApt: 'Loft 1',
      desc: "Loft para estadia de duas pessoas, possui um ar condicionado, cozinha completa e uma sensação de moradia confortável.",
      pic: '/photos/ap101.jpg',
      pic2: '/photos/ap102.jpg',
      pic3: '/photos/ap103.jpg',
      pic4: '/photos/ap104.jpg',
      pic5: '/photos/ap105.jpg',
      pic6: '/photos/ap106.jpg',
      pic7: '/photos/ap107.jpg',
      pic8: '/photos/ap108.jpg',
    },
    {
      nameApt: 'Loft 2',
      desc: "Loft para estadia de duas pessoas, possui um ar condicionado, cozinha completa e uma sensação de moradia confortável.",
      pic: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1315056386946263760/original/208ba644-5eb9-429d-b291-5a40ee2c663f.jpeg?im_w=1440',
      pic2: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1315056386946263760/original/938cf6c2-695d-4aa6-a00b-e9d0d4aed00f.jpeg?im_w=1440',
      pic3: '/photos/ap201.jpg',
      pic4: '/photos/ap202.jpg',
      pic5: '/photos/ap203.jpg',
      pic6: '/photos/ap204.jpg',
      pic7: '/photos/ap205.jpg',
      pic8: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1315056386946263760/original/8da4f666-25e4-4d6a-9e2e-a8e511275733.jpeg?im_w=720',
    },
]

export default function DataTable(){
    return(
        <div className='place-self-center w-11/12 md:w-full flex flex-col md:flex-row md:place-content-around'>
            {users.map((user, id) => {
                return(
                    <div key={id} className='mb-[2%] md:mb-0 flex flex-col md:w-3/12 md:h-1/12 text-white bg-[#3D5A80] rounded-b-2xl'>
                        <Carousel pic={user.pic} pic2={user.pic2} pic3={user.pic3} pic4={user.pic4} pic5={user.pic5} pic6={user.pic6} pic7={user.pic7} pic8={user.pic8} id={id} />
                        <div className='flex flex-col m-5'>
                            <h1 className='font-bold md:text-3xl text-center pb-3'>{user.nameApt}</h1>
                            <p>{user.desc}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}