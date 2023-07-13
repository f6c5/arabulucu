import Carousel from "@/components/Carousel";
import React from "react";
import FlatCard from "@/components/FlatCard";

const carouselItems = [
  { id: 0, title: "item", image: "/images/1.png" },
  { id: 1, title: "item", image: "/images/2.png" },
  { id: 2, title: "item", image: "/images/3.png" },
  { id: 3, title: "item", image: "/images/4.png" },
];

const flatCardItems = [
  {
    id: 1,
    title: "Hızlı ve Etkili Çözümler",
    image: "/images/6.png",
    description:
      "Anlaşmazlıklarınızı hızlı ve etkili bir şekilde çözmek için buradayız. Arabuluculuk yöntemiyle, uzun süreli ve maliyetli hukuki süreçlerden kaçınarak, taraflar arasında adil bir uzlaşma sağlamayı hedefliyoruz.",
  },
  {
    id: 2,
    title: "Deneyimli Arabulucular",
    image: "/images/7.png",
    description:
      "Deneyimli ve uzman arabulucularımız, çeşitli sektörlerdeki anlaşmazlıkları yönetme konusunda bilgi ve beceriye sahiptir. Sizlere en iyi çözümü sunmak için uzmanlığımızı ve deneyimimizi kullanıyoruz.",
  },
  {
    id: 3,
    title: "Esnek ve Kişiselleştirilmiş Hizmet",
    image: "/images/9.png",
    description:
      "Anlaşmazlıkların karmaşıklığına ve farklı ihtiyaçlara göre esnek çözümler sunuyoruz. Size özel bir yaklaşım benimsiyoruz ve arabuluculuk sürecini ihtiyaçlarınıza göre şekillendiriyoruz.",
  },
  {
    id: 4,
    title: "Adil ve Tarafsız Duruş",
    image: "/images/10.png",
    description:
      "Arabuluculuğun temel prensiplerine bağlıyız ve taraflar arasında tarafsız bir duruş sergileriz. Adaleti ve adil bir çözümü sağlamak için objektif bir şekilde hareket ederiz.",
  },
  {
    id: 5,
    title: "Gizlilik ve Güvenlik",
    image: "/images/8.png",
    description:
      "Müşteri gizliliği ve veri güvenliği bizim için önemlidir. Tüm bilgilerinizi gizli tutarız ve güvenli bir şekilde saklarız. Gizlilik politikamıza sıkı sıkıya bağlıyız ve müşterilerimizin güvenliğini en üst düzeyde tutmayı taahhüt ederiz.",
  },
];

const page = () => {
  return (
    <div>
      <Carousel items={carouselItems} />

      <div className="d-flex jc-center">
        <div className="col-10">
          {flatCardItems.map((item) => (
            <FlatCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
