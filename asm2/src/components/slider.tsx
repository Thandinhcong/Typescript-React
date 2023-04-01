import { Carousel } from 'react-bootstrap';

const Slider = () => {
    return (
        <Carousel className=' text-danger p-5 '>
            <Carousel.Item >
                <img
                    height={450}
                    className="d-block w-100"
                    src="/img1.png"
                    alt="First slide"
                />
                <Carousel.Caption className='text-danger'>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    height={450}
                    className="d-block w-100"
                    src="/img2.png"
                    alt="Second slide"
                />
                <Carousel.Caption className='text-danger'>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item >
                <img
                    height={450}
                    className="d-block w-100"
                    src="/img2.png"
                    alt="Third slide"
                />
                <Carousel.Caption className='text-danger'>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Slider;