import galleryImg1 from "./../assets/images/HomePage/main_1_min.jpg";
import galleryImg2 from "./../assets/images/HomePage/main_2_min.jpg";
import galleryImg3 from "./../assets/images/HomePage/main_3_min.jpg";
import galleryImg4 from "./../assets/images/HomePage/main_4_min.jpg";
import galleryImg5 from "./../assets/images/HomePage/main_5_min.jpg";
import galleryImg6 from "./../assets/images/HomePage/main_6_min.jpg";
import galleryImg7 from "./../assets/images/HomePage/main_7_min.jpg";
import galleryImg8 from "./../assets/images/HomePage/main_8_min.jpg";
import galleryImg9 from "./../assets/images/HomePage/main_9_min.jpg";
import galleryImg10 from "./../assets/images/HomePage/main_10_min.jpg";
import galleryImg11 from "./../assets/images/HomePage/main_11_min.jpg";
import galleryImg12 from "./../assets/images/HomePage/main_12_min.jpg";
import galleryImg13 from "./../assets/images/HomePage/main_desc_1_min.jpg";
import galleryImg14 from "./../assets/images/HomePage/main_desc_2_min.jpg";
import galleryImg15 from "./../assets/images/HomePage/main_desc_3_min.jpg";

const Gallery = () => {
  const imgs = [
    galleryImg1,
    galleryImg2,
    galleryImg3,
    galleryImg4,
    galleryImg5,
    galleryImg6,
    galleryImg7,
    galleryImg8,
    galleryImg9,
    galleryImg10,
    galleryImg11,
    galleryImg12,
    galleryImg13,
    galleryImg14,
    galleryImg15,
  ];
  return (
    <section>
      <h2 className="mb-16 mt-8 text-center md:text-left text-6xl text-text-color md:text-7xl xl:text-8xl">
        Галерея
      </h2>
      <div className="grid gap-20 grid-flow-row md:grid-cols-2 lg:grid-cols-3">
        {imgs.map((image) => (
          <img className="object-cover w-64 h-64 hover:scale-110 transition-all duration-500 hover:shadow-2xl" src={image} key={image} alt="image" />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
