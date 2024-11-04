import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './Swiper.css';
import Star_5 from "/src/assets/5-star.svg";
import right_icon from "/src/assets/right-icon.svg";

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><ul>
                    <li className="5-star"><img src={Star_5} alt="Star_5"/></li>
                    <li className="customer-name">
                        <div className="name">
                            Sarah M.
                        </div>
                        <div className="right-icon">
                            <img src={right_icon} alt="right_icon"/>
                        </div>
                    </li>
                    <li className="customer-review">"I'm blown away by the quality and style of the <br/>
                    clothes I received from Shop.co. From casual <br/>
                    wear to elegant dresses, every piece I've bought <br/>has exceeded my expectations." </li>
                    </ul></SwiperSlide>
        <SwiperSlide><ul>
                        <li className="5-star"><img src={Star_5} alt="Star_5"/></li>
                        <li className="customer-name">
                            <div className="name">
                                 Alex K.
                            </div>
                            <div className="right-icon">
                                <img src={right_icon} alt="right_icon"/>
                            </div>
                        </li>
                        <li className="customer-review">"Finding clothes that align with my personal <br/>
                        style used to be a challenge until i discovered <br/> Shop.co. The range of options they offer is truly <br/>
                        remarkable, catering to a variety of tastes and <br/>occasions."</li>
                    </ul></SwiperSlide>
        <SwiperSlide><ul>
                        <li className="5-star"><img src={Star_5} alt="Star_5"/></li>
                        <li className="customer-name">
                            <div className="name">
                                 Alex K.
                            </div>
                            <div className="right-icon">
                                <img src={right_icon} alt="right_icon"/>
                            </div>
                        </li>
                        <li className="customer-review">"Finding clothes that align with my personal <br/>
                        style used to be a challenge until i discovered <br/> Shop.co. The range of options they offer is truly <br/>
                        remarkable, catering to a variety of tastes and <br/>occasions."</li>
                    </ul></SwiperSlide>
        <SwiperSlide><ul>
                        <li className="5-star"><img src={Star_5} alt="Star_5"/></li>
                        <li className="customer-name">
                            <div className="name">
                                Sarah M.
                            </div>
                            <div className="right-icon">
                                <img src={right_icon} alt="right_icon"/>
                            </div>
                        </li>
                        <li className="customer-review">"I'm blown away by the quality and style of the <br/>
                        clothes I received from Shop.co. From casual <br/>
                        wear to elegant dresses, every piece I've bought <br/>has exceeded my expectations." </li>
                        </ul></SwiperSlide>
        <SwiperSlide><ul>
                        <li className="5-star"><img src={Star_5} alt="Star_5"/></li>
                        <li className="customer-name">
                            <div className="name">
                                 Alex K.
                            </div>
                            <div className="right-icon">
                                <img src={right_icon} alt="right_icon"/>
                            </div>
                        </li>
                        <li className="customer-review">"Finding clothes that align with my personal <br/>
                        style used to be a challenge until i discovered <br/> Shop.co. The range of options they offer is truly <br/>
                        remarkable, catering to a variety of tastes and <br/>occasions."</li>
                    </ul></SwiperSlide>
        <SwiperSlide><ul>
                        <li className="5-star"><img src={Star_5} alt="Star_5"/></li>
                        <li className="customer-name">
                            <div className="name">
                                James L.
                            </div>
                            <div className="right-icon">
                                <img src={right_icon} alt="right_icon"/>
                            </div>
                        </li>
                        <li className="customer-review">"As someone who's always on the lookout for<br/>
                        unique fashion pieces, I'm thrilled to have<br/>
                        stumbled upon Shop.co. The selection of<br/>clothes is not diverse but also on-point <br/> with the latest trends." </li>
                    </ul></SwiperSlide>
        <SwiperSlide><ul>
                        <li className="5-star"><img src={Star_5} alt="Star_5"/></li>
                        <li className="customer-name">
                            <div className="name">
                                Sarah M.
                            </div>
                            <div className="right-icon">
                                <img src={right_icon} alt="right_icon"/>
                            </div>
                        </li>
                        <li className="customer-review">"I'm blown away by the quality and style of the <br/>
                        clothes I received from Shop.co. From casual <br/>
                        wear to elegant dresses, every piece I've bought <br/>has exceeded my expectations." </li>
                        </ul></SwiperSlide>
        <SwiperSlide><ul>
                        <li className="5-star"><img src={Star_5} alt="Star_5"/></li>
                        <li className="customer-name">
                            <div className="name">
                                 Alex K.
                            </div>
                            <div className="right-icon">
                                <img src={right_icon} alt="right_icon"/>
                            </div>
                        </li>
                        <li className="customer-review">"Finding clothes that align with my personal <br/>
                        style used to be a challenge until i discovered <br/> Shop.co. The range of options they offer is truly <br/>
                        remarkable, catering to a variety of tastes and <br/>occasions."</li>
                    </ul></SwiperSlide>
        <SwiperSlide><ul>
                        <li className="5-star"><img src={Star_5} alt="Star_5"/></li>
                        <li className="customer-name">
                            <div className="name">
                                James L.
                            </div>
                            <div className="right-icon">
                                <img src={right_icon} alt="right_icon"/>
                            </div>
                        </li>
                        <li className="customer-review">"As someone who's always on the lookout for<br/>
                        unique fashion pieces, I'm thrilled to have<br/>
                        stumbled upon Shop.co. The selection of<br/>clothes is not diverse but also on-point <br/> with the latest trends." </li>
                    </ul></SwiperSlide>
      </Swiper>
    </>
  );
}