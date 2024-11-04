// import React from 'react'
const BlogData = [
    {
        img: 'https://html.laralink.com/prohealth/assets/img/blog/post_1.jpeg',
        year: 'March 12',
        facebook: 'href://famzy',
        linkedIn: 'href://famzy',
        x: 'href://famzy',
        content: 'The Importance of Mental Health: Understanding and Managing Anxiety Disorders',
        learnMore: 'Learn More'
    },
    {
        img: 'https://html.laralink.com/prohealth/assets/img/blog/post_2.jpeg',
        year: 'March 11',
        facebook: 'href://famzy',
        linkedIn: 'href://famzy',
        x: 'href://famzy',
        content: 'A Parent\'s Guide to Childhood Vaccinations: What You Need to Know',
        learnMore: 'Learn More'
    },
    {
        img: 'https://html.laralink.com/prohealth/assets/img/blog/post_3.jpeg',
        facebook: 'href://famzy',
        year: 'March 10',
        linkedIn: 'href://famzy',
        x: 'href://famzy',
        content: 'Preventing Heart Disease: Tips for a Heart-Healthy Lifestyle',
        learnMore: 'Learn More'
    },
    {
        img: 'https://html.laralink.com/prohealth/assets/img/blog/post_4.jpeg',
        facebook: 'href://famzy',
        year: 'Feb 29',
        linkedIn: 'href://famzy',
        x: 'href://famzy',
        content: 'Managing Chronic Pain: Treatment Options and Strategies',
        learnMore: 'Learn More'
    },
    {
        img: 'https://html.laralink.com/prohealth/assets/img/blog/post_5.jpeg',
        facebook: 'href://famzy',
        year: 'Feb 27',
        linkedIn: 'href://famzy',
        x: 'href://famzy',
        content: 'Understanding and Managing Diabetes: Tips for Healthy Living',
        learnMore: 'Learn More'
    },
    {
        img: 'https://html.laralink.com/prohealth/assets/img/blog/post_6.jpeg',
        year: 'Feb 20',
        facebook: 'href://famzy',
        linkedIn: 'href://famzy',
        x: 'href://famzy',
        content: 'The Role of Physical Therapy in Injury Recovery and Prevention',
        learnMore: 'Learn More'
    },
    {
        img: 'https://html.laralink.com/prohealth/assets/img/blog/post_7.jpeg',
        year: 'Feb 18',
        facebook: 'href://famzy',
        linkedIn: 'href://famzy',
        x: 'href://famzy',
        content: 'Breaking the Stigma: Raising Awareness for Mental Health Issues',
        learnMore: 'Learn More'
    },
    {
        img: 'https://html.laralink.com/prohealth/assets/img/blog/post_8.jpeg',
        year: 'Feb 5',
        facebook: 'href://famzy',
        linkedIn: 'href://famzy',
        x: 'href://famzy',
        content: 'Allergies and Asthma: Causes, Symptoms, and Treatment Options',
        learnMore: 'Learn More'
    },
    {
        img: 'https://html.laralink.com/prohealth/assets/img/blog/post_9.jpeg',
        year: 'Jan 30',
        facebook: 'href://famzy',
        linkedIn: 'href://famzy',
        x: 'href://famzy',
        content: 'Caring for Your Skin: Tips for Healthy, Glowing Skin',
        learnMore: 'Learn More'
    },
]
const Blogs = () => {
  return (
    <div className="grid blogData md:grid-cols-3 m-4 mx-4 md:mx-24">
        {BlogData.map((data, key) => 
            <div className="m-4 border-2 border-blue-500 rounded-t-xl hover:transform transition-all hover:translate-y-[-20px] " key={key}>
                <div>
                    <img className="rounded-t-xl rounded-b-2xl" src={data.img} alt="blog-picture" />
                </div>
                <main className="flex justify-around my-4 items-center">
                    <p className="text-gray-500">{data.year}</p>
                    <div>
                        <a href={data.facebook}><i className="fa-brands fa-facebook-f rounded-full bg-white text-blue-800 p-2 place-content-center text-center border-blue-800 border hover:bg-blue-800 hover:text-white transition-all h-[40px] w-[40px]"></i></a>
                        <a href={data.linkedIn}><i className="fa-brands fa-linkedin-in mx-2 rounded-full bg-white text-blue-800 p-2 place-content-center text-center border-blue-800 border hover:bg-blue-800 hover:text-white transition-all h-[40px] w-[40px]"></i></a>
                        <a href={data.x}><i className="fa-solid fa-x rounded-full bg-white text-blue-800 p-2 place-content-center text-center border-blue-800 border hover:bg-blue-800 hover:text-white transition-all h-[40px] w-[40px]"></i></a>
                    </div>
                </main>
                <div className="p-4 text-xl text-gray-600">
                    <p>{data.content}</p>
                </div>
                <a className="p-4 text-blue-gray-300 hover:underline" href={data.learnMore}>Learn more</a>
            </div>
        )}
    </div>
  )
}

export default Blogs