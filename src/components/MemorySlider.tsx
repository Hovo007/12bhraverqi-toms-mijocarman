import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import m1 from "../assets/m1.jpg";
import m2 from "../assets/m2.jpg";
import m3 from "../assets/m3.jpg";
import m4 from "../assets/m4.jpg";
import m5 from "../assets/m5.jpg";
import m6 from "../assets/m6.jpg";
import m7 from "../assets/m7.jpg";
import m8 from "../assets/m8.jpg";
import m9 from "../assets/m9.jpg";
import m10 from "../assets/m10.jpg";

const IMAGES = [m1, m2, m3, m4, m5, m6, m7, m8, m9, m10];

export function MemorySlider() {
  return (
    <div className="relative mx-auto max-w-5xl">
      <div className="glass-strong rounded-3xl overflow-hidden p-2 sm:p-3">
        <Swiper
          modules={[Autoplay, EffectFade, Pagination, A11y]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop
          pagination={{ clickable: true }}
          a11y={{ enabled: true }}
          className="rounded-2xl overflow-hidden"
        >
          {IMAGES.map((src, i) => (
            <SwiperSlide key={i}>
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <img
                  src={src}
                  alt={`Հիշողություն ${i + 1}`}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover animate-[soft-zoom_6s_ease-in-out_infinite_alternate]"
                  style={{ animation: "softZoom 6s ease-in-out infinite alternate" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <style>{`
        @keyframes softZoom {
          from { transform: scale(1); }
          to { transform: scale(1.08); }
        }
      `}</style>
    </div>
  );
}
