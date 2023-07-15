import { createSlice } from "@reduxjs/toolkit";

export const theme = createSlice({
  name: "theme",
  initialState: {
    theme: "light",
  },
  reducers: {
    changeTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const { changeTheme } = theme.actions;

export const carouselItems = createSlice({
  name: "carouselItems",
  initialState: {
    carouselItems: [
      {
        id: 0,
        title: "item",
        image: "/images/1.png",
      },
      {
        id: 1,
        title: "item",
        image: "/images/2.png",
      },
      {
        id: 2,
        title: "item",
        image: "/images/3.png",
      },
      {
        id: 3,
        title: "item",
        image: "/images/4.png",
      },
    ],
  },
  reducers: {},
});

export const {} = carouselItems.actions;

export const mediators = createSlice({
  name: "mediators",
  initialState: {
    mediators: [
      {
        id: 1,
        image: "/images/p1.png",
        name: "Abbie Wright",
        email: "ivokozpu@anih.ar",
        tel: "+90 123 456 7890",
        about:
          "origin mirror building escape more sheep while man single symbol share stood married compare duty south underline swept",
        tasks: [
          { id: 1, title: "görev 1" },
          { id: 2, title: "görev 2" },
          { id: 3, title: "görev 3" },
        ],
      },
      {
        id: 2,
        image: "/images/p2.png",
        name: "Verna Riley",
        email: "ikuge@olkimzoh.lv",
        tel: "+90 123 456 7890",
        about:
          "difficult hurried caught push magnet bush eat worth north history cup field were safety thou raw ago thus additional",
        tasks: [
          { id: 1, title: "görev 1" },
          { id: 2, title: "görev 2" },
        ],
      },
      {
        id: 3,
        image: "/images/p3.png",
        name: "Brian Hansen",
        email: "sofzu@irouzvu.aw",
        tel: "+90 123 456 7890",
        about:
          "knife last collect physical stuck press college orange became mountain fallen leaf sun strike throat military declared we dirty",
        tasks: [
          { id: 1, title: "görev 1" },
          { id: 2, title: "görev 2" },
          { id: 3, title: "görev 3" },
          { id: 4, title: "görev 4" },
          { id: 5, title: "görev 5" },
          { id: 6, title: "görev 6" },
        ],
      },
      {
        id: 4,
        image: "/images/p4.png",
        name: "Madge Gonzales",
        email: "idija@itoitoiwi.pg",
        tel: "+90 123 456 7890",
        about:
          "affect army compound little wait grass whose play voice ground breathe giant dog belong effort basic longer leave adult",
        tasks: [
          { id: 1, title: "görev 1" },
          { id: 2, title: "görev 2" },
          { id: 3, title: "görev 3" },
        ],
      },
      {
        id: 5,
        image: "/images/p5.png",
        name: "Alfred Moreno",
        email: "gupewu@geas.tl",
        tel: "+90 123 456 7890",
        about:
          "obtain flower egg itself food sold surrounded except most slept steel party which student suddenly bone mouth pony president end",
        tasks: [
          { id: 1, title: "görev 1" },
          { id: 2, title: "görev 2" },
          { id: 3, title: "görev 3" },
          { id: 4, title: "görev 4" },
        ],
      },
      {
        id: 6,
        image: "/images/p6.png",
        name: "Clayton Hunt",
        email: "gotiwo@zemohfa.to",
        tel: "+90 123 456 7890",
        about:
          "shorter product especially noise molecular blow develop fat snow do summer its coffee shown metal spent people exciting applied",
        tasks: [
          { id: 1, title: "görev 1" },
          { id: 2, title: "görev 2" },
        ],
      },
    ],
  },
  reducers: {},
});

export const {} = mediators.actions;

export const flatCardItems = createSlice({
  name: "flatCardItems",
  initialState: {
    flatCardItems: [
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
    ],
  },
  reducers: {},
});

export const {} = flatCardItems.actions;
