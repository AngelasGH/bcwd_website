import Card from 'react-bootstrap/Card';
import Image from '../static/img/donor.png';
// import '../static/css/donorscard.css';

// components
// import Paragraph from './Paragraph';
import ButtonWAS from './ButtonWAS';

const DonorsCard = (props) => {

    const img = props.image;
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
            <Card className='donorscard py-4' >
                <Card.Img variant="top" src={img} className="donor-border-image border'" />
            </Card>
            <a className="btn-sn" onClick={handleDownload} role='button'>READ MORE...</a>
        </div >
    );
}

export default DonorsCard;