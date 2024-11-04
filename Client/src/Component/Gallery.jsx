import React from 'react'
const Gallery = () => {
  return (
    <div className=' p-6 rounded-md m-5 gallery'>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="grid gap-4">
                <div>
                <img
                    className="h-auto max-w-full rounded-lg object-cover object-center"
                    src="https://html.laralink.com/prohealth/assets/img/about/portfolio_2_lg.jpeg"
                    alt="gallery-photo"
                />
                </div>
                <div>
                <img
                    className="h-auto max-w-full rounded-lg object-cover object-center"
                    src="https://html.laralink.com/prohealth/assets/img/about/portfolio_1_lg.jpeg"
                    alt="gallery-photo"
                />
                </div>
            </div>
            <div className="grid gap-4">
                <div>
                <img
                    className="h-auto max-w-full rounded-lg object-cover object-center"
                    src="https://html.laralink.com/prohealth/assets/img/about/portfolio_3_lg.jpeg"
                    alt="gallery-photo"
                />
                </div>
                <div>
                <img
                    className="h-auto max-w-full rounded-lg object-cover object-center "
                    src="https://html.laralink.com/prohealth/assets/img/about/portfolio_3_lg.jpeg"
                    alt="gallery-photo"
                />
                </div>
            </div>
            <div className="grid gap-4">
                <div>
                <img
                    className="h-auto max-w-full rounded-lg object-cover object-center"
                    src="https://html.laralink.com/prohealth/assets/img/about/portfolio_1_lg.jpeg"
                    alt="gallery-photo"
                />
                </div>
                <div>
                <img
                    className="h-auto max-w-full rounded-lg object-cover object-center "
                    src="https://html.laralink.com/prohealth/assets/img/about/portfolio_3_lg.jpeg"
                    alt="gallery-photo"
                />
                </div>
            </div>
            <div className="grid gap-4">
                <div>
                </div>
                <div>
                <img
                    className="max-w-[100%] h-[350px] rounded-lg object-cover object-center"
                    src="https://html.laralink.com/prohealth/assets/img/about/portfolio_4_lg.jpeg"
                    alt="gallery-photo"
                />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Gallery