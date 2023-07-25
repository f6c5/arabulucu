"use client";

import Carousel from "@/components/Carousel";
import React from "react";
import FlatCard from "@/components/FlatCard";
import { useSelector } from "react-redux";

const page = () => {
  const { flatCardItems } = useSelector((store) => store.flatCardItems);
  const { carouselItems } = useSelector((store) => store.carouselItems);
  return (
    <div>
      <Carousel items={carouselItems} />

      <div className="row jc-center">
        <div className="col-10">
          <div className="flat-card">
            <div className="card-body">
              <h1 className="col-sm-12 text-center border-bottom-2 pb-2 mb-8">
                Arabuluculuk Nedir?
              </h1>
              <p className="mb-2">
                Arabuluculuk, çeşitli taraflar arasında çıkan anlaşmazlıkları
                çözmek için kullanılan etkili bir alternatif çözüm yöntemidir.
                Arabuluculuk, geleneksel mahkeme sürecinden farklı olarak,
                taraflar arasında anlaşmazlık konusunda bir uzlaşma sağlamayı
                hedefler ve çözümü sağlamak için bir arabulucunun yardımına
                başvurur.
              </p>
              <p className="mb-2">
                Arabuluculuk, uyuşmazlığın çözümünde daha hızlı, daha ekonomik
                ve daha az resmi bir yol sunar. Taraflar, arabuluculuk sürecinde
                daha fazla kontrol sahibidir ve sonuç üzerinde karar verme
                yetkisine sahiptir. Arabuluculuk ayrıca taraflar arasındaki
                ilişkilerin daha az zarar görmesini sağlar ve çözüm sürecinin
                daha adil ve sürdürülebilir olmasına yardımcı olur.
              </p>
            </div>
          </div>
        </div>
        <div className="col-10">
          <div className="flat-card">
            <div className="card-body">
              <h1 className="col-sm-12 text-center border-bottom-2 pb-2 mb-2">
                Neden Arabuluculuk?
              </h1>
              <ul className="mb-2 card-list">
                <li>Hızlı ve Verimli Çözüm</li>
                <li>Daha Düşük Maliyetler</li>
                <li>Kontrol Sahibi Olma</li>
                <li>Sürdürülebilir Uzlaşma</li>
                <li>Gizlilik ve Mahremiyet</li>
                <li>İlişkilerin Zarar Görmemesi</li>
                <li>Esneklik</li>
              </ul>
            </div>
          </div>
        </div>
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
