import Card from 'react-bootstrap/Card';
import Image from '../static/img/no-image.png';
// import '../static/css/bcwd_news/card_news.css';

// components
import Paragraph from './Paragraph';
import ButtonWAS from './ButtonWAS';

function Cards() {
  return (
    <div className='container m-5 '>
      <Card className='border border-dark-subtle rounded-0' style={{ width: '310px' }}>
        <Card.Img src={Image} className="border-image rounded-0" />
        <Card.Body className='col-12 mb-5'>
          <div className='p-1 m-1'>
            <Card.Title className='pt-2'>
              <div className="element-class-news">
                <h1 className="fs-5 pt-2">DAILY WATER SERVICE INTERRUPTION ADVISORY STARTING MARCH 28</h1>
              </div>
            </Card.Title>
            <div className='pb-3'>
              <span className='fw-normal text-secondary date'>March 27, 2023</span>
            </div>
            <Card.Text className='py-2'>
              <Paragraph className="paragraph-news" descript="Maynilad has been monitoring the water level in Angat Dam, which supplies 90% of the raw water supply for the West Zone. While the elevation is still at a healthy…" />
            </Card.Text>
            <ButtonWAS mylink="#" name="READ MORE..." />
          </div>
        </Card.Body>
      </Card >
    </div >
  );
}

export default Cards;