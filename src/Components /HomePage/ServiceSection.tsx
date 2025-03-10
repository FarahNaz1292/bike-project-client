'use client'


import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const ServiceSection = () => {
    const [isExpanded, setIsExpanded] = useState(false)
    const toggleText = () => {
        setIsExpanded((prev) => !prev)
    }
    return (
        <>
            <div className='container mx-auto flex flex-col justify-center items-center mt-4 mb-4'>
                <h1 className='text-2xl font-extrabold'>Our Services</h1>
                <p className='text-center text-xl font-bold'>Our professionals will perform diagnostic tests, <br />fluid flush and fills, engine replacement, oil changes, and total vehicle overhauls.</p>
            </div>
            <div className='container mx-auto flex items-center justify-center gap-4'>

                <div className='flex flex-col items-center justify-center'>
                    <Image src='https://static.vecteezy.com/system/resources/previews/012/574/823/non_2x/motorcycle-wheel-motorcycle-template-design-for-logo-badge-emblem-and-other-free-vector.jpg' alt='tire Image' width={200} height={40} />
                    <h1 className='text-2xl font-bold'>Tyre Repair's</h1>
                    <p className={`transition-all duration-500 ${isExpanded ? 'line-clamp-none' : 'line-clamp-3'}`}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, blanditiis accusantium. Atque quo harum repellendus vitae non nesciunt omnis quisquam nostrum veniam molestias, vel qui quas quis recusandae dolorem dicta.
                        Blanditiis distinctio asperiores voluptatum eaque earum repellendus! Saepe, repellat? Aut sint suscipit atque quas minus eum explicabo totam laudantium. Ullam neque inventore minima officiis consectetur laboriosam rem dolorum doloremque tempore!
                        Voluptatum illo quae non molestiae, quia nesciunt minima eveniet. Eos aspernatur nam eius odio nesciunt natus debitis enim exercitationem nihil explicabo. Cupiditate odio iure labore beatae repudiandae rerum libero atque.
                        Illo quibusdam nobis nostrum beatae provident laboriosam a labore corporis dolor sunt voluptates quod quasi ipsa molestias tempora, impedit quia sint reprehenderit aperiam ut hic ea perspiciatis enim! Vero, suscipit?
                        Modi minima sed accusantium iste numquam architecto cumque doloribus, natus nulla tempora rem doloremque maxime laborum molestiae nam eaque suscipit, cupiditate dolorum inventore accusamus, culpa exercitationem voluptatem. Corrupti, est voluptates.
                        Molestiae perspiciatis, voluptatum cupiditate, ea ipsa eveniet suscipit repellendus cumque fugiat quasi rerum odio quaerat ex quidem provident ratione sint fugit aliquam. Placeat debitis sit ullam suscipit, blanditiis eos nihil?
                        Deserunt doloribus in dolor, amet natus sapiente ad aspernatur, aliquid expedita reiciendis sed illum facere ipsa suscipit architecto ipsam asperiores. Beatae dolore expedita, numquam odio facilis iure delectus ratione harum?
                        Est a quisquam corrupti sed. Culpa corporis earum officia, labore porro ut ab optio assumenda. Ad laudantium sequi a molestias veniam sunt cum, eos architecto, voluptas minima quos, magnam impedit?
                        Tempora, sed est fuga qui possimus aut pariatur adipisci nihil dicta id sapiente facere recusandae soluta unde earum. Possimus in eum repellendus esse sint, vero quisquam quasi ipsum soluta ullam?
                        Sunt, a? Eligendi dolor, veniam nemo mollitia reiciendis eos sint atque quisquam porro, totam minus error, quos labore recusandae quidem optio blanditiis delectus fugiat cum officiis amet doloremque. Quidem, nulla?</p>
                    <button
                        onClick={toggleText}
                        className="text-blue-600 underline"
                    >
                        {isExpanded ? 'Read Less' : 'Read More'}
                    </button>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSVOIBDgtkFygnvYrP1l6z_D-GK-t9_1ydUw&s' alt='tire Image' width={200} height={40} />
                    <h1 className='text-2xl font-bold'>Chain Repair's</h1>
                    <p className={`transition-all duration-500 ${isExpanded ? 'line-clamp-none' : 'line-clamp-3'}`}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, blanditiis accusantium. Atque quo harum repellendus vitae non nesciunt omnis quisquam nostrum veniam molestias, vel qui quas quis recusandae dolorem dicta.
                        Blanditiis distinctio asperiores voluptatum eaque earum repellendus! Saepe, repellat? Aut sint suscipit atque quas minus eum explicabo totam laudantium. Ullam neque inventore minima officiis consectetur laboriosam rem dolorum doloremque tempore!
                        Voluptatum illo quae non molestiae, quia nesciunt minima eveniet. Eos aspernatur nam eius odio nesciunt natus debitis enim exercitationem nihil explicabo. Cupiditate odio iure labore beatae repudiandae rerum libero atque.
                        Illo quibusdam nobis nostrum beatae provident laboriosam a labore corporis dolor sunt voluptates quod quasi ipsa molestias tempora, impedit quia sint reprehenderit aperiam ut hic ea perspiciatis enim! Vero, suscipit?
                        Modi minima sed accusantium iste numquam architecto cumque doloribus, natus nulla tempora rem doloremque maxime laborum molestiae nam eaque suscipit, cupiditate dolorum inventore accusamus, culpa exercitationem voluptatem. Corrupti, est voluptates.
                        Molestiae perspiciatis, voluptatum cupiditate, ea ipsa eveniet suscipit repellendus cumque fugiat quasi rerum odio quaerat ex quidem provident ratione sint fugit aliquam. Placeat debitis sit ullam suscipit, blanditiis eos nihil?
                        Deserunt doloribus in dolor, amet natus sapiente ad aspernatur, aliquid expedita reiciendis sed illum facere ipsa suscipit architecto ipsam asperiores. Beatae dolore expedita, numquam odio facilis iure delectus ratione harum?
                        Est a quisquam corrupti sed. Culpa corporis earum officia, labore porro ut ab optio assumenda. Ad laudantium sequi a molestias veniam sunt cum, eos architecto, voluptas minima quos, magnam impedit?
                        Tempora, sed est fuga qui possimus aut pariatur adipisci nihil dicta id sapiente facere recusandae soluta unde earum. Possimus in eum repellendus esse sint, vero quisquam quasi ipsum soluta ullam?
                        Sunt, a? Eligendi dolor, veniam nemo mollitia reiciendis eos sint atque quisquam porro, totam minus error, quos labore recusandae quidem optio blanditiis delectus fugiat cum officiis amet doloremque. Quidem, nulla?</p>
                    <button
                        onClick={toggleText}
                        className="text-blue-600 underline"
                    >
                        {isExpanded ? 'Read Less' : 'Read More'}
                    </button>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <Image src='https://static.vecteezy.com/system/resources/previews/011/913/499/non_2x/chrome-vintage-motorcycle-engine-logo-with-angel-wings-free-vector.jpg' alt='motor bike engine Image' width={250} height={40} />
                    <h1 className='text-2xl font-bold'>Motor Bike Repair's</h1>
                    <p className={`transition-all duration-500 ${isExpanded ? 'line-clamp-none' : 'line-clamp-3'}`}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, blanditiis accusantium. Atque quo harum repellendus vitae non nesciunt omnis quisquam nostrum veniam molestias, vel qui quas quis recusandae dolorem dicta.
                        Blanditiis distinctio asperiores voluptatum eaque earum repellendus! Saepe, repellat? Aut sint suscipit atque quas minus eum explicabo totam laudantium. Ullam neque inventore minima officiis consectetur laboriosam rem dolorum doloremque tempore!
                        Voluptatum illo quae non molestiae, quia nesciunt minima eveniet. Eos aspernatur nam eius odio nesciunt natus debitis enim exercitationem nihil explicabo. Cupiditate odio iure labore beatae repudiandae rerum libero atque.
                        Illo quibusdam nobis nostrum beatae provident laboriosam a labore corporis dolor sunt voluptates quod quasi ipsa molestias tempora, impedit quia sint reprehenderit aperiam ut hic ea perspiciatis enim! Vero, suscipit?
                        Modi minima sed accusantium iste numquam architecto cumque doloribus, natus nulla tempora rem doloremque maxime laborum molestiae nam eaque suscipit, cupiditate dolorum inventore accusamus, culpa exercitationem voluptatem. Corrupti, est voluptates.
                        Molestiae perspiciatis, voluptatum cupiditate, ea ipsa eveniet suscipit repellendus cumque fugiat quasi rerum odio quaerat ex quidem provident ratione sint fugit aliquam. Placeat debitis sit ullam suscipit, blanditiis eos nihil?
                        Deserunt doloribus in dolor, amet natus sapiente ad aspernatur, aliquid expedita reiciendis sed illum facere ipsa suscipit architecto ipsam asperiores. Beatae dolore expedita, numquam odio facilis iure delectus ratione harum?
                        Est a quisquam corrupti sed. Culpa corporis earum officia, labore porro ut ab optio assumenda. Ad laudantium sequi a molestias veniam sunt cum, eos architecto, voluptas minima quos, magnam impedit?
                        Tempora, sed est fuga qui possimus aut pariatur adipisci nihil dicta id sapiente facere recusandae soluta unde earum. Possimus in eum repellendus esse sint, vero quisquam quasi ipsum soluta ullam?
                        Sunt, a? Eligendi dolor, veniam nemo mollitia reiciendis eos sint atque quisquam porro, totam minus error, quos labore recusandae quidem optio blanditiis delectus fugiat cum officiis amet doloremque. Quidem, nulla?</p>
                    <button
                        onClick={toggleText}
                        className="text-blue-600 underline"
                    >
                        {isExpanded ? 'Read Less' : 'Read More'}
                    </button>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <Image src='https://static.vecteezy.com/system/resources/previews/049/641/352/non_2x/black-car-brake-disc-isolated-on-white-eps-illustration-free-vector.jpg' alt='tire Image' width={200} height={40} />
                    <h1 className='text-2xl font-bold'>Brake Repair's</h1>
                    <p className={`transition-all duration-500 ${isExpanded ? 'line-clamp-none' : 'line-clamp-3'}`}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, blanditiis accusantium. Atque quo harum repellendus vitae non nesciunt omnis quisquam nostrum veniam molestias, vel qui quas quis recusandae dolorem dicta.
                        Blanditiis distinctio asperiores voluptatum eaque earum repellendus! Saepe, repellat? Aut sint suscipit atque quas minus eum explicabo totam laudantium. Ullam neque inventore minima officiis consectetur laboriosam rem dolorum doloremque tempore!
                        Voluptatum illo quae non molestiae, quia nesciunt minima eveniet. Eos aspernatur nam eius odio nesciunt natus debitis enim exercitationem nihil explicabo. Cupiditate odio iure labore beatae repudiandae rerum libero atque.
                        Illo quibusdam nobis nostrum beatae provident laboriosam a labore corporis dolor sunt voluptates quod quasi ipsa molestias tempora, impedit quia sint reprehenderit aperiam ut hic ea perspiciatis enim! Vero, suscipit?
                        Modi minima sed accusantium iste numquam architecto cumque doloribus, natus nulla tempora rem doloremque maxime laborum molestiae nam eaque suscipit, cupiditate dolorum inventore accusamus, culpa exercitationem voluptatem. Corrupti, est voluptates.
                        Molestiae perspiciatis, voluptatum cupiditate, ea ipsa eveniet suscipit repellendus cumque fugiat quasi rerum odio quaerat ex quidem provident ratione sint fugit aliquam. Placeat debitis sit ullam suscipit, blanditiis eos nihil?
                        Deserunt doloribus in dolor, amet natus sapiente ad aspernatur, aliquid expedita reiciendis sed illum facere ipsa suscipit architecto ipsam asperiores. Beatae dolore expedita, numquam odio facilis iure delectus ratione harum?
                        Est a quisquam corrupti sed. Culpa corporis earum officia, labore porro ut ab optio assumenda. Ad laudantium sequi a molestias veniam sunt cum, eos architecto, voluptas minima quos, magnam impedit?
                        Tempora, sed est fuga qui possimus aut pariatur adipisci nihil dicta id sapiente facere recusandae soluta unde earum. Possimus in eum repellendus esse sint, vero quisquam quasi ipsum soluta ullam?
                        Sunt, a? Eligendi dolor, veniam nemo mollitia reiciendis eos sint atque quisquam porro, totam minus error, quos labore recusandae quidem optio blanditiis delectus fugiat cum officiis amet doloremque. Quidem, nulla?</p>
                    <button
                        onClick={toggleText}
                        className="text-blue-600 underline"
                    >
                        {isExpanded ? 'Read Less' : 'Read More'}
                    </button>
                </div>

            </div>
            <div className='flex justify-center items-center m-4'>
         <Link href={'/ourservices'}>   <button className='btn btn-primary font-bold text-lg'>Services Details</button></Link>
            </div>


        </>
    )
}

export default ServiceSection