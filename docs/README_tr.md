<div align="center">
  <img src="docs/media/devfolio-brand.png" alt="DevFolio Brand" width="300"/> 

  **v1.0**
  [**Turkish**](docs/README_tr.md) - [**English**](README.md)
  <hr>
</div>

DevFolio, basit, sade bir portföy sitesini kolayca oluşturmanıza olanak tanır. Özellikle yazılım geliştiriciler için geliştirilen bu proje kullanıcıların kişisel bilgilerini, kariyer bilgilerini gösterebilceği blog içeriklerini ve geliştirdiği projeleri sergileyebileceği basit bir web arayüzüdür. **DevFolio**, temel HTML, CSS ve JavaScript kullanarak geliştirilmiştir ve kolayca yapılandırılıp hazır hale getirilebilir. Ayrıca isteğe bağlı olarak özelleştirilebilir ve yeni bölmeler, kartlar, etiketler vs. eklenebilir.

Örnek demo uygulamasına [**buradan**]() ulaşabilirsiniz.

## Özellikler


### 1. Navigation Bar

Pörtföy üzerinde oluşturulan bölmelere, başlıklara hızlı bir şekilde geçişleri sağlayacak bağlantıları barındırır. Yeni eklenen portföy bölmeleri için burada da konfigürasyon gereklidir.

![Navbar GIF](media/navbar.gif)

### 2. Hero Section

Kullanıcının profilini içeren bölümdür. Kullanıcı resmi, ad, soyad, pozisyon, unvan gibi bilgileri burada sergileriz.

![Hero GIF](media/hero.gif)

### 3. About Me

Bu bölüm kısaca kendimizi tanıttığımız bölümdür.

![About Me GIF](media/aboutme.gif)

### 4. Education

Kademeli bir şekilde eğitim bilgisini sergilediğimiz bölümdür.

![Education GIF](media/education.gif)

### 5. Experience

Kademeli bir şekilde deneyim bilgilerimizi sergilediğimiz bölümdür. Deneyimlerimizde kullandığımız araçları veya becerileri etiketler ile yine burada sergileyebiliriz.

![Experience GIF](media/experience.gif)

### 6. My Projects

Geliştirdiğimiz projeleri kısaca tanıttığımız bölümdür. Kart yapısı ile her proje için proje başlığı, proje açıklaması, proje resmi, proje linki alanlarını barındırır.

![My Projects GIF](media/myprojects.gif)

### 7. My Blogs

Yazdığımız blogları tanıttığımız bölümdür. Buradaki veriler varsayılan olarak Medium RSS Feed aracılığıyla alınmıştır.

![My Blogs GIF](media/myblogs.gif)

Buradaki verileri yapılandırmak için 3 farklı yönteme başvurabilirsiniz;

- **Varsayılan:** Varsayılan yöntemi kullanırsınız ve sadece Medium RSS Feed URL'ini kendinizinki ile değiştirirsiniz.

```JavaScript
~script.js

6-  const rssFeedUrl = "https://medium.com/feed/@yourmediumusername";
```

- **Farklı Bir RSS Servisi:** Medium dışında bir RSS kaynağından bilgileri alırsınız ve RSS Feed URL'ini güncelleyip içeriği blog kartına göre parse edersiniz.

- **Statik:** Herhangi bir dış kaynak kullanmadan statik şekilde ekleyebilirsiniz. Bunun için mevcut tasarımı kullanarak elinizle blog kartlarının içeriğini oluşturursunuz.

```html
~Blog Card Template
<div class="col-md-4">
  <a href="${link}" class="text-decoration-none" target="_blank">
    <div class="card">
      <img src="${thumbnailURL}" class="card-img-top" alt="${title}" />
      <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <p class="lite-text">${pubDate}</p>
      </div>
    </div>
  </a>
</div>
```

### 8. Contact Me

Portföyümüzü görüntüyleyen diğer kullanıcların bizimle iletişim kurmasını sağlayan bölümdür. Burada email, sosyal medya, konum gibi bilgileri gösteririz. Ayrıca diğer kullanıcıların hızlı bir şekilde bize mail atabilmesi için bir form bulundurur. Buradaki bilgiler ile oto mail taslağı oluşturulur ve _mailto::_ ile ilgili adrese yönlendirilir.

![Contact Me GIF](media/contactme.gif)

### 9. Responsive Görünüm

Uygulama farklı boyuttaki ekranlarda da düzgün bir şekilde görüntülenebilmektedir.

**_Not:_** _Farklı boyutlar için yeterince test edilmemiştir. Bazı görsel sorunların oluşması olasıdır. Yeni sürümlerde test edilmesi hedefleniyor._

![Responsivity GIF](media/responsivity.gif)

## Yeni Sürümde Hedeflenen Özellikler (v1.1)


- **Dinamik Veri Yönetimi**
  Kullanıcların deneyim, eğitim, hakkımda gibi portföy bilgilerini daha rahat yönetebileceği dinamik veri yapılandırmasının sağlanması hedefleniyor.

- **Oto CV Oluşturma**
  Kullanıcıların portföy üzerinde sağladıkları bilgiler ile otomatik bir özgeçmiş belgesinin oluşturulması ve bir dosya olarak indirilebilmesi hedefleniyor.

- **Ön Tanımlı Teknoloji Etiketleri**
  My Projects ve Experience bölümlerinde kullandığımız etiketler kullanış kolaylığı açısından Java, Go, MySQL, Docker vs. gibi teknojiler için önceden tanımlı olarak sağlanması hedefleniyor. Bu sayede çok kullanılan teknolojiler için etiketler kolayca gösterilebilecek.

## Kullanılan Teknolojiler


- **HTML/CSS**
- **JavaScript**
- **Bootstrap 5.3.3**
- **Bootstrap Bundle 5.3.0**
- [**Colors CSS 3.0.0**](https://github.com/mrmrs/colors)

## Katkıda Bulunun


Bu projeye katkı sağlamak isterseniz, aşağıdaki adımları takip edebilirsiniz:

1. Depoyu **fork** edin.
2. Yeni bir **branch** oluşturun:
   ```bash
   git checkout -b feature-isim
   ```
3. Yaptığınız değişiklikleri **commit** edin:
   ```bash
   git commit -m "Commit Message"
   ```
4. Değişikliklerinizi **push** edin:
   ```bash
   git push origin feature-isim
   ```
5. **Pull request** oluşturarak katkınızı gönderebilirsiniz!

<hr>

Bu proje [MIT Lisansı](../LICENSE) altında lisanslanmıştır.
