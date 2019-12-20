import React, { Component, useState, useCallback } from 'react';
// import SimpleModalSlideshow from 'react-simple-modal-slideshow';
import { useStaticQuery, graphql } from "gatsby";
// import './SimpleSlideShow.css';
import Carousel, {Modal, ModalGateway }from 'react-images';
import Gallery from "react-photo-gallery";

// const images = [{ src: 'path/to/image-1.jpg' }, { src: 'path/to/image-2.jpg' }];
function SimpleSlideShow() {
    const [index, setIndex] = useState(0)
    const { allFile } = useStaticQuery(
        graphql`
          query {
            allFile(
              sort: { fields: name, order: DESC }
              filter: {relativeDirectory: {in: "images/comic-images"}}
            ) {
              edges {
                node {
                  id
                  name
                  relativePath
                  childImageSharp {
                    fluid(maxWidth: 600) {
                      ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                  }
                }
              }
            }
          }
        `
      )
    
      const [currentImage, setCurrentImage] = useState(0);
      const [viewerIsOpen, setViewerIsOpen] = useState(false);
    
      const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
      }, []);
    
      const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
      };
    //Minus 1 for array offset from 0
    const length = allFile.edges.length - 1
    const handleNext = () =>
      index === length ? setIndex(0) : setIndex(index + 1)
    const handlePrevious = () =>
      index === 0 ? setIndex(length) : setIndex(index - 1)
    const { node } = allFile.edges[index]
    const image = [{src: 'https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg',     width: 4,
    height: 3}, {src: 'https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg'}]
    return (
        <div>
        {/* <Carousel views={image}/> */}
      <Gallery photos={image} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={image.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
      </div>
    )
  }
  export default SimpleSlideShow