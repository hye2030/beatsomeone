function TopBanner({banners}) {
    return (
        <div className="main_slide">
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    {banners.map(banner => {
                        const imgsrc = "https://beats-admin.codeidea.io/storage/banner/"+banner.bannerSource
                        if(banner.bannerType == "beatsomeone"){
                            return (
                                <div className="swiper-slide" key={banner.bannerSource}>
                                    <img src={imgsrc} alt="" />
                                </div>
                            )
                        }
                    })}
                    {/* <div className="swiper-slide">
                        <img src="/src/assets/images/dummy/slide_img.jpg" alt="" />
                    </div> */}
                </div>
                <div className="deco"></div>
                <div className="swiper-pagination"></div>
            </div>
        </div>
    )
}

export default TopBanner;
