import { useEffect, useState } from 'react';

import './gallery.scss';
import { Banner } from '../../UI';
import Image from '../../images/header_bg_3.jpg';

const Gallery = () => {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const temp: string[] = [];
    for (let i = 0; i < 15; i++) {
      temp.push(require(`../../images/gallery${i + 1}.jpg`));
    }
    setImages(temp);
  }, []);


  return (
    <>
      <Banner title="Our Gallery" image={Image}>
        Lorem, ipsum dolor sit amet consectetur adipisicing
        elit. Quibusdam ut natus hic error ?
      </Banner>
      <section className="gallery">
        <div className="gallery__container container">
          {
            images.map((image, i) => (
              <article key={i} className="gallery__image">
                <img src={image} alt={`Gallery - ${i + 1}`} />
              </article>
            ))
          }
        </div>
      </section>
    </>
  );
};

export default Gallery;