/* =========================================================================
    PROFIL LOKAL — data & logika render
    File ini berdiri sendiri, terpisah dari js/ WebGIS utama (map.js, ui.js,
    dst.) sehingga tidak menyentuh fungsi peta sama sekali.

    DATA DUMMY: ganti isi array umkmProfiles / budayaProfiles di bawah ini
    dengan hasil wawancara sebenarnya. Struktur field (id, nama, kategori/
    jenis, foto, ringkasan, lengkap) sengaja dibuat generik agar tinggal
    diisi ulang tanpa perlu mengubah kode render maupun modal.

    BILINGUAL: field kategori/jenis/ringkasan/lengkap berupa objek
    { id: '...', en: '...' } supaya bisa ditampilkan sesuai bahasa aktif.
    Field "nama" (nama diri usaha/objek) sengaja TIDAK diterjemahkan.
========================================================================= */

const umkmProfiles = [
    {
        id: 'umkm-1',

        nama: 'Nasi Langgi Mbak Nuk',

        kategoriKey: 'kuliner',

        kategori: {
            id: 'Kuliner',
            en: 'Culinary'
        },

        foto: 'https://placehold.co/400x260/35003e/ffecd1?text=Nasi+Langgi+Mbak+Nuk',

        ringkasan: {
            id: 'Usaha kuliner keluarga Bu Ami dan suaminya yang berdiri sejak 2016, menyediakan nasi langgi dengan berbagai pilihan lauk yang terjangkau dan mengenyangkan, serta menjadi salah satu pilihan kuliner yang diminati mahasiswa dan masyarakat di Yogyakarta.',

            en: 'A family-owned culinary business run by Mrs. Ami and her husband since 2016, offering langgi rice with various affordable and filling side dishes. It has become a popular culinary choice among college students and people across Yogyakarta.'
        },

        lengkap: {
            id: `PROFIL

Nasi Langgi Mbak Nuk adalah usaha kuliner milik keluarga Bu Ami dan suaminya berupa warung nasi langgi yang menyediakan nasi langgi dengan berbagai pilihan lauk pauk. Usaha ini ditujukan bagi orang-orang yang tidak memiliki waktu untuk memasak di rumah, seperti mahasiswa atau orang-orang yang baru pulang kerja.

Berdiri sejak 2016, Nasi Langgi Mbak Nuk menjadi pilihan terutama bagi mahasiswa yang menginginkan makanan yang murah dan mengenyangkan. Usaha ini juga menjadi pilihan menarik bagi pendatang di Yogyakarta yang belum pernah mencoba nasi langgi.

Saat ini, Nasi Langgi Mbak Nuk sudah cukup dikenal dan diminati banyak orang. Sejumlah konten kreator di media sosial, seperti TikTok, telah datang dan mencoba nasi langginya. Hal tersebut membuat pelanggan datang dari berbagai wilayah Kota Yogyakarta, tidak hanya dari kalangan mahasiswa. Kini, Nasi Langgi Mbak Nuk semakin ramai dengan pembeli yang tertarik dengan nasi langginya.


SEJARAH USAHA

Nasi Langgi Mbak Nuk pada awalnya tidak dirintis dengan menjual nasi langgi, melainkan chicken wings dengan saus pedas.

Bu Ami dan suaminya mencoba memulai usaha kuliner dengan menjual produk yang sedang mengikuti tren, seperti chicken wings yang dibaluri saus pedas. Pada awalnya, produk tersebut berhasil menarik beberapa pembeli. Namun, minat pembeli terhadap produk tersebut kemudian menurun.

Bu Ami dan suaminya lalu memikirkan produk kuliner lain yang dapat dijual. Mereka mendapat inspirasi ketika melihat warung pecel lele yang selalu ramai pembeli. Dari situ, Bu Ami berpikir untuk menjual makanan pokok yang mengenyangkan dan murah agar dapat menarik lebih banyak pembeli.

Dengan menambahkan elemen yang unik agar produk mereka menjadi salah satu pilihan kuliner di Yogyakarta, Bu Ami akhirnya memutuskan untuk menjadikan nasi langgi sebagai produk utama. Dari situlah Nasi Langgi Mbak Nuk terlahir dan terus berkembang hingga saat ini.


ASAL NAMA

Nama "Nasi Langgi Mbak Nuk" diambil dari nama kakak suami Bu Ami yang sering membantu memasak produk jualan mereka ketika usaha masih dirintis.

Bu Ami dan suaminya menggunakan nama "Mbak Nuk" sebagai bentuk penghargaan atas bantuan dan jasanya dalam membantu mereka ketika masih membangun usaha.


INFORMASI USAHA

Status UMKM:
Lancar dan ramai peminat serta pembeli.

Target Pasar:
Mahasiswa.

Produk Utama:
Nasi langgi dengan berbagai pilihan lauk pauk.

Produk Sampingan:
Tidak ada.

Modal Awal:
Modal awal berasal dari dana pribadi.


BRANDING

Nasi Langgi Mbak Nuk menawarkan nasi dengan berbagai pilihan lauk yang dapat dipilih sesuai dengan selera pelanggan. Produk ini memiliki karakter sebagai makanan yang murah dan mengenyangkan serta dapat dinikmati oleh semua orang.


STRATEGI PEMASARAN

Tidak terdapat strategi pemasaran khusus.

Namun, keberadaan konten kreator di media sosial yang datang dan mencoba Nasi Langgi Mbak Nuk membantu membuat nama usaha semakin dikenal dan menjangkau lebih banyak pembeli.


PELANGGAN

Nasi Langgi Mbak Nuk memiliki pelanggan tetap. Namun, beberapa pelanggan tetap sudah tidak lagi berlangganan karena antrean yang panjang akibat tingginya jumlah pembeli dan keterbatasan sumber daya manusia.


HUBUNGAN DENGAN PELANGGAN

Hubungan dengan pelanggan tergolong baik. Bu Ami masih berhubungan dengan beberapa pelanggan tetap. Hubungan tersebut terkadang juga dilakukan melalui kegiatan saling bertukar produk jualan.


TANTANGAN DAN KELUH-KESAH

• Mencari pembeli ketika masih dalam tahap merintis usaha.

• Mengatur pelaksanaan usaha pada masa awal.

• Kekurangan sumber daya manusia untuk menangani jumlah pembeli yang sangat banyak.

• Kesulitan mengurus sertifikat halal.

• Antrean panjang yang terkadang menumpuk.


SOLUSI

Masalah antrean sudah cukup teratasi dengan menerapkan sistem nomor antrean berdasarkan saran dari pembeli.

Sebelum sistem nomor antrean diterapkan, pembeli terkadang menyerobot antrean sehingga dapat menimbulkan pertikaian antar pembeli.


FOKUS KE DEPAN

• Mencari tempat untuk berjualan sendiri, seperti ruko, karena saat ini masih menggunakan gerobak dan berjualan di pinggir jalan.

• Mencari fasilitas yang lebih baik agar pembeli dapat merasa lebih nyaman ketika memesan dan menikmati nasi langgi.


HARAPAN DAN DOA

• Nasi Langgi Mbak Nuk terus berkembang dan menjadi lebih besar.

• Nasi Langgi Mbak Nuk dapat membuka cabang baru.`,

            en: `PROFILE

Nasi Langgi Mbak Nuk is a family-owned culinary business run by Mrs. Ami and her husband. It operates as a food stall serving langgi rice with a variety of side dishes. The business caters to people who do not have enough time to cook at home, such as college students and people returning from work.

Established in 2016, Nasi Langgi Mbak Nuk has become a popular choice, particularly among college students looking for an affordable and filling meal. It is also an interesting option for newcomers to Yogyakarta who have never tried langgi rice before.

Today, Nasi Langgi Mbak Nuk is fairly well-known and attracts many customers. Several social media content creators, including TikTok creators, have visited and tried its langgi rice. This has helped attract customers from various parts of Yogyakarta, not only college students. The business is now increasingly busy with customers interested in its langgi rice.


BUSINESS HISTORY

Nasi Langgi Mbak Nuk did not originally start as a business selling langgi rice. Mrs. Ami and her husband initially tried selling chicken wings with spicy sauce.

They began their culinary business by offering trendy food products, such as chicken wings coated in spicy sauce. At first, the product attracted several customers. However, customer interest gradually declined.

Mrs. Ami and her husband then considered selling a different culinary product. They were inspired by a pecel lele food stall that consistently attracted many customers. From this, Mrs. Ami thought that selling an affordable and filling staple food could attract more customers.

Looking for a unique element that could make their product stand out among culinary options in Yogyakarta, Mrs. Ami decided to make langgi rice their main product. This marked the beginning of Nasi Langgi Mbak Nuk, which has continued to develop into the business it is today.


NAME ORIGIN

The name "Nasi Langgi Mbak Nuk" was taken from the name of Mrs. Ami's husband's older sister, who often helped prepare the food when the business was still being established.

Mrs. Ami and her husband chose the name "Mbak Nuk" as a form of appreciation for her help and contribution during the early stages of their business.


BUSINESS INFORMATION

Business Status:
The business is running well and has many interested customers and buyers.

Target Market:
College students.

Main Product:
Langgi rice with various side dishes.

Side Products:
None.

Initial Capital:
The initial capital came from personal funds.


BRANDING

Nasi Langgi Mbak Nuk offers rice with various side dishes that customers can choose according to their preferences. The business is characterized by affordable and filling meals that can be enjoyed by everyone.


MARKETING STRATEGY

There is no specific marketing strategy.

However, social media content creators who visit and try Nasi Langgi Mbak Nuk have helped make the business more widely known and reach more customers.


CUSTOMERS

Nasi Langgi Mbak Nuk has regular customers. However, some regular customers no longer visit regularly because of long queues caused by the high number of customers and limited human resources.


CUSTOMER RELATIONSHIP

The relationship with customers is good. Mrs. Ami remains in contact with some regular customers. They sometimes maintain this relationship by exchanging products with one another.


CHALLENGES AND CONCERNS

• Attracting customers during the early stages of the business.

• Managing the business during its early development.

• Limited human resources to handle the very large number of customers.

• Difficulty obtaining halal certification.

• Long and sometimes overcrowded queues.


SOLUTION

The queue problem has been fairly well addressed by implementing a queue-number system based on suggestions from customers.

Before the queue-number system was implemented, customers sometimes cut the line, which could lead to conflicts between customers.


FUTURE FOCUS

• Finding an independent place to operate, such as a shop house, as the business currently uses a food cart and operates on the roadside.

• Improving the facilities so that customers can have a more comfortable experience when ordering and enjoying langgi rice.


HOPES AND ASPIRATIONS

• Nasi Langgi Mbak Nuk continues to grow and become a larger business.

• Nasi Langgi Mbak Nuk can open new branches.`
        }
    },
    {
        id: 'umkm-2',

        nama: 'Omah Ijo Jogja',

        kategoriKey: 'barang-jasa',

        kategori: {
            id: 'Barang & Jasa',
            en: 'Goods & Services'
        },

        foto: 'https://placehold.co/400x260/560065/ffecd1?text=Omah+Ijo+Jogja',

        ringkasan: {
            id: 'Toko hewan peliharaan milik Pak Harjono yang menyediakan hewan-hewan eksotis, dengan fokus utama pada reptil yang dapat dipelihara sebagai hewan peliharaan di rumah.',

            en: 'A pet shop owned by Mr. Harjono that provides exotic animals, with a primary focus on reptiles that can be kept as household pets.'
        },

        lengkap: {
            id: `PROFIL

Omah Ijo Jogja adalah usaha toko hewan peliharaan milik Pak Harjono yang menyediakan hewan-hewan peliharaan eksotis, dengan fokus utama pada hewan reptil. Usaha ini ditujukan bagi pecinta reptil maupun orang-orang yang tertarik untuk mencoba memelihara hewan eksotis sebagai hewan peliharaan.

Hewan yang tersedia di Omah Ijo Jogja merupakan hewan reptil yang dapat dipelihara sebagai hewan peliharaan di rumah. Oleh karena itu, Omah Ijo Jogja menjadi salah satu pilihan bagi orang-orang yang tertarik memiliki dan memelihara reptil.


SEJARAH USAHA

Omah Ijo Jogja berawal dari pengalaman Pak Harjono yang sebelumnya pernah terlibat dalam penjualan hewan-hewan eksotis di Jakarta. Karena ingin melanjutkan usaha di bidang penjualan hewan eksotis, Pak Harjono kemudian membuka usahanya sendiri.

Pada awal menjalankan usaha, Pak Harjono juga mencoba menjual ikan sebagai hewan peliharaan. Namun, hasil penjualan ikan kurang baik karena peminatnya masih sedikit. Setelah itu, Pak Harjono memutuskan untuk memfokuskan Omah Ijo Jogja pada penjualan hewan-hewan eksotis, khususnya reptil.


INFORMASI USAHA

Status UMKM:
Lancar dan cukup untuk memenuhi kebutuhan sehari-hari, tetapi masih mengalami kesulitan untuk berkembang.

Target Pasar:
Mahasiswa dan orang-orang yang memiliki minat terhadap hewan reptil.

Produk Utama:
Hewan-hewan eksotis, khususnya reptil.

Produk Sampingan:
Tidak ada.

Modal Awal:
Modal awal berasal dari dana pribadi.


BRANDING

Saat ini belum terdapat branding khusus. Identitas usaha masih berfokus sebagai toko hewan peliharaan yang menjual hewan-hewan eksotis, khususnya reptil.


STRATEGI PEMASARAN

Pemasaran Omah Ijo Jogja dilakukan melalui beberapa cara:

• Memanfaatkan Facebook dan Instagram untuk memperkenalkan usaha.

• Membangun relasi dengan pembeli dan orang-orang yang memiliki minat terhadap reptil.

• Mengandalkan rekomendasi dari pembeli dan peminat kepada teman maupun relasi mereka melalui komunikasi dari mulut ke mulut (word of mouth).


PELANGGAN

Omah Ijo Jogja memiliki pelanggan tetap. Hal tersebut berkaitan dengan karakter usaha yang banyak bergantung pada relasi dengan pembeli dan orang-orang yang memiliki minat terhadap hewan reptil.


HUBUNGAN DENGAN PELANGGAN

Hubungan dengan pelanggan tergolong baik. Relasi dengan pembeli dan peminat menjadi salah satu bagian penting dalam keberlangsungan usaha Omah Ijo Jogja.


TANTANGAN DAN KELUH-KESAH

• Mencari hewan-hewan eksotis yang dapat diternakkan dan dijual pada masa awal usaha.

• Laba yang diperoleh cukup untuk memenuhi kebutuhan sehari-hari, tetapi belum cukup untuk mengembangkan usaha.

• Risiko usaha cukup tinggi karena Omah Ijo Jogja masih merupakan UMKM berskala kecil dan belum memiliki jaminan atau safety net yang memadai. Kondisi tersebut membuat usaha belum berani melakukan investasi atau kerja sama dalam skala yang dapat mendukung pengembangan usaha.

• Kematian hewan reptil dapat memberikan dampak yang cukup besar terhadap kondisi usaha.

• Menghadapi persaingan dengan usaha lain yang memiliki modal lebih besar.


FOKUS KE DEPAN

Omah Ijo Jogja ingin lebih berfokus pada kegiatan penangkaran atau pembiakan hewan-hewan reptil agar ketersediaan hewan yang dapat dijual menjadi lebih stabil.


HARAPAN DAN DOA

Omah Ijo Jogja berharap dapat memperoleh kemudahan dalam mengurus perizinan dan legalitas yang diperlukan untuk menjalankan usaha toko hewan peliharaan eksotis.
`,

            en: `PROFILE

Omah Ijo Jogja is a pet shop owned by Mr. Harjono that provides exotic animals, with a primary focus on reptiles. The business is intended for reptile enthusiasts as well as people who are interested in keeping exotic animals as pets.

The animals available at Omah Ijo Jogja are reptiles that can be kept as household pets. The shop therefore serves as an option for people who are interested in owning and caring for reptiles.


BUSINESS HISTORY

Omah Ijo Jogja began with Mr. Harjono's previous experience in selling exotic animals in Jakarta. Wanting to continue working in the exotic pet business, Mr. Harjono eventually established his own business.

When he first started the business, Mr. Harjono also tried selling fish as pets. However, sales were limited because there was not much demand for pet fish. He then decided to focus Omah Ijo Jogja on selling exotic animals, particularly reptiles.


BUSINESS INFORMATION

Business Status:
The business is running steadily and generates enough income to meet everyday needs, but it is still difficult for the business to grow.

Target Market:
College students and people interested in keeping reptiles as pets.

Main Product:
Exotic animals, particularly reptiles.

Side Products:
None.

Initial Capital:
The initial capital came from personal funds.


BRANDING

There is currently no specific branding strategy. The business is primarily positioned as a pet shop specializing in exotic animals, particularly reptiles.


MARKETING STRATEGY

Omah Ijo Jogja uses several approaches to reach customers:

• Using Facebook and Instagram to introduce the business.

• Building relationships with buyers and people interested in reptiles.

• Relying on recommendations from buyers and enthusiasts to their friends and personal networks through word-of-mouth.


CUSTOMERS

Omah Ijo Jogja has regular customers. This is closely related to the nature of the business, which relies significantly on relationships with buyers and people who are interested in reptiles.


CUSTOMER RELATIONSHIP

The relationship with customers is good. Maintaining relationships with buyers and enthusiasts is an important part of sustaining the Omah Ijo Jogja business.


CHALLENGES AND CONCERNS

• Finding exotic animals to breed and sell during the early stages of the business.

• The profit is sufficient to cover everyday living expenses but is not yet enough to support business development.

• The business faces relatively high risks because Omah Ijo Jogja is still a small-scale business without an adequate financial safety net. This makes the business hesitant to invest or enter into partnerships that could support further development.

• The death of a reptile can have a significant impact on the condition of the business.

• Competing with businesses that have greater financial resources.


FUTURE FOCUS

Omah Ijo Jogja plans to focus more on breeding reptiles so that the availability of animals for sale can become more stable.


HOPES AND ASPIRATIONS

Omah Ijo Jogja hopes to have greater ease in obtaining the permits and legal documentation required to operate an exotic pet shop.
`
        }
    },
    {
        id: 'umkm-3',

        nama: 'Dapur Mami Mbul',

        kategoriKey: 'kuliner',

        kategori: {
            id: 'Kuliner',
            en: 'Culinary'
        },

        foto: 'https://placehold.co/400x260/78290f/ffecd1?text=Dapur+Mami+Mbul',

        ringkasan: {
            id: 'Warung makan milik Bu Teresita yang berdiri sejak 2025, menyediakan masakan rumahan seperti bakmoy dan ayam laos dengan suasana yang dipenuhi tanaman hijau dan berbagai aksesoris kesukaan pemilik.',

            en: 'A local eatery owned by Mrs. Teresita, established in 2025, serving home-style dishes such as bakmoy and ayam laos in a colorful setting filled with ornamental plants and the owner’s favorite decorations.'
        },

        lengkap: {
            id: `PROFIL

Dapur Mami Mbul adalah usaha kuliner milik Bu Teresita berupa warung makan yang menyediakan masakan rumahan dan minuman. Usaha ini berdiri sejak tahun 2025 dan menawarkan masakan rumah sederhana seperti bakmoy dan ayam laos sebagai hidangan utama, serta berbagai minuman sederhana.

Sayuran yang dihidangkan di Dapur Mami Mbul juga menggunakan hasil petikan tanaman sayur yang ditanam sendiri oleh Bu Teresita. Warung makan ini dipenuhi berbagai tanaman hijau dan aksesoris unik yang merupakan hal-hal kesukaan Bu Teresita. Hal tersebut menciptakan suasana yang penuh warna dan pemandangan yang menarik.

Dapur Mami Mbul menjadi pilihan bagi orang-orang yang ingin mendapatkan pengalaman kuliner sederhana dengan hidangan rumahan serta suasana dan pemandangan yang penuh warna.


SEJARAH USAHA

Dapur Mami Mbul berawal dari keinginan Bu Teresita agar banyak orang berkunjung ke rumahnya. Dari keinginan tersebut, keluarga Bu Teresita kemudian memutuskan untuk membuka warung makan yang sekaligus dapat menjadi sumber penghasilan sampingan.

Warung makan tersebut menyediakan hidangan sederhana yang dapat dimasak dengan mudah oleh Bu Teresita. Oleh karena itu, menu Dapur Mami Mbul dibentuk berdasarkan makanan dan minuman yang menjadi kesukaan keluarga Bu Teresita.

Seiring berjalannya usaha, Dapur Mami Mbul menjadi tempat bagi Bu Teresita untuk bertemu dan berkenalan dengan banyak orang, mengobrol, serta saling bertukar cerita. Hingga saat ini, Dapur Mami Mbul masih ramai dikunjungi.


INFORMASI USAHA

Status UMKM:
Lancar dan ramai pengunjung.

Target Pasar:
Tidak memiliki target pasar khusus; melayani warga sekitar.

Produk Utama:
Bakmoy dan ayam laos.

Produk Sampingan:
Berbagai minuman sederhana.

Modal Awal:
Modal awal berasal dari dana pribadi.


BRANDING

Dapur Mami Mbul merupakan warung makan sederhana yang menyediakan makanan dan minuman kesukaan keluarga Bu Teresita. Warung juga diisi dengan berbagai hal yang menjadi kesukaan keluarga Bu Teresita, termasuk tanaman hijau dan berbagai aksesoris.


STRATEGI PEMASARAN

Promosi Dapur Mami Mbul dilakukan melalui media sosial dan penyebaran informasi dari orang lain.

• Instagram digunakan untuk membagikan kegiatan yang dilakukan di Dapur Mami Mbul. Bu Teresita terkadang membuat postingan di Instagram.

• TikTok juga digunakan, meskipun pengelolaannya belum terlalu aktif.

• Konten kreator dan orang-orang yang datang turut membantu menyebarkan informasi mengenai Dapur Mami Mbul melalui media sosial.


PELANGGAN

Dapur Mami Mbul memiliki pelanggan tetap.


HUBUNGAN DENGAN PELANGGAN

Hubungan dengan pelanggan tergolong baik.


TANTANGAN DAN KELUH-KESAH

• Menjaga kedisiplinan dalam menjalankan UMKM, terutama pada masa awal usaha.


FOKUS KE DEPAN

• Mempertahankan keberlangsungan Dapur Mami Mbul.

• Meningkatkan jumlah pengunjung.


HARAPAN DAN DOA

• Jumlah pengunjung Dapur Mami Mbul semakin bertambah.

• Bu Teresita selalu diberikan kesehatan dan keselamatan agar dapat terus membuka dan menjalankan warung makan.
`,

            en: `PROFILE

Dapur Mami Mbul is a culinary business owned by Mrs. Teresita in the form of a local eatery serving home-style meals and drinks. Established in 2025, the eatery offers simple home-cooked dishes such as bakmoy and ayam laos as its main dishes, along with a variety of simple drinks.

The vegetables served at Dapur Mami Mbul are also harvested from vegetables grown by Mrs. Teresita herself. The eatery is decorated with various green plants and unique accessories that reflect Mrs. Teresita’s personal preferences. These elements create a colorful and visually appealing atmosphere.

Dapur Mami Mbul offers a simple culinary experience featuring home-style meals in a colorful and pleasant setting.


BUSINESS HISTORY

Dapur Mami Mbul began with Mrs. Teresita’s desire to have more people visit her home. From this idea, her family decided to open an eatery that could also provide an additional source of income.

The eatery offers simple dishes that Mrs. Teresita can prepare easily. Therefore, the menu at Dapur Mami Mbul is based on the food and drinks enjoyed by Mrs. Teresita and her family.

As the business continued, Dapur Mami Mbul became a place where Mrs. Teresita could meet and get to know many people, chat with them, and share stories. To this day, Dapur Mami Mbul continues to attract many visitors.


BUSINESS INFORMATION

Business Status:
The business is running well and receives many visitors.

Target Market:
There is no specific target market; the business mainly serves local residents.

Main Products:
Bakmoy and ayam laos.

Side Products:
Various simple drinks.

Initial Capital:
The initial capital came from personal funds.


BRANDING

Dapur Mami Mbul is a simple eatery that serves food and drinks enjoyed by Mrs. Teresita and her family. The eatery is also filled with elements that reflect the family’s preferences, including green plants and various decorative accessories.


MARKETING STRATEGY

Dapur Mami Mbul promotes its business through social media and word-of-mouth exposure.

• Instagram is used to share activities at Dapur Mami Mbul. Mrs. Teresita occasionally creates posts about the eatery.

• TikTok is also used, although it is not actively managed.

• Content creators and other visitors also help spread information about Dapur Mami Mbul through social media.


CUSTOMERS

Dapur Mami Mbul has regular customers.


CUSTOMER RELATIONSHIP

The relationship with customers is good.


CHALLENGES AND CONCERNS

• Maintaining discipline in running the business, particularly during the early stages of the UMKM.


FUTURE FOCUS

• Maintaining the continuity of Dapur Mami Mbul.

• Increasing the number of visitors.


HOPES AND ASPIRATIONS

• The number of visitors to Dapur Mami Mbul continues to increase.

• Mrs. Teresita remains healthy and safe so that she can continue operating the eatery.
`
        }
    },
    {
        id: 'umkm-4',

        nama: 'Pak Agung Service Arloji & Clock',

        kategoriKey: 'barang-jasa',

        kategori: {
            id: 'Barang & Jasa',
            en: 'Goods & Services'
        },

        foto: 'https://placehold.co/400x260/b3491f/ffecd1?text=Pak+Agung+Service+Arloji+%26+Clock',

        ringkasan: {
            id: 'Usaha jasa servis jam milik Pak Agung yang berlokasi di Pasar Pingit dan telah berdiri sejak 2012, melayani perbaikan berbagai jenis jam serta menyediakan jasa servis alat elektronik sebagai layanan tambahan.',

            en: 'A watch and clock repair service owned by Mr. Agung, located in Pasar Pingit and established in 2012. The business repairs various types of clocks and watches and also provides electronic device repair as an additional service.'
        },

        lengkap: {
            id: `PROFIL

PAK AGUNG “Service Arloji & Clock” adalah usaha milik Pak Agung yang berlokasi di Pasar Pingit. Usaha ini menyediakan jasa memperbaiki berbagai jenis jam, seperti jam dinding dan jam tangan.

PAK AGUNG “Service Arloji & Clock” telah berdiri sejak tahun 2012 dan terus menyediakan jasa servis jam dengan mengutamakan kepuasan pelanggan. Selain jasa perbaikan jam, Pak Agung juga menyediakan jasa memperbaiki alat-alat elektronik sebagai layanan tambahan.

Jasa Pak Agung cocok bagi orang-orang yang membutuhkan perbaikan jam maupun orang-orang yang menggunakan jam tangan sebagai aksesori.


SEJARAH USAHA

Ketertarikan Pak Agung terhadap servis jam berawal ketika beliau masih bersekolah di STM. Pada masa tersebut, jam tangan merupakan salah satu benda yang sedang populer dan banyak digunakan.

Dari ketertarikan tersebut, Pak Agung mulai memiliki hobi mengutak-atik dan memperbaiki jam tangan. Ia kemudian belajar dari orang-orang yang juga memiliki usaha servis jam, termasuk mempelajari cara melakukan servis, peralatan yang dibutuhkan, dan berbagai hal terkait jasa perbaikan jam.

Setelah memperoleh pengalaman dan pengetahuan tersebut, Pak Agung akhirnya mendirikan usaha servis jamnya sendiri pada tahun 2012.


INFORMASI USAHA

Status UMKM:
Lancar.

Target Pasar:
Orang-orang yang memiliki jam dan membutuhkan jasa perbaikan jam.

Produk Utama:
Jasa servis jam.

Produk Sampingan:
Jasa servis alat elektronik.

Modal Awal:
Modal awal berasal dari dana pribadi.


BRANDING

Tidak terdapat branding khusus. Dalam menjalankan jasanya, Pak Agung lebih mengutamakan kepuasan pelanggan.


STRATEGI PEMASARAN

Strategi pemasaran utama yang digunakan adalah word of mouth atau rekomendasi dari pelanggan.

Strategi ini dilakukan karena Pak Agung mengutamakan kepuasan pelanggan dalam memberikan jasanya. Hubungan yang baik dengan pelanggan membantu usaha dikenal melalui rekomendasi dari satu pelanggan kepada orang lain.


PELANGGAN

Pak Agung memiliki pelanggan tetap. Hal tersebut berkaitan dengan karakter usaha jasa servis yang berjalan melalui relasi dengan pembeli dan peminat.


HUBUNGAN DENGAN PELANGGAN

Hubungan dengan pelanggan tergolong sangat baik. Relasi dengan pembeli dan peminat menjadi salah satu bagian penting dalam keberlangsungan usaha jasa servis Pak Agung.


TANTANGAN DAN KELUH-KESAH

• Harus terus berkembang dan beradaptasi dengan perkembangan zaman.


FOKUS KE DEPAN

• Mempertahankan keberlangsungan usaha.

• Memikirkan cara agar usaha dapat terus berkembang dan beradaptasi dengan perkembangan zaman.


HARAPAN DAN DOA

• Semoga seluruh pemilik UMKM di mana pun selalu diberikan kesehatan, keselamatan, dan rezeki yang melimpah.
`,

            en: `PROFILE

PAK AGUNG “Service Arloji & Clock” is a business owned by Mr. Agung and located in Pasar Pingit. The business provides repair services for various types of clocks and watches, including wall clocks and wristwatches.

Established in 2012, PAK AGUNG “Service Arloji & Clock” continues to provide clock and watch repair services with a strong focus on customer satisfaction. In addition to clock and watch repairs, Mr. Agung also provides electronic device repair as an additional service.

The service is suitable for people who need to repair their clocks or watches, as well as those who wear wristwatches as accessories.


BUSINESS HISTORY

Mr. Agung's interest in clock and watch repair began when he was attending a vocational high school (STM). At that time, wristwatches were popular and widely used among his generation.

This interest led Mr. Agung to develop a hobby of tinkering with and repairing watches. He then learned from people who also provided clock and watch repair services, including how to perform repairs, the equipment required, and other aspects of running a repair service.

After gaining the necessary knowledge and experience, Mr. Agung eventually established his own clock and watch repair business in 2012.


BUSINESS INFORMATION

Business Status:
Running well.

Target Market:
People who own clocks or watches and need repair services.

Main Product:
Clock and watch repair services.

Side Product:
Electronic device repair services.

Initial Capital:
The initial capital came from personal funds.


BRANDING

There is no specific branding strategy. In providing his services, Mr. Agung focuses primarily on customer satisfaction.


MARKETING STRATEGY

The main marketing strategy is word of mouth, or recommendations from customers.

This approach is based on Mr. Agung's emphasis on customer satisfaction. Good relationships with customers help the business reach new customers through personal recommendations.


CUSTOMERS

Mr. Agung has regular customers. This is related to the nature of the repair business, which relies on relationships with customers and people interested in his services.


CUSTOMER RELATIONSHIP

The relationship with customers is very good. Maintaining relationships with customers and people interested in his services is an important part of sustaining the business.


CHALLENGES AND CONCERNS

• Continuously developing and adapting to changes over time.


FUTURE FOCUS

• Maintaining the continuity of the business.

• Finding ways for the business to continue developing and adapting to changes over time.


HOPES AND ASPIRATIONS

• Hoping that all UMKM owners everywhere will always be blessed with good health, safety, and abundant prosperity.
`
        }
    },
    {
        id: 'umkm-5',

        nama: 'Bakmi Jawa Pak Rin Pasar Pingit',

        kategoriKey: 'kuliner',

        kategori: {
            id: 'Kuliner',
            en: 'Culinary'
        },

        foto: 'https://placehold.co/400x260/008ba0/ffecd1?text=Bakmi+Jawa+Pak+Rin+Pasar+Pingit',

        ringkasan: {
            id: 'Warung makan Bakmi Jawa milik Pak Rin yang telah berjualan sejak 1983 di Pasar Pingit dan kini telah berkembang hingga membuka cabang baru di Kaliurang.',

            en: 'A Javanese noodle eatery owned by Mr. Rin that has been operating since 1983 in Pasar Pingit and has now expanded by opening a new branch in Kaliurang.'
        },

        lengkap: {
            id: `PROFIL

Bakmi Jawa Pak Rin Pasar Pingit adalah usaha kuliner milik Pak Rin yang berupa warung makan Bakmi Jawa dan berlokasi di Pasar Pingit. Sejak tahun 1983, Pak Rin memfokuskan usahanya untuk menyediakan hidangan Bakmi Jawa dan memenuhi kebutuhan pelanggan yang menyukai hidangan tersebut.

Setelah berjualan selama bertahun-tahun, Bakmi Jawa Pak Rin telah dikenal secara turun-temurun dan membentuk pasar tersendiri bagi para peminat dan pecinta Bakmi Jawa Pak Rin. Saat ini, Bakmi Jawa Pak Rin juga telah membuka cabang baru di Kaliurang.

Bakmi Jawa Pak Rin cocok bagi orang-orang yang menyukai Bakmi Jawa atau hidangan mi, terutama bagi orang yang datang ke Yogyakarta dan ingin mencoba hidangan kuliner sederhana khas Yogyakarta.


SEJARAH USAHA

Bakmi Jawa Pak Rin bermula dari kegemaran Pak Rin dalam memasak. Dari kegemarannya tersebut, Pak Rin pernah mengikuti seseorang untuk berjualan Bakmi Jawa dan mempelajari pengalaman berjualan makanan tersebut.

Setelah mendapatkan pengalaman, Pak Rin memutuskan untuk membuka usaha Bakmi Jawanya sendiri. Pada awalnya, Pak Rin berjualan secara keliling menggunakan gerobak.

Pak Rin terus berjualan sejak tahun 1983 dan mengembangkan usahanya hingga menjadi Bakmi Jawa Pak Rin yang saat ini dikenal dan berlokasi di Pasar Pingit.


INFORMASI USAHA

Status UMKM:
Pasang surut sejak tahun 2026 akibat kenaikan harga dan kondisi ekonomi, sehingga belum dapat menetapkan target omzet.

Target Pasar:
Tidak ada target pasar khusus.

Produk Utama:
Bakmi Jawa.

Produk Sampingan:
Tidak ada.

Modal Awal:
Modal awal berasal dari pinjaman bank.


BRANDING

Bakmi Jawa Pak Rin dikenal sebagai warung makan Bakmi Jawa yang telah berjualan sejak tahun 1983.


STRATEGI PEMASARAN

Tidak terdapat strategi pemasaran khusus.

Karena telah berjualan selama bertahun-tahun, Bakmi Jawa Pak Rin telah membangun pasar tersendiri di kalangan peminat dan pecinta Bakmi Jawa.


PELANGGAN

Bakmi Jawa Pak Rin memiliki pelanggan tetap.


HUBUNGAN DENGAN PELANGGAN

Hubungan dengan pelanggan tergolong baik.


TANTANGAN DAN KELUH-KESAH

• Menghadapi kondisi usaha yang mengalami pasang surut dalam jumlah pengunjung.


FOKUS KE DEPAN

• Membuka cabang baru.

• Mengembangkan usaha menjadi lebih besar dengan membangun sistem franchise.


HARAPAN DAN DOA

• Memperoleh sertifikat UMKM.
`,

            en: `PROFILE

Bakmi Jawa Pak Rin Pasar Pingit is a culinary business owned by Mr. Rin in the form of a Javanese noodle eatery located in Pasar Pingit. Since 1983, Mr. Rin has focused his business on serving Javanese noodles to meet the needs of customers who enjoy this traditional dish.

After operating for many years, Bakmi Jawa Pak Rin has become well known across generations and has developed its own customer base among enthusiasts and regular customers. The business has also expanded by opening a new branch in Kaliurang.

Bakmi Jawa Pak Rin is suitable for people who enjoy Javanese noodles or noodle-based dishes, particularly visitors to Yogyakarta who want to try a simple local culinary dish.


BUSINESS HISTORY

Bakmi Jawa Pak Rin began with Mr. Rin's interest in cooking. Through this interest, Mr. Rin once worked alongside someone who sold Javanese noodles and gained experience in the business.

After gaining this experience, Mr. Rin decided to establish his own Javanese noodle business. In the beginning, he sold the noodles by traveling around with a food cart.

Mr. Rin continued selling Javanese noodles from 1983 and gradually developed the business into the Bakmi Jawa Pak Rin that is now known and located in Pasar Pingit.


BUSINESS INFORMATION

Business Status:
The business has experienced ups and downs since 2026 due to rising prices and the country's economic conditions, making it difficult to set an income target.

Target Market:
There is no specific target market.

Main Product:
Javanese noodles (Bakmi Jawa).

Side Products:
None.

Initial Capital:
The initial capital came from a bank loan.


BRANDING

Bakmi Jawa Pak Rin is known as a Javanese noodle eatery that has been operating since 1983.


MARKETING STRATEGY

There is no specific marketing strategy.

Having operated for many years, Bakmi Jawa Pak Rin has established its own customer base among people who are interested in and enjoy Javanese noodles.


CUSTOMERS

Bakmi Jawa Pak Rin has regular customers.


CUSTOMER RELATIONSHIP

The relationship with customers is good.


CHALLENGES AND CONCERNS

• Dealing with fluctuations in customer numbers and business conditions.


FUTURE FOCUS

• Opening a new branch.

• Expanding the business and developing it into a franchise.


HOPES AND ASPIRATIONS

• Obtaining an UMKM certificate.
`
        }
    }
];

const budayaProfiles = [
    {
        id: 'budaya-1',

        nama: 'Situs Pesucen Kampung Badran',

        jenisKey: 'cagar-budaya',

        jenis: {
            id: 'Cagar Budaya',
            en: 'Cultural Heritage Site'
        },

        foto: 'https://placehold.co/400x260/35003e/ffb366?text=Situs+Pesucen+Kampung+Badran',

        ringkasan: {
            id: 'Peninggalan bersejarah di Kampung Badran yang dikenal sebagai tempat tirakat dan doa, serta berkaitan dengan tokoh Badran, Ki Juru Permono.',

            en: 'A historical site in Kampung Badran known as a place for tirakat and prayer, associated with a prominent Badran figure, Ki Juru Permono.'
        },

        lengkap: {
            id: `PROFIL

Pesucen, yang dalam bahasa Jawa berarti tempat suci atau tempat untuk menyucikan diri, merupakan sebuah peninggalan bersejarah warga Badran yang terletak di Kampung Badran, Kelurahan Bumijo, di dekat Balai RT 47/RW 11 Badran dan Sungai Winongo.

Pesucen berbentuk lorong kecil di dalam tanah menyerupai huruf "L" yang dapat dimasuki dengan berjongkok atau duduk. Tempat ini dahulu digunakan oleh warga Badran untuk melakukan tirakat, yaitu praktik spiritual berupa doa, pengendalian diri, berpuasa, atau bertapa untuk mendekatkan diri kepada Tuhan dan memohon sesuatu yang diinginkan.

Pesucen merupakan peninggalan dari tokoh ternama asal Badran, Ki Juru Permono. Ketika masih tinggal di Badran, beliau sering melakukan tirakat di tempat ini. Karena itu, warga Badran kemudian menganggap Pesucen sebagai tempat yang suci dan dihormati.


SEJARAH DAN KI JURU PERMONO

Ki Juru Permono dikenal sebagai tokoh yang bijaksana dan memiliki pengetahuan yang luas. Beliau dikenal sering memberikan nasihat dan membantu menyembuhkan orang yang sakit. Ki Juru Permono juga merupakan Abdi Dalem Keraton yang menjadi penasihat spiritual Keraton.

Sebelum menjadi Abdi Dalem, Ki Juru Permono yang saat itu bernama Ali sering melakukan tirakat di Pesucen. Menurut cerita yang berkembang di masyarakat, setelah menyelesaikan tirakatnya, Ali memperoleh pengetahuan dan kebijaksanaan yang membuatnya menjadi tokoh yang dikenal di Badran. Beliau kemudian diangkat menjadi Abdi Dalem Keraton dan diberi nama Ki Harjo Juru Purnomo.

Setelah tinggal di sekitar Keraton, Pesucen yang sebelumnya merupakan tempat milik Ki Juru Permono kemudian diwariskan kepada warga Badran karena beliau tidak lagi dapat merawatnya secara langsung.


CERITA DAN KEPERCAYAAN MASYARAKAT

Pesucen dikenal melalui cerita yang diwariskan secara turun-temurun di kalangan warga Badran. Warga setempat mempercayai bahwa terdapat dua sosok yang menempati Pesucen, yaitu Mbah Sarip dan Raden Mas Nomer. Nama-nama tersebut berasal dari cerita lisan masyarakat dan penulisannya mungkin tidak akurat.

Kepercayaan tersebut turut membuat warga menghormati Pesucen dan menjaga perilaku ketika berada di sekitar tempat tersebut. Terdapat pula cerita mengenai orang-orang yang mengalami kejadian tidak menyenangkan setelah berperilaku tidak sopan di area Pesucen.


KONDISI DAN PELESTARIAN

Pada masa lalu, warga Badran sesekali merawat Pesucen dan menggunakannya untuk melakukan tirakat atau sekadar berdoa. Namun, seiring berjalannya waktu, Pesucen semakin jarang digunakan dan akhirnya terbengkalai.

Salah satu penyebabnya adalah keberadaan pohon bambu di sekitar Pesucen yang membuat orang yang melakukan tirakat merasa tidak nyaman karena terkena lugut atau serat halus bambu.

Selain itu, ketika hujan, air sering menggenang hingga membanjiri lorong Pesucen. Karena kondisi tersebut, lorong yang dahulu terbuka kemudian ditutup dan diberi atap. Perubahan ini juga berkaitan dengan kepercayaan bahwa praktik spiritual sebaiknya tidak dilakukan di bawah atap.

Pergantian generasi dan semakin sedikitnya warga yang tertarik untuk merawat Pesucen juga menyebabkan peninggalan ini semakin tidak terawat.


CERITA TAMBAHAN — SUNGAI LAKI-LAKI

Menurut cerita yang berkembang, orang-orang yang dahulu melakukan tirakat di Pesucen pernah melihat sosok yang tampak seperti sedang menunggang kuda dengan suara klinting melewati Sungai Winongo.

Masyarakat pada masa itu mengaitkan sosok tersebut dengan Baru Klinting yang dipercaya sedang melewati Sungai Winongo dalam perjalanan menuju Gunung Merapi.

Karena cerita tersebut, Sungai Winongo pada masa lalu pernah mendapat julukan "Sungai Laki-laki".


KETERKENALAN PESUCEN

Pesucen hingga saat ini lebih banyak dikenal oleh masyarakat Badran, terutama generasi yang lebih tua. Banyak masyarakat di luar Badran, termasuk masyarakat di Kota Yogyakarta, yang belum mengetahui keberadaan peninggalan ini.

Cerita mengenai Pesucen sebagian besar bertahan melalui tradisi lisan dan diwariskan dari satu generasi ke generasi berikutnya.


CATATAN PELESTARIAN

Salah satu faktor lain yang menyebabkan Pesucen terbengkalai adalah permasalahan kepemilikan tanah. Menurut informasi yang diperoleh, pihak yang memiliki tanah tempat Pesucen berada tidak menunjukkan perhatian terhadap keberadaan peninggalan tersebut.

Terdapat kemungkinan bahwa pihak Keraton mengetahui keberadaan peninggalan Ki Juru Permono tersebut, tetapi karena tanah Pesucen bukan merupakan tanah milik Keraton, pengelolaannya tidak berada di bawah Keraton.
`,

            en: `PROFILE

Pesucen, which in Javanese means a sacred place or a place for spiritual purification, is a historical site associated with the people of Badran. It is located in Kampung Badran, Kelurahan Bumijo, near Balai RT 47/RW 11 Badran and the Winongo River.

Pesucen takes the form of a small underground tunnel shaped like the letter "L", which can be entered by crouching or sitting. In the past, the site was used by people in Badran to practice tirakat, a spiritual practice involving prayer, self-discipline, fasting, or meditation to become closer to God and seek the fulfillment of one's wishes.

Pesucen is a historical heritage associated with a prominent figure from Badran, Ki Juru Permono. When he still lived in Badran, he frequently practiced tirakat at this site. Because of this connection, the people of Badran came to regard Pesucen as a sacred and respected place.


HISTORY AND KI JURU PERMONO

Ki Juru Permono was known as a wise figure with extensive knowledge. He was known for giving advice and helping people who were ill. He was also an Abdi Dalem Keraton who served as a spiritual advisor to the Yogyakarta Royal Palace.

Before becoming an Abdi Dalem, Ki Juru Permono, who was then known as Ali, frequently practiced tirakat at Pesucen. According to local oral tradition, after completing his tirakat, Ali gained knowledge and wisdom that helped him become a prominent figure in Badran. He was later appointed as an Abdi Dalem Keraton and given the name Ki Harjo Juru Purnomo.

After moving to the area around the Royal Palace, the site that had previously been associated with Ki Juru Permono was passed on to the people of Badran because he was no longer able to maintain it himself.


LOCAL STORIES AND BELIEFS

Pesucen is known through stories passed down from generation to generation among the people of Badran. Local residents believe that two beings reside within Pesucen, known as Mbah Sarip and Raden Mas Nomer. These names come from oral tradition, and their spelling may not be accurate.

These beliefs contributed to the respect shown toward Pesucen and encouraged people to behave appropriately around the site. There are also stories about people experiencing unfortunate incidents after behaving disrespectfully in the area.


CONDITION AND PRESERVATION

In the past, people in Badran occasionally maintained Pesucen and used it for tirakat or simply for prayer. Over time, however, the site was used less frequently and eventually became neglected.

One contributing factor was the presence of bamboo around Pesucen, which made people practicing tirakat uncomfortable because of the fine bamboo fibers.

Another issue occurred during rainy periods, when water often accumulated and flooded the Pesucen tunnel. Because of this, the tunnel, which was originally open, was eventually covered with a roof. This change was also related to the belief that spiritual practices should not be performed under a roof.

Generational changes and the decreasing interest among residents in maintaining Pesucen also contributed to the site's deterioration.


ADDITIONAL FOLKLORE — RIVER OF MEN

According to local stories, people who practiced tirakat at Pesucen in the past sometimes saw a figure that appeared to be riding a horse accompanied by the sound of a klinting, a small Javanese bell, while passing through the Winongo River.

People at the time associated the figure with Baru Klinting, who was believed to be traveling through the Winongo River on his way to Mount Merapi.

Because of this story, the Winongo River was once referred to locally as the "River of Men."


LOCAL RECOGNITION

Pesucen is still primarily known among the people of Badran, particularly the older generation. Many people outside Badran, including residents of Yogyakarta City, remain unaware of the site's existence.

Much of the knowledge about Pesucen continues to be preserved through oral tradition and passed down from one generation to another.


PRESERVATION NOTES

Another factor contributing to the neglect of Pesucen is an issue concerning land ownership. According to the information obtained, the owner of the land where Pesucen is located has shown little interest in the site's existence.

There is a possibility that the Yogyakarta Royal Palace is aware of the historical heritage associated with Ki Juru Permono. However, because the land where Pesucen is located is not owned by the Royal Palace, its management does not fall under the Palace.
`
        }
    },
    {
        id: 'budaya-2',

        nama: 'Rintisan Kelurahan Budaya Bumijo',

        jenisKey: 'sanggar-seni',

        jenis: {
            id: 'Seni & Komunitas Budaya',
            en: 'Arts & Cultural Community'
        },

        foto: 'https://placehold.co/400x260/008195/001524?text=Rintisan+Kelurahan+Budaya+Bumijo',

        ringkasan: {
            id: 'Komunitas yang menaungi berbagai kegiatan dan komunitas seni budaya di Kelurahan Bumijo, dengan aktivitas karawitan, tari, ketoprak, teater, dan kesenian lainnya.',

            en: 'A community that oversees various cultural arts activities and communities in Kelurahan Bumijo, including karawitan, dance, ketoprak, theater, and other traditional arts.'
        },

        lengkap: {
            id: `PROFIL

Rintisan Kelurahan Budaya Bumijo merupakan organisasi atau komunitas yang menaungi berbagai kegiatan, aktivitas, dan komunitas kebudayaan seni di Kelurahan Bumijo.

Kegiatan seni budaya di Kelurahan Bumijo terutama terpusat di Kampung Badran dan Kampung Pingit. Di Badran terdapat Paguyuban Seni Antasena, Sanggar Tari Ning Nong, dan Perkumpulan Ibu-Ibu Hadroh. Sementara itu, di Pingit terdapat Sanggar Tirto Budoyo dan Sanggar Retnoningtyas.

Aktivitas seni yang dilakukan meliputi karawitan, tari, ketoprak, teater, dan pranatacara. Kegiatan seni di Badran memiliki jenis yang lebih beragam, sedangkan sanggar-sanggar di Pingit saat ini lebih berfokus pada karawitan.


KEGIATAN DAN PENGEMBANGAN

Rintisan Kelurahan Budaya Bumijo masih berada dalam tahap pengembangan. Salah satu upayanya adalah mengajak lebih banyak generasi muda untuk terlibat dalam kegiatan kebudayaan.

Pendekatan yang dilakukan adalah memadukan budaya populer dengan budaya klasik dan tradisional, salah satunya melalui aransemen karawitan dengan sentuhan modern.

Ke depan, Rintisan Kelurahan Budaya Bumijo memiliki tujuan untuk membentuk komunitas kesenian yang beranggotakan pemuda Kampung Bumijo serta mengembangkan statusnya menjadi Kelurahan Budaya Bumijo.


PAGUYUBAN SENI ANTASENA

Paguyuban Seni Antasena merupakan salah satu kelompok seni di Kelurahan Bumijo yang aktif dalam berbagai kegiatan kesenian, khususnya di Kampung Badran.

Kegiatannya meliputi karawitan, tari, ketoprak, teater, dan pranatacara. Paguyuban Seni Antasena juga telah mengadakan berbagai pentas seni di Kelurahan Bumijo, Kota Yogyakarta, hingga di luar Kota Yogyakarta.

Paguyuban Seni Antasena berdiri pada tahun 2023 sebagai bentuk aspirasi pemuda Badran untuk membangun wadah kegiatan seni bagi generasi muda. Sebelumnya, para pemuda tersebut mempelajari kesenian seperti karawitan dan tari di Sanggar Omah Cangkem.

Saat ini, Paguyuban Seni Antasena membuka kesempatan bagi pemuda Kelurahan Bumijo, terutama pelajar SMP dan jenjang pendidikan di atasnya, untuk mengikuti kegiatan kesenian.


TRADISI DAN AKTIVITAS BUDAYA LAINNYA

Selain seni pertunjukan, Kelurahan Bumijo juga memiliki berbagai tradisi dan aktivitas budaya lainnya.

Di Kampung Badran terdapat tradisi Merti Mbelik yang berupa upacara membersihkan mata air sebagai bentuk rasa syukur kepada Tuhan. Tradisi ini dinaungi oleh komunitas Banyu Bening Winongo dan dilaksanakan setiap tanggal 1 Suro.

Di Kampung Pingit terdapat tradisi Kirab Apeman Memerti Donotirto. Tradisi ini berupa pembuatan kue apem yang disusun menjadi gunungan kemudian diarak sebagai tradisi tahunan untuk menyambut bulan Ramadan.

Kampung Pingit juga memiliki komunitas Bregada yang sering mengiringi Kirab Apeman Memerti Donotirto.

Selain itu, terdapat Merpati Putih Kolat Bumijo yang merupakan cabang Perguruan Pencak Silat Merpati Putih. Kegiatan ini diikuti oleh pemuda Kelurahan Bumijo dan masyarakat dari berbagai wilayah Yogyakarta.


FASILITAS KEGIATAN

Kegiatan kebudayaan di Kelurahan Bumijo didukung oleh berbagai fasilitas dan perlengkapan.

Kampung Badran memiliki alat musik gamelan dan berbagai pakaian untuk kegiatan seni tari. Kampung Pingit dan Kampung Bumijo juga memiliki alat musik gamelan.

Untuk tempat kegiatan, komunitas kebudayaan umumnya menggunakan balai kampung atau gedung serbaguna karena belum terdapat tempat khusus yang secara khusus diperuntukkan bagi kegiatan kebudayaan.


FOKUS PENGEMBANGAN

• Meningkatkan keterlibatan generasi muda dalam kegiatan seni dan budaya.

• Mengembangkan komunitas kesenian di Kampung Bumijo.

• Memadukan budaya populer dengan budaya klasik dan tradisional.

• Mengembangkan Rintisan Kelurahan Budaya Bumijo menjadi Kelurahan Budaya Bumijo.
`,

            en: `PROFILE

Rintisan Kelurahan Budaya Bumijo is an organization or community that oversees various cultural arts activities and communities in Kelurahan Bumijo.

Cultural arts activities in Kelurahan Bumijo are mainly concentrated in Kampung Badran and Kampung Pingit. Badran is home to Paguyuban Seni Antasena, Sanggar Tari Ning Nong, and Perkumpulan Ibu-Ibu Hadroh. Meanwhile, Pingit has Sanggar Tirto Budoyo and Sanggar Retnoningtyas.

The cultural arts activities include karawitan, dance, ketoprak, theater, and pranatacara. Cultural activities in Badran are more diverse, while the sanggar in Pingit currently focus mainly on karawitan.


ACTIVITIES AND DEVELOPMENT

Rintisan Kelurahan Budaya Bumijo is still in its development stage. One of its efforts is to encourage more young people to participate in cultural activities.

The initiative seeks to combine popular culture with classical and traditional culture, including through modern arrangements of karawitan music.

In the future, Rintisan Kelurahan Budaya Bumijo aims to establish an arts community consisting of young people from Kampung Bumijo and develop its status into Kelurahan Budaya Bumijo.


PAGUYUBAN SENI ANTASENA

Paguyuban Seni Antasena is one of the arts groups in Kelurahan Bumijo that actively participates in various cultural arts activities, particularly in Kampung Badran.

Its activities include karawitan, dance, ketoprak, theater, and pranatacara. Paguyuban Seni Antasena has also held various performances in Kelurahan Bumijo, Yogyakarta City, and areas outside Yogyakarta City.

Paguyuban Seni Antasena was established in 2023 as an initiative by young people in Badran to create an arts community for the younger generation. Before establishing the group, these young people learned cultural arts such as karawitan and dance at Sanggar Omah Cangkem.

The group currently invites young people from Kelurahan Bumijo, particularly middle-school students and those at higher levels of education, to participate in its cultural arts activities.


TRADITIONS AND OTHER CULTURAL ACTIVITIES

In addition to performing arts, Kelurahan Bumijo has various other cultural traditions and activities.

Kampung Badran has the Merti Mbelik tradition, a traditional ceremony involving the cleaning of a water spring as an expression of gratitude to God. The tradition is overseen by the Banyu Bening Winongo community and is held every 1st of Suro.

Kampung Pingit has the Kirab Apeman Memerti Donotirto tradition. The tradition involves making traditional apem cakes, arranging them into a ceremonial mountain, and parading them as an annual tradition to welcome the month of Ramadan.

Kampung Pingit also has a Bregada community that often accompanies the annual Kirab Apeman Memerti Donotirto procession.

In addition, there is Merpati Putih Kolat Bumijo, a branch of the Merpati Putih Pencak Silat school. The group is joined by young people from Kelurahan Bumijo and people from various parts of Yogyakarta.


FACILITIES

Cultural activities in Kelurahan Bumijo are supported by various facilities and equipment.

Kampung Badran has gamelan instruments and various costumes for traditional dance activities. Kampung Pingit and Kampung Bumijo also have gamelan instruments.

For activity venues, cultural communities generally use multipurpose village halls or community buildings because there is currently no dedicated space specifically intended for cultural activities.


DEVELOPMENT FOCUS

• Increasing youth participation in cultural arts activities.

• Developing an arts community in Kampung Bumijo.

• Combining popular culture with classical and traditional culture.

• Developing Rintisan Kelurahan Budaya Bumijo into Kelurahan Budaya Bumijo.
`
        }
    }
    /*{
        id: 'budaya-3',
        nama: 'Ruang Publik Kenanga',
        jenisKey: 'ruang-publik',
        jenis: { id: 'Ruang Publik', en: 'Public Space' },
        foto: 'https://placehold.co/400x260/e0b97e/35003e?text=Ruang+Publik',
        ringkasan: {
            id: 'Ruang terbuka yang menjadi lokasi kegiatan komunitas, mulai dari kerja bakti hingga pentas seni sederhana warga.',
            en: 'An open space that hosts community activities, from communal work days to simple resident art performances.'
        },
        lengkap: {
            id: 'Ruang Publik Kenanga awalnya adalah lahan kosong yang ditata gotong royong oleh warga menjadi ruang komunitas. Wawancara dengan pengurus RT setempat mengungkap bagaimana ruang ini menjadi simpul kegiatan sosial, termasuk perayaan hari besar dan pertemuan warga.',
            en: 'Ruang Publik Kenanga was originally an empty plot of land transformed through gotong royong (mutual cooperation) by residents into a community space. Interviews with the local RT (neighborhood unit) management revealed how this space has become a hub of social activity, including holiday celebrations and resident meetings.'
        }
    }*/
];

/* =========================================================================
   BAHASA — kamus teks statis & state bahasa aktif
   Disimpan di localStorage supaya pilihan bahasa bertahan antar kunjungan,
   mengikuti pola yang sama dengan bagian WebGIS lainnya.
========================================================================= */

const PL_LANG_STORAGE_KEY = 'bumijo-profil-lokal-lang';

const plUiText = {
    id: {
        pageTitle: 'Profil Lokal — WebGIS Kelurahan Bumijo',
        brandTag: 'WebGIS · KKN Juli 2026',
        backBtn: 'Kembali ke WebGIS',
        heroBadge: 'Hasil Wawancara Lapangan',
        heroTitle: 'Profil Lokal Kelurahan Bumijo',
        heroDesc: 'Kumpulan profil UMKM dan objek budaya hasil wawancara langsung bersama warga Kelurahan Bumijo, disusun melalui kolaborasi dengan tim Sastra Inggris KKN Juli 2026. Halaman ini melengkapi WebGIS dengan cerita dan konteks di balik data spasial yang sudah dipetakan.',
        umkmTitle: 'Profil UMKM',
        umkmDesc: 'Cerita dan profil pelaku usaha kuliner, barang, dan jasa di Kelurahan Bumijo.',
        budayaTitle: 'Profil Budaya',
        budayaDesc: 'Ruang, tradisi, dan objek budaya bernilai sejarah di Kelurahan Bumijo.',
        footer: 'WebGIS Kelurahan Bumijo · Kemantren Jetis, Kota Yogyakarta · KKN Juli 2026 · Data profil merupakan placeholder sementara sebelum digantikan hasil wawancara final.',
        readMore: 'Baca Selengkapnya',
        modalClose: 'Tutup',
        emptyState: (label) => `Belum ada profil untuk kategori "${label}".`
    },
    en: {
        pageTitle: 'Local Profile — Bumijo Village WebGIS',
        brandTag: 'WebGIS · KKN July 2026',
        backBtn: 'Back to WebGIS',
        heroBadge: 'Field Interview Results',
        heroTitle: 'Local Profile of Kelurahan Bumijo',
        heroDesc: "A collection of MSME (small business) and cultural site profiles gathered through direct interviews with residents of Kelurahan Bumijo, compiled in collaboration with the English Literature KKN team, July 2026. This page complements the WebGIS with the stories and context behind the spatial data that has already been mapped.",
        umkmTitle: 'MSME Profiles',
        umkmDesc: 'Stories and profiles of culinary, goods, and service business owners in Kelurahan Bumijo.',
        budayaTitle: 'Cultural Profiles',
        budayaDesc: 'Spaces, traditions, and culturally and historically significant sites in Kelurahan Bumijo.',
        footer: 'Bumijo Village WebGIS · Kemantren Jetis, Yogyakarta City · KKN July 2026 · Profile data is a temporary placeholder pending the final interview results.',
        readMore: 'Read More',
        modalClose: 'Close',
        emptyState: (label) => `No profiles yet for the "${label}" category.`
    }
};

let plCurrentLang = localStorage.getItem(PL_LANG_STORAGE_KEY) === 'en' ? 'en' : 'id';

function applyStaticTranslations() {
    const dict = plUiText[plCurrentLang];

    document.title = dict.pageTitle;
    document.documentElement.setAttribute('lang', plCurrentLang);

    document.querySelectorAll('[data-i18n]').forEach((el) => {
        const key = el.getAttribute('data-i18n');
        if (dict[key] !== undefined) {
            el.textContent = dict[key];
        }
    });

    const modalClose = document.getElementById('plModalClose');
    if (modalClose) modalClose.setAttribute('aria-label', dict.modalClose);

    document.querySelectorAll('.pl-lang-btn').forEach((btn) => {
        const isActive = btn.dataset.lang === plCurrentLang;
        btn.classList.toggle('active', isActive);
        btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });
}

/* =========================================================================
   RENDER CARD
========================================================================= */

function plCardTemplate(item, type, index) {
    const label = type === 'umkm' ? item.kategori[plCurrentLang] : item.jenis[plCurrentLang];
    return `
        <article class="pl-card" style="--i:${index || 0}">
            <div class="pl-card-photo-wrap">
                <img class="pl-card-photo" src="${item.foto}" alt="${item.nama}" loading="lazy">
            </div>
            <div class="pl-card-body">
                <span class="pl-card-category">${label}</span>
                <h3 class="pl-card-title">${item.nama}</h3>
                <p class="pl-card-summary">${item.ringkasan[plCurrentLang]}</p>
                <button class="pl-card-more" data-type="${type}" data-id="${item.id}">
                    ${plUiText[plCurrentLang].readMore} <i class="bi bi-arrow-right"></i>
                </button>
            </div>
        </article>
    `;
}

/* =========================================================================
   FILTER — Semua / Kategori
   Menyaring array asli (umkmProfiles / budayaProfiles) tanpa mengubah
   datanya sama sekali. State filter disimpan terpisah per section supaya
   filter UMKM dan Budaya independen satu sama lain. Filter memakai
   kategoriKey/jenisKey (slug netral bahasa) supaya pilihan filter tidak
   ikut berubah saat bahasa di-switch.
========================================================================= */

const PL_FILTER_ALL = 'Semua';

let umkmActiveFilter = PL_FILTER_ALL;
let budayaActiveFilter = PL_FILTER_ALL;

function plEmptyStateTemplate(label) {
    return `
        <div class="pl-empty-state">
            <i class="bi bi-emoji-neutral"></i>
            <p>${plUiText[plCurrentLang].emptyState(label)}</p>
        </div>
    `;
}

function renderProfiles() {
    const umkmGrid = document.getElementById('umkmCardGrid');
    const budayaGrid = document.getElementById('budayaCardGrid');

    if (umkmGrid) {
        const filtered = umkmActiveFilter === PL_FILTER_ALL
            ? umkmProfiles
            : umkmProfiles.filter(item => item.kategoriKey === umkmActiveFilter);

        umkmGrid.innerHTML = filtered.length
            ? filtered.map((item, i) => plCardTemplate(item, 'umkm', i)).join('')
            : plEmptyStateTemplate(umkmActiveFilter === PL_FILTER_ALL ? PL_FILTER_ALL : umkmActiveFilter);
    }

    if (budayaGrid) {
        const filtered = budayaActiveFilter === PL_FILTER_ALL
            ? budayaProfiles
            : budayaProfiles.filter(item => item.jenisKey === budayaActiveFilter);

        budayaGrid.innerHTML = filtered.length
            ? filtered.map((item, i) => plCardTemplate(item, 'budaya', i)).join('')
            : plEmptyStateTemplate(budayaActiveFilter === PL_FILTER_ALL ? PL_FILTER_ALL : budayaActiveFilter);
    }
}

function setupFilterBar(barId, onSelect) {
    const bar = document.getElementById(barId);
    if (!bar) return;

    bar.addEventListener('click', (e) => {
        const btn = e.target.closest('.pl-filter-btn');
        if (!btn) return;

        bar.querySelectorAll('.pl-filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        onSelect(btn.dataset.filter);
        renderProfiles();
    });
}

setupFilterBar('umkmFilterBar', (filter) => { umkmActiveFilter = filter; });
setupFilterBar('budayaFilterBar', (filter) => { budayaActiveFilter = filter; });

/* =========================================================================
   MODAL "BACA SELENGKAPNYA"
========================================================================= */

const plModal = document.getElementById('plModal');
const plModalPhoto = document.getElementById('plModalPhoto');
const plModalCategory = document.getElementById('plModalCategory');
const plModalTitle = document.getElementById('plModalTitle');
const plModalBody = document.getElementById('plModalBody');

let plModalCurrentItem = null;
let plModalCurrentType = null;

function openPlModal(item, type) {
    if (!plModal) return;
    plModalCurrentItem = item;
    plModalCurrentType = type;

    plModalPhoto.src = item.foto;
    plModalPhoto.alt = item.nama;
    plModalCategory.textContent = type === 'umkm' ? item.kategori[plCurrentLang] : item.jenis[plCurrentLang];
    plModalTitle.textContent = item.nama;
    plModalBody.textContent = item.lengkap[plCurrentLang];

    plModal.classList.add('open');
    plModal.setAttribute('aria-hidden', 'false');
}

function closePlModal() {
    if (!plModal) return;
    plModal.classList.remove('open');
    plModal.setAttribute('aria-hidden', 'true');
    plModalCurrentItem = null;
    plModalCurrentType = null;
}

function findProfile(type, id) {
    const list = type === 'umkm' ? umkmProfiles : budayaProfiles;
    return list.find(item => item.id === id);
}

document.addEventListener('click', (e) => {
    const trigger = e.target.closest('.pl-card-more');
    if (trigger) {
        const item = findProfile(trigger.dataset.type, trigger.dataset.id);
        if (item) openPlModal(item, trigger.dataset.type);
    }
});

document.getElementById('plModalClose')?.addEventListener('click', closePlModal);
document.getElementById('plModalBackdrop')?.addEventListener('click', closePlModal);
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closePlModal();
});

/* =========================================================================
   LANGUAGE SWITCH — tombol "ID | EN" di navbar
========================================================================= */

function setPlLanguage(lang) {
    if (lang !== 'id' && lang !== 'en') return;
    if (lang === plCurrentLang) return;

    plCurrentLang = lang;
    localStorage.setItem(PL_LANG_STORAGE_KEY, lang);

    applyStaticTranslations();
    renderProfiles();

    // Jika modal sedang terbuka, perbarui isinya mengikuti bahasa baru
    // tanpa menutup modal supaya pengalaman pengguna tetap mulus.
    if (plModalCurrentItem && plModalCurrentType) {
        plModalCategory.textContent = plModalCurrentType === 'umkm'
            ? plModalCurrentItem.kategori[plCurrentLang]
            : plModalCurrentItem.jenis[plCurrentLang];
        plModalBody.textContent = plModalCurrentItem.lengkap[plCurrentLang];
    }
}

document.querySelectorAll('.pl-lang-btn').forEach((btn) => {
    btn.addEventListener('click', () => setPlLanguage(btn.dataset.lang));
});

/* =========================================================================
   INIT
========================================================================= */

applyStaticTranslations();
renderProfiles();
