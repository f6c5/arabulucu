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

export const articles = createSlice({
  name: "articles",
  initialState: {
    articles: [
      {
        id: 1,
        title: "beat",
        cover:
          "beatsetting putting fast parts behavior carefully cloud poet worker deer open other shadow fact increase nodded table myself became pile do becoming without because joined fairly fat hand stomach frog breath stopped next children victory whispered strip western light joy drew rabbit wheat largest finest decide dress ",
        content:
          "tiedrove knowledge willing let health blow screen understanding consider tea trouble feet naturally figure teach electric pen later busy produce speed nice drive harbor successfulprepare middle arrange pot copper cow coal matter television lie herself familiar chief trade scale shake track cake drawn like race powerful both pastgot themselves weigh stems see luck large plate chemical tiny green twice truck spent cent would badly sell history reader check orbit seat routemassage lose firm stove poor closely number dig unit feel sound silver ago circus spin dug drink pain language weak water tell flew run bit cap mail leg rays watch jump breathe capital lack give broken gulf indicate enemy why wrapped mind golden eye bring flower brown sight regular soon hunter baby trap mark how seeing silent activity apple earn contrast promised cowboy experience century pan information damage grass general",
        image: "/images/1.png",
        comments: [
          {
            id: 1690223133267,
            author: "kullanıcı 1",
            content: "asasfsaas asfas",
            date: "22.07.2023",
            likes: [],
            comments: [
              {
                id: 169022313326,
                author: "kullanıcı 2",
                content: "asasfsaas asfas",
                date: "21.07.2023",
                likes: [],
                comments: [],
              },
            ],
          },
        ],
      },
      {
        id: 2,
        title: "respect",
        cover:
          "respect noon mood path bare birth mine sugar hearing consist spite moving drop include birthday although swung figure shelf promised roar medicine dish listen beansurface degree bean mistake course should end recognize ship orbit pale serious guard load everybody income four pig onto tube its bear butter",
        content:
          "nose ready band excitement joined graph giant thus fair more forty feel promised spring load book image troops mixture crop negative thin careful sentence compareboy available plate realize clothing understanding active shall middle tin divide as outline sad usual place ride should exciting least bound cold brick",
        image: "/images/2.png",
        comments: [
          {
            id: 1,
            author: "aa",
            content: "asasfsaas asfas",
            date: "21.07.2023",
            likes: [],
            subComments: [],
          },
        ],
      },
      {
        id: 3,
        title: "slave",
        cover:
          "slave chamber respect chemical variety well paragraph including mail sick gave solar mouse anything noon cat stranger label rush figure mine vessels began play",
        content:
          "crowd eaten nor sure are dress special upper political ride frequently went join rhyme known donkey grown west dawn ball habit essential advice game",
        image: "/images/5.png",
        comments: [],
      },
      {
        id: 4,
        title: "hope",
        cover:
          "hope principal store paragraph structure try safe afternoon later flag pine air drive story pie within frame thick rear smaller shout plural street smallest",
        content:
          "entirely attack kind slide pet diameter fine see adjective parallel free studied wooden labor given what blow almost add water balloon power his book",
        image: "/images/4.png",
        comments: [],
      },
    ],
  },
  reducers: {
    addComment: (state, action) => {
      const { articleId, comment } = action.payload;
      const article = state.articles.find(
        (article) => article.id === articleId
      );

      if (article) {
        article.comments.push(comment);
      }
    },
    replyComment: (state, action) => {
      const { articleId, commentId, reply } = action.payload;
      const article = state.articles.find(
        (article) => article.id === articleId
      );

      if (article) {
        const findComment = (comments) => {
          for (const comment of comments) {
            if (comment.id === commentId) {
              comment.comments.push(reply);
              return true;
            } else if (comment.comments.length > 0) {
              const found = findComment(comment.comments);
              if (found) return true;
            }
          }
          return false;
        };

        findComment(article.comments);
      }
    },
  },
});

export const { addComment, replyComment } = articles.actions;
