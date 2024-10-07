const products = [
  {
    id: 1,
    category: "Наушники",
    series: "Компьютерные",
    model: "Marshall Major IV",
    photo:
      "https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/3b9e1c30712ace87dfcafccd682e29a4/b3caa95705c1e92f6d442deb5531405a7d7268817e53ad9f8e757c3b9f5f3d33.jpg.webp",
    infoProduct:
      "Marshall Major IV станет отличным выбором для любителей музыки. Оснащенное мягкими амбушюрами и регулируемым оголовьем устройство отличается высоким уровнем комфортности.",
    prices: ["11 999", "12 999"],
  },
  {
    id: 2,
    category: "Наушники",
    series: "Компьютерные",
    model: "Fifine H6",
    photo:
      "https://c.dns-shop.ru/thumb/st1/fit/wm/0/0/c058d1833b1c54fe1efa79c1058615d0/c724926e6e617e2502d3ede74e43f56a85d62c46284f52f5de4987f01571ca9a.jpg.webp",
    infoProduct:
      " Fifine H6 ‒ игровое устройство с охватывающими мягкими амбушюрами. Мягкие чашки плотно прилегают к ушным каналам, не шатаются.",
    prices: ["4 999", "5 999"],
  },
  {
    id: 3,
    category: "Наушники",
    series: "Компьютерные",
    model: "ARDOR GAMING Edge",
    photo:
      "https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/c2198fca7f70ed92d8e79eba6b42cf5e/bab38bee1b0f98a9639b1f9a763e968faf18a347758d8fd93eec74fe709a5c67.jpg.webp",
    infoProduct:
      "ARDOR GAMING Edge черного цвета подходит для прослушивания музыки, просмотра фильмов или игр. Модель обеспечивает качественную передачу чистого и естественного звука, передавая высокие и низкие частоты.",
    prices: ["2 999", "3 999"],
  },
  {
    id: 4,
    category: "Наушники",
    series: "Компьютерные",
    model: "ARDOR GAMING Vault",
    photo:
      "https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/e99a12fbef73da6318cd8ebfd38d4bff/f78f4f33e6e8296cb00011bfc0c4d15d60fcb21cedd5c5320baf9ee5e4b92fb5.jpg.webp",
    infoProduct:
      "ARDOR GAMING Vault 7.1 поддерживает звучание формата Virtual, что делает ее незаменимой для геймеров. Устройство воспроизводит стереозвук в диапазоне 20-20000 Гц.",
    prices: ["4 999", "5 999"],
  },
  {
    id: 5,
    category: "Наушники",
    series: "Компьютерные",
    model: "ARDOR GAMING Edge",
    photo:
      "https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/5d089946320219f5e4e32639770150d1/1dbd38542e2c493afa60e483a2c159efcc3fc4c70ae8d29b0a5e3afdb2a7595b.jpg.webp",
    infoProduct:
      "ARDOR GAMING Edge охватывающего типа передают объемный и чистый звук. Технология 7.1 Virtual позволяет полностью погрузиться в услышанное и воспроизводит оригинальные треки без искажений. Мембранные излучатели диаметром 50 мм улавливают даже мельчайшие.",
    prices: ["2 099", "4 999"],
  },
  {
    id: 6,
    category: "Консоль",
    series: "Игровая",
    model: "PlayStation 4 Slim",
    photo:
      "https://c.dns-shop.ru/thumb/st1/fit/wm/0/0/cae5009abe47a135f0e825dc38807eb1/1ed878c6e20a07d7b49f52304c19e89aaee67c6ed235d150ba3c68a0213abcb6.jpg.webp",
    infoProduct:
      "PlayStation 4 Slim представлена в стильном черном корпусе с дисководом и поддержкой FullHD. Мощный ЦП с ОЗУ 8 ГБ GDDR5 гарантирует быструю загрузку, а HDD-диск на 500 ГБ – удобное сохранение любимых игр. ",
    prices: ["20 000", "35 000"],
  },
  {
    id: 7,
    category: "Консоль",
    series: "Игровая",
    model: "PlayStation 5 Slim Digital Edition",
    photo:
      "https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/f6421f9b8f146c1d0c196871e3ae5a43/83b9ea37c4d9f31e4e9d90ed95b9c1f5ee9c597d876f83d495523197cf55105f.jpg.webp",
    infoProduct:
      "Благодаря тонкому дизайну PS5 игроки получают мощные игровые технологии, заключенные в элегантную и компактную консоль. Ваши любимые игры всегда готовы и ждут, пока вы начнете играть, благодаря встроенному твердотельному накопителю емкостью 1 ТБ. ",
    prices: ["30 000", "45 000"],
  },
  {
    id: 8,
    category: "Видеокарта",
    series: "Игровая",
    model: "MSI GeForce RTX 4090 GAMING X TRIO",
    photo:
      "https://c.dns-shop.ru/thumb/st4/fit/0/0/a1d1062f654e6e6edb789887dff42dcb/f6b5acd8ec7527f8a8883890c67da56f03d4eb794260f74b274c658938600d83.png.webp",
    infoProduct:
      "Видеокарта MSI GeForce RTX 4090 GAMING X TRIO – стильное, мощное и технологичное решение для геймерских ПК. Архитектура NVIDIA Ada Lovelace обеспечивает высокую производительность, скорость, плавность, графические возможности с ИИ для игр и творчества.",
    prices: ["100 000", "305 000"],
  },
  {
    id: 9,
    category: "Видеокарта",
    series: "Игровая",
    model: "PowerColor AMD Radeon RX 6800 Fighter",
    photo:
      "https://c.dns-shop.ru/thumb/st1/fit/wm/0/0/a1428c72762f8b5b1490d22a1e24794c/516cb759a8902d2c490316d8fa2b4d975c5e95121325422cbaa0b667f4dcebb5.jpg.webp",
    infoProduct:
      "PowerColor AMD Radeon RX 6800 Fighter [AXRX 6800 16GBD6-3DH/OC] отличается высокой производительностью и благодаря своим возможностям может стать отличным выбором для игровых и рабочих станций.",
    prices: ["50 000", "105 000"],
  },
  {
    id: 10,
    category: "Видеокарта",
    series: "Игровая",
    model: "GIGABYTE GeForce RTX 4080 SUPER GAMING OC",
    photo:
      "https://c.dns-shop.ru/thumb/st4/fit/0/0/38270f721fdd528ff6084bffcc917f18/d417d2281d1dc18b5489f69029bc0c83afa94f6600af79b99642f7c3c14b3664.png.webp",
    infoProduct:
      "GIGABYTE GeForce RTX 4080 SUPER GAMING OC [GV-N408SGAMING OC-16GD] используется при комплектации мощных игровых компьютеров. Модель оснащена графическим процессором GeForce RTX 4080 SUPER на базе микроархитектуры NVIDIA Ada Lovelace.",
    prices: ["100 000", "210 000"],
  },
  {
    id: 11,
    category: "Консоль",
    series: "Игровая",
    model: "PlayStation 4 Slim",
    photo:
      "https://c.dns-shop.ru/thumb/st1/fit/wm/0/0/c44a6656693cc3e8807a52c08d0f4c9c/a3858eb656aa9771a838507dcd19f3fa699e69ec29ad5567eeff95fd3bde84b5.jpg.webp",
    infoProduct:
      "PlayStation 4 Slim представлена в стильном черном корпусе с дисководом и поддержкой FullHD. Мощный ЦП с ОЗУ 8 ГБ GDDR5 гарантирует быструю загрузку, а HDD-диск на 500 ГБ – удобное сохранение любимых игр. ",
    prices: ["20 000", "35 000"],
  },
  {
    id: 12,
    category: "Консоль",
    series: "Игровая",
    model: "PlayStation 5 Slim Digital Edition",
    photo:
      "https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/cf3e2c3b3141004b88e90c11c1dd9c92/6337c46d499a5a6d696fef42228533208d35c43a8401cc2b5acc8eadc930963f.jpg.webp",
    infoProduct:
      "Благодаря тонкому дизайну PS5 игроки получают мощные игровые технологии, заключенные в элегантную и компактную консоль. Ваши любимые игры всегда готовы и ждут, пока вы начнете играть, благодаря встроенному твердотельному накопителю емкостью 1 ТБ. ",
    prices: ["30 000", "45 000"],
  },
  {
    id: 13,
    category: "Видеокарта",
    series: "Игровая",
    model: "MSI GeForce RTX 4090 GAMING X TRIO",
    photo:
      "https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/f5963efb571961e48cf540bcbab23e3d/dc5eee9847a6b9270607e2e7903432d7cbda01a5774f24c7eb05dc2e0991b4cc.jpg.webp",
    infoProduct:
      "Видеокарта MSI GeForce RTX 4090 GAMING X TRIO – стильное, мощное и технологичное решение для геймерских ПК. Архитектура NVIDIA Ada Lovelace обеспечивает высокую производительность, скорость, плавность, графические возможности с ИИ для игр и творчества.",
    prices: ["100 000", "305 000"],
  },
  {
    id: 14,
    category: "Видеокарта",
    series: "Игровая",
    model: "PowerColor AMD Radeon RX 6800 Fighter",
    photo:
      "https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/dc21a1819108300fee3b5da71ccb3cfd/162a29b29e972bcad31ffd37b4132b675daf3165345bb33c08a87d124b388fce.jpg.webp",
    infoProduct:
      "PowerColor AMD Radeon RX 6800 Fighter [AXRX 6800 16GBD6-3DH/OC] отличается высокой производительностью и благодаря своим возможностям может стать отличным выбором для игровых и рабочих станций.",
    prices: ["50 000", "105 000"],
  },
  {
    id: 15,
    category: "Видеокарта",
    series: "Игровая",
    model: "GIGABYTE GeForce RTX 4080 SUPER GAMING OC",
    photo:
      "https://c.dns-shop.ru/thumb/st1/fit/wm/0/0/0ddded395fc16949ff1a9b003fb7d4c1/805dd2e28a4e236d4ad022e9de7247e9a736663b2ba258ddefb65490c7930c95.jpg.webp",
    infoProduct:
      "GIGABYTE GeForce RTX 4080 SUPER GAMING OC [GV-N408SGAMING OC-16GD] используется при комплектации мощных игровых компьютеров. Модель оснащена графическим процессором GeForce RTX 4080 SUPER на базе микроархитектуры NVIDIA Ada Lovelace.",
    prices: ["100 000", "210 000"],
  },
  {
    id: 16,
    category: "Наушники",
    series: "Компьютерные",
    model: "Marshall Major IV",
    photo:
      "https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/72ff43a0ba25565dc03867b26ef52755/e6db8ad5ec0e21ac1441764187889c8b6e69911d8432bbdaf988abdda2757596.jpg.webp",
    infoProduct:
      "Marshall Major IV станет отличным выбором для любителей музыки. Оснащенное мягкими амбушюрами и регулируемым оголовьем устройство отличается высоким уровнем комфортности.",
    prices: ["11 999", "12 999"],
  },
  {
    id: 17,
    category: "Наушники",
    series: "Компьютерные",
    model: "Fifine H6",
    photo:
      "https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/6c23f1573260c69c025e6a6d343207c5/13e3cff20dbacfef25c048a57aa0705c19cc66b2891bf6a1283d7b204af9c51b.jpg.webp",
    infoProduct:
      " Fifine H6 ‒ игровое устройство с охватывающими мягкими амбушюрами. Мягкие чашки плотно прилегают к ушным каналам, не шатаются.",
    prices: ["4 999", "5 999"],
  },
  {
    id: 18,
    category: "Наушники",
    series: "Компьютерные",
    model: "ARDOR GAMING Edge",
    photo:
      "https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/c2198fca7f70ed92d8e79eba6b42cf5e/bab38bee1b0f98a9639b1f9a763e968faf18a347758d8fd93eec74fe709a5c67.jpg.webp",
    infoProduct:
      "ARDOR GAMING Edge черного цвета подходит для прослушивания музыки, просмотра фильмов или игр. Модель обеспечивает качественную передачу чистого и естественного звука, передавая высокие и низкие частоты.",
    prices: ["2 999", "3 999"],
  },
  {
    id: 19,
    category: "Наушники",
    series: "Компьютерные",
    model: "ARDOR GAMING Edge",
    photo:
      "https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/647a32c75ff500d4fb540600b45be362/a46fa4c5677f765dc798f3150bc2455e6545532893c9c5535e85584f6810c273.jpg.webp",
    infoProduct:
      "ARDOR GAMING Edge черного цвета подходит для прослушивания музыки, просмотра фильмов или игр. Модель обеспечивает качественную передачу чистого и естественного звука, передавая высокие и низкие частоты.",
    prices: ["2 999", "3 999"],
  },
  {
    id: 20,
    category: "Наушники",
    series: "Компьютерные",
    model: "ARDOR GAMING Edge",
    photo:
      "https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/6c23f1573260c69c025e6a6d343207c5/13e3cff20dbacfef25c048a57aa0705c19cc66b2891bf6a1283d7b204af9c51b.jpg.webp",
    infoProduct:
      "ARDOR GAMING Edge черного цвета подходит для прослушивания музыки, просмотра фильмов или игр. Модель обеспечивает качественную передачу чистого и естественного звука, передавая высокие и низкие частоты.",
    prices: ["2 999", "3 999"],
  },
  {
    id: 21,
    category: "Наушники",
    series: "Компьютерные",
    model: "ARDOR GAMING Edge",
    photo:
      "https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/6c23f1573260c69c025e6a6d343207c5/13e3cff20dbacfef25c048a57aa0705c19cc66b2891bf6a1283d7b204af9c51b.jpg.webp",
    infoProduct:
      "ARDOR GAMING Edge черного цвета подходит для прослушивания музыки, просмотра фильмов или игр. Модель обеспечивает качественную передачу чистого и естественного звука, передавая высокие и низкие частоты.",
    prices: ["2 999", "3 999"],
  },
  {
    id: 22,
    category: "Наушники",
    series: "Компьютерные",
    model: "ARDOR GAMING Edge",
    photo:
      "https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/c2198fca7f70ed92d8e79eba6b42cf5e/bab38bee1b0f98a9639b1f9a763e968faf18a347758d8fd93eec74fe709a5c67.jpg.webp",
    infoProduct:
      "ARDOR GAMING Edge черного цвета подходит для прослушивания музыки, просмотра фильмов или игр. Модель обеспечивает качественную передачу чистого и естественного звука, передавая высокие и низкие частоты.",
    prices: ["2 999", "3 999"],
  },
  {
    id: 23,
    category: "Наушники",
    series: "Компьютерные",
    model: "ARDOR GAMING Edge",
    photo:
      "https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/647a32c75ff500d4fb540600b45be362/a46fa4c5677f765dc798f3150bc2455e6545532893c9c5535e85584f6810c273.jpg.webp",
    infoProduct:
      "ARDOR GAMING Edge черного цвета подходит для прослушивания музыки, просмотра фильмов или игр. Модель обеспечивает качественную передачу чистого и естественного звука, передавая высокие и низкие частоты.",
    prices: ["2 999", "3 999"],
  },
  {
    id: 24,
    category: "Наушники",
    series: "Компьютерные",
    model: "ARDOR GAMING Edge",
    photo:
      "https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/6c23f1573260c69c025e6a6d343207c5/13e3cff20dbacfef25c048a57aa0705c19cc66b2891bf6a1283d7b204af9c51b.jpg.webp",
    infoProduct:
      "ARDOR GAMING Edge черного цвета подходит для прослушивания музыки, просмотра фильмов или игр. Модель обеспечивает качественную передачу чистого и естественного звука, передавая высокие и низкие частоты.",
    prices: ["2 999", "3 999"],
  },
  {
    id: 25,
    category: "Наушники",
    series: "Компьютерные",
    model: "ARDOR GAMING Edge",
    photo:
      "https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/6c23f1573260c69c025e6a6d343207c5/13e3cff20dbacfef25c048a57aa0705c19cc66b2891bf6a1283d7b204af9c51b.jpg.webp",
    infoProduct:
      "ARDOR GAMING Edge черного цвета подходит для прослушивания музыки, просмотра фильмов или игр. Модель обеспечивает качественную передачу чистого и естественного звука, передавая высокие и низкие частоты.",
    prices: ["2 999", "3 999"],
  },
  {
    id: 26,
    category: "Наушники",
    series: "Компьютерные",
    model: "ARDOR GAMING Edge",
    photo:
      "https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/6c23f1573260c69c025e6a6d343207c5/13e3cff20dbacfef25c048a57aa0705c19cc66b2891bf6a1283d7b204af9c51b.jpg.webp",
    infoProduct:
      "ARDOR GAMING Edge черного цвета подходит для прослушивания музыки, просмотра фильмов или игр. Модель обеспечивает качественную передачу чистого и естественного звука, передавая высокие и низкие частоты.",
    prices: ["2 999", "3 999"],
  },
  {
    id: 27,
    category: "Наушники",
    series: "Компьютерные",
    model: "ARDOR GAMING Edge",
    photo:
      "https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/c2198fca7f70ed92d8e79eba6b42cf5e/bab38bee1b0f98a9639b1f9a763e968faf18a347758d8fd93eec74fe709a5c67.jpg.webp",
    infoProduct:
      "ARDOR GAMING Edge черного цвета подходит для прослушивания музыки, просмотра фильмов или игр. Модель обеспечивает качественную передачу чистого и естественного звука, передавая высокие и низкие частоты.",
    prices: ["2 999", "3 999"],
  },
  {
    id: 28,
    category: "Наушники",
    series: "Компьютерные",
    model: "ARDOR GAMING Edge",
    photo:
      "https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/647a32c75ff500d4fb540600b45be362/a46fa4c5677f765dc798f3150bc2455e6545532893c9c5535e85584f6810c273.jpg.webp",
    infoProduct:
      "ARDOR GAMING Edge черного цвета подходит для прослушивания музыки, просмотра фильмов или игр. Модель обеспечивает качественную передачу чистого и естественного звука, передавая высокие и низкие частоты.",
    prices: ["2 999", "3 999"],
  },
  {
    id: 29,
    category: "Наушники",
    series: "Компьютерные",
    model: "ARDOR GAMING Edge",
    photo:
      "https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/6c23f1573260c69c025e6a6d343207c5/13e3cff20dbacfef25c048a57aa0705c19cc66b2891bf6a1283d7b204af9c51b.jpg.webp",
    infoProduct:
      "ARDOR GAMING Edge черного цвета подходит для прослушивания музыки, просмотра фильмов или игр. Модель обеспечивает качественную передачу чистого и естественного звука, передавая высокие и низкие частоты.",
    prices: ["2 999", "3 999"],
  },
  {
    id: 30,
    category: "Наушники",
    series: "Компьютерные",
    model: "ARDOR GAMING Edge",
    photo:
      "https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/6c23f1573260c69c025e6a6d343207c5/13e3cff20dbacfef25c048a57aa0705c19cc66b2891bf6a1283d7b204af9c51b.jpg.webp",
    infoProduct:
      "ARDOR GAMING Edge черного цвета подходит для прослушивания музыки, просмотра фильмов или игр. Модель обеспечивает качественную передачу чистого и естественного звука, передавая высокие и низкие частоты.",
    prices: ["2 999", "3 999"],
  },
  {
    id: 31,
    category: "Наушники",
    series: "Компьютерные",
    model: "ARDOR GAMING Edge",
    photo:
      "https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/6c23f1573260c69c025e6a6d343207c5/13e3cff20dbacfef25c048a57aa0705c19cc66b2891bf6a1283d7b204af9c51b.jpg.webp",
    infoProduct:
      "ARDOR GAMING Edge черного цвета подходит для прослушивания музыки, просмотра фильмов или игр. Модель обеспечивает качественную передачу чистого и естественного звука, передавая высокие и низкие частоты.",
    prices: ["2 999", "3 999"],
  },
  {
    id: 32,
    category: "Наушники",
    series: "Компьютерные",
    model: "ARDOR GAMING Edge",
    photo:
      "https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/c2198fca7f70ed92d8e79eba6b42cf5e/bab38bee1b0f98a9639b1f9a763e968faf18a347758d8fd93eec74fe709a5c67.jpg.webp",
    infoProduct:
      "ARDOR GAMING Edge черного цвета подходит для прослушивания музыки, просмотра фильмов или игр. Модель обеспечивает качественную передачу чистого и естественного звука, передавая высокие и низкие частоты.",
    prices: ["2 999", "3 999"],
  },
  {
    id: 33,
    category: "Наушники",
    series: "Компьютерные",
    model: "ARDOR GAMING Edge",
    photo:
      "https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/647a32c75ff500d4fb540600b45be362/a46fa4c5677f765dc798f3150bc2455e6545532893c9c5535e85584f6810c273.jpg.webp",
    infoProduct:
      "ARDOR GAMING Edge черного цвета подходит для прослушивания музыки, просмотра фильмов или игр. Модель обеспечивает качественную передачу чистого и естественного звука, передавая высокие и низкие частоты.",
    prices: ["2 999", "3 999"],
  },
  {
    id: 34,
    category: "Наушники",
    series: "Компьютерные",
    model: "ARDOR GAMING Edge",
    photo:
      "https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/6c23f1573260c69c025e6a6d343207c5/13e3cff20dbacfef25c048a57aa0705c19cc66b2891bf6a1283d7b204af9c51b.jpg.webp",
    infoProduct:
      "ARDOR GAMING Edge черного цвета подходит для прослушивания музыки, просмотра фильмов или игр. Модель обеспечивает качественную передачу чистого и естественного звука, передавая высокие и низкие частоты.",
    prices: ["2 999", "3 999"],
  },
];
export default products;
