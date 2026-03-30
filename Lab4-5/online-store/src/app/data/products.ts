import { Product } from '../models/product.model';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Apple iPhone 17 Pro Max 256GB',
    description: `A premium smartphone with a sleek design, powerful performance, 
    advanced camera system, and a vibrant display built for smooth everyday use.`,
    price: 915000,
    rating: 4.9,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p24/p88/64170090.png?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-max-256gb-nanosim-esim-oranzhevyi-145468241/?c=750000000',
    likes: 0,
    categoryId: 1
  },
  {
    id: 2,
    name: 'Samsung Galaxy Z Fold7 5G 16 GB/1024 GB Black',
    description: `A futuristic foldable smartphone with a large flexible display, 
    multitasking capabilities, and a premium design that transforms from phone to tablet.`,
    price: 1249399,
    rating: 4.9,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p0d/p68/53123936.png?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-z-fold7-5g-16-gb-1024-gb-chernyi-142551396/?c=750000000',
    likes: 0,
    categoryId: 1
  },
  {
    id: 3,
    name: 'Xiaomi Redmi Note 13 Pro 4G 8 GB/256 GB Black',
    description: 'Large storage, high-resolution camera, and fast performance.',
    price: 367987,
    rating: 4.9,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hf5/h4a/85226913562654.png?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-13-pro-4g-8-gb-256-gb-chernyi-116797050/?c=750000000',
    likes: 0,
    categoryId: 1,
  },
  {
    id: 4,
    name: 'Apple iPhone 16 Plus 128Gb NanoSIM+eSIM Black',
    description: `A 6.7-inch smartphone featuring the A18 chip, a 48MP dual camera system, 
    and a dedicated Camera Control button in black.`,
    price: 649980,
    rating: 4.9,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hc2/h85/87295476957214.png?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/apple-iphone-16-plus-128gb-nanosim-esim-chernyi-123744028/?c=750000000',
    likes: 0,
    categoryId: 1
  },
  {
    id: 5,
    name: 'Apple iPhone 14 Pro 128Gb NanoSIM+eSIM',
    description: `A 6.1-inch smartphone featuring a 48MP triple camera system, the A16 Bionic chip, 
    a 120Hz ProMotion Always-On display, and support for both physical Nano-SIM and eSIM.`,
    price: 550000,
    rating: 4.9,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h70/h13/64434418745374.jpg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/apple-iphone-14-pro-128gb-nanosim-esim-fioletovyi-106363283/?c=750000000',
    likes: 0,
    categoryId: 1
  },
  {
    id: 6,
    name: 'Apple MacBook Air 13 2020 13.3"',
    description: `A thin and lightweight laptop with smooth performance, fast SSD storage, 
    and a high-quality display, perfect for work, study, and everyday use.`,
    price: 467887,
    rating: 5,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h06/h08/64213171568670.jpg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2020-13-3-8-gb-ssd-256-gb-macos-mgn63ru-a-101182724/?c=750000000',
    likes: 0,
    categoryId: 2
  },
  {
    id: 7,
    name: 'Lenovo IdeaPad Slim 3 15IAN8 15.6"',
    description: 'Affordable laptop for study and office tasks.',
    price: 299500,
    rating: 5,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/pb9/pd6/14230494.png?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/lenovo-ideapad-slim-3-15-6-8-gb-ssd-256-gb-bez-os-15amn8-82xq00g6rk-117420031/',
    likes: 0,
    categoryId: 2
  },
  {
    id: 8,
    name: 'ASUS Vivobook X1504VA-BQ2277 15.6"',
    description: 'A 15.6-inch laptop with an Intel Core i5-1335U processor, 16GB of RAM, and 512GB of storage.',
    price: 309887,
    rating: 5,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/pb7/p89/36774337.JPG?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/asus-vivobook-x1504va-bq2277-15-6-16-gb-ssd-512-gb-bez-os-90nb10j2-m02ux0-138132986/?c=750000000',
    likes: 0,
    categoryId: 2
  },
  {
    id: 9,
    name: 'Lenovo LOQ 15ARP9 15.6"',
    description: `An AI-optimized 15.6-inch laptop pairing AMD Ryzen power with NVIDIA RTX 40 series
     graphics for high-performance gaming and productivity.`,
    price: 479929,
    rating: 4.9,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/pf0/p2f/92060775.jpg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/lenovo-loq-15arp9-15-6-16-gb-ssd-512-gb-bez-os-83jc00lbrk-153728088/?c=750000000',
    likes: 0,
    categoryId: 2
  },
  {
    id: 10,
    name: 'ASUS TUF Gaming F16 16"',
    description: `A 16-inch gaming laptop with an Intel Core i7-13650HX, NVIDIA RTX 40 series 
    graphics, and a 165Hz screen.`,
    price: 490406,
    rating: 4.9,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/pa8/p57/52352626.jpg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/asus-vivobook-15-x1504va-bq1223-15-6-16-gb-ssd-1000-gb-bez-os-90nb10j1-m01fz0-123277227/',
    likes: 0,
    categoryId: 2
  },
  {
    id: 11,
    name: 'Marshall Minor IV white',
    description: `Wireless earbuds with a stylish design, clear balanced sound, and a comfortable 
    fit, ideal for music, calls, and everyday listening.`,
    price: 88563,
    rating: 5,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p6c/pd0/32593189.png?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/naushniki-marshall-minor-iv-belyi-137016166/?c=750000000',
    likes: 0,
    categoryId: 3
  },
  {
    id: 12,
    name: 'Apple AirPods Pro 3 white',
    description: `Premium wireless earbuds with active noise cancellation, rich sound quality, 
    and a comfortable fit for immersive listening and clear calls.`,
    price: 124067,
    rating: 4.9,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p89/pc5/64466278.png?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-pro-3-belyi-145554533/?c=750000000',
    likes: 0,
    categoryId: 3
  },
  {
    id: 13,
    name: 'Apple AirPods 4 white',
    description: `Wireless earbuds with a compact design, clear sound quality, 
    and seamless connectivity for everyday music, calls, and on-the-go use.`,
    price: 64693,
    rating: 4.9,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hcb/h97/87309386809374.png?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-4-belyi-124333372/?c=750000000',
    likes: 0,
    categoryId: 3
  },
  {
    id: 14,
    name: 'Apple AirPods Max 2 Purple',
    description: 'Premium over-ear headphones with immersive sound.',
    price: 288260,
    rating: 5,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p18/p38/3402331.jpeg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-max-2-fioletovyi-128589567/?c=750000000',
    likes: 0,
    categoryId: 3
  },
  {
    id: 15,
    name: 'Apple AirPods 3',
    description: 'Popular Apple earbuds with transparency and ANC modes.',
    price: 60532,
    rating: 4.9,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h5f/hf4/86136582942750.jpg',
    link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-3-belyi-102667744/?c=750000000',
    likes: 0,
    categoryId: 3
  },
  {
    id: 16,
    name: 'Apple iPad Pro 11 2022 Wi-Fi 11 inch 8 Gb/512 Gb Silver',
    description: 'An 11-inch silver tablet featuring the M2 chip, 8GB of RAM, and 512GB of storage.',
    price: 705124,
    rating: 4.9,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h71/h24/64885885927454.jpg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/apple-ipad-pro-11-2022-wi-fi-11-djuim-8-gb-512-gb-serebristyi-107272982/?c=750000000',
    likes: 0,
    categoryId: 4
  },
  {
    id: 17,
    name: 'Apple iPad 10.9 2022 Wi-Fi 10.9 inch 4 GB/256 GB Blue',
    description: 'A 10.9-inch tablet featuring the A14 Bionic chip, 4GB of RAM, and 256GB of storage.',
    price: 257478,
    rating: 5,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h3e/h61/64871572537374.jpg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/apple-ipad-10-9-2022-wi-fi-10-9-djuim-4-gb-256-gb-sinii-107269779/?c=750000000',
    likes: 0,
    categoryId: 4
  },
  {
    id: 18,
    name: 'Xiaomi Redmi Pad 2 4G 11 inch 8 GB/256 GB Green',
    description: 'A 11-inch tablet featuring the Snapdragon 680 processor, 8GB of RAM, and 256GB of storage.',
    price: 129990,
    rating: 5,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/pa0/pb1/81440010.jpg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/xiaomi-redmi-pad-2-4g-11-djuim-8-gb-256-gb-zelenyi-140640475/?c=750000000',
    likes: 0,
    categoryId: 4
  },
  {
    id: 19,
    name: 'Samsung Galaxy Tab A9 LTE 8.7 inch 8 Gb/128 Gb Gray',
    description: 'An 8.7-inch tablet featuring the Helio G99 processor, 8GB of RAM, and 128GB of storage.',
    price: 200000,
    rating: 4.9,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/ha0/hec/84176916578334.jpg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-a9-lte-8-7-djuim-8-gb-128-gb-seryi-113807362/?c=750000000',
    likes: 0,
    categoryId: 4
  },
  {
    id: 20,
    name: 'Blackview Pad 50 Kids 10.1 inch 2 Gb/64 Gb Light blue',
    description: 'A 10.1-inch kids\' tablet featuring a quad-core processor, 2GB of RAM, and 64GB of storage.',
    price: 44990,
    rating: 4.7,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h42/h48/85949296967710.png?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/blackview-pad-50-kids-10-1-djuim-2-gb-64-gb-goluboi-119121051/?c=750000000',
    likes: 0,
    categoryId: 4
  }
];