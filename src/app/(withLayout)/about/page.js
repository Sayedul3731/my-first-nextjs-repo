import Image from 'next/image';
import React from 'react';
import takiImage from "@/assets/taki.jpg"
export const metadata = {
    title: 'About', 
    description: 'this is about page.'
}
const AboutPage = () => {
    return (
        <div>
            <h1>This is about page...</h1>

            <Image src="https://i.ibb.co/Zxg7YNv/taki.jpg"
            width={300}
            height={300} alt="taki's image"/>
            <Image src={takiImage}
            width={300}
            height={300} alt="taki's image"/>
        </div>
    );
};

export default AboutPage;