import Card from "@/components/Card";
import React from "react";

const mediators = [];

const About = () => {
  return (
    <div className="pt-8 d-flex jc-center flex-wrap">
      <div className="col-sm-12 col-lg-8">
        <h1 className="text-center mt-6 border-bottom-2 pb-2 mb-2">
          Misyonumuz
        </h1>
        <p>
          Arabulucu sitesi olarak, müşterilerimize çeşitli anlaşmazlıkların
          çözümünde etkili ve tarafsız bir platform sunmayı amaçlıyoruz.
          Misyonumuz, adil, hızlı ve uzlaştırıcı bir süreç sağlamak, taraflar
          arasında sürdürülebilir çözümler bulmak ve uzun süreli memnuniyeti
          sağlamaktır.
        </p>
        <h1 className="text-center mt-6 border-bottom-2 pb-2 mb-2">
          Vizyonumuz
        </h1>
        <p>
          Vizyonumuz, arabuluculuğun ve alternatif uyuşmazlık çözümünün
          yaygınlaşmasına katkıda bulunmaktır. İnsanların, hukuki süreçlerden
          önce arabuluculuk yoluyla anlaşmazlıklarını çözmelerini teşvik ederek
          toplumsal bir fark yaratmayı hedefliyoruz. Vizyonumuz, arabuluculuğu
          daha erişilebilir, etkili ve tercih edilen bir çözüm yöntemi haline
          getirmektir.
        </p>
        <h1 className="text-center mt-6 border-bottom-2 pb-2 mb-2">
          İşbirliği ve İletişim
        </h1>
        <p>
          İşbirliği ve iletişim, başarılı bir arabuluculuk sürecinin temel
          taşlarıdır. Müşterilerimizle yakın işbirliği içinde çalışıyor, onların
          ihtiyaçlarını anlamaya yönelik bir iletişim kuruyoruz. Taraflar
          arasındaki diyalogu destekleyerek, etkili bir çözüm yoluna ulaşmayı
          hedefliyoruz.
        </p>
        <h1 className="text-center mt-6 border-bottom-2 pb-2 mb-2">
          İhtiyaçlara Uygun Çözümler
        </h1>
        <p>
          Anlaşmazlıkların çeşitliliği ve karmaşıklığı farklı çözümler
          gerektirebilir. Bizler, müşterilerimizin ihtiyaçlarına özel çözümler
          sunarak, her durumda en uygun arabuluculuk sürecini sağlamayı
          amaçlıyoruz. Esneklik ve kişiselleştirme ilkesine dayanarak, taraflara
          en iyi sonuçları sunmayı hedefliyoruz.
        </p>
      </div>
      <div className="col-sm-12 col-lg-10">
        <h1 className="text-center mt-8 border-bottom-2 pb-2 mb-2">
          Arabulucularımız
        </h1>
        <div className="card-container"></div>
      </div>
    </div>
  );
};

export default About;
