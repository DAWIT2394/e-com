import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Gallery = () => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedImage, setSelectedImage] = useState(null);

    

    const sampleImages = [
        // { _id: '1', url: 'https://th.bing.com/th/id/OIP.SJhIdB0LAOgo1O6bP1OWnQHaHa?rs=1&pid=ImgDetMain', title: 'Serrano peppers powder' },
        // { _id: '2', url: 'https://th.bing.com/th/id/OIP.gmkULCbp2hUOmU7qwFzuXAHaFj?w=600&h=450&rs=1&pid=ImgDetMain', title: 'Anaheim pepper powder' },
        // { _id: '3', url: 'https://th.bing.com/th/id/R.6178d45eb1b197b8771bf79d31e17d5c?rik=KXoV%2bppQQBM%2fKw&pid=ImgRaw&r=0', title: 'Bhut Jolokia powder' },
        // { _id: '4', url: 'https://ashapuraexporters.com/wp-content/uploads/2024/08/Different-Types-of-Red-Chilli-Powder-Its-Uses-1536x1195.jpg', title: 'Hungarian Wax powder' },
        // { _id: '5', url: 'https://www.chilipeppermadness.com/wp-content/uploads/2023/08/Berbere-Spice-Recipe-SQ.jpg', title: 'Chilies' },
        // { _id: '6', url: 'https://th.bing.com/th/id/OIP.SJhIdB0LAOgo1O6bP1OWnQHaHa?rs=1&pid=ImgDetMain', title: 'Chilies' },
        // { _id: '7', url: 'https://www.cjr.org/wp-content/uploads/2018/02/chilli-2438001_1920.jpg', title: 'Chilies' },
        
    
    ];

    const openModal = (image) => {
        setSelectedImage(image);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <div>
            <h1 style={titleStyle}>Image Gallery</h1>
            <div style={galleryStyle}>
                {loading ? (
                    <p>Loading images...</p>
                ) : (
                    (images.length > 0 ? images : sampleImages).map(image => (
                        <div
                            key={image._id}
                            style={imageContainerStyle}
                            onClick={() => openModal(image)}
                        >
                            <img src={image.url} alt={image.title} style={imageStyle} />
                            <p>{image.title}</p>
                        </div>
                    ))
                )}
            </div>

            {selectedImage && (
                <div style={modalOverlayStyle} onClick={closeModal}>
                    <div style={modalContentStyle} onClick={(e) => e.stopPropagation()}>
                        <button style={closeButtonStyle} onClick={closeModal}>X</button>
                        <img src={selectedImage.url} alt={selectedImage.title} style={modalImageStyle} />
                        <p>{selectedImage.title}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

// Styles
const galleryStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
    gap: '10px',
    padding: '20px',
};

const titleStyle = {
    textAlign: 'center',
    marginBottom: '20px',
    fontSize: '2.5rem',
    color: 'red',
};

const imageContainerStyle = {
    textAlign: 'center',
    cursor: 'pointer',
    transition: 'transform 0.3s',
};

const imageStyle = {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s',
};

const modalOverlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
};

const modalContentStyle = {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    textAlign: 'center',
    position: 'relative',
    width: '90%',
    maxWidth: '500px',
};

const closeButtonStyle = {
    position: 'absolute',
    top: '10px',
    right: '10px',
    background: 'red',
    color: '#fff',
    border: 'none',
    borderRadius: '50%',
    width: '30px',
    height: '30px',
    cursor: 'pointer',
    fontSize: '16px',
};

const modalImageStyle = {
    maxWidth: '100%',
    maxHeight: '70vh',
    borderRadius: '10px',
};

const responsiveStyle = `
@media (max-width: 768px) {
    h1 {
        font-size: 2rem;
    }
    .gallery {
        grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
        padding: 10px;
    }
}
@media (max-width: 480px) {
    h1 {
        font-size: 1.5rem;
    }
    .gallery {
        grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
        gap: 5px;
    }
}
`;

export default Gallery;
