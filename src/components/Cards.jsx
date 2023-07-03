import Card from 'react-bootstrap/Card';
import Image from '../static/img/no-image.png';
// import '../static/css/bcwd_news/card_news.css';

// components
import Paragraph from './Paragraph';
import ButtonWAS from './ButtonWAS';

function Cards(props) {
  const img = props.image;
  const title = props.title;
  const date = props.date;
  const description = props.description;
  const pdf = props.pdfs;

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdf;
    link.download = pdf;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.click();
  };

  return (
    <div className='container m-5 '>
      <Card className='border border-dark-subtle rounded-0' style={{ width: '310px' }}>
        <Card.Img src={img} className="border-image rounded-0" />
        <Card.Body className='col-12 mb-5'>
          <div className='p-1 m-1'>
            <Card.Title className='pt-2'>
              <div className="element-class-news">
                <h1 className="fs-5 pt-2 text-start">{title}</h1>
              </div>
            </Card.Title>
            <div className='pb-3'>
              <span className='fw-normal text-secondary date'>{date}</span>
            </div>
            <Card.Text className='py-2'>
              <Paragraph className="paragraph-news" descript={description} />
            </Card.Text>

            <a className="btn-sn" onClick={handleDownload} role='button'>READ MORE...</a>
          </div>
        </Card.Body>
      </Card >
    </div >
  );
}

export default Cards;